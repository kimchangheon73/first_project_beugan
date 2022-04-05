const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const { commit } = require('../config/DB.js');
const router = express.Router();
const conn = require('../config/DB.js');


router.get("/main",function(request,response){
    
    response.render("index.ejs",{
        user : request.session.user
    })
})

router.get("/show_item",function(request,response){

    let sql = `select * from beaugan`;

    conn.query(sql, function (err, rows) {
        if (rows) {
            console.log(rows);
            response.render("items",{
                rows : rows,
                user : request.session.user

            })
        } else {
            console.log(err);
        }
    })

})

router.get("/skin_item",function(request,response){

    let sql = `select * from beaugan where L_category="SKINCARE"`;

    conn.query(sql, function (err, rows) {
        if (rows) {
            console.log(rows);
            response.render("items",{
                rows : rows,
                user : request.session.user

            })
        } else {
            console.log(err);
        }
    })

})

router.get("/makeup_item",function(request,response){

    let sql = `select * from beaugan where L_category="MAKEUP"`;

    conn.query(sql, function (err, rows) {
        if (rows) {
            console.log(rows);
            response.render("items",{
                rows : rows,
                user : request.session.user

            })
        } else {
            console.log(err);
        }
    })

})

router.get("/cleansing_item",function(request,response){

    let sql = `select * from beaugan where L_category="CLEANSING"`;

    conn.query(sql, function (err, rows) {
        if (rows) {
            console.log(rows);
            response.render("items",{
                rows : rows,
                user : request.session.user

            })
        } else {
            console.log(err);
        }
    })

})

router.get("/body_item",function(request,response){

    let sql = `select * from beaugan where L_category="BODY"`;

    conn.query(sql, function (err, rows) {
        if (rows) {
            console.log(rows);
            response.render("items",{
                rows : rows,
                user : request.session.user

            })
        } else {
            console.log(err);
        }
    })

})

router.get("/sun_item",function(request,response){

    let sql = `select * from beaugan where L_category="SUN"`;

    conn.query(sql, function (err, rows) {
        if (rows) {
            console.log(rows);
            response.render("items",{
                rows : rows,
                user : request.session.user

            })
        } else {
            console.log(err);
        }
    })

})

router.get("/other_item",function(request,response){

    let sql = `select * from beaugan where L_category =""`;

    conn.query(sql, function (err, rows) {
        if (rows) {
            console.log(rows);
            response.render("items",{
                rows : rows,
                user : request.session.user

            })
        } else {
            console.log(err);
        }
    })

})

router.get("/skin_item_LIPCARE",function(request,response){

    let sql = `select * from beaugan where L_category="SKINCARE" and S_category="LIPCARE"` ;

    conn.query(sql, function (err, rows) {
        if (rows) {
            console.log(rows);
            response.render("items",{
                rows : rows,
                user : request.session.user

            })
        } else {
            console.log(err);
        }
    })

})

router.get("/skin_item_AMPOULE_SERUM",function(request,response){

    let sql = `select * from beaugan where L_category="SKINCARE" and S_category="AMPOULE/SERUM"` ;

    conn.query(sql, function (err, rows) {
        if (rows) {
            console.log(rows);
            response.render("items",{
                rows : rows,
                user : request.session.user

            })
        } else {
            console.log(err);
        }
    })

})

router.get("/skin_item_TONER",function(request,response){

    let sql = `select * from beaugan where L_category="SKINCARE" and S_category="TONER"` ;

    conn.query(sql, function (err, rows) {
        if (rows) {
            console.log(rows);
            response.render("items",{
                rows : rows,
                user : request.session.user

            })
        } else {
            console.log(err);
        }
    })

})

router.get("/skin_item_CREAM",function(request,response){

    let sql = `select * from beaugan where L_category="SKINCARE" and S_category="CREAM"` ;

    conn.query(sql, function (err, rows) {
        if (rows) {
            console.log(rows);
            response.render("items",{
                rows : rows,
                user : request.session.user

            })
        } else {
            console.log(err);
        }
    })

})

