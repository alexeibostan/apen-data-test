const proxy = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    proxy('/rpapisrv', {
      target: 'http://www.dati.piemonte.it',
      changeOrigin: true
    })
  );
  app.use(
    proxy('/api', {
      target: 'https://api.smartdatanet.it',
      changeOrigin: true
    })
  );
};
