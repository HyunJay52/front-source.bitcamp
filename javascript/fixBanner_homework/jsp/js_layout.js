function imgSet(){
    var tag = "";
    for(var i=1; i<=5; i++){
        tag += "<img src='img/img" +i+ ".jpg'/>";
    }
    document.getElementById("img").innerHTML = tag;
}

var tag = "";
var num = 0;
function popupText(){
    var text = ['자','바','스','크','립','트','로',' ','레','이','아','웃',' ','연','습',' ','중'];
    console.log
    tag += text[num];
    num++;
    
    if(num>=18){
        num = 0;
        tag = "";
    }

    document.getElementById("pop").placeholder = tag;
}

function showAgain(){
    alert("되돌리기..");
    document.getElementById("blue").style.display='block';
}