router.get("/skin_item_FACE",function(request,response){

    let sql = `select * from beaugan where L_category="SKINCARE" and S_category="FACE"` ;

    conn.query(sql, function (err, rows) {
        if (rows) {
            console.log(rows);
            response.render("items",{
                rows : rows,
                user : request.session.user

            })
        } else {
            console.log(err);
        }
    })

})

router.get("/skin_item_LOTION",function(request,response){

    let sql = `select * from beaugan where L_category="SKINCARE" and S_category="LOTION"` ;

    conn.query(sql, function (err, rows) {
        if (rows) {
            console.log(rows);
            response.render("items",{
                rows : rows,
                user : request.session.user

            })
        } else {
            console.log(err);
        }
    })

})

router.get("/makeup_item_BLUSH",function(request,response){

    let sql = `select * from beaugan where L_category="MAKEUP" and S_category="BLUSH"` ;

    conn.query(sql, function (err, rows) {
        if (rows) {
            console.log(rows);
            response.render("items",{
                rows : rows,
                user : request.session.user

            })
        } else {
            console.log(err);
        }
    })

})

router.get("/makeup_item_EYE",function(request,response){

    let sql = `select * from beaugan where L_category="MAKEUP" and S_category="EYE"` ;

    conn.query(sql, function (err, rows) {
        if (rows) {
            console.log(rows);
            response.render("items",{
                rows : rows,
                user : request.session.user

            })
        } else {
            console.log(err);
        }
    })

})

router.get("/makeup_item_BASE",function(request,response){

    let sql = `select * from beaugan where L_category="MAKEUP" and S_category="BASE"` ;

    conn.query(sql, function (err, rows) {
        if (rows) {
            console.log(rows);
            response.render("items",{
                rows : rows,
                user : request.session.user

            })
        } else {
            console.log(err);
        }
    })

})

router.get("/makeup_item_LIPS",function(request,response){

    let sql = `select * from beaugan where L_category="MAKEUP" and S_category="LIPS"` ;

    conn.query(sql, function (err, rows) {
        if (rows) {
            console.log(rows);
            response.render("items",{
                rows : rows,
                user : request.session.user

            })
        } else {
            console.log(err);
        }
    })

})

router.get("/makeup_item_LIPCARE",function(request,response){

    let sql = `select * from beaugan where L_category="MAKEUP" and S_category="LIPCARE"` ;

    conn.query(sql, function (err, rows) {
        if (rows) {
            console.log(rows);
            response.render("items",{
                rows : rows,
                user : request.session.user

            })
        } else {
            console.log(err);
        }
    })

})

router.get("/cleansing_item_FACE",function(request,response){

    let sql = `select * from beaugan where L_category="CLEANSING" and S_category="FACE"`;

    conn.query(sql, function (err, rows) {
        if (rows) {
            console.log(rows);
            response.render("items",{
                rows : rows,
                user : request.session.user

            })
        } else {
            console.log(err);
        }
    })

})

router.get("/cleansing_item_HAIR",function(request,response){

    let sql = `select * from beaugan where L_category="CLEANSING" and S_category="HAIR"`;

    conn.query(sql, function (err, rows) {
        if (rows) {
            console.log(rows);
            response.render("items",{
                rows : rows,
                user : request.session.user

            })
        } else {
            console.log(err);
        }
    })

})

router.get("/cleansing_item_BODY",function(request,response){

    let sql = `select * from beaugan where L_category="CLEANSING" and S_category="BODY"`;

    conn.query(sql, function (err, rows) {
        if (rows) {
            console.log(rows);
            response.render("items",{
                rows : rows,
                user : request.session.user

            })
        } else {
            console.log(err);
        }
    })

})

router.get("/body_item_LOTION",function(request,response){

    let sql = `select * from beaugan where L_category="BODY" and S_category="LOTION"`;

    conn.query(sql, function (err, rows) {
        if (rows) {
            console.log(rows);
            response.render("items",{
                rows : rows,
                user : request.session.user

            })
        } else {
            console.log(err);
        }
    })

})

// router.get("/body_item_FACE",function(request,response){

//     let sql = `select * from beaugan where L_category="BODY" and S_category="FACE"`;

//     conn.query(sql, function (err, rows) {
//         if (rows) {
//             console.log(rows);
//             response.render("items",{
//                 rows : rows,
//                 user : request.session.user

