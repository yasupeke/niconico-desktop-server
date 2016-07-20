import * as Express from 'express';
import * as Path from 'path';
import * as Favicon from 'serve-favicon';
import * as Logger from 'morgan';
import * as CookieParser from 'cookie-parser';
import * as BodyParser from 'body-parser';
import * as ECT from 'ect';
import Index from './routes/index';

const app = Express();

// view engine setup
app.set('views', Path.join(__dirname, 'views'));    //viewディレクトリ
app.set('view engine', 'html');                     //テンプレートの拡張子
app.engine('html', ECT({ watch: true, root: __dirname+'/views', ext: '.html'}).render);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(Logger('dev'));
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: false }));
app.use(CookieParser());
app.use(Express.static(Path.join(__dirname, '..', 'client')));
app.use(Express.static(Path.join(__dirname, '../..', 'assets')));

app.use('/', Index);

// catch 404 and forward to error handler
app.use((req: Express.Request, res: Express.Response, next: Function) => {
    const err = <any>new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use((err: any, req: Express.Request, res: Express.Response, next: Function) => {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use((err: any, req: Express.Request, res: Express.Response, next: Function) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

export = app;
