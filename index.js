function change(col){
    if(col==='blue'){
        document.body.style.backgroundColor="blue";
        document.getElementById("b").style.backgroundColor="white"
        // document.getElementById("r").style.backgroundColor="white"
        // document.getElementById("g").style.backgroundColor="white"
    }
    else if(col==='red'){
        document.body.style.backgroundColor="red";
        document.getElementById("r").style.backgroundColor="white"
        // document.getElementById("b").style.backgroundColor="white"
        // document.getElementById("g").style.backgroundColor="white"
    }
    else if(col==='green'){
        document.body.style.backgroundColor="green";
        document.getElementById("g").style.backgroundColor="white"
        // document.getElementById("b").style.backgroundColor="white"
        // document.getElementById("r").style.backgroundColor="white"

    }
    else{
        document.body.style.backgroundColor="white";
        document.getElementById("b").style.backgroundColor="blue"
        document.getElementById("r").style.backgroundColor="red"
        document.getElementById("g").style.backgroundColor="green"
    }
}