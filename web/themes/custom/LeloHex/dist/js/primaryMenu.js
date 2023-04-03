((Drupal) => {
  const unorderedListElements = document.querySelectorAll(
    ".primary-nav__menu-item--level-1"
  );
  const submenu = document.querySelectorAll(".primary-nav__menu--level-2");

  const language = unorderedListElements[1];
  const languages = submenu[1];
  console.log(languages);

  language.addEventListener("click", (e) => {
    e.preventDefault();
  });

  //   //on language click - open submenu
  //   //on anything that is not language - close submenu
  //   // on escape - close submenu
  //   // on link inside it - close submenu
})(Drupal);
