<?php
	include '../cars_api.php';
	
	$cars_api = new Cars_API();
	echo $cars_api->deleteCar($_GET["id"]);
?>