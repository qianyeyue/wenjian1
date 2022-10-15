//自定义验证用户名的方法
function validate_strLenght(str){
  var regExp=/^(\w){6,20}$/;
  return regExp.test(str);
}
//自定义验证密码的方法
function validate_pwd(str){
  var regExp=/^[a-zA-Z]\w{5,15}/;
  return regExp.text(str);
}
//根据表单控件的id填写
var username=document.getElementById("username");
//通过表单控件pwd的id填写
var pwd=document.getElementById("pwd");
var pwdOk=document.getElementById("pwdOk");
//通过标签名获取元素
var form=docement.getElementByTagName("form")[0];
//表单提交
function formSubmit(){
  //使用自定义方法验证用户名
  if(validate_strLenght(username.value)&&validate_pwd(pwd.value)){
  //调用表单提交方法
  document.getElementById("form").submit();
  alert("登录成功");
}else{
  //控制台输出
  console.log("验证失败");
}
}
//检查用户名
username.onblur=function(){
  if(validate__strLenght(username.value)){
    console.log("用户名符合要求");
  }else{
    console.log("用户名不符合要求");
  }
}
//密码框失去焦点的时候
pwd.onblur=function(){
  if(validate_pwd(pwd.value)){
    console.log("密码符合要求");
  }else{
    console.log("密码不符合要求");
  }
}

pwdOk.onkeyup=checkOk;