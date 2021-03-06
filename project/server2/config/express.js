'use strict';

const path = require('path');
const fs = require('fs');
   
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const serveStatic = require('serve-static');
const session = require('express-session');
const passport = require('passport');//passport
const cors = require('cors');
const MongoStore = require('connect-mongo')(session);
const config = require('./index');
const morgan = require('morgan');
const compress = require('compression');
const helmet = require('helmet');
const flash = require('connect-flash');
const cookieParser = require('cookie-parser');


module.exports.init = initExpress;

function initExpress(app) {
  const root = app.get('root');
  const sessionOpts = {
    secret: config.session.secret,
    key: 'skey.sid',
    resave: config.session.resave,
    saveUninitialized: config.session.saveUninitialized
  };

  //common express configs
  if (process.env.NODE_ENV === 'development') {
		// Enable logger (morgan)
		app.use(morgan('dev'));
    //Disable views cache
		app.set('view cache', false);
	} else if (process.env.NODE_ENV === 'production') {
		app.locals.cache = 'memory';
	}


		// // Disable views cache
		// app.set('view cache', false);
	


  // Setting application local variables
	app.locals.title = config.app.name;
	app.locals.description = config.app.description;
	app.locals.keywords = config.app.keywords;
	

// Showing stack errors
	app.set('showStackError', true);

  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.use(methodOverride());
  	// Use helmet to secure Express headers
	// app.use(helmet.xframe());
	// app.use(helmet.xssFilter());
	// app.use(helmet.nosniff());
	// app.use(helmet.ienoopen());
  app.disable('x-powered-by');

  if (config.session.type === 'mongo') {
    sessionOpts.store = new MongoStore({
      url: config.mongodb.uri
    });
  }

  // CookieParser should be above session
	app.use(cookieParser());


  app.use(session(sessionOpts));
  app.use(passport.initialize());
  app.use(passport.session());

  // connect flash for flash messages
	app.use(flash());


//req.resources
  app.use(function(req, res, next) {
    req.resources = req.resources || {};
    res.locals.app = config.app;
    res.locals.currentUser = req.user;

    next();
  });

  // always load static files if dev env
  if (config.serveStatic) {
    app.use(serveStatic(path.join(root, 'public')));
    app.use('/v1', serveStatic(path.join(root, 'public_old')));
  }
};
