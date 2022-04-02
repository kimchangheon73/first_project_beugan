const mysql = require('mysql')  // mysql 프로그램을 가져온게 아니라 모듈을 가져온거임

// mysql연결 (ip주소, userid, password, port번호, 연결할데이터베이스)
let conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '1234',
    port: '3306',
    database: 'beaugan_item'
})

// DB연결 
conn.connect();


module.exports = conn;







// 저 연결 안에 요소값만 바뀔거임
