document.addEventListener("DOMContentLoaded", () => {
  const hamburgerIcon = document.querySelector(".hamburger-icon");
  const popup = document.getElementById("popup");
  const closeMenu = document.querySelector(".close-menu");

  hamburgerIcon.addEventListener("click", () => {
    popup.classList.add("open");
    popup.classList.remove("close");
  });

  closeMenu.addEventListener("click", () => {
    popup.classList.add("close");
    popup.classList.remove("open");
  });
});

// Begin For Header User Popup

document.addEventListener("DOMContentLoaded", () => {
  const user = document.querySelector(".user");
  const userpopup = document.querySelector(".userpopup");

  user.addEventListener("click", () => {
    userpopup.classList.toggle("open");
  });
});

// End For Header User Popup

// BEGIN SINGLE PRODUCT PAGE

document.addEventListener("DOMContentLoaded", ()=>{

  function changeImage(smallImg) {

    let fullImg = document.querySelector("#imageBox");
    fullImg.src = smallImg.src;
  
  }

  let thumbnails = document.querySelectorAll(".thumbnail");
  thumbnails.forEach(thumbnail => {

    thumbnail.addEventListener("click", function(){

      changeImage(this);
    })
  })

});

// END SINGLE PRODUCT PAGE