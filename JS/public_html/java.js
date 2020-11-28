const form = document.getElementById('form');
const nome = document.getElementById('nome');
const autor = document.getElementById('autor');
const ano = document.getElementById('ano');
const periodo = document.getElementById('periodo');
const tipo = document.getElementById('tipo');
const detalhamento = document.getElementById('detalhamento');
const erros = document.getElementById('erros');



form.addEventListener('submit', (e)=>{
    e.preventDefault();
    
    checkInputs();
})

function checkInputs(){
    const nomeValue = nome.value.trim();
    const autorValue = autor.value.trim();
    const anoValue = ano.value.trim();
    const periodoValue = periodo.value.trim();
    const tipoValue = tipo.value.trim();
    const detalhamentoValue = detalhamento.value.trim();
    var verificacao = new Boolean(false);
    var contador=0;
    
    if(nomeValue === ''){
        //mostrar erro
        verificacao=false;
        setErrorFor(nome, 'O campo do nome é obrigatório');
        
    } else if (nomeValue.length < 6){
        verificacao=false;
        setErrorFor(nome, 'O nome da obra é muito curto');
        
    } else {
        verificacao=true;
        setSuccessFor(nome);
    }
    
    if(verificacao===true){
        contador++;
    }
    
    if(autorValue === ''){
        //mostrar erro
        verificacao=false;
        setErrorFor(autor, 'O campo do autor é obrigatório');
        
    } else if(autorValue.length < 10){
        verificacao=false;
        setErrorFor(nome, 'O nome do autor é muito curto');
       
    } else {
       verificacao=true;
        setSuccessFor(autor);
    }
    
    if(verificacao===true){
        contador++;
    }
    
    function valida_numero(input){
        var numeros = /^[0-9]+$/;
        if(input.value.match(numeros)){
            return true;
        }else{
            return false;
        }
    }
    
    if(anoValue === ''){
        //mostrar erro
        verificacao=false;
        setErrorFor(ano, 'O campo do ano é obrigatório');
        
    } else if(valida_numero(ano) === false){
        verificacao=false;
        setErrorFor(ano, 'Ano inválido');
       
    } else {
      verificacao=true;
        setSuccessFor(ano);
    }
    
    if(verificacao===true){
        contador++;
    }
    
    if(periodoValue === ''){
        //mostrar erro
        verificacao=false;
        setErrorFor(periodo, 'O campo do período é obrigatório');
        
    } else if(periodoValue === '-'){
        verificacao=false;
        setErrorFor(periodo, 'Selecione um período válido');

    } else {
      verificacao=true;
        setSuccessFor(periodo);
    }
    
    if(verificacao===true){
        contador++;
    }
    
    if(tipoValue === ''){
        //mostrar erro
        verificacao=false;
        setErrorFor(tipo, 'O campo do tipo é obrigatório');
    } else if(tipoValue == "-"){
        verificacao=false;
        setErrorFor(tipo, 'Selecione um tipo válido');
    } else {
        verificacao=true;
        setSuccessFor(tipo);
    }
    
    if(verificacao===true){
        contador++;
    }
    
    if(contador===5){
        window.location="tabela.html?"+nomeValue+"&"+autorValue+"&"+anoValue+"&"+periodoValue+"&"+tipoValue+"&"+detalhamentoValue;
    }
    

    
    
}

function setErrorFor(input, message){
    const formControl = input.parentElement; //.form-control
    const small = formControl.querySelector('small');

    small.innerText = message;
    formControl.className = 'form-control error';
}

function setSuccessFor(input){
    const formControl = input.parentElement; //.form-control
    formControl.className = 'form-control success';
}