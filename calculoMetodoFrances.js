// Calcula las cuotas basadas en el método francés
// couta = (capital * i) / (1 - (i + 1) ^ -n)
// i = interés
// n = períodos (en meses)
exports.calcularMetodoFrances = (capital, tasaInteres, plazo) => {
    let cuota = 0;
    let mes = 0;
    let interes = 0;
    let tasaInteresDecimal = tasaInteres / 100;
    let cuotadeuda =0;
    const cuotas = [];
  
    // Transformar los años en meses
    plazo = Math.round(plazo * 12);
  //console.log(plazo);
    // Calcular la cuota
    cuota =
      (capital * tasaInteresDecimal) / (1 - (1 + tasaInteresDecimal) ** -plazo);
  
    cuota = cuota.toFixed(2);
  
   // console.log(cuota);

  // console.log("Prestamo Frances con valor de " + capital +" y un interes de "+tasaInteres+"%");

  for (let index = 0; index < plazo; index++) {
    mes  ++;
       interes = (capital * tasaInteresDecimal).toFixed(2);
       cuotadeuda = (cuota - interes).toFixed(2);
       capital = (capital - cuotadeuda).toFixed(2);
       //ARREGLO.PUSH ??El método push() añade uno o 
       //más elementos al final de un array y devuelve la nueva longitud del array.
       cuotas.push({
       mes,
       cuotadeuda,
       interes,
       cuota,
       capital

      });
     

     /* console.log("Mes: " + mes);
      console.log("Capital: " + cuotadeuda);
      console.log("Intereses: " + interes);
      console.log("Cuota: " +cuota);
      console.log("Deuda Pendiente: " + capital);
      console.log("-------------------------------------------------");*/
  }
  return cuotas;

/*let num;
   console.log('│'+"Mes"+'│ '+"cuota"+' │'+"interes"+' │ '+"cuota"+' │ '+"capital" +' │ ' );
   for (let i = 1; i <= plazo; i++) {
       interes = capital * tasaInteresDecimal;
       cuotas= [cuotadeuda = cuota - interes,
       capital = capital - cuotadeuda,
       interes = interes.toFixed(2),
       capital = capital.toFixed(2),
       cuotadeuda = cuotadeuda .toFixed(3)]
       num = i;
       console.log('│ '+num+'│ '+cuotadeuda+' │'+interes+' │ '+cuota+' │ '+capital +' │ ' );
     
     }*/
     
  };
 