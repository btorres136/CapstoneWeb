const knex = require('knex');
const tableNames = require('../../src/constants/tableNames');

/**
 * 
 * @param {Knex} knex 
 */
exports.seed = async (knex) => {
  await Promise.all(Object.values(tableNames).map((name) => knex(name).del()));

  const roleCreated = await knex(tableNames.roleTable).insert([{
    id:1,
    role:'Admin',
    permissions: 
    [
      'admin:get', 
      'admin:patch',
      'admin:find', 
      'admin:update',
      'admin:create'
    ],
    description:'Administrator priviledge'
  },{
    id:2,
    permissions:'',
    role:'Patient',
    permissions: [
      'user:patch',
      'user:get',
      'user:find',
      'analysis:find',
      'analysis:get',
      'analysis:create',
      'doctor:find',
      'doctor:get',
      'patient:get',
      'patient:find',
      'patient:patch',
      's-type:create',
      'c-type:create',
    ],
    description: 'Patient'
  },{
    id:3,
    role:'Doctor',
    permissions: [
      'user:patch',
      'user:get',
      'user:find',
      'analysis:find',
      'analysis:get',
      'analysis:patch',
      'doctor:find',
      'doctor:get',
      'doctor:create',
      'doctor:patch',
      'spine:create',
      'spine:patch',
      's-type:patch',
      'c-type:patch',
    ],
    description: 'Doctor'
  }], '*');

  const usersCreated = await knex(tableNames.userTable).insert([
    {
      id:1,
      email:'test1@gmail.com',
      password:'$2a$10$Tda0nxQ3D1fBd/v6rh.TUuNyyl4SBBXqR8wkWrrilPm.fTMuQUyZq',
      name:'test',
      lastName:'test',
      role_id: 1
    },
    {
      id:2,
      email:'test2@gmail.com',
      password:'$2a$10$Tda0nxQ3D1fBd/v6rh.TUuNyyl4SBBXqR8wkWrrilPm.fTMuQUyZq',
      name:'test',
      lastName:'test',
      role_id: 3
    },
    {
      id:3,
      email:'test3@gmail.com',
      password:'$2a$10$Tda0nxQ3D1fBd/v6rh.TUuNyyl4SBBXqR8wkWrrilPm.fTMuQUyZq',
      name:'test',
      lastName:'test',
      role_id: 3
    },
    {
      id:4,
      email:'test4@gmail.com',
      password:'$2a$10$Tda0nxQ3D1fBd/v6rh.TUuNyyl4SBBXqR8wkWrrilPm.fTMuQUyZq',
      name:'test',
      lastName:'test',
      role_id: 2
    },
    {
      id: 5,
      email:'test5@gmail.com',
      password:'$2a$10$Tda0nxQ3D1fBd/v6rh.TUuNyyl4SBBXqR8wkWrrilPm.fTMuQUyZq',
      name:'test',
      lastName:'test',
      role_id: 2
    },
  ]);

  const doctorCreated = await knex(tableNames.doctorTable).insert([
    {
      id: 1,
      user_id: 2,
      license: '1asdlknui89123uue2fj12c',
      validatedBy: 1,
    },
    {
      id: 2,
      user_id: 3,
      license: 'asdnqj2e12ujnc8ccmiwepoj091',
    }
  ]);

  const patientCreated = await knex(tableNames.patientTable).insert([
    {
      id: 1,
      age: 16,
      initial_weight: 150,
      initial_height: 65,
      user_id: 4
    },
    {
      id:2,
      age: 15,
      initial_weight: 130,
      initial_height: 60,
      user_id: 5
    },
  ]);
  const cTypeCreated = await knex(tableNames.cTypeTable).insert([
    {
      id: 1,
      risk: 48,
      angle: 18
    }
  ])

  const analysisCreated = await knex(tableNames.analysisTable).insert([
    {
      patient_id: 1,
      last_weight: 150,
      last_height: 65,
      image_submitted: '/img/userImg.jpg',
      reviewedBy: 1,
    },
    {
      patient_id: 1,
      last_weight: 150,
      last_height: 65,
      image_submitted: '/img/userImg.jpg',
      reviewedBy: 1,
    },
    {
      patient_id: 1,
      last_weight: 150,
      last_height: 65,
      image_submitted: '/img/userImg.jpg',
      reviewedBy: 2,
    },
    {
      patient_id: 1,
      last_weight: 150,
      last_height: 65,
      image_submitted: '/img/userImg.jpg',
      reviewedBy: 2,
      cType_id: 1
    },
    {
      patient_id: 1,
      last_weight: 150,
      last_height: 65,
      image_submitted: '/img/userImg.jpg',
    },
  ]);

  console.log('role Created', roleCreated);
};
