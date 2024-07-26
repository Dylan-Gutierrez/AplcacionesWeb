var num=1000;
var pares=0, impares=0;


for( var i=num; i>=0;i-- ){
    if(i%2==0){
       pares = pares+i;
    }else{
        impares= impares +i;
    }

}

console.log(pares);
console.log(impares);