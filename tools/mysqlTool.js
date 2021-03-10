let mysql = require('mysql');
const sqlTools = ((sqlInfo = {
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    port: '3306',
    database: 'leiyu'
}) => {
    let connection = mysql.createConnection(sqlInfo);
    connection.connect(err => {
        if (err) {
            console.log(err);
            console.log('连接失败');
        }
    });
    return {
        //查询语句
        select(sqlStr) {
            return new Promise((resolve, reject) => {
                connection.query(sqlStr, (err, data) => {
                    if (err) {
                        console.log(err.message);
                        resolve('查询失败')
                    }
                    resolve(data)
                });
            });
        },
        //插入语句
        insert(sqlStr, sqlData) {
            return new Promise((resolve, reject) => {
                connection.query(sqlStr, sqlData, (err, res) => {
                    if (err) {
                        console.log(err.message);
                        resolve('添加失败');
                    }
                    resolve('添加成功');
                });
            });
        },
        update(sqlStr, sqlData) {
            return new Promise((resolve, reject) => {
                connection.query(sqlStr, sqlData, (err, res) => {
                    if (err) {
                        console.log(err.message);
                        resolve('修改失败');
                    }
                    resolve('修改成功');
                });
            });
        },
        
    }
})();

module.exports = { sqlTools };