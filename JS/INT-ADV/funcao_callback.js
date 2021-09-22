// CallBacks -> Utilizadas para retorno de algum processamento

function processar( callbackSucesso, callbackErro ){
  // Ação
  
  const operacaoConcluida = false
  
  // CallBack
  if ( operacaoConcluida ){
    callbackSucesso()
  } else {
    callbackErro()
  }
  
}

function processSucesso(){
  console.log("Sucesso na Operação")
}

function processErro(){
  console.log("Erro na Operação")
}

// Instanciando
const fazerProcessamento = processar(processSucesso, processErro)