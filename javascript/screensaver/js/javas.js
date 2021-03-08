// 이미지 세팅 
function imgSet(){
    var imgTag = "";
    for(var i=1; i<7; i++){
        imgTag += "<img src='../../img/img"+i+".jpg' onclick='getPage(this);'/>";
    }
    document.getElementById("img").innerHTML = imgTag;
}

var bigImg;
// 이미지 확대
function getPage(getTag){
    var clickImg = getTag.src;
    var imgNum = clickImg.charAt('29');
    console.log(imgNum);
    document.getElementById("main").style.display="none";

    var showHidden = document.getElementById("hiddenFrame");
    
    var imgTag = "";
    imgTag = "<img src='../../img/img"+imgNum+".jpg' width='100%'/>";
    //여기랑 hiddenFrame에 이벤트 넣으면 왜 안되는지 물어보기..?

    var txt = "<span>아무키나 누르면 종료됨</span>"
    imgTag += txt;

    document.getElementById("hiddenFrame").innerHTML = imgTag;

    document.documentElement.style.overflow = "hidden"; //스크롤바 삭제..
    showHidden.style.display = "block";
   // movingBird(); 여기서 만들어진 div setting.. 어떻게 가져가지
}

function removeFrame(){
    document.getElementById("main").style.display="block";
    document.getElementById("hiddenFrame").style.display="none";
    document.documentElement.style.overflow = "scroll";
}

function movingBird(){
    var birdTag = "";

    birdTag = "<div><img src='../../img/flyingbird.gif' id='bird'/></div>";

    document.getElementById("hiddenFrame").innerHTML = birdTag;
    document.getElementById("hiddenFrame").style.display = 'block';
    console.log("새움직이는거..")
    // ㅠㅠ 어려워여.....
}
