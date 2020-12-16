<?php
include './public.php';
$userPhone=$_POST['userPhone'];
$userCheckPwd=$_POST['userCheckPwd'];
$sql="SELECT * FROM `user` WHERE userPhone ='$userPhone'";
$res=mysqli_query($link,$sql);
$arr=mysqli_fetch_assoc($res);
if($arr){
  $data=array(
    'state'=>2,
    'info'=>'手机号已被注册'
  );
  echo json_encode($data);
}else {
 $sql1="INSERT INTO `user`(`userPhone`,`userPwd`) VALUES ('$userPhone','$userCheckPwd')";
 $res1=mysqli_query($link,$sql1);
 if ($res1) {
 $data=array(
    'state'=>1,
    'info'=>'注册成功'
  );
  echo json_encode($data);
 }else{
    $data=array(
    'state'=>0,
    'info'=>'注册失败'
  );
  echo json_encode($data);
 }
}
?>