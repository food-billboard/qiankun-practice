const express = require("express");
const cors = require("cors");
const chalk = require('chalk')

const app = express();
// 解决跨域问题
app.use(cors());
app.use('/', express.static('src'));

// 监听端口
app.listen(5003, () => {
  console.log(chalk.green("server is listening in http://localhost:5003"))
});