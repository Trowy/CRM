<?php

$limit = isset($_GET['limit'])?$_GET['limit']:null;
$offset = isset($_GET['start'])?$_GET['start']:null;
header('Content-Type: application/json');

echo '{"data": [';
for($i=$offset;$i<$offset+$limit-1;$i++){
	echo '{"login": "login '.$i.'", "first_name": "first_name '.$i.'", "middle_name": "middle_name '.$i.'", "last_name": "last_name '.$i.'", "role": "role '.$i.'", "email": "email '.$i.'"},
	';
}
echo '{"login": "login '.$i.'", "first_name": "first_name '.$i.'", "middle_name": "middle_name '.$i.'", "last_name": "last_name '.$i.'", "role": "role '.$i.'", "email": "email '.$i.'"}';

echo ']}';
?>
