<?php

include("db.php");

$sql = "SELECT id,fname,lname,email,password,address,city,state,zip FROM data";

$result = mysqli_query($con, $sql);

$data = array();

if (mysqli_num_rows($result) > 0) {
  while ($row = mysqli_fetch_assoc($result)) {
    $data[] = $row;
  }
}

echo json_encode($data);

mysqli_close($con);
