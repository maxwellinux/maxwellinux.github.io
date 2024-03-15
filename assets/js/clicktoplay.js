function playorpause(){
    var audio = document.getElementById('music');
    if (audio.paused){
        audio.play();
        }
    else{
        audio.pause();
        audio.currentTime=0;
        }
}

var clicktoplay = document.querySelector('.clicktoplay')
var OutputImg = document.querySelector('.ImgBox>img')
var arr = ['assets/media/sidebar_stand.gif','assets/media/sidebar_run.gif'];
var index = 0

clicktoplay.onclick = function(){
    index++
    if(index === arr.length) index = 0
    var ImgPath = arr[index]
    OutputImg.src = ImgPath
    playorpause()
}
