// Initializes the `uploads` service on path `/uploads`
const hooks = require('./uploads.hooks');

const blobService =  require('feathers-blob');
const fs = require('fs-blob-store');
const blobStorage = fs(__dirname + '/uploads');
const multer = require('multer');
const multipartMiddleware = multer();

module.exports = function (app) {
  /*const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };*/

  // Initialize our service with any options it requires
  app.use('/uploads',

  // multer parses the file named 'uri'.
  // Without extra params the data is
  // temporarely kept in memory
  multipartMiddleware.single('uri'),

  // another middleware, this time to
  // transfer the received file to feathers
  function(req,res,next){
    req.feathers.file = req.file;
    next();
  },
  blobService({Model: blobStorage}));

  // Get our initialized service so that we can register hooks
  const service = app.service('uploads');

  service.hooks(hooks(app));
};