//             })
//         } else {
//             console.log(err);
//         }
//     })

// })

router.get("/body_item_PERFUME",function(request,response){

    let sql = `select * from beaugan where L_category="BODY" and S_category="PERFUME"`;

    conn.query(sql, function (err, rows) {
        if (rows) {
            console.log(rows);
            response.render("items",{
                rows : rows,
                user : request.session.user

            })
        } else {
            console.log(err);
        }
    })

})

router.get("/athe",function(request,response){

    let sql = `select * from beaugan where brand="athe"`;

    conn.query(sql, function (err, rows) {
        if (rows) {
            console.log(rows);
            response.render("items",{
                rows : rows,
                user : request.session.user

            })
        } else {
            console.log(err);
        }
    })

})

router.get("/melixir",function(request,response){

    let sql = `select * from beaugan where brand="melixir"`;

    conn.query(sql, function (err, rows) {
        if (rows) {
            console.log(rows);
            response.render("items",{
                rows : rows,
                user : request.session.user

            })
        } else {
            console.log(err);
        }
    })

})

router.get("/LUSH",function(request,response){

    let sql = `select * from beaugan where brand="LUSH"`;

    conn.query(sql, function (err, rows) {
        if (rows) {
            console.log(rows);
            response.render("items",{
                rows : rows,
                user : request.session.user

            })
        } else {
            console.log(err);
        }
    })

})

router.get("/DearDahlia",function(request,response){

    let sql = `select * from beaugan where brand="DearDahlia"`;

    conn.query(sql, function (err, rows) {
        if (rows) {
            console.log(rows);
            response.render("items",{
                rows : rows,
                user : request.session.user

            })
        } else {
            console.log(err);
        }
    })

})

router.post("/join",function(request,response){
    let id = request.body.id;
    let pw = request.body.pw;
    let nick = request.body.nick;
    let user_name = request.body.name;
    let tel = request.body.tel;
    let email = request.body.email;
    let gender = request.body.gender;

    let sql = `insert into beaugan_user values (?,?,?,?,?,?,?)`;
    // let sql = `insert into beaugan_user values ("1","1","1","1","1","1","1")`;
    

    conn.query(sql,[id,pw,nick,user_name,tel,email,gender],function(err,rows){
        if(rows){
            console.log("성공");
            response.render("index.ejs",{
                user : request.session.user
            })
        
        }else{
            console.log(err);
        }
    })

});

router.post("/login",function(request,response){

    let id = request.body.id;
    let pw = request.body.pw;
    
    let sql = "select * from beaugan_user where id=? and pw=?";

    conn.query(sql,[id,pw],function(err,rows){
        if(rows.length>=1){

            request.session.user = {
                "id" : rows[0].id,
                "nick" : rows[0].nick
            }

            // ejs는 쌍다옴표 필요 없음 
            response.render("index.ejs",{
                id : rows[0].id,
                nick : rows[0].nick,
                user : request.session.user
            })
        }else{
            console.log("오류가 발생함");
            console.log(err);
            response.redirect("http://127.0.0.1:5500/public/login_Fail.html")
        }

    })

    
});

router.get("/logout",function(request,response){
 
    delete request.session.user;

    response.render("index.ejs",{
        user : request.session.user      
    })
});

router.get("/mypage_main",function(request,response){

    response.render("mypage_main.ejs",{
        user : request.session.user
    })
})

router.get("/random_sun",function(request,response){
    

    let sql = `select * from beaugan where L_category="SUN"`;

    conn.query(sql, function (err, rows) {
        if (rows) {
            console.log(rows);
            response.render("random_result.ejs",{
                rows : rows
            })
        } else {
            console.log(err);
        }
    })
    

})

router.get("/random_makeup_base",function(request,response){
    

    let sql = `select * from beaugan where L_category="MAKEUP" and S_category="BASE"`;

    conn.query(sql, function (err, rows) {
        if (rows) {
            console.log(rows);
            response.render("random_result.ejs",{
                rows : rows
            })
        } else {
            console.log(err);
        }
    })
})

router.get("/random_makeup_lips",function(request,response){
    

    let sql = `select * from beaugan where L_category="MAKEUP" and S_category="LIPS"`;

    conn.query(sql, function (err, rows) {
        if (rows) {
            console.log(rows);
            response.render("random_result.ejs",{
                rows : rows
            })
        } else {
            console.log(err);
        }
    })
})

