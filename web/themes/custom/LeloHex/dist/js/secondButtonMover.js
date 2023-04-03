((Drupal, $) => {
  const buttons = $(".field-button-secondary");
  const buttonTwo = buttons.eq(1);

  const scrollToNL = () => {
    let touchContainer = $(".touchContainer");
    touchContainer.get(0).scrollIntoView({ behavior: "smooth" });
  };

  buttonTwo.on("click", (e) => {
    e.preventDefault();
    scrollToNL();
  });
})(Drupal, jQuery);
