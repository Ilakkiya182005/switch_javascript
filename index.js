let choice=prompt("enter your choice:");
let q=prompt("enter the quantity");
let n=0;
switch(choice){
    case "1":
        n=200*q;
        break;
    case "2":
        n=300*q;
        break;
    case "3":
        n=250*q;
        break;
    case "4":
        n=100*q;
        break;
    case "5":
        n=80*q;
        break;
    default:
        console.log("enter the correct value");
        break;
}
let discount=0;
if(n>500){
    discount=n*0.1;
    n=n-discount;
    console.log(n);
}
else{
    console.log(n);
}