const tragamonedas1= () =>
    new Promise((resolve,reject)=>{
    setTimeout(()=>{
    const probabilidad = Math.random();
    if(probabilidad>=0.3){
        resolve(20);
    }else{
    reject("Perdiste en tragamonedas 1");

}
},1000);
});

const tragamonedas2= () =>
    new Promise((resolve,reject)=>{
    setTimeout(()=>{
    const probabilidad = Math.random();
    if(probabilidad>=0.3){
        resolve(20);
    }else{
    reject("Perdiste en tragamonedas 2");

}
},1000);
});


const jugar =async()=>{
try{
    const res1=await tragamonedas1();
    console.log(res1);
    const res2=await tragamonedas2();
    console.log(res2);


}catch(error){
    console.log(error);
}
}
jugar()
