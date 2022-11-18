function clearInput(){
    var getValue= document.getElementById("compr");
    if (getValue.value !="") {
        getValue.value = "";
    }
    var getValue= document.getElementById("alt");
    if (getValue.value !="") {
        getValue.value = "";
    }
    var getValue= document.getElementById("larg");
      if (getValue.value !="") {
          getValue.value = "";
      }
}

function Calcule(){
    
    var alt = parseFloat(document.getElementById("alt").value);
    var larg = parseFloat(document.getElementById("larg").value);
    var compr = parseFloat(document.getElementById("compr").value);

    var volume = alt*larg*compr;
    var litro =  volume/1000;
    

    var aux = Math.ceil(litro/50);

    var aquecedor = (aux)*50;
    var bomba = (litro*6);

    
    document.getElementById("volume").innerHTML = litro.toFixed(2) + ' L'
    document.getElementById("litrosph").innerHTML = bomba.toFixed(2) + ' L/h'
    document.getElementById("termo").innerHTML = aquecedor.toFixed(2) + ' W'
    
    clearInput()
}
