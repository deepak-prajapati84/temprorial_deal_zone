//console.log(a);//ReferenceError ? you cann't access the before the initialization
//console.log(b);//ReferenceError ? you cann't access the before the initialization


let a=30;
let b=40;

console.log(a);
console.log(b);


function add(a,b){
    console.log(a+b);
}
add();
let ad=add(90,86);
console.log(ad);

// const c;//why error ? becouse const is initailazation and declaration at times

function adddjj(){
    var c=[30,40,93,29];
}

let saa=adddjj();
console.log(saa);//undefuned


function adddj(){
    return c=[30,40,93,29];
}

let sa=adddj();
console.log(sa);