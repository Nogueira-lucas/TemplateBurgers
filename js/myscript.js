function inicializar(){
    document.getElementById("Sobre").className    += "esconder";
    document.getElementById("Cardapio").className += "esconder";
    document.getElementById("Quests").className   += "esconder";
    document.getElementById("Contato").className  += "esconder";
}

function descendo(){
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        document.getElementById("Sobre").className = "sobre animated fadeInLeft"; 
    }
}

window.onscroll = function() {descendo()};

