// check if there's local stroge color objectPosition:
let maincolor = localStorage.getItem("color-option");
console.log(maincolor);

if (maincolor !== null) {
  // console.log("local stroge is not empty you can set it on root now");
  // console.log(localStorage.getItem("color-option"));
  document.documentElement.style.setProperty(
    "--main-color",
    localStorage.getItem("color-option")
  );

  //remove active class from all colors list item
  document.querySelectorAll(".color-list li").forEach((element) => {
    element.classList.remove("active");
    // add active class on element with data-color === local storge item
    if (element.dataset.color === maincolor) {
      //add active class
      element.classList.add("active");
    }
  });
  //
}

// random background option
let backgroundOption = true;
// variable to control the interval
let backgroundIntervail;

//check if there's local storage random background item
let backgroundlocalitem = localStorage.getItem("background-option");

//check if random background is not emety
if (backgroundlocalitem !== null) {
  if (backgroundlocalitem === "true") {
    backgroundOption = true;
  } else {
    backgroundOption = false;
  }
  // remove active class from all span
  document.querySelectorAll(".random-backgrounds span").forEach((element) => {
    element.classList.remove("active");
  });
  if (backgroundlocalitem === "true") {
    document.querySelector(".random-backgrounds .yes").classList.add("active");
  } else {
    document.querySelector(".random-backgrounds .no").classList.add("active");
  }
}

// Toggle Spin class on icon
document.querySelector(".toggle-settings .fa-gear").onclick = function () {
  //Toggle class fa-spin for rotation on self
  this.classList.toggle("fa-spin");

  // Toggle class open on main setting box
  document.querySelector(".settings-box").classList.toggle("open");
};
// switch color
const colorsli = document.querySelectorAll(".color-list li");
// loop on list item
colorsli.forEach((li) => {
  //click on list item
  li.addEventListener("click", (e) => {
    // set color in root
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
    //set color on local stroge
    localStorage.setItem("color-option", e.target.dataset.color);

    // //remove active class from all childrens
    // e.target.parentElement.querySelectorAll(".active").forEach((element) => {
    //   element.classList.remove("active");
    // });
    // // add active class on self
    // e.target.classList.add("active");
    //==============>
    handleActive(e);
  });
});
// switch background option
const randomBackEl = document.querySelectorAll(" .random-backgrounds span");
// loop on span
randomBackEl.forEach((span) => {
  //click on list span
  span.addEventListener("click", (e) => {
    // //remove active class from all childrens
    // e.target.parentElement.querySelectorAll(".active").forEach((element) => {
    //   element.classList.remove("active");
    // });
    // // add active class on self
    // e.target.classList.add("active");
    handleActive(e);

    if (e.target.dataset.background === "yes") {
      backgroundOption = true;
      randomizeImgs();
      localStorage.setItem("background-option", true);
    } else {
      backgroundOption = false;
      clearInterval(backgroundIntervail);
      localStorage.setItem("background-option", false);
    }
  });
});

//select landingpage element
let landingpage = document.querySelector(".landing-page");
// get arry of img
let imgsArray = [
  "01.jpeg",
  "02.jpeg",
  "07.jpeg",
  "03.jpeg",
  "04.jpeg",
  "05.jpeg",
  "06.jpeg",
];

// function  to randomize imgs
function randomizeImgs() {
  if (backgroundOption === true) {
    backgroundIntervail = setInterval(() => {
      //get random number
      let randomNumber = Math.floor(Math.random() * imgsArray.length);
      //chang background img url
      landingpage.style.backgroundImage =
        'url("imgs/' + imgsArray[randomNumber] + '")';
      // console.log(randomNumber);
    }, 10000);
  }
}
randomizeImgs();

//select skills selector
let ourSkills = document.querySelector(".skills");

window.onscroll = function () {
  //skills offset top
  let skillsOffsetTop = ourSkills.offsetTop;

  // skills outer height
  let skillsOuterHeight = ourSkills.offsetHeight;

  // window height
  let windowHeight = this.innerHeight;

  //window scrolltop
  let windowScrollTop = this.pageYOffset;
  //this === ourskills

  // this.console.log(skillsOffsetTop);
  // this.console.log(skillsOuterHeight);
  // this.console.log(windowHeight);

  let allskils = skillsOffsetTop + skillsOuterHeight - windowHeight;

  if (windowScrollTop > allskils) {
    this.console.log("skills reached");
    let allskills = document.querySelectorAll(
      ".skill-box .skill-progress span"
    );

    allskills.forEach((skill) => {
      skill.style.width = skill.dataset.progress;
    });
  }
};

