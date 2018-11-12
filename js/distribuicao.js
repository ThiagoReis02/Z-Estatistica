// distribuição binomial. Aqui jás a vida social
// Função distribuição binomial menor que K
function distribuicaoBinoMenor() {
    let n, p, q, k, result = 0; k = [];

    n = parseFloat(document.getElementById("n").value);
    p = parseFloat(document.getElementById("p").value);
    q = parseFloat(document.getElementById("q").value);
    k = parseFloat(document.getElementById("K").value);



    for (let i = 0; true; i++) {
        k--;
        result += ((fatorial(n) / (fatorial(k) * (fatorial(n - k))))
            * (Math.pow(p, k))
            * (Math.pow(q, (n - k))))
            * 100;
        if (k == 0) {
            break;
        }
    }


    console.log(result.toFixed(2));

    document.getElementById("resultadoDB").innerHTML = "O resultado da Distribuição Binomial é:" + result.toFixed(2);



};

//##########################################################################################################
// Função distribuição binomial maior que K
function distribuicaoBinoMaior() {
    let n, p, q, k, result = 0; k = [];

    n = parseFloat(document.getElementById("n").value);
    p = parseFloat(document.getElementById("p").value);
    q = parseFloat(document.getElementById("q").value);
    k = parseFloat(document.getElementById("K").value);

    for (let i = 0; true; i++) {
        k++;
        result += ((fatorial(n) / (fatorial(k) * (fatorial(n - k))))
            * (Math.pow(p, k))
            * (Math.pow(q, (n - k))))
            * 100;
        if (k == n) {
            break;
        }
    }

    console.log(result.toFixed(2));
    document.getElementById("resultadoDB").innerHTML = "O resultado da Distribuição Binomial é:" + result.toFixed(2) + "%";
}
//##########################################################################################################

//Função distribuição binomial igual a K

function distribuicaoBinoigual() {
    let n, p, q, k, result = 0;

    n = parseFloat(document.getElementById("n").value);
    p = parseFloat(document.getElementById("p").value);
    q = parseFloat(document.getElementById("q").value);
    k = parseFloat(document.getElementById("K").value);

    result += ((fatorial(n) / (fatorial(k) * (fatorial(n - k))))
        * (Math.pow(p, k))
        * (Math.pow(q, (n - k))))
        * 100;


    console.log(result.toFixed(2));
    document.getElementById("resultadoDB").innerHTML = "O resultado da Distribuição Binomial é:" + result.toFixed(2) + "%";
}
//##########################################################################################################

//Função distribuição binomial Entre K 

function ditribuicaoBinoentre() {
    let n, p, q, result = 0;
    console.log("entrou na função");
    n = parseFloat(document.getElementById("n").value);
    p = parseFloat(document.getElementById("p").value);
    q = parseFloat(document.getElementById("q").value);
    let k = document.getElementById("K").value;

    // k = k.toString();


    console.log(k)

    // k = k.split(";");

    let kk = k.split(';').map(el => {
        let n = Number(el);
        return n === 0 ? n : n || el;
    });

    console.log(typeof kk)
    // for (let i = 0; i < k.length; i++) {
    //     k[i] = Number(k[i]);

    // }

    for (let i = 0; i < kk.length; i++) {
        console.log("entrou no for;")
        result += ((fatorial(n) / (fatorial(kk[i]) * (fatorial(n - kk[i]))))
            * (Math.pow(p, kk[i]))
            * (Math.pow(q, (n - kk[i]))))
            * 100;
    }

    console.log(result.toFixed(2));

    document.getElementById("resultadoDB").innerHTML = "O resultado da Distribuição Binomial é:" + result.toFixed(2) + "%";



}
//##########################################################################################################

// Função importa o valor do select e printa o resultado na tela da binomial.
function importaselect() {
    debugger;

    console.log("entrando no if")
    let tam = document.getElementById("valortabela").value;

    console.log(tam);
    //Quando o valor da tabela é proposto pelo usuário a função cuida dos cálculos e printa na tela.
    if (tam == "menor") {
        
        distribuicaoBinoMenor();
    }

    if (tam == "maior") {
        
        distribuicaoBinoMaior();
    }

    if (tam == "igual") {
        console.log(tam);
        distribuicaoBinoigual();
    }

    if (tam == "entre") {
        console.log(tam);
        ditribuicaoBinoentre();

    }


}

//##########################################################################################################
//função dada para calcular o fatorial dos devidos cáculos
function fatorial(num) {

    if (num < 0) {
        return -1;
    }

    else if (num == 0) {
        return 1;
    }
    var tmp = num;
    while (num-- > 2) {
        tmp *= num;
    }
    return tmp;
}

