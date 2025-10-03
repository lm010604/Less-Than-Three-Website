document.addEventListener("DOMContentLoaded", function () {
  const audioPlayer = document.getElementById("audioPlayer");
  const playPauseButton = document.getElementById("playPauseButton");
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");
  const playlist = document.getElementById("playlist");

  let currentSongIndex = 0;

  const songs = [
    { title: "Mr. Sandman - The Chordettes", url: "audio/mr-sandman.mp3" },
    { title: "Take Me To Church - Hozier", url: "audio/hozier.mp3" },
    { title: "Before He Cheats - Carrie Underwood", url: "audio/underwood.mp3" },
    { title: "Somebody That I Used To Know - Gotye", url: "audio/gotye.mp3" },
    { title: "You're So Vain - Carly Simon", url: "audio/carly-simon.mp3" },
    { title: "Royals - Lorde", url: "audio/royals.mp3" },
    { title: "No Roots - Alice Merton", url: "audio/no-roots.mp3" },
    { title: "Can't Catch Me Now - Olivia Rodrigo", url: "audio/oliviarodrigo.mp3" },
    { title: "Enemy - Imagine Dragons", url: "audio/enemy.mp3" },
    { title: "Always - Erasure", url: "audio/always.mp3" },
    // Add more songs as needed
  ];

  // Initialize playlist
  songs.forEach((song, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = song.title;
    listItem.addEventListener("click", () => playSong(index));
    listItem.style.listStyle = "none"; // Remove default list styling
    playlist.style.padding = "0"; // Remove padding
    playlist.style.margin = "0"; // Remove margin
    playlist.appendChild(listItem);
  });

  function playSong(index) {
    currentSongIndex = index;
    audioPlayer.src = songs[index].url;
    audioPlayer.play();
    songTitle.textContent = songs[index].title;
    updatePlayPauseButton();
  }

  function playPrevious() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    playSong(currentSongIndex);
  }

  function playNext() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    playSong(currentSongIndex);
  }

  function togglePlayPause() {
    if (audioPlayer.paused) {
      audioPlayer.play();
    } else {
      audioPlayer.pause();
    }

    updatePlayPauseButton();
  }

  function updatePlayPauseButton() {
    playPauseButton.textContent = audioPlayer.paused ? "▶" : "⏸";
  }

  // Event listeners for custom buttons
  prevButton.addEventListener("click", playPrevious);
  nextButton.addEventListener("click", playNext);
  playPauseButton.addEventListener("click", togglePlayPause);

  // Event listener for playlist song clicks
  playlist.addEventListener("click", function (event) {
    const listItem = event.target.closest("li");
    if (listItem) {
      const index = Array.from(playlist.children).indexOf(listItem);
      playSong(index);
    }
  });

  // Additional event listeners...

  // Update current time
  audioPlayer.addEventListener("timeupdate", function () {
    const minutes = Math.floor(audioPlayer.currentTime / 60);
    const seconds = Math.floor(audioPlayer.currentTime % 60);
    currentTime.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  });

  // Update play/pause button on playback status change
  audioPlayer.addEventListener("play", updatePlayPauseButton);
  audioPlayer.addEventListener("pause", updatePlayPauseButton);
});
