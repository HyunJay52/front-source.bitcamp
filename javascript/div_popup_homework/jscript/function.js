//이미지 세팅
function inputImg() {
    var arrImg = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg'];
    var tag = "";
    for (var cnt = 1; cnt < 5; cnt++) {
        for (var i = 0; i < arrImg.length; i++) {
            tag += "<img src='img/" + arrImg[i] + "' onclick='popUpDiv(this.src)'/>";
        }
    }
    document.getElementById("setImg").innerHTML = tag;
}

var popDivPosition;
//  마우스 위치        팝업창 위치       다음 마우스 위치
var eventX, eventY, popUpX, popUpY, moveX, moveY;
var flag = false;
//팝업창 설정
function popUpDiv(getImg) {
    console.log("이미지명 > ", getImg);
    //팝업창 이미지 위치
    eventX = event.clientX;
    eventY = event.clientY;

    popDivPosition = document.getElementById("popDiv").style;

    popDivPosition.left = eventX + "px";
    popDivPosition.top = eventY + "px";
    popDivPosition.display = "block";

    //선택한 이미지명 세팅
    var cutImgName = getImg.substr(getImg.search('g/img') + 2, 8);
    document.getElementById('imgName').innerHTML = cutImgName;
    //선택한 이미지 팝업창에 세팅
    document.getElementById("popImg").src = getImg;
    //모달 디브, 회색창
    var x = screen.availWidth;
    var y = screen.availHeight;
    var modal = document.getElementById("modalDiv").style;
    modal.width = x + "px";
    modal.height = y + "px";
    modal.display = "block";
    modal.opacity = "0.7";
}
//팝업창 드래그 하기
//  마우스 위치        팝업창 위치       다음 마우스 위치
var eventX, eventY, popUpX, popUpY, moveX, moveY;
var flag = false;

function setMoveStart() {
    flag = true;
    console.log("span으로 끌기..")

    popDivPosition = document.getElementById("popDiv").style;

    //마우스를 누르면 이벤트가 발생한 곳의 x,y 좌표를 구한다.
    eventX = event.clientX;
    eventY = event.clientY;

    popUpX = parseInt(popDivPosition.left);
    popUpY = parseInt(popDivPosition.top);

    //마우스를 이동하면 이동한 곳의 좌표를 구한다 이벤트 x, y 좌표를 구한다.
    document.onmousemove = startDrag;

}
//팝업창 마우스 드래그
function startDrag() {
    if (flag) {
        console.log("팝업창 끌기 시도..")
        moveX = event.clientX;
        moveY = event.clientY;

        //움직인 거리 계산
        var x = moveX - eventX;
        var y = moveY - eventY;

        popDivPosition.left = popUpX + x + "px";
        popDivPosition.top = popUpY + y + "px";

    }
}

function finishFlag() {
    console.log("드래그 중지..")
    flag = false;
}
document.onmouseup = finishFlag;

function closePopup() {
    console.log("팝업 닫기 시도..");
    //모달 디브, 회색창 
    var modal = document.getElementById("modalDiv").style;
    modal.display = "none";
    popDivPosition = document.getElementById("popDiv").style;
    popDivPosition.display = "none"; //팝업 창 닫기 

}