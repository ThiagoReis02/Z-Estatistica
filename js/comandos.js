console.log('Bem-vindo!');

// Variáveis Globais
var botaoAdicionar = document.querySelector('#aDados');
var campoDados = document.querySelector('input[name="dado"]');
var corpoTabela = document.querySelector('tbody');
var listaclasse = [];
var dados = [];
var freqrel = [];
var somadados = 0;

// Objetos
function coletaDado(dado, freqs, freqp, facs, facp) {
    this.dado = dado;
    this.freqs = freqs;
    this.freqp = freqp;    
    this.facs = facs;
    this.facp = facp;
    // função que joga no console as informações
    this.mostrarDados = function () {
        console.log("O dado digitado é: " + this.dado);
    }/*
    // função para criar tabela com os dados
    this.criarLinhaTabela = function () {
        // Criar elementos
        var linha = document.createElement('tr');
        var campoDados = document.createElement('td');
        
        // Criar nós
        var textoDigitado = document.createTextNode(this.dado);

        // Vincular nós aos elementos
        campoDados.appendChild(textoDigitado);
        linha.appendChild(campoDados);

        // Vincular os elementos ao documento
        corpoTabela.appendChild(linha);
    }*/
    // função mais simples para colocar os dados na tabela
    this.criarPeloTemplate = function () {
        var template = document.querySelector('#template1');
        lista_td = template.content.querySelectorAll('td');
        lista_td[1].textContent = this.dado;
        lista_td[2].textContent = this.freqs;
        lista_td[3].textContent = this.freqp + "%";
        lista_td[4].textContent = this.facs;
        lista_td[5].textContent = this.facp + "%";
        var nova_linha = document.importNode(template.content, true);
        corpoTabela.appendChild(nova_linha);
    }
    
    // Construtores
    /*this.clss = function (classe, freq){
        this.classe = dados[i];     

    };*/
};

// Funções
function adicionarClasse(dclasse, dfreqs, dfreqp, dfacs, dfacp) {
    // event.preventDefault() previne que o navegar recarregue a página ao clicar em adicionar pois os dados não serão enviados para nenhum lugar.
    //var dado_informado;
    novo_dado = new coletaDado(dclasse, dfreqs, dfreqp, dfacs, dfacp);
    novo_dado.mostrarDados();
    novo_dado.criarPeloTemplate();
};

function separaDados(event) {
    event.preventDefault();
    var strdados;
    strdados = campoDados.value;
    //dados = strdados.split(/\s*;\s*/);
    dados = strdados.split(';').map(el => {
        let n = Number(el);
        return n === 0 ? n : n || el;
      });
    identificaVariavel();
};

// função básica de ordenação de dados 
function ordenaEntrada(dados){
    return dados.sort(function(a, b){
        return a - b;
    });
}

function identificaVariavel(){
    if (isNaN(dados[0])){ // se for quali os dados já devem estar ordenados
        freqSimples();
    }else{ // caso contrário, ou seja, se for quanti discreta, deve ordenar antes
        dados = ordenaEntrada(dados);
        freqSimples();
    }
}

function freqSimples(){ // utiliza o mesmo princípio para popular a tabela com QUALI OU QUANTI DISCRETA
    let atual = null;
    let freq = 0;
    for (let i = 0; (i-1)< dados.length; i++){
        
        if (atual == null || atual == dados[i]){ // Conta quantas repetições há daquela clasee
            atual = dados[i];
            freq ++; 
        }else{ // ao encontrar um valor diferente adiciona no array e começa a contar a próxima classe                  
            var clss = {classe: atual, freqs: freq, freqp: 0.0, facs: 0, facp: 0.0}; 
            listaclasse.push(clss);
            freq = 1;
            atual = dados[i];
        }    
    }
    somadados = dados.length; // guarda o total de valores inseridos
    let acs = 0;
    let acp = 0;
//------- calcula as frequências 
    for(let i = 0; i < listaclasse.length; i++){ 
        clss = listaclasse[i];
        clss.freqp = parseFloat((100 / somadados) * clss.freqs);
        acs += clss.freqs;
        clss.facs = acs;
        acp += clss.freqp;
        clss.facp = acp;
//------- adiciona a classe na table 
        adicionarClasse(clss.classe, clss.freqs, (clss.freqp).toFixed(2), clss.facs, (clss.facp).toFixed(2));
    }
}
// EF;EF;EF;EF;EF;EF;EF;EM;EM;EM;EM;ES;ES;ES;ES;ES
function calculaIntervalos(max, min){
    

}
function freqContinua(){

}


// --- Rotina Principal ---

// botao.addEventListener(evento, função);
// poderia usar também botao.onclick (usado quando o botão está restrito a apenas uma função) 

// -- Evento click:
botaoAdicionar.addEventListener('click', separaDados);