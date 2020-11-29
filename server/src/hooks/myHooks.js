const { v4: uuidv4 } = require('uuid');
/**
 * @returns true if user is Admin, else return false
 * @param {*} context 
 */
const isAdmin = (context) => {
    if(context.params.user){
        if(context.params.user.role != 'Admin'){
            return false;
        }
    }
    return true;
}

const filterAnalysis = async (context, app) => {
    if(context.params.user.role == 'Patient'){
        const patient = await app.service('patient').find({query:{user_id: context.params.user.id}});
        context.params.query.patient_id = patient.data[0].id;
        context.params.query.$eager = '[sType,cType,doctor,spine]';
    }else if(context.params.user.role == 'Doctor'){
        const doctor = await app.service('doctor').find({query:{user_id: context.params.user.id }});
        const { method } = context;
        if(method === 'get'){
            context.params.query.$or = [ {reviewedBy: doctor.data[0].id},{reviewedBy: null} ];
        }else{
            context.params.query.reviewedBy = doctor.data[0].id;
        }
        context.params.query.$eager = '[sType,cType,patient,spine]';
    }
}

const getUserRoleInfo = async (context) => {
    context.params.query.$eager = '[user_is_patient,user_is_doctor]';
}

const filterPatients = (context, app) => {
    console.log(context.params.user.role);
    if(context.params.user.role == 'Patient'){
        context.params.query.user_id = context.params.user.id;
        console.log(context.params.query);
    }
}

const uploadImage = async(context, app) => {
    if(context.data.image_submitted){
        const patient = await app.service('patient').find({query:{user_id: context.params.user.id}});
        context.data.patient_id = patient.data[0].id;
        const id = uuidv4();
        await app.service('uploads').create({
            "id": id + ".jpg",
            "uri": context.data.image_submitted,
        });
        context.data.image_submitted = "/img/" + id + ".jpg";
    }
}

const getDoctorName =  async (context, app) => {
    await Promise.all(context.result.data.map(async (data,idx) => {
        if(data.doctor){
            const id = data.doctor.user_id;
            const user = await app.service('users').get(id);
            context.result.data[idx].doctor.name = user.name;
            context.result.data[idx].doctor.lastName = user.lastName;
        }
    }));
    return context;
}



module.exports = {
    isAdmin,
    filterAnalysis,
    filterPatients,
    getUserRoleInfo,
    uploadImage,
    getDoctorName
}