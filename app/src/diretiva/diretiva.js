var diretiva = angular.module('diretiva', []);

/*Converte para maiusculo*/
diretiva.directive('upper', function($parse) {

	function link(scope, element, attrs, ngModelCtrl) {
			$(element).on('blur', function(){
				ngModelCtrl.$modelValue = $(element).val().toUpperCase();
				$parse(attrs.ngModel).assign(scope,ngModelCtrl.$modelValue);
				ngModelCtrl.$commitViewValue();
				ngModelCtrl.$render();
			})
		}
	

	return {
		restrict : 'A',
		require : 'ngModel',
		link : link
	};
});

/**
 * Seta o tabindex passado por parametro no elemento e adiciona o manipulador de
 * evento keydow para controlar a tabulação com enter entre os elementos do
 * formulario.
 */
diretiva.directive(
		'ngTabindex',
		function() {
			return {
				restrinct : 'A',
				link : function(scope, element, attrs) {
					$(element).attr('tabindex', attrs.ngTabindex);
					$(element).keydown(
							function(event) {
								var keyCode = event.keyCode ? event.keyCode : event.which ? event.which : event.charCode;
								if (keyCode == 13) {
								var field = document.getElementById($(this).attr('id'));
								event.preventDefault();
								var isFocado = false;
								$($("form[name = '" + field.form.name +"']").prop('elements')).each(function(){
									
									if($(this).is(':enabled')){//verifica se o elemento esta habilitado
										var indexField = parseInt($(this).attr('tabindex'));
										var condicao = indexField > field.tabIndex;
										if(condicao){
											if(!isFocado){
												$(this).focus();
												$(this).select();
												isFocado = true;
											}
											
										}
									}
									
									
								});
									
						}

				});
				}
			}
		});