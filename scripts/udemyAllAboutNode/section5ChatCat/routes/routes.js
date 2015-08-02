module.exports = function (express, app) {
  var router = express.Router();

  router.get('/', function (request, response, next) {
    response.render('index', {
      title : "Welcome to my chat"
    });
  });

  router.get('/chats', function (request, response, next) {
    response.render('chatrooms', {
      title : "chatrooms"
    });
  });

  //Sets the default route to be handle by the instance of the router you just created.
  app.use('/', router);
};