router.get("/random_makeup_eye",function(request,response){
    

    let sql = `select * from beaugan where L_category="MAKEUP" and S_category="EYE"`;

    conn.query(sql, function (err, rows) {
        if (rows) {
            console.log(rows);
            response.render("random_result.ejs",{
                rows : rows
            })
        } else {
            console.log(err);
        }
    })
})

router.get("/random_makeup_blush",function(request,response){
    

    let sql = `select * from beaugan where L_category="MAKEUP" and S_category="BLUSH"`;

    conn.query(sql, function (err, rows) {
        if (rows) {
            console.log(rows);
            response.render("random_result.ejs",{
                rows : rows
            })
        } else {
            console.log(err);
        }
    })
})
//스킨케어 추천 라우터
router.get("/random_skincare_toner",function(request,response){

    let sql = `select * from beaugan where L_category="SKINCARE" and S_category="TONER"`;

    conn.query(sql, function (err, rows) {
        if (rows) {
            console.log(rows);
            response.render("random_result.ejs",{
                rows : rows
            })
        } else {
            console.log(err);
        }
    })
})
router.get("/random_skincare_serum",function(request,response){

    let sql = `select * from beaugan where L_category="SKINCARE" and S_category="AMPOULE/SERUM"`;

    conn.query(sql, function (err, rows) {
        if (rows) {
            console.log(rows);
            response.render("random_result.ejs",{
                rows : rows
            })
        } else {
            console.log(err);
        }
    })
})

router.get("/random_skincare_cream",function(request,response){

    let sql = `select * from beaugan where L_category="SKINCARE" and S_category="CREAM" or L_category="SKINCARE" and S_category="LOTION"`;

    conn.query(sql, function (err, rows) {
        if (rows) {
            console.log(rows);
            response.render("random_result.ejs",{
                rows : rows
            })
        } else {
            console.log(err);
        }
    })
})

router.get("/random_skincare_lipcare",function(request,response){

    let sql = `select * from beaugan where L_category="SKINCARE" and S_category="LIPCARE"`;

    conn.query(sql, function (err, rows) {
        if (rows) {
            console.log(rows);
            response.render("random_result.ejs",{
                rows : rows
            })
        } else {
            console.log(err);
        }
    })
})

//바디 추천 라우터
router.get("/random_body_perfume",function(request,response){

    let sql = `select * from beaugan where L_category="BODY" and S_category="PERFUME"`;

    conn.query(sql, function (err, rows) {
        if (rows) {
            console.log(rows);
            response.render("random_result.ejs",{
                rows : rows
            })
        } else {
            console.log(err);
        }
    })
})

router.get("/random_body_lotion",function(request,response){

    let sql = `select * from beaugan where L_category="BODY" and S_category="LOTION"`;

    conn.query(sql, function (err, rows) {
        if (rows) {
            console.log(rows);
            response.render("random_result.ejs",{
                rows : rows
            })
        } else {
            console.log(err);
        }
    })
})

router.get("/random_cleansing_face",function(request,response){
    

    let sql = `select * from beaugan where L_category="CLEANSING" and S_category="FACE"`;

    conn.query(sql, function (err, rows) {
        if (rows) {
            console.log(rows);
            response.render("random_result.ejs",{
                rows : rows
            })
        } else {
            console.log(err);
        }
    })
})

router.get("/random_cleansing_hair",function(request,response){
    

    let sql = `select * from beaugan where L_category="CLEANSING" and S_category="HAIR"`;

    conn.query(sql, function (err, rows) {
        if (rows) {
            console.log(rows);
            response.render("random_result.ejs",{
                rows : rows
            })
        } else {
            console.log(err);
        }
    })
})

router.get("/random_cleansing_body",function(request,response){
    

    let sql = `select * from beaugan where L_category="CLEANSING" and S_category="BODY"`;

    conn.query(sql, function (err, rows) {
        if (rows) {
            console.log(rows);
            response.render("random_result.ejs",{
                rows : rows
            })
        } else {
            console.log(err);
        }
    })
})

module.exports = router;
