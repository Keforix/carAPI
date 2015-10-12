<?php
/**
* Deze klasse zorgt ervoor dat we met een databank kunnen verbinden en ermee kunnen werken.
*
* @author  Ruben Vanoverschelde
*/
class DBconnection {
	private $user = 'pxluser';
	private $pass = 'pxluser';
	private $db;
	
	/**
	* Deze functie legt een verbinding vast met een databank.
	*/
	function DBconnection($dbName) {
		$mysql = "mysql:host=localhost;dbname=" . $dbName . ";charset=UTF8";
		$this->db = new PDO($mysql, $this->user, $this->pass);
		$this->db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	}
	
	/**
	* Deze functie geeft de huidige databankverbinding terug.
	*/
	public function getDb() {
		return $this -> db;
	}
}
?>