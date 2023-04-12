<?php

$todolist = file_get_contents(__DIR__ . '/todolist.json');

$todolist = json_decode($todolist, true);

$todolist = json_encode($todolist);

header('Content-Type: application/json');

echo $todolist;
