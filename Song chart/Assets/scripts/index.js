const button = document.getElementById("button");
const songs = document.getElementById("songs");

const display = () => {
  if (songs.classList.contains("remove")) {
    button.textContent = "Hide Songs";
  } else {
    button.textContent = "Show Songs";
  }
  songs.classList.toggle("remove");
};

button.addEventListener("click", display);