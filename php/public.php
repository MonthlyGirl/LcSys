<?php
header('content-type:text/html;charset="utf-8";');
// $server="127.0.0.1";
// $user="root";
// $pwd="123456";
// $db_name="student";
$link=mysqli_connect("127.0.0.1","root","","lcSys");
if ($link->connect_error) {
    die("连接失败: " . $link->connect_error);
} 
mysqli_set_charset($link,"utf8");

?>
