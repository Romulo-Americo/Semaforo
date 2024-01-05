let semaforo = document.getElementById("semaforo");

const verde = () =>{
    if(semaforo.src.endsWith("desligado.png")){
        semaforo.src = "assets/verde.png"
    }else if(semaforo.src.endsWith("amarelo.png")){
        semaforo.src = "assets/verde.png";
    }else if(semaforo.src.endsWith("vermelho.png")){
        semaforo.src = "assets/verde.png"
    }
}

const amarelo = () =>{
    if(semaforo.src.endsWith("desligado.png")){
        semaforo.src = "assets/amarelo.png";
    }else if(semaforo.src.endsWith("verde.png")){
        semaforo.src = "assets/amarelo.png";
    }else if(semaforo.src.endsWith("vermelho.png")){
        semaforo.src = "assets/amarelo.png"
    }
}

const vermelho = () =>{
    if(semaforo.src.endsWith("desligado.png")){
        semaforo.src = "assets/vermelho.png";
    }else if(semaforo.src.endsWith("verde.png")){
        semaforo.src = "assets/vermelho.png";
    }else if(semaforo.src.endsWith("amarelo.png")){
        semaforo.src = "assets/vermelho.png"
    }
}

const trocaDeSinal = () => {
    if (semaforo.src.endsWith("desligado.png")) {
        semaforo.src = "assets/verde.png";
    } else if (semaforo.src.endsWith("verde.png")) {
        semaforo.src = "assets/amarelo.png";
    } else if (semaforo.src.endsWith("amarelo.png")) {
        semaforo.src = "assets/vermelho.png";
    }else if(semaforo.src.endsWith("vermelho.png")){
        semaforo.src = "assets/desligado.png"
    }
}

const automatico = () =>{
    intervaloDeSinal = setInterval(trocaDeSinal, 2000);
}