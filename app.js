const express = require('express');  // 기능 호출 
const app = express()  // 기능사용
const router = require("./router/router.js");
const bodyparser = require('body-parser'); // 포스트 방식의 데이터를 읽는 도구
const ejs = require('ejs')
const session = require("express-session")
// 세션 기능을 저장하기 위한 모듈 (mysql)
const session_mysql_save = require('express-mysql-session')




let DB_info ={
    host: 'project-db-stu.ddns.net',
    user: 'campus_g_0325_6',
    password: 'smhrd6',
    port: '3307',
    database: 'campus_g_0325_6'
}

// DB정보를 session_mysql에 등록해줘야 함 
let s_m_s = new session_mysql_save(DB_info);


app.use(express.static("./public")) 


app.set('view engine',"ejs")
app.use(session({
    secret : "smart", //세션의 비밀 키 값 
    resave : false,  // 세션 값 저장을 할때마다 새롭게 할건지 여부 
    saveUninitialized : true, //세션값 저장 여부 
    store : s_m_s // 저장하고자 하는 위치정보 
}))
app.use(bodyparser.urlencoded({extended:false})) // 미들웨어 등록 ( 자체분석 기법 사용 여부 )
app.use(router); // 라우터 미들웨어 등록
app.listen(3000) // 앱의 방번호 지정
