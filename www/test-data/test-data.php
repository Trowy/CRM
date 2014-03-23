<?php

$limit = isset($_GET['limit'])?$_GET['limit']:null;
$offset = isset($_GET['start'])?$_GET['start']:null;
//header('Content-Type: application/json');
echo $_GET['callback'].'({"totalCount":"6679", ';
echo '"data": [';
for($i=$offset;$i<$offset+$limit-1;$i++){
	echo '{"title": "title '.$i.'", "threadid": '.$i.'},';
}
echo '{"title": "title '.$i.'", "threadid": '.$i.'}';

echo ']});';
?>