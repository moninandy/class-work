//7 primitive datatypes
/*
1.number
2.string
3.boolean
4.null
5.undefined
6.BigInt
7.symbol
*/
var a=10;
console.log(typeof a);
var b="monisha"
console.log(typeof b);
var c;
console.log(c);
//console.log(d);//not defined
var e=20;
if(a>e)
console.log("true")
else
console.log("false");
// Airthmetic operators
var x=10;
 var y=20;
 console.log( x+y);
 console.log(x-y);
 console.log(x*y);
 console.log(x/y);
 console.log(x%y);
 
 //logical operator
 // AND
 let a1=20;
 let b1=30;
 if ((a1<b1) && (b1>a1))
 console.log(" The value of b is highest");
 else
 console.log("not true")
 //OR
 var a2=20;
 var b2=20;
 if((a1>b1)||(a2==b2))
 console.log("Both value are same");
 else 
 console.log("check the given  condition");
 //not

 //!(a>5)--false
 //(a>5)--true
 //array
 var a=[1,2,3,4,5];
 console.log( a)
var a=[];
a[0]="monisha";
a[1]="nandy";
a[2]=2;
console.log(a)

 // object
  var person={
    name:"monisha",
    age:21,
    phonenumber:3456
  }
  console.log(person);
  //function

  function myfunction()
  {
    let a=10;
    let b=20;
    console.log(a+b);
  }
  myfunction();
 // let 
 function add()
 {
    let c=10;
    console.log(c);
}
//console.log(C);// c is not defined(reference error)
add();
 //const
function sub()
 {
    const a=10;
    console.log(a);
}
//console.log(a);// c is not defined(reference error)
sub();
//type conversion 0r coercion
 let T1=10;
 let T2="20";
 console.log(T1+T2);//implicit coercion

 //explicit coercion
 var no="20";
 var no1=30;
 console.log(parseInt(no) +no1);

 //  hoisting
 mul(10,30);
 function mul(a,b)
 {
     console.log(a*b);
 }
 //function expression

 //division(20,5); division is not a function (type error)

 var division=function div(a,b)
 {
    console.log(a/b);
 }
division(20,5);
 //prompt
 var a=prompt("enter the number");
 console.log(a);
 //alert
 alert("hello Lakshmi");
 //confirm
 confirm("continue to this page");






 


