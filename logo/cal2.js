// $opcao = 0;
//                 while(!isNaN($opcao) && $opcao != 5)
//                 {
//                 $opcao = parseInt(prompt('Selecione 1 - Soma;  2 - Subtracao; 3 -Multiplicacao; 4 - Divisao; 5 - Sair',''));

//                 if(!isNaN($opcao) && $opcao < 5){
//                 $a = parseInt(prompt('Digite o 1 valor'));
//                 $b = parseInt(prompt('Digite o 2 valor'));
//                 switch ($opcao)
//                 { case 1:
//                              alert(Soma($a,$B));
//                              break;
//                      case 2:
//                              alert(Subtracao($a,$B));
//                              break;
//                      case 3:
//                              alert(Multiplicacao($a,$B));
//                              break;
//                      case 4:
//                              alert(Divisao($a,$B));
//                              break;
//                      default:
//                              alert('Sair');
//                 }
//                 }
//                 else
//                 {alert('Opcao Invalida');}

//         }
//                 function Soma($a, $B)
//                 {
//                 return $a + $b;
//                 }

//                  function Subtracao($a, $B)
//                 {
//                 return $a - $b;
//                 }

//                  function Multiplicacao($a, $B)
//                 {
//                 return $a * $b;
//                 }

//                  function Divisao($a, $B)
//                 {
//                 return $a / $b;
//                 }



$valor_1 = prompt('Digite um número inteiro positivo');
$valor_2 = prompt('Digite outro número inteiro positivo');

$resultado = prompt('Digite qual operação deseja efetuar:', 'Somar, Subtrair, Multiplicar , Dividir');

$somar = parseInt($valor_1) + parseInt($valor_2);
$subtrair = $valor_1 - $valor_2;
$multiplicar = $valor_1 * $valor_2;
$dividir = $valor_1 / $valor_2;


switch($resultado){
case 'Somar':
	document.write('O resultado da soma é: ' + $somar);
	break;
case 'Subtrair':
	document.write('O resultado da subtração é: ' + $subtrair);
	break;
case 'Multiplicar':
	document.write('O resultado da multiplicação é: ' + $multiplicar);
	break;
	case 'Dividir':
	document.write('O resultado da divisão é: ' + $dividir);
	break;
default:
	alert('Valor Inválido');
}