//##########################################################################################################


//Distribuição Uniforme. Aqui jás a vida social.
//##########################################################################################################
//Distribuição Uniforme Maior
function calcularDistribuicaoUniformeMaior() {
    let min, max, valor, dp, cv, media, DistriUni = [];

    min =parseFloat(document.getElementById("ponto_minimo").value);
    max = parseFloat(document.getElementById("ponto_maximo").value);
    valor = parseFloat(document.getElementById("number").value);
    
    min = Number(min);
    max = Number(max);
    valor = Number(valor);

    debugger;


    console.log(min, max, valor);

    dp = Math.sqrt((Math.pow(max - min, 2)) / 12);

    dp = dp.toFixed(2);
    console.log(dp);

    media = (max + min) / 2;
    media = media.toFixed(2);
    console.log(media);

    cv = (dp / media) * 100;
    cv = cv.toFixed(2);
    console.log(cv);

    DistriUni = ((1 / (max - min)) * (max - valor) * 100);
    DistriUni = DistriUni.toFixed(2);
    console.log(DistriUni);

    document.getElementById("media").innerHTML = "O resultado da Média é: " + media;
    document.getElementById('dp').innerHTML = "O resultado do Desvio Padrão é: " + dp;
    document.getElementById('cv').innerHTML = "O resultado do Coeficiente de Variação é: " + cv + "%";
    document.getElementById("uniforme").innerHTML = "O resultado da Distribuição Uniforme é: " + DistriUni + "%";

}
//##########################################################################################################
//Distribuição Uniforme menor
function calcularDistribuicaoUniformeMenor() {
    let min, max, valor, dp, cv, media, DistriUni = 0;

    min = parseFloat(document.getElementById("ponto_minimo").value);
    max = parseFloat(document.getElementById("ponto_maximo").value);
    valor = parseFloat(document.getElementById("number").value);

    console.log(min, max, valor);

    dp = Math.sqrt((Math.pow(max - min, 2)) / 12);

    console.log(dp);

    media = (max + min) / 2;
    console.log(media);

    cv = (dp / media) * 100;
    console.log(cv);

    DistriUni = ((1 / (max - min)) * (valor - min) * 100);
    console.log(DistriUni);

    document.getElementById("media").innerHTML = "O resultado da Média é: " + media.toFixed(2);
    document.getElementById('dp').innerHTML = "O resultado do Desvio Padrão é: " + dp.toFixed(2);
    document.getElementById('cv').innerHTML = "O resultado do Coeficiente de Variação é: " + cv.toFixed(2) + "%";
    document.getElementById("uniforme").innerHTML = "O resultado da Distribuição Uniforme é: " + DistriUni.toFixed(2) + "%";
}

//##########################################################################################################
//Distribuição Uniforme entre
function calcularDistribuicaoUniformeEntre() {
    let min, max, valor, dp, cv, media, DistriUni = 0;

    min = parseFloat(document.getElementById("ponto_minimo").value);
    max = parseFloat(document.getElementById("ponto_maximo").value);
    valor = document.getElementById("number").value;
    debugger;
    console.log(min, max, valor);

    dp = Math.sqrt((Math.pow(max - min, 2)) / 12);
    dp = dp.toFixed(2);

    console.log(dp);

    media = (max + min) / 2;
    
    console.log(media);

    cv = (dp / media) * 100;
    cv = cv.toFixed(2);
    console.log(cv);

    let kk = valor.split(';').map(el => {
        let n = Number(el);
        return n === 0 ? n : n || el;
    });


    DistriUni = (1 / (max - min)) * Math.abs(kk[0] - kk[1]);
    DistriUni = DistriUni * 100;
    DistriUni = DistriUni.toFixed(2);
    console.log(DistriUni);

    document.getElementById("media").innerHTML = "O resultado da Média é: " + media;
    document.getElementById('dp').innerHTML = "O resultado do Desvio Padrão é: " + dp;
    document.getElementById('cv').innerHTML = "O resultado do Coeficiente de Variação é: " + cv + "%";
    document.getElementById("uniforme").innerHTML = "O resultado da Distribuição Uniforme é: " + DistriUni + "%";
}



//##########################################################################################################
// Função para printar resultados da distribuição uniforme na tela.
function SelectUni() {
    var tipo = $("#category").val();
    //  debugger;
    if (tipo == "menor") {
        calcularDistribuicaoUniformeMenor();
    }

    if (tipo == "maior") {
        calcularDistribuicaoUniformeMaior();
    }

    if (tipo == "entre") {
        calcularDistribuicaoUniformeEntre();
    }
}



