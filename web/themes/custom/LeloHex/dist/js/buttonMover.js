console.log(Drupal);

((Drupal) => {
  const buttons = document.querySelectorAll(".field-button-secondary");
  const buttonOne = buttons[0];

  const scrollToNL = () => {
    let touchContainer = document.querySelector(".touchContainer");
    touchContainer.scrollIntoView({ behavior: "smooth" });
  };

  buttonOne.addEventListener("click", (e) => {
    e.preventDefault();
    scrollToNL();
  });
})(Drupal);
