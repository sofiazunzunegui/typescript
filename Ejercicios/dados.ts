/*La probabilidad de que un dado de 6 caras salga con un número específico (en este caso, 6) 
en una sola tirada es de 1/6 o aproximadamente 0.1667.
La probabilidad de que todos los dados de una tirada de N dados salgan con el número 6 
es el producto de la probabilidad de que cada dado individual salga con el número 6, 
ya que estos eventos son independientes entre sí. Por lo tanto, 
la probabilidad de que todos los N dados muestren 6 es:
P(Todos los dados muestran 6) = (1/6)^N
Por ejemplo, si tiras 3 dados, la probabilidad de que todos ellos muestren el número 6 es:
P(Todos los dados muestran 6) = (1/6)^3 = 0.0046*/
//a resolver
import * as rls from "readline-sync";
let numeroVecesTirarDado: number = rls.questionInt('ingrese numero: ');
let dado: number = 1/6**numeroVecesTirarDado;
console.log('la probabilidad de que salga 6 es de: ',dado,'%');
