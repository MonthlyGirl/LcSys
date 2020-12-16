<?php
include './public.php';
$sql='SELECT * FROM webCart';
$res=mysqli_query($link,$sql);

$data=array();
if ($res->num_rows > 0) {
    // 输出每行数据
    while($row = $res->fetch_assoc()) {
        array_push($data,$row);
    }
echo json_encode($data);
} else {
   $data=array(
    'state'=>0,
    'info'=>'购物车里没有东西'
  );
  echo json_encode($data);
}

?>
