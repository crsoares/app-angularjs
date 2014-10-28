<?php
if ($_SERVER["REQUEST_METHOD"] == "GET") {
	try{
		$db = new PDO('mysql:dbname=angularjs;host=localhost', 'root', '');
		$query = $db->prepare("SELECT * FROM products");
		$query->execute();
		$result = $query->fetchAll(PDO::FETCH_ASSOC);
		//print_r($result);die;
		//$teste = array('novo' => 'teste');
		//echo json_encode($teste);die;
		echo json_encode($result);
	} catch (PDOException $e) {
		echo 'Error: ' . $e->getMessage();
	}
} elseif ($_SERVER["REQUEST_METHOD"] == "POST") {
	$data = file_get_contents("php://input");
	$data = json_decode($data);
	if ($data) {
		try {
			$db = new PDO('mysql:dbname=angularjs;host=localhost', 'root', '');
			$result = $db->prepare("INSERT INTO products (name, category, price) VALUES (?, ?, ?)");
			$result->bindParam(1, $data->name);
			$result->bindParam(2, $data->category);
			$result->bindParam(3, $data->price);
			$result->execute();
			$data->id = $db->lastInsertId();
			echo json_encode($data);
		} catch (PDOException $e) {
			echo 'Error: ' . $e->getMessage();
		}
	}
} elseif ($_SERVER["REQUEST_METHOD"] == "DELETE") {
	try {
		$db = new PDO('mysql:dbname=angularjs;host=localhost', 'root', '');
		$result = $db->prepare("DELETE FROM products WHERE id = ?");
		$result->bindParam(1, $_GET['id']);
		$result->execute();
	} catch (PDOException $e) {
		echo 'Error: ' . $e->getMessage();
	}
} elseif ($_SERVER["REQUEST_METHOD"] == "PUT") {
	$data = file_get_contents("php://input");
	$data = json_decode($data);
	if ($data) {
		try {
			$db = new PDO('mysql:dbname=angularjs;host=localhost', 'root', '');
			$result = $db->prepare("UPDATE products SET name = ?, category = ?, price = ? WHERE id = ?");
			$result->bindParam(1, $data->name, PDO::PARAM_STR);
			$result->bindParam(2, $data->category, PDO::PARAM_STR);
			$result->bindParam(3, $data->price);
			$result->bindParam(4, $data->id, PDO::PARAM_INT);
			$result->execute();
			echo json_encode($data);
		} catch (PDOException $e) {
			echo 'Error: ' . $e->getMessage();
		}
		
	}
}
