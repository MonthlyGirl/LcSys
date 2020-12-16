<?php
include './public.php';
$userPhone=$_POST['userPhone'];
$sql="select * from user where userPhone ='$userPhone'";
$res=mysqli_query($link,$sql);
$arr=mysqli_fetch_assoc($res);
if ($arr) {
   $data =array(
      'state'=>1,
      'info'=>"用户名存在"
    );
    echo json_encode($data);
}else {
   $data =array(
      'state'=>0,
      'info'=>"用户名不存在"
    );
     echo json_encode($data);
}
?>
