<!-- creato file php per post api -->
<?php
    // recupero il mio file database json
    $tasksString = file_get_contents('database.json');

    // decode per renderlo un array associativo
    $tasks = json_decode($tasksString, true);

    // pusho la nuova task nell'array del database
    $tasks[] = $_POST['task'];

    $encodedTask = json_encode($tasks);
    
    file_put_contents('database.json', $encodedTask);
    
    header('Content-Type: application/json');
    
    echo json_encode($_POST);