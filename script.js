window.addEventListener("load", start);
function start() {
  const video = document.querySelector("#video_file");
  const playBtn = document.querySelector("#play");

  playBtn.addEventListener("click", playVideo);
  stopBtn.addEventListener("click", stopVideo);

  function playVideo() {
    if (video.paused === true) {
      video.play();
      playBtn.style.backgroundImage = "url(Billeder/pilotsite/pause_black.svg)";
    } else {
      video.pause();
      playBtn.style.backgroundImage = "url(Billeder/pilotsite/play_black.svg)";
    }
  }
}
