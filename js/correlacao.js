// Variáveis Globais
var botaoAdicionar = document.querySelector('#aDados');
var campoXdados = document.querySelector('input[name="xdado"]');
var campoYdados = document.querySelector('input[name="ydado"]');

var corpoTabela = document.querySelector('tbody');

// Objetos
function coletaDado(indepen, depen) {
    this.xdado = indepen;
    // função que joga no console as informações
    this.ydado = depen;

    this.calcula_col3 = function () {
        return this.xdado * this.ydado;
    }

    this.calcula_col4 = function () {
        return this.xdado * this.xdado;
    }

    this.calcula_col5 = function () {
        return this.ydado * this.ydado;
    }

    this.mostrarDados = function () {
        console.log("A coluna 3 é: " + this.calcula_col3() +
            "A coluna 4 é: " + this.calcula_col4() +
            "A coluna 5 é: " + this.calcula_col5()
        );
    }



    // Função para colocar os dados na tabela
    this.criarPeloTemplate = function () {
        // Importar template:
        var template = document.querySelector('#template1');
        // Chamar conteúdo do template (São 5 'td's):
        lista_td = template.content.querySelectorAll('td');
        // Chamar cada objeto:
        // Primeiro td:
        lista_td[0].textContent = this.xdado;
        // Segundo td ... :
        lista_td[1].textContent = this.ydado;
        lista_td[2].textContent = this.calcula_col3();
        lista_td[3].textContent = this.calcula_col4();
        lista_td[4].textContent = this.calcula_col5();
        // Importar nó de todo o conteúdo do templante (true: importa tr e td (nós e sub nós); e false: importa só tr(nós))
        var nova_linha = document.importNode(template.content, true);
        corpoTabela.appendChild(nova_linha);
    }
};


// Funções
function adicionarDados(event) {
    event.preventDefault();
    // event.preventDefault() previne que o navegar recarregue a página ao clicar em adicionar pois os dados não serão enviados para nenhum lugar.

    //Chamar função para criar tabela
    novo_dado = new coletaDado(campoXdados.value, campoYdados.value);
    //novo_dado.mostrarDados();
    novo_dado.criarPeloTemplate();
};

// --- Rotina Principal ---

// botao.addEventListener(evento, função);
// poderia usar também botao.onclick (usado quando o botão está restrito a apenas uma função) 

// -- Evento click:
botaoAdicionar.addEventListener('click', adicionarDados);


  
    $(document).ready(function() {

    // The event listener for the file upload
    document.getElementById('txtFileUpload').addEventListener('change', upload, false);

    // Method that checks that the browser supports the HTML5 File API
    function browserSupportFileUpload() {
        var isCompatible = false;
        if (window.File && window.FileReader && window.FileList && window.Blob) {
        isCompatible = true;
        }
        return isCompatible;
    }

    // Method that reads and processes the selected file
    function upload(evt) {
    if (!browserSupportFileUpload()) {
        alert('The File APIs are not fully supported in this browser!');
        } else {
            var data = null;
            var file = evt.target.files[0];
            var reader = new FileReader();
            reader.readAsText(file);
            reader.onload = function(event) {
                var csvData = event.target.result;
                data = $.csv.toArrays(csvData);
                if (data && data.length > 0) {
                  alert('Imported -' + data.length + '- rows successfully!');
                } else {
                    alert('No data to import!');
                }
            };
            reader.onerror = function() {
                alert('Unable to read ' + file.fileName);
            };
        }
    }
    });
