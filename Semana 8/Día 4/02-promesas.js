// const hornear=(funccionCallback)=>{
//     setTimeout(()=>{
//         // aparte de demorar no sabemos cual va ser el resultado
//         const probabilidad=Math.random();//da un numero al azar entre 0 y 1
//         if(probabilidad>=0.5){
//             // exito
//         funccionCallback("torta horneada");
//         }else{
//             // se quemo
//             funccionCallback("torta quemada");
//         }
//     },5000);
// }	;

//     hornear((resHorneado)=>{
//     console.log(resHorneado);
// })


const hornear = () => {
    //resolve va a ser resultado positivo
    //reject va a ser un resultado negativo
    return new Promise((resolve, reject) => {
      //ponemos la tarea asíncrona
      setTimeout(() => {
        const probabilidad = Math.random();
        console.log(probabilidad);
        if (probabilidad >= 0.9) {
          const result = "Torta Horneada"
          resolve(result)
        } else {
          reject("Torta quemada")
        }
      }, 4000);
    });
  };
  
  const prepararCubierta = (torta) => {
    return new Promise((resolve, reject) => {
      //tarea asíncrona
      setTimeout(() => {
        resolve(`${torta} y cubierta preparada`);
       reject("se fundio el microondas");
      }, 3000)
    })
  }
  
  hornear()
  .then((res) => {
    console.log(res);
    //encadenamiento de promesas, retorna una nueva promesa
    return prepararCubierta(res);
  })
  .then((cubierta) => {
    console.log(cubierta)
  })
  .catch((err) => {
    console.log(err);
  })  
  
  