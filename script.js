let yesButtonShown = true; // Keep track of whether the Yes button is shown

function showMessage(response) {
  if (response === "No") {
    const noButton = document.getElementById("no-button");
    const container = document.querySelector(".container");
    const maxWidth = window.innerWidth - noButton.offsetWidth;
    const maxHeight = window.innerHeight - noButton.offsetHeight;
    noButton.style.position = "absolute";
    const image = document.querySelector(".image");
    image.src = "gun.gif";

    // Generate random coordinates within the visible screen
    let randomX = Math.floor(Math.random() * maxWidth);
    let randomY = Math.floor(Math.random() * maxHeight);

    // Ensure the button stays within the bounds of the view area
    randomX = Math.max(0, randomX);
    randomY = Math.max(0, randomY);

    // Apply new coordinates to the button
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";

    const yesMessage = document.getElementById("peepee");
    yesMessage.textContent = "The no button is just for visuals🙄🙄";

    // Show the Yes button if it's not already shown
    if (!yesButtonShown) {
      const yesButton = document.getElementById("yes-button");
      yesButton.style.display = "inline-block";
      yesButtonShown = true;
    }

    image.style.display = "block"; // Show the image
  }
  if (response === "Yes") {
    const yesButton = document.getElementById("yes-button");
    yesButton.remove();
    const noButton = document.getElementById("no-button");
    noButton.remove();
    const yesMessage = document.getElementById("peepee");
    yesMessage.textContent = "LESGOOO see you on the 14th🥰😘";
    const image = document.querySelector(".image");
    image.src = "dance.gif";
    image.style.display = "block"; // Show the image
  }
}

// Move the "No" button to a new random position when clicked
const noButton = document.getElementById("no-button");
noButton.addEventListener("click", () => {
  showMessage("No"); // Show message for "No" response
});