//##########################################################################################################
//Distribuição Normal. Aqui realmente jás a vida social.


function calculaDistribuicaoNormal() {

    var media = parseFloat(document.getElementById("dn_media").value);
    var desvioPadrao = parseFloat(document.getElementById("dn_desvio_padrao").value);
    var maiorQ = parseFloat(document.getElementById("dn_maior").value);
    var menorQ = parseFloat(document.getElementById("dn_menor").value);
    var tipo = $('#category').val();
    debugger;
    console.log(tipo);


    if (tipo == 0) { //maior que
        if (maiorQ < media) {
            var valor = (0.5 + getValue((maiorQ - media) / desvioPadrao)) * 100;
        } else {
            var valor = (0.5 - getValue((maiorQ - media) / desvioPadrao)) * 100;
        }
    } else if (tipo == 1) { //menor que
        if (menorQ < media) {
            var valor = (0.5 - getValue((menorQ - media) / desvioPadrao)) * 100;
        } else {
            var valor = (0.5 + getValue((menorQ - media) / desvioPadrao)) * 100;
        }
    } else { //entre
        var valor1 = getValue((maiorQ - media) / desvioPadrao);
        var valor2 = getValue((menorQ - media) / desvioPadrao);
        if (((menorQ < media) && (maiorQ < media)) || ((menorQ > media) && (maiorQ > media))) {
            valor = (valor1 - valor2) * 100;
        } else {
            valor = (valor1 + valor2) * 100;
        }
    }
    document.getElementById("resultadoDN").innerHTML = "O resultado da Distribuição Normal é: " + Math.abs(valor.toFixed(2)) + "%";
}

var table = new Array();

