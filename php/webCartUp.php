<?php
include './public.php';
$getId=$_POST['id'];
$num=$_POST['num'];
$sql = "update webCart set number='$num',total=price*'$num' where id='$getId'";
$res=mysqli_query($link,$sql);

if ($res) {
  $data=array(
    'state'=>1,
    'info'=>'修改成功'
  );
  echo json_encode($data);
}else {
  $data=array(
    'state'=>0,
    'info'=>'修改失败'
  );
  echo json_encode($data);
}
?>