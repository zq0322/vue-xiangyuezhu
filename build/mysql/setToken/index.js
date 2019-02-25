
const connect=require('../connect/index.js')
module.exports=function setToken(id,token){
  let $sql=`UPDATE team set token=? where id=?`;
  connect($sql,[token,id],function(result){
      console.log('token数据更新成功')
  })
   
  }