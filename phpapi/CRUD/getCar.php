<?php
	include '../cars_api.php';
	
	$cars_api = new Cars_API();
	echo $cars_api->getCar($_GET["id"]);
?>