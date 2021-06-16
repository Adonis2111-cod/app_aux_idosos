function mudar_slide(){
    document.getElementById("setas").src = "http://alzheimer360.com/wp-content/uploads/2017/04/remedios-pessoa-Alzheimer-840x430.jpg"
    document.getElementById("words").innerHTML="Quase todos os medicamentos podem seguir esse calendário, que ajuda os pacientes a agrupar as pílulas para que não seja necessário tomar as doses frequentemente, pular algumas ou desistir totalmente. As melhoras mais notáveis aconteceram entre pacientes com maior risco de não adesão aos remédios: os menos escolarizados e com rotinas complexas."
}

function mudar_slide2(){
    document.getElementById("setas").src = "https://portalamigodoidoso.com.br/wp-content/uploads/2016/02/Medication-Supervision-1024x682.jpg"
    document.getElementById("words").innerHTML="A adesão aos remédios, uma ampla preocupação de saúde pública, é um problema especial para pessoas mais velhas. Eles tomam mais remédios do que os pacientes mais novos – não é incomum que tenham sete receitas. Ainda assim os estudos têm mostrado repetidamente que quanto mais vezes por dia você tem que usar remédios, menor a sua adesão."
}

function mostrarInstrucao() {
    document.getElementById("form-instrucao").style.display = "block";
    document.getElementById("desenho").style.display = "none";
}

function mostrarAplicativo() {
    document.getElementById("form-instrucao").style.display= "none";
    document.getElementById("desenho").style.display = "block";
}