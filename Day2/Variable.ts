//variable: container which can hold/store some data.
//var, let , const

//syntax: keyword variableName : data type(optional) = value

//Ex: var age:number=30
//ex: var age=30

var age =30;
console.log(age);

//var vs let vs const

/* 
 1)Scope
 2) Declaration/value Assignment
 3)Re-Declaration
 4)Re-initialization/re-assignment
 5)hosting
  */

 //var - we do not use this in modern JS/TS. Avoid var because it has function scope and can lead to unexpected issues.
 //let- use let when you need a variable that can change.
 //const- use const when the varibales value should not change.

 //1) Scope -Acessible are (Functional scope(var) & Block Scope (let,const))

 //ex: var(Functional Scope)

 function varScope()
 {
    if(true)
    {
        var msg ="hello World";
        //console.log(msg);
    }
    console.log(msg);
 }
 varScope();

 //ex: let and const (Block Scope)
 
 function blockScope()
 {
    if(true)
    {
        let msg ="Hello world";
    const greet ="Hello Const";
    console.log(msg);
    console.log(greet);//Can not acess outsidee the Block

    }
    
 }
 blockScope();