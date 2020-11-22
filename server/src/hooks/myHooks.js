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




module.exports = {
    isAdmin,
    filterAnalysis,
    filterPatients,
    getUserRoleInfo,
}