<?php
 include './public.php';
 $getId=$_POST['id'];
 $sql="delete from webCart where id='$getId'";
 $res=mysqli_query($link,$sql);
//  print $getId;
 if($res){
   $data=array(
     'state'=>1,
     'info'=>'删除成功'
   );
   echo json_encode($data);
 }else {
   $data=array(
     'state'=>0,
     'info'=>'删除失败'
   );
   echo json_encode($data);
 }
?>