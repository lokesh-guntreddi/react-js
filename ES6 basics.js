let name1='lokesh' ;
let name2='guntreddi' ;
console.log(name1+ " "+ name2) ;
//using template literars
console.log(`${name1} ${name2}`) ;
//terary operator 
let myfood='rice';
function Myfirstfood(foodname){
    return foodname 
}
function Myfirstfood(foodname){
    return foodname 
}
if(myfood){
    console.log(Myfirstfood('BIRYANI'))
} else{
    console.log(Mysecondfood('fried rice'))
}
//condition ? statement1 (true): statement 2 (false)
myfood ? console.log(Myfirstfood('BIRYANI')): console.log(Mysecondfood('fried rice'))
//destructuring object
const rollno=1,name='lokesh',section='cse-04';
const student={
    rollno,
    name,
    section
}
const cr={
    description:'class representative',
    rollno,
    name,
    section
}
const classcr=cr.description;
console.log(classcr);
//de structered object
const {description} = cr;
console.log(description);
//destruing objects used in  state and props 
//destructing in lists 
let array=[2,3,4,5]
const firstelement=array[0];
const secondelement=array[1];
console.log(firstelement,secondelement);
//by destruring
const [a1,a2,a3,a4] = array ;
console.log(a1,a4)
