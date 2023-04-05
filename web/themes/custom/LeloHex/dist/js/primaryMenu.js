((Drupal, $) => {
  const navList = $(".primary-nav__menu-link-inner--level-1");
  const submenu = $(".primary-nav__menu--level-2");
  const logIn = submenu.eq(0);
  const languages = submenu.eq(1);
  const languageOptions = $(".primary-nav__menu-link-inner--level-2");
  const language = navList.eq(1);

  logIn.hide();
  languages.hide();

  //prevent reloading on hitting inner span
  languageOptions.click((e) => {
    e.preventDefault();
  });

  // Opening of submenu
  language.click((e) => {
    languages.show();
    e.preventDefault();
  });

  Drupal.behaviors.lelohexHideMenu = {
    attach: (context) => {
      //close with outside and inner li click
      $(document).mouseup((e) => {
        if (!language.is(e.target)) {
          e.preventDefault();
          languages.hide();
        }
      });
      //close with escape
      $(document).keyup((e) => {
        if (e.keyCode == 27) {
          languages.hide();
        }
      });
    },
  };
})(Drupal, jQuery);

// ((Drupal) => {
//   const navList = document.querySelectorAll(
//     ".primary-nav__menu-link-inner--level-1"
//   );
//   const submenu = document.querySelectorAll(".primary-nav__menu--level-2");
//   const logIn = submenu[0];
//   const languages = submenu[1];
//   const languageOptions = document.querySelectorAll(
//     ".primary-nav__menu-link-inner--level-2"
//   );
//   const language = navList[1];

//   logIn.style.display = "none";
//   languages.style.display = "none";

//   //prevent reloading on hitting inner span
//   languageOptions.forEach((option) => {
//     option.addEventListener("click", (e) => {
//       e.preventDefault();
//     });
//   });

//   // Opening of submenu
//   language.addEventListener("click", (e) => {
//     languages.style.display = "flex";
//     e.preventDefault();
//   });

//   Drupal.behaviors.lelohexHideMenu = {
//     attach: (context) => {
//       //close with outside and inner li click
//       document.addEventListener("click", (e) => {
//         if (!language.contains(e.target)) {
//           e.preventDefault();
//           languages.style.display = "none";
//         }
//       });
//       //close with escape
//       document.addEventListener("keyup", (e) => {
//         if (e.key == "Escape") {
//           languages.style.display = "none";
//         }
//       });
//     },
//   };
// })(Drupal);
