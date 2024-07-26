var video = document.getElementById("myVideo");

$(document).ready(function() {
    function playVideo() {
        video.play();
    }

    function pauseVideo() {
        video.pause();
    }

    function stopVideo() {
        video.pause(); 
        video.currentTime = 0; 
    }
});
