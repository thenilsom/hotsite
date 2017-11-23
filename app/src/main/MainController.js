 angular
       .module('app')
       .controller('MainController', ['$scope', '$location', '$anchorScroll',
        function($scope, $location, $anchorScroll){

        
          //controla o hide/show do botão ir para topo quando chegar no fim da pagina
        $(window).scroll(function () {
          //usar esse if para exibir o btn ir para o top quando o usuario rolar a pagina
          //if ($(this).scrollTop() > 100); 

          var maxTop = document.body.scrollHeight - (document.body.clientHeight + 300);
           if (parseInt($(this).scrollTop()) >= maxTop) {
            $('.btn-go-top').addClass('display').fadeIn();
           } else {
            $('.btn-go-top').removeClass('display').fadeOut();
           }
        });
          
          /*Função voltar para o topo da pagina*/
          $scope.gotoTop = function(){
            $("html, body").animate({ scrollTop: 0 }, 300);
          }

          /*rola a pagina até o id passado*/
          $scope.goTo = function(id){
            $location.hash(id);
            $anchorScroll();
          }
    }]);