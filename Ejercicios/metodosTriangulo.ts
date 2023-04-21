
function calcularAreaTriangulo(base: number, altura: number): number{
    return (base*altura)/2;
} 
let valoresGuardados = [[1,2],[2,4],[3,6],[4,8],[5,10],[6,12],[7,14]];

for(let i:number = 0; i < valoresGuardados.length; i++){
    let base:number = valoresGuardados[i][0];
    let altura:number = valoresGuardados[i][1];
    let area: number = calcularAreaTriangulo(base, altura);
    console.log('el area del triangulo de base ',base,'y de altura ',altura,'es ',area);

}
