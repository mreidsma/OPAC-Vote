<?php

// Send back a 1px transparent gif so the browser is happy it got an image
header("Access-Control-Allow-Origin: *");
header('Content-Type: image/gif');
echo base64_decode('R0lGODlhAQABAJAAAP8AAAAAACH5BAUQAAAALAAAAAABAAEAAAICBAEAOw==');

// Now record the record number, in this case, in a simple CSV.
// Could easily do an email or something, too, if that would be easier.
// Or get fancy and make a database.

$record = array($_GET['record']);
$timestamp = date("d/m/Y", time());

$data = array($timestamp, $record);

if (!$DataFile = fopen("opacvote.csv", "a")) {echo "Failure: cannot open file"; die;};
if (!fputcsv($DataFile, $data)) {echo "Failure: cannot write to file"; die;};
fclose($DataFile);