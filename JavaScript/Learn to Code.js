function myFunction(){
    document.getElementById("demo").innerHTML = "Hello, JS!";
    document.getElementById("demo").style.fontSize = "25px";
    document.getElementById("demo").style.color = "green";
}

function myFunctionreverse(){
    document.getElementById("demo").innerHTML = "Demo for JS to change.";
    document.getElementById("demo").style.fontSize = "16px";
    document.getElementById("demo").style.color = "black";
}

function textboxFunction(){
    alert("I SEE YOU");
}

let x, y, z;
x = 5;
y = 6;
z = x + y * x - y;

function zFunction(){
    document.getElementById("ztext").innerHTML = z;
    alert("As soon as you dismiss this message, you will know what z is!");
    setTimeout(() => { alert("What is the equation used to find z?"); }, 3000);
    setTimeout(() => { alert("Go to the console to find out..."); }, 5000);
    console.log("z = x + y * x - y");
    setTimeout(() => { console.log("Did you get it?"); }, 9000);
}

function tempFunction(){
    var temp = prompt("What is the temperature in Farenheit today?");
    printIn(temp + " degrees Celsius.");
}

//This is used to make a comment in JS.
//It is similar to <!--...--> in HTML and /*...*/ in CSS

/*
You use this for a multi-line comment
It's the same set of symbols as CSS
*/

