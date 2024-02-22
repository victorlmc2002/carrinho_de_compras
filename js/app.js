let total = 0;
let lista = [0, 0, 0];

function adicionar(){

    let produto = document.getElementById("produto").value;
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let index;
    let listaNome = ["Fone de ouvido", "Celular", "Oculus VR"];
    let listaValor = [100, 1400, 5000];

    if(isNaN(quantidade)){
        alert("Digite um número inteiro e positivo em Qtde.");
        return;
    }

    if(produto == "Fone de ouvido - R$100"){
        
        lista[0] = lista[0] + quantidade;
        index = 0;
    }
    else if(produto == "Celular - R$1400"){

        lista[1] = lista[1] + quantidade;
        index = 1;
    }
    else{

        lista[2] = lista[2] + quantidade;
        index = 2;
    }

    total = 0;
    for(let j = 0; j < 3; j++){
        total = total + lista[j]*listaValor[j];
    }

    let textoTotal = document.getElementById('valor-total');
    textoTotal.textContent = "R$ " + total;

    let textoQuantidade = document.getElementById("lista-produtos");
    textoQuantidade.innerHTML = `<section class="carrinho__produtos__produto">
    <span class="texto-azul"></span>  <span class="texto-azul"></span>
  </section>`;
    for(let i = 0; i < 3; i++){
        if(lista[i] == 0){
            continue;
        }
        textoQuantidade.innerHTML = textoQuantidade.innerHTML + `<section class="carrinho__produtos__produto">
        <span class="texto-azul">` + lista[i] + `x</span> ` + listaNome[i] + ` <span class="texto-azul">R$` + listaValor[i]*lista[i] + `</span>
    </section>`;
    }

}

function limpar(){

    lista = [0, 0, 0];
    total = 0;
    let textoTotal = document.querySelector('p');
    let valorTotal = textoTotal.querySelector("#valor-total");
    valorTotal.innerHTML = "R$ " + total;
    let textoQuantidade = document.getElementById("lista-produtos");
    textoQuantidade.innerHTML = `<section class="carrinho__produtos__produto">
    <span class="texto-azul"></span>  <span class="texto-azul"></span>
  </section>`;
}