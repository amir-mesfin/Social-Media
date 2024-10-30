var settingsMenu = document.querySelector(".settings_menu");
function settingsMenuToggle() {
  settingsMenu.classList.toggle("settings_menu_height");
}

var darkBtn = document.getElementById("dark_botton");
darkBtn.onclick = function () {
  darkBtn.classList.toggle("darkon");
  document.body.classList.toggle("dark_theme");

  if (localStorage.getItem("theme") == "light") {
    localStorage.setItem("theme", "dark");

  }
  else{
  localStorage.setItem("theme","light");

  }
}

if (localStorage.getItem("theme") == "light") {
  darkBtn.classList.remove("darkon");
  document.body.classList.remove("dark_theme");
}
else if (localStorage.getItem("theme") == "dark") {
  darkBtn.classList.add("darkon");
  document.body.classList.add("dark_theme");
}
else {
  localStorage.setItem("theme", "light");
}


