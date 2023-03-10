<?php
include("db.php");

$id = $_POST["id"];
$fname = $_POST["fname"];
$lname = $_POST["lname"];
$email = $_POST["email"];
$password = $_POST["password"];
$address = $_POST["address"];
$city = $_POST["city"];
$state = $_POST["state"];
$zip = $_POST["zip"];

$sql = "UPDATE data SET fname='$fname', lname='$lname', email='$email', password='$password', address='$address', city='$city', state='$state', zip='$zip' WHERE id=$id";

if (mysqli_query($con, $sql)) {
  echo "Record updated successfully";
} else {
  echo "Error updating record: " . mysqli_error($con);
}

mysqli_close($con);