table.push([0.0000, 0.0040, 0.0080, 0.0120, 0.0160, 0.0199, 0.0239, 0.0279, 0.0319, 0.0359]);
table.push([0.0398, 0.0438, 0.0478, 0.0517, 0.0557, 0.0596, 0.0636, 0.0675, 0.0714, 0.0753]);
table.push([0.0793, 0.0832, 0.0871, 0.0910, 0.0948, 0.0987, 0.1026, 0.1064, 0.1103, 0.1141]);
table.push([0.1179, 0.1217, 0.1255, 0.1293, 0.1331, 0.1368, 0.1406, 0.1443, 0.1480, 0.1517]);
table.push([0.1554, 0.1591, 0.1628, 0.1664, 0.1700, 0.1736, 0.1772, 0.1808, 0.1844, 0.1879]);
table.push([0.1915, 0.1950, 0.1985, 0.2019, 0.2054, 0.2088, 0.2123, 0.2157, 0.2190, 0.2224]);
table.push([0.2257, 0.2291, 0.2324, 0.2357, 0.2389, 0.2422, 0.2454, 0.2486, 0.2517, 0.2549]);
table.push([0.2580, 0.2611, 0.2642, 0.2673, 0.2703, 0.2734, 0.2764, 0.2794, 0.2823, 0.2852]);
table.push([0.2881, 0.2910, 0.2939, 0.2967, 0.2995, 0.3023, 0.3051, 0.3078, 0.3106, 0.3133]);
table.push([0.3159, 0.3186, 0.3212, 0.3238, 0.3264, 0.3289, 0.3315, 0.3340, 0.3365, 0.3389]);
table.push([0.3413, 0.3438, 0.3461, 0.3485, 0.3508, 0.3531, 0.3554, 0.3577, 0.3599, 0.3621]);
table.push([0.3643, 0.3665, 0.3686, 0.3708, 0.3729, 0.3749, 0.3770, 0.3790, 0.3810, 0.3830]);
table.push([0.3849, 0.3869, 0.3888, 0.3907, 0.3925, 0.3944, 0.3962, 0.3980, 0.3997, 0.4015]);
table.push([0.4032, 0.4049, 0.4066, 0.4082, 0.4099, 0.4115, 0.4131, 0.4147, 0.4162, 0.4177]);
table.push([0.4192, 0.4207, 0.4222, 0.4236, 0.4251, 0.4265, 0.4279, 0.4292, 0.4306, 0.4319]);
table.push([0.4332, 0.4345, 0.4357, 0.4370, 0.4382, 0.4394, 0.4406, 0.4418, 0.4429, 0.4441]);
table.push([0.4452, 0.4463, 0.4474, 0.4484, 0.4495, 0.4505, 0.4515, 0.4525, 0.4535, 0.4545]);
table.push([0.4554, 0.4564, 0.4573, 0.4582, 0.4591, 0.4599, 0.4608, 0.4616, 0.4625, 0.4633]);
table.push([0.4641, 0.4649, 0.4656, 0.4664, 0.4671, 0.4678, 0.4686, 0.4693, 0.4699, 0.4706]);
table.push([0.4713, 0.4719, 0.4726, 0.4732, 0.4738, 0.4744, 0.4750, 0.4756, 0.4761, 0.4767]);
table.push([0.4772, 0.4778, 0.4783, 0.4788, 0.4793, 0.4798, 0.4803, 0.4808, 0.4812, 0.4817]);
table.push([0.4821, 0.4826, 0.4830, 0.4834, 0.4838, 0.4842, 0.4846, 0.4850, 0.4854, 0.4857]);
table.push([0.4861, 0.4864, 0.4868, 0.4871, 0.4875, 0.4878, 0.4881, 0.4884, 0.4887, 0.4890]);
table.push([0.4893, 0.4896, 0.4898, 0.4901, 0.4904, 0.4906, 0.4909, 0.4911, 0.4913, 0.4916]);
table.push([0.4918, 0.4920, 0.4922, 0.4925, 0.4927, 0.4929, 0.4931, 0.4932, 0.4932, 0.4936]);
table.push([0.4938, 0.4940, 0.4941, 0.4943, 0.4945, 0.4946, 0.4948, 0.4949, 0.4951, 0.4952]);
table.push([0.4953, 0.4955, 0.4956, 0.4957, 0.4959, 0.4960, 0.4961, 0.4962, 0.4963, 0.4964]);
table.push([0.4965, 0.4966, 0.4967, 0.4968, 0.4969, 0.4970, 0.4971, 0.4972, 0.4973, 0.4974]);
table.push([0.4974, 0.4975, 0.4967, 0.4977, 0.4977, 0.4978, 0.4979, 0.4979, 0.4980, 0.4981]);
table.push([0.4981, 0.4982, 0.4982, 0.4983, 0.4984, 0.4984, 0.4985, 0.4985, 0.4986, 0.4986]);
table.push([0.4987, 0.4987, 0.4987, 0.4988, 0.4988, 0.4989, 0.4989, 0.4989, 0.4990, 0.4990]);
table.push([0.4990, 0.4991, 0.4991, 0.4991, 0.4992, 0.4992, 0.4992, 0.4992, 0.4993, 0.4993]);
table.push([0.4993, 0.4993, 0.4994, 0.4994, 0.4994, 0.4994, 0.4994, 0.4995, 0.4995, 0.4995]);
table.push([0.4995, 0.4995, 0.4995, 0.4996, 0.4996, 0.4996, 0.4996, 0.4996, 0.4996, 0.4997]);
table.push([0.4997, 0.4997, 0.4997, 0.4997, 0.4997, 0.4997, 0.4997, 0.4997, 0.4997, 0.4998]);
table.push([0.4998, 0.4998, 0.4998, 0.4998, 0.4998, 0.4998, 0.4998, 0.4998, 0.4998, 0.4998]);
table.push([0.4998, 0.4998, 0.4999, 0.4999, 0.4999, 0.4999, 0.4999, 0.4999, 0.4999, 0.4999]);
table.push([0.4999, 0.4999, 0.4999, 0.4999, 0.4999, 0.4999, 0.4999, 0.4999, 0.4999, 0.4999]);
table.push([0.4999, 0.4999, 0.4999, 0.4999, 0.4999, 0.4999, 0.4999, 0.4999, 0.4999, 0.4999]);
table.push([0.5000, 0.5000, 0.5000, 0.5000, 0.5000, 0.5000, 0.5000, 0.5000, 0.5000, 0.5000]);


function getValue(num) {
    value = Math.abs(num).toString();
    for (i = value.length; i <= 4; i++) {
        value = value + "0";
    }
    array = value.split('');
    index = parseInt(array[0] + array[2]);
    column = parseInt(array[3]);
    if (index > 38) {
        return 0.5000;
    }

    return table[index][column];
}

function getParams(num) {
    value = Math.abs(num);
    retorno = '';


    if (value >= 0.5) {
        return 3.9;
    } else {
        for (var index = 0; index < table.length; index++) {
            if (retorno != "") {
                break;
            }
            for (var column = 0; column < table[index].length; column++) {
                if (value <= table[index][column]) {
                    str = index.toString();
                    array = str.split('');
                    if (array.length == 1) {
                        array.unshift('0');
                    }

                    if (value < table[index][column]) {
                        retorno = array[0] + '.' + array[1] + (column - 1);

                    } else {
                        retorno = array[0] + '.' + array[1] + column;
                    }
                    break;
                }
            }
        }
        return parseFloat(retorno);
    }
}