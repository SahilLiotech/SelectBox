<?php

error_reporting(0);

include('db.php');

$fnm = $_POST['fname'];
$lnm = $_POST['lname'];
$email = $_POST['email'];
$password = $_POST['password'];
$address = $_POST['address'];
$city = $_POST['city'];
$state = $_POST['state'];
$zip = $_POST['zip'];

$sql = "INSERT INTO data (fname,lname,email,password,address,city,state,zip) VALUES ('$fnm','$lnm','$email','$password','$address','$city','$state','$zip')";

if (mysqli_query($con, $sql)) {
  echo "record Inserted ......";
} else {
  echo "Error: " . mysqli_error($con);
}
