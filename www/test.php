<?php
$s = file_get_contents('r.txt');
file_put_contents('r.txt',++$s);
//file_put_contents('r.txt',print_r($_SERVER,true));
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
?>
so