//create popup with the image
let ourGallery = document.querySelectorAll(".gallery img");
ourGallery.forEach((img) => {
  img.addEventListener("click", (e) => {
    //creat overlay element
    let overlay = document.createElement("div");

    //add class to overlay
    overlay.className = "popup-overlay";

    //append overlay to the body
    document.body.appendChild(overlay);

    // creat popup
    let popupBox = document.createElement("div");

    // add class to popup box
    popupBox.className = "popup-box";

    if (img.alt !== null) {
      //creat heading
      let imgHeading = document.createElement("h3");

      //creat text for heading
      let imgText = document.createTextNode(img.alt);

      //append the text to the heading
      imgHeading.appendChild(imgText);

      //append the heading to popup box
      popupBox.appendChild(imgHeading);
    }

    //create the image
    let popupImage = document.createElement("img");

    //set image source
    popupImage.src = img.src;

    //add imge to popup box
    popupBox.appendChild(popupImage);

    //append the popup box to bady
    document.body.appendChild(popupBox);

    //creat the close span
    let closeButton = document.createElement("span");
    // creat the close button text
    let closeButtonText = document.createTextNode("X");
    //creat text to close button
    closeButton.appendChild(closeButtonText);
    // add class to close button
    closeButton.className = "close-button";
    //add close button to popupbox
    popupBox.appendChild(closeButton);
  });
});

//close popup
document.addEventListener("click", function (e) {
  if (e.target.classList == "close-button") {
    //remove the current popup
    e.target.parentNode.remove();
    //remove overlay
    document.querySelector(".popup-overlay").remove();
  }
});
//select all bullet
const allBullets = document.querySelectorAll(".nav-bullets .bullet");

//select all links
const allLinks = document.querySelectorAll(".links a");

function scrollToSomeWhere(element) {
  element.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}
scrollToSomeWhere(allBullets);
scrollToSomeWhere(allLinks);

//handlen active state
function handleActive(ev) {
  //remove active class from all childrens
  ev.target.parentElement.querySelectorAll(".active").forEach((element) => {
    element.classList.remove("active");
  });
  // add active class on self
  ev.target.classList.add("active");
}
let bulletsSpan = document.querySelectorAll(".bullets-option span");
let bulletsContainer = document.querySelector(".nav-bullets");
let bulletLocalItem = localStorage.getItem("bullet-option");

if (bulletLocalItem !== null) {
  bulletsSpan.forEach((span) => {
    span.classList.remove("active");
  });
  bulletsContainer.style.display = "block";
  if (bulletLocalItem === "block") {
    bulletsContainer.style.display = "block";
    document.querySelector(".bullets-option .yes").classList.add("active");
  } else {
    bulletsContainer.style.display = "none";
    document.querySelector(".bullets-option .no").classList.add("active");
  }
}

bulletsSpan.forEach((span) => {
  span.addEventListener("click", (e) => {
    if (span.dataset.display === "show") {
      bulletsContainer.style.display = "block";
      localStorage.setItem("bullet-option", "block");
    } else {
      bulletsContainer.style.display = "none";
      localStorage.setItem("bullet-option", "none");
    }
    handleActive(e);
  });
});
//reset button
document.querySelector(".reset-options").onclick = function () {
  // localStorage.clear();
  localStorage.removeItem("bullet-option");
  localStorage.removeItem("color-option");
  localStorage.removeItem("background-option");
  //reload window
  window.location.reload();
};
//toggle menu
let toggleBtn = document.querySelector(".toggle-menu");

let tlinks = document.querySelector(".links");

toggleBtn.onclick = function (e) {
  //set propagation
  e.stopPropagation();
  //toggel class menu active on button
  this.classList.toggle("menu-active");
  //toggel class open on links
  tlinks.classList.toggle("open");
};
// click anywhere outside menue and toggle button
document.addEventListener("click", (e) => {
  // console.log(e.target);
  if (e.target !== toggleBtn && e.target !== tlinks) {
    // console.log("this is not the button");
    //check if menu is open
    if (tlinks.classList.contains("open")) {
      // console.log("menu is open");
      //toggel class menu active on button
      toggleBtn.classList.toggle("menu-active");
      //toggel class open on links
      tlinks.classList.toggle("open");
    }
  }
});
//stop propagation on menu
tlinks.onclick = function (e) {
  e.stopPropagation();
};
