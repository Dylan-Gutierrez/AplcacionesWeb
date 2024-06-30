n= 5;
var q=[0];


for(var i=2; i<n; i++){
    q[i]=q[i+2]+q[i+1];
    
}
console.log(q);
