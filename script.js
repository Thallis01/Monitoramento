// Seleciona os elementos de exibição de imagem e vídeo
const cameraFeedImage = document.getElementById("cameraFeedImage");
const cameraFeedVideo = document.getElementById("cameraFeedVideo");

// Função para parar o stream da câmera do computador caso esteja ativado
function stopCameraStream() {
    let stream = cameraFeedVideo.srcObject;
    if (stream) {
        let tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
        cameraFeedVideo.srcObject = null;
    }
}

// Função para exibir uma imagem estática
function showStaticImage(src, altText) {
    stopCameraStream();
    cameraFeedImage.src = src;
    cameraFeedImage.alt = altText;
    cameraFeedImage.style.display = "block";
    cameraFeedVideo.style.display = "none";
}

// Funções dos botões para acessar as câmeras específicas
document.getElementById("sala").addEventListener("click", function() {
    showStaticImage("sala.jpg", "Visualização da Câmera da Sala");
});

document.getElementById("jardim").addEventListener("click", function() {
    showStaticImage("Jardim.jpg", "Visualização da Câmera do Jardim");
});

document.getElementById("portao").addEventListener("click", function() {
    showStaticImage("portao.jpg", "Visualização da Câmera do Portão");
});

document.getElementById("computador").addEventListener("click", async function() {
    stopCameraStream();
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        cameraFeedVideo.srcObject = stream;
        cameraFeedImage.style.display = "none";
        cameraFeedVideo.style.display = "block";
    } catch (err) {
        console.error("Erro ao acessar a câmera: ", err);
        alert("Erro ao acessar a câmera do computador.");
    }
});

// Função de filtro para a barra de pesquisa
function filterCameras() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const buttons = document.getElementsByClassName('camera');
    
    // Loop através dos botões e exibe ou esconde conforme o filtro
    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];
        const text = button.textContent || button.innerText;
        if (text.toLowerCase().indexOf(filter) > -1) {
            button.style.display = "";
        } else {
            button.style.display = "none";
        }
    }
}
