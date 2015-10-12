<?php
	include '../cars_api.php';
	
	$cars_api = new Cars_API();	
	echo $cars_api->addCar($_GET["type"], $_GET["omschrijving"], $_GET["basisprijs"], $_GET["verbruik"], $_GET["verkbelast"], $_GET["inverkbelast"]);
?>