var mysql = require('mysql');
let md5 = require("md5");
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    prot: 3306,
    password: '123321',
    database: '07b'
});
//设置token
let getToken = (userId) => {
    let userToken = JSON.stringify({
        issc: "bawei1607B",
        userId: userId,
        data: new Date().getTime() / 1000
    })
    let token = md5(userToken);
    updateToken(token, 1)
    return token;
}

//插入到数据库
let updateToken = (token, userId) => {
    let sql = `update user set token=? where userId=?`
    connection.query(sql,[token,userId], (error, results)=>{
        console.log(results)
    })
}
connection.connect();
//登录接口
module.exports = function (app) {
    app.get('/login', (req, res) => {
        const { username, password } = req.query
        let sql = 'select * from user where username="' + username + '" and password="' + password + '"'
        connection.query(sql, function (error, results) {
            if (error) throw error;
            //let userId = results[0].userId;
            getToken(1);
            if (results.length > 0) {
                res.json({
                    code: 0,
                    msg: "成功",
                    data: results,
                })
            } else {
                res.json({
                    code: 1,
                    msg: "你失败了",
                })
            }

        })
    });

}