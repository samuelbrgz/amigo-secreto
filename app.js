let amigos = []
let meusAmigos = document.getElementById('listaAmigos');
let resultado = document.querySelector('p');


function Limpar (){
    meusAmigos.innerHTML = "";
    resultado.innerHTML = "";
    amigos = []
}
function atualizarLista() {
    let amigosDaLista = "";
    amigos.forEach(function (amigo) {
        amigosDaLista += `<li>${amigo}</li>`; 
    });
    meusAmigos.innerHTML = amigosDaLista;
}

function adicionarAmigo(){
    let valor = document.getElementById('amigo');
    
    if(valor.value === ""){
        alert('Digite um nome no campo em branco')
    } else {
    amigos.push(valor.value); 
    valor.value = "";
    atualizarLista()
    console.log(amigos); 
    }
};

function sortearAmigo(){
    
    if (amigos.length > 0){
        let sorteio = Math.floor(Math.random() * amigos.length);
        
        resultado.innerHTML = `Amigo sorteado: ${amigos[sorteio]}!`;
    } else {
        alert('adicione o nome de seus amigos na lista')
    }
};
    
