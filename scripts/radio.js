document.addEventListener("DOMContentLoaded", function () {
    const audioPlayer = document.getElementById("audioPlayer");
    const playPauseButton = document.getElementById("playPauseButton");

    playPauseButton.addEventListener("click", togglePlayPause);

    function togglePlayPause() {
      if (audioPlayer.paused) {
        audioPlayer.play();
      } else {
        audioPlayer.pause();
      }

      updatePlayPauseButton();
    }

    function updatePlayPauseButton() {
      playPauseButton.textContent = audioPlayer.paused ? "▶️" : "⏸️";
    }

    // Additional event listeners...

    // Update current time
    audioPlayer.addEventListener("timeupdate", function () {
      const minutes = Math.floor(audioPlayer.currentTime / 60);
      const seconds = Math.floor(audioPlayer.currentTime % 60);
      currentTime.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    });
  });
