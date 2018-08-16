var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var imc = peso / (altura * altura);

console.log(imc);



var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i];
  
  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;

  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var tdImc = paciente.querySelector(".info-imc");

  var imc = peso / (altura * altura);

  tdImc.textContent = imc;
}



function inserirLinhaTabela() {

		
		if (document.getElementById("nome").value == "" ||
			document.getElementById("peso").value == "" ||
			document.getElementById("altura").value == "" ||
			document.getElementById("gordura").value == "" ) {	

			{alert("Campos vazios")}
		}	else {
			
            var tabela = document.querySelector("#tabela-pacientes");
			// Insere uma linha no fim da tabela.
            var novaLinha = tabela.insertRow();
                        
            // Insere uma coluna na nova linha 
            var novoNome = novaLinha.insertCell();
            // Insere um conteúdo na coluna
            novoNome.innerHTML = document.getElementById("nome").value ;

            var novoPeso = novaLinha.insertCell();
            novoPeso.innerHTML = document.getElementById("peso").value ;

       		var novoAltura = novaLinha.insertCell()
            novoAltura.innerHTML = document.getElementById("altura").value ;

			var novoGordura = novaLinha.insertCell()
			novoGordura.innerHTML = document.getElementById("gordura").value ;

			var novoIMC = novaLinha.insertCell()
			novoIMC.innerHTML = novoPeso.innerHTML / (novoAltura.innerHTML * novoAltura.innerHTML);
        	
        }
}



