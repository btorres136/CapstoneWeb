// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  // Add your custom middleware here. Remember that
  // in Express, the order matters.
  app.get('/Spine3D', (req, res) => {
    res.setHeader(
      'Content-Security-Policy',
      "default-src * 'unsafe-inline' ;img-src 'self' data:"
    )

    res.render('spine', {Brian: 'hello'});
  });
};