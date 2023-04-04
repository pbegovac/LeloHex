((Drupal, $) => {
  const navList = $(".primary-nav__menu-link-inner--level-1");
  const submenu = $(".primary-nav__menu--level-2");
  const logIn = submenu.eq(0);
  const languages = submenu.eq(1);
  const languageOptions = $(".primary-nav__menu-link-inner--level-2");
  const language = navList.eq(1);

  logIn.hide();
  languages.hide();

  console.log(language);

  //prevent reloading on hitting inner span
  languageOptions.on("click", (e) => {
    e.preventDefault();
  });

  // Opening of submenu
  language.on("click", (e) => {
    languages.show();
    e.preventDefault();
  });

  Drupal.behaviors.lelohexHideMenu = {
    attach: function (context) {
      //close with outside and inner li click
      $(document).mouseup(function (e) {
        if (!language.is(e.target)) {
          e.preventDefault();
          languages.hide();
        }
      });
      //close with escape
      $(document).keyup(function (e) {
        if (e.keyCode == 27) {
          languages.hide();
        }
      });
    },
  };
})(Drupal, jQuery);
