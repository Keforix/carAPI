<?php
	include 'PHP_objects/Car.php';
	include 'DB_connections/cars_connection.php';
	
	class Cars_API {
		
		function getCars() {
			try {
				$connection = new DBconnection("cars");
				$db = $connection->getDb();
				
				$stmt = $db -> prepare("SELECT * 
										FROM tbl_car c JOIN tbl_type t
										ON (c.type_id = t.type_id)");
		
				$stmt -> execute();
				$rows = $stmt->fetchAll(PDO::FETCH_NUM);
				$output = "";
				$arr = array();
				foreach ($rows as $row) {
					$car = new Car;
					
					$car->id = $row[0];
					$car->omschrijving = $row[2];
					$car->basisprijs = $row[3];
					$car->verbruik = $row[4];
					$car->verkbelast = $row[5];
					$car->inverkbelast = $row[6];
					$car->type = $row[8];
					
					array_push($arr, $car);
				}
				
				return json_encode($arr, 128);
			}
			catch (PDOException $ex) {
				echo "<p>ERROR: " . $ex -> getMessage() . "</p>";
			}
		}
		
		function getCar($id) {
			try {
				$connection = new DBconnection("cars");
				$db = $connection->getDb();
				
				$stmt = $db -> prepare("SELECT * 
										FROM tbl_car c JOIN tbl_type t
										ON (c.type_id = t.type_id)
										WHERE c.auto_id = ?");
				$stmt -> bindValue(1, $id, PDO::PARAM_INT);
		
				$stmt -> execute();
				$rows = $stmt->fetchAll(PDO::FETCH_NUM);
				$output = "";
				$arr = array();
				foreach ($rows as $row) {
					$car = new Car;
					
					$car->id = $row[0];
					$car->omschrijving = $row[2];
					$car->basisprijs = $row[3];
					$car->verbruik = $row[4];
					$car->verkbelast = $row[5];
					$car->inverkbelast = $row[6];
					$car->type = $row[8];
					
					array_push($arr, $car);
				}
				
				return json_encode($arr, 128);
			}
			catch (PDOException $ex) {
				echo "<p>ERROR: " . $ex -> getMessage() . "</p>";
			}
		}
		
	}
?>