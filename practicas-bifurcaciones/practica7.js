let cantidad = 100;
let j=2;
for(let i=2;i<cantidad;i++) {      
    for(    ;j<cantidad;j++) {        
        if(j%i==0 && (i==j || i==1)) {          
            console.log(j);          
        }         
    }            
}
