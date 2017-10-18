var operationstring='';
var operationarray = [];
var operand;
var result;
var error=false;
var checkstring = function(){
  operationarray=operationstring.split('');
  console.log(operationarray);
  for(let i=0;i<operationarray.length;i++){
    // let currentval=operationarray[i];
    // console.log(currentval);
    // let nextval=operationarray[i+1];
    // console.log(nextval);
    if(operationarray[i]==='x'){
      operationarray[i]='*';
    }else if(operationarray[i]==='÷'){
      operationarray[i]='/';
    }
    if(operationarray[i]==='+'||operationarray[i]==='-'||operationarray[i]==='/'|| operationarray[i]==='*'){
      if(operationarray[i+1]==='+'||operationarray[i+1]==='-'||operationarray[i+1]==='/'||operationarray[i+1]==='*'){
        error=true;
    }
  }
    if(operationarray[i]==='/'&&operationarray[i+1]==='0'){
      error=true;
    }
}
}
$(document).ready(function(){
  $('.buttons').click(updatescreen);
})
var updatescreen= function(){
  var screentext = $("#screen")[0];

  if(event.target.innerHTML === '='){
    checkstring();
    operationstring=operationarray.join("");
    if(error){
    screentext.innerHTML = 'ERROR';
    }else{
    screentext.innerHTML = eval(operationstring) || 0;
  }
  }else if(event.target.innerHTML === 'C'){
    screentext.innerHTML='';
    operationstring = '';
  }else{
  if(event.target.className!=='buttons'){
  screentext.innerHTML= screentext.innerHTML||'';
  screentext.innerHTML+=event.target.innerHTML;
  operationstring +=event.target.innerHTML;
}
}
}
