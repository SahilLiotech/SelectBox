<?php
include("db.php");

$id = $_POST['id'];

$sql = "DELETE FROM data WHERE id = '$id'";
$result = mysqli_query($con, $sql);

if ($result) {
  echo "Record deleted successfully";
} else {
  echo "Error deleting record: " . mysqli_error($con);
}

mysqli_close($con);
