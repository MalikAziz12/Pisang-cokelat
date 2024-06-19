// toogle class actie
const navbarNav = document.querySelector(".navbar-nav");
// ketika humberger menu diklik
document.querySelector("#humberger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik dimanapun untuk hilangkan nav

const humberger = document.querySelector("#humberger-menu");

document.addEventListener("click", function (e) {
  if (!humberger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// direct message

// $("#submit").click(function () {
//   var nama = document.getElementById("nama").value;
//   var pesan = document.getElementById("pesan").value;
//   var alamat = document.getElementById("alamat").value;
//   var win = window.open(
//     "https://api.whatsapp.com/send?phone=085960505202&text=" + pesan
//   );
//   if (win) {
//     //Browser has allowed it to be opened
//     win.focus();
//   } else {
//     //Browser has blocked it
//     alert("Please allow popups for this website");
//   }
//   return false;
// });
