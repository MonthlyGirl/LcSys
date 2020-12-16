<?php
ini_set("error_reporting","E_ALL & ~E_NOTICE");

 include './public.php';
 $id=$_POST['id'];
 $title=$_POST['title'];
 $img=$_POST['img'];
 $goodAttr=$_POST['goodAttr'];
 $number=$_POST['number'];
 $price=$_POST['price'];
 $sql="SELECT * FROM `webCart` WHERE id='$id'";
 $res=mysqli_query($link,$sql);
//  if (!$res) {
//  printf("Error: %s\n", mysqli_error($link));
//  exit();
// }
 $arr=mysqli_fetch_assoc($res);
 if($arr){
   $sql2="UPDATE `webCart` SET number=number+$number,price=$price,total=$price*number where `id`='$id'";
   $res2=mysqli_query($link,$sql2);
    $data=array(
    'state'=>2,
    'info'=>'商品已存在,数量++'
  );
  echo json_encode($data);
 }else if(!$arr){
    $sql1="INSERT INTO `webCart`(`id`,`title`,`imgIcon`,`imgIconN`,`number`,`price`,`total`) VALUES ('$id','$title','$img','$goodAttr','$number','$price',$price*number)";
   $res1=mysqli_query($link,$sql1);
   $data=array(
    'state'=>1,
    'info'=>'加入购物成功'
  );
  echo json_encode($data);
  }else {
  $data=array(
    'state'=>0,
    'info'=>'加入购物失败'
  );
  echo json_encode($data);
 }
 ?>