angular.module('app')
.factory('serviceUtil', ['$location', '$anchorScroll','$mdDialog', 
	function($location, $anchorScroll, $mdDialog){

		var service = {};

		service.alertar = function(){
			$mdDialog.show(
			    $mdDialog.alert()
			    .title('This is an alert title')
			    .textContent('You can specify some description text in here.')
			    .ok('OK')
			);
			
		}

	
		service.setarFocus = function(id){
			document.getElementById(id).focus();
		}

		/*
		Move a tela parao id informado
		*/
		service.moveTo = function(id){
			$location.hash(id);
            $anchorScroll();
		}

		service.obterProximoPasso = function(passoAtual){
			switch(passoAtual){
				case '1': return '2';
				case '2' : return '3';
				default : return passoAtual;
			}
		}

		service.obterPassoAnterior = function(passoAtual){
			switch(passoAtual){
				case '3': return '2';
				case '2' : return '1';
				default : return passoAtual;
			}
		}

		/**
	   * Consulta o webservice viacep.com.br/ pelo cep informado
	   * e preenche o endereço com as informações vindas.
	   */
	  service.consultarCep = function(cep, callback){
	   var url = "http://viacep.com.br/ws/"+ cep +"/json/?callback=?"
	    	    
	     $.getJSON(url, function(dados) {
	         if (!("erro" in dados)) { 
	         	callback(dados)

	         }else {
	             callback(null);
	         }
	     }).fail(function(d) {
	    	 console.log("Servidor Fora do Ar.");
         });   	
	  }

		return service;
}]);
