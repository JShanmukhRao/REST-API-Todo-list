const mysql=require('mysql')

var  mysqlConnect =mysql.createConnection({
    host:'localhost',
    user:"root",
    password:"password",
    database:"test_db",
    multipleStatements:true
,
})

mysqlConnect.connect(err=>{
    if(!err)
    {
        console.log("Connected")
    }
    else{
        console.log(err)
    }
})
module.exports=mysqlConnect