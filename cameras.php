<?php
// cameras.php
// Simulação de URL das câmeras; em uma aplicação real, os URLs seriam dinâmicos ou em um banco de dados

$cameras = [
    "portao" => "portap.jpg",
    "jardim" => "Jardim.jpg",
    "sala" => "Sala.jpg"
];

$cameraName = $_GET['camera'] ?? '';

if (array_key_exists($cameraName, $cameras)) {
    echo $cameras[$cameraName];
} else {
    echo "camera.png"; // Retorna uma imagem padrão se a câmera não for encontrada
}
?>
