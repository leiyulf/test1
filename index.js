const express = require('express');
const app = express();
const ejs = require('ejs');
const bodyParser = require('body-parser');
const expressWs = require('express-ws');
const { sqlTools } = require('./tools/mysqlTool');//mysql工具类
//设置page路径
app.set('views', './pages');
//设置视图引擎
app.set('view engine', 'html');
//设置HTML引擎
app.engine('html', ejs.__express);

//应用静态文件
app.use(express.static('static'));
// 解析 application/json
app.use(bodyParser.json());
// 解析 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded());

//登录页接口
app.get('/', (req, res) => {
  res.render('./index', (err, html) => {
      if (err) {
          console.log(err);
          return;
      }
      let result = await sqlTools.select(`select * from gugu`);
      console.log(result);
      res.send(html);
  });
});

app.listen(9876, () => console.log(`http://127.0.0.1:3065`));