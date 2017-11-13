  angular
       .module('app')
       .controller('MainController', ['$scope', function($scope){

          //controla o hide/show do botão ir para topo
	      $(window).scroll(function () {
	         if ($(this).scrollTop() > 100) {
	         	$('.btn-go-top').addClass('display').fadeIn("slow");
	         } else {
	         	$('.btn-go-top').removeClass('display').fadeOut();
	         }
	      });
       		
       		/*Função voltar para o topo da pagina*/
       		$scope.gotoTop = function(){
       			$("html, body").animate({ scrollTop: 0 }, 300);
       		}
    }]);