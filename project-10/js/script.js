// Access
theadOne = document.querySelector(".one input");
theadTwo = document.querySelector(".two input");
nine=document.querySelector('.nine')
eight = document.querySelector(".eight");
seven = document.querySelector(".seven");
six=document.querySelector('.six')
five=document.querySelector('.five')
four=document.querySelector('.four')
three=document.querySelector('.three')
two=document.querySelector('.twonum')
one=document.querySelector('.onenum')
zero=document.querySelector('.zero')

// our function
mul=document.querySelector('.mul')
sub=document.querySelector('.sub')
add=document.querySelector('.add')
modulus = document.querySelector(".modulus");
div = document.querySelector(".div");

// equal
equal=document.querySelector('.equal')
point=document.querySelector('.point')




// Put Value in calculator
// Reset Function
reset = document.querySelector(".text-danger");
reset.onclick = function () {
  theadOne.value = "";
  theadTwo.value = "";
};

// % function
modulus.onclick = () => {
  theadOne.value += "%";
};
// / function
div.onclick = () => {
  theadOne.value += "/";
};
// 7 function
seven.onclick = () => {
  theadOne.value += "7";
};
// 8 function
eight.onclick = () => {
  theadOne.value += "8";
};
// 9 function
nine.onclick = () => {
  theadOne.value += "9";
};
// mul function
mul.onclick= () => {
    theadOne.value += "*";
}
// 4 function
four.onclick= ()=> {
    theadOne.value += "4";
}
// 5 function
five.onclick= ()=> {
    theadOne.value += "5";
}
// 6 function 
six.onclick= ()=> {
    theadOne.value += "6";
}
// sub
sub.onclick= () => {
  theadOne.value+='-'
}
// 1 function

one.onclick=() =>{
  theadOne.value+='1'
}

two.onclick=() =>{
  theadOne.value+='2'
}
// three function
three.onclick= () => {
  theadOne.value+='3'
}
// add function  
add.onclick=() => {
  theadOne.value+="+"
}
// piont function 
point.onclick= () => {
  theadOne.value+="."
}
zero.onclick =() => {
  theadOne.value+="0"
}

// our main work
equal.onclick=() => {
    x=theadOne.value
    // let result=
    // if(typeof result==='string')
    try {
      result=eval(x)
      if(typeof result==='string'){
        alert("please Enter a valid number")

      }else {
        theadTwo.value=result

      }
    }catch(error) {
      alert("please Enter a valid number")
      theadTwo.value=""
      theadOne.value=""
    }
}
// equal on oninput

theadOne.oninput =() => {
  x=theadOne.value
  try {
    result=eval(x)
    console.log(result)
    if(typeof result==='string'){
      alert("please Enter a valid number")
    }else {
      theadTwo.value=result
    }
  }catch(error) {
  }
  if(theadOne.value===""){
    theadTwo.value=""
  }
}
