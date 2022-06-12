console.log('test');
let json1 ='{"nome":"yor","idade":27,"gmail":"abobrinha123 @gmail.com","estadoCivil":"casada","salario":"3.200 + extras do seu segundo emprego"}';
let json2 ='{"nome":"anya","idade":6,"gmail":"comedoradementes @hotmail.com","estadoCivil":"solteira","salario":"ainda não trabalha"}';
let json3 ='{"nome":"loid","idade":"não informado","gmail":"twilight@gmail.com","estadoCivil":"casado","salario":"não informado"}';
let test1 = JSON.parse(json1);
let test3 = JSON.parse(json3);
let test2 = JSON.parse(json2);


document.getElementById("tit1").innerHTML = test1.nome;
document.getElementById("tit2").innerHTML = test3.nome;
document.getElementById("tit3").innerHTML = test2.nome;

document.getElementById("idade1").innerHTML = test1.idade;
document.getElementById("idade2").innerHTML = test3.idade;
document.getElementById("idade3").innerHTML = test2.idade;

document.getElementById("gmail1").innerHTML = test1.gmail;
document.getElementById("gmail2").innerHTML = test3.gmail;
document.getElementById("gmail3").innerHTML = test2.gmail;

document.getElementById("est1").innerHTML = test1.estadoCivil;
document.getElementById("est2").innerHTML = test3.estadoCivil;
document.getElementById("est3").innerHTML = test2.estadoCivil;

document.getElementById("sal1").innerHTML = test1.salario;
document.getElementById("sal2").innerHTML = test3.salario;
document.getElementById("sal3").innerHTML = test2.salario;
 


 