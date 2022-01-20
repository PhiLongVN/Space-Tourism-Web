/* ============================================ */
/*                    TOGGLE                    */
/* ============================================ */

const icon = document.querySelector(".head-icon");
// console.log("icon", icon);
const menu = document.querySelector(".head-menu");

icon.onclick = () => {
  menu.classList.toggle("active");
  icon.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("active");
};

/* ============================================ */
/*                  TECH                 */
/* ============================================ */
let a = 0;
const containerText = document.querySelector(".tech-info-text");
const containerImg = document.querySelector(".tech-info-img");
const number = document.querySelectorAll(".number");

number.forEach((key) => {
  key.onclick = () => {
    number.forEach((key) => {
      key.classList.remove("active");
    });

    key.classList.add("active");
    a = parseInt(key.dataset.index);

    handleClick(a);
  };
});

handleClick(a);
/* ---------------------------------- update --------------------------------- */
function handleClick(timer) {
  let cardText = {};
  let cardImg = {};

  fetch("./data.json")
    .then((res) => res.json())
    .then((data) => {
      let name = data["technology"][timer]["name"];
      let info = data["technology"][timer]["description"];
      let imgDesktop = data["technology"][timer]["images"]["portrait"];
      let imgMobile = data["technology"][timer]["images"]["landscape"];

      cardText = `
            <h3>the technology</h3>
            <h1>${name} </h1>
            <p>
             ${info}
            </p>
        `;

      cardImg = `
            <img
              class="img-desktop"
              src="${imgDesktop}"
              alt=""
            />

            <img
              class="img-mobile"
              src="${imgMobile}"
              alt=""
            />
         `;
      containerText.innerHTML = cardText;
      containerImg.innerHTML = cardImg;
    });
}

// /* ============================================ */
// /*                  DESTINATION                 */
// /* ============================================ */
let b = 0;

const planets = document.querySelectorAll(".detail-number span");

const TitlePlanet = document.querySelector(".detail-title");
const paraPlanet = document.querySelector(".detail-para");
const timePlanet = document.querySelector(".detail-travel");
const imgPlanet = document.querySelector(".info-img");

planets.forEach((key) => {
  key.onclick = () => {
    planets.forEach((key) => {
      key.classList.remove("active");
    });

    key.classList.add("active");
    b = parseInt(key.dataset.index);

    handleClickPlanet(b);
  };
});

handleClickPlanet(b);
/* ---------------------------------- update --------------------------------- */
function handleClickPlanet(timer) {
  let cardPara = {};
  let cardTitle = {};
  let cardImg = {};
  let cardTravel = {};

  fetch("./data.json")
    .then((res) => res.json())
    .then((data) => {
      let name = data["destinations"][timer]["name"];
      let info = data["destinations"][timer]["description"];
      let img = data["destinations"][timer]["images"]["png"];
      let distance = data["destinations"][timer]["distance"];
      let time = data["destinations"][timer]["travel"];

      cardPara = `          
            <p>
             ${info}
              </p>
        `;

      cardTitle = ` <h1> ${name} </h1>`;

      cardImg = ` 
            <img
            
              src="${img}"
              alt=""
            />       
         `;

      cardTravel = `   <div class="travel-distane">
                <span>avg.distance</span>
                <h4> ${distance} </h4>
              </div>

              <div class="travel-time">
                <span>est.travle time</span>
                <h4> ${time} </h4>`;

      paraPlanet.innerHTML = cardPara;
      TitlePlanet.innerHTML = cardTitle;
      timePlanet.innerHTML = cardTravel;
      imgPlanet.innerHTML = cardImg;
    });
}

// /* ============================================ */
// /*             CREW          */
// /* ============================================ */
let c = 0;

const dots = document.querySelectorAll(".text-dot span");

const infoCrew = document.querySelector(".text-para");
const imgCrew = document.querySelector(".crew-info-img");

dots.forEach((key) => {
  key.onclick = () => {
    dots.forEach((key) => {
      key.classList.remove("active");
    });

    key.classList.add("active");
    c = parseInt(key.dataset.index);

    handleClickCrew(c);
  };
});

handleClickCrew(c);
/* ---------------------------------- update --------------------------------- */
function handleClickCrew(timer) {
  let cardTitle = {};
  let cardImg = {};

  fetch("./data.json")
    .then((res) => res.json())
    .then((data) => {
      let name = data["crew"][timer]["name"];
      let bio = data["crew"][timer]["bio"];
      let img = data["crew"][timer]["images"]["png"];
      let role = data["crew"][timer]["role"];

      cardTitle = `          
            <h3> ${role} </h3>
              <h2> ${name} </h2>
              <p>
              ${bio}
              </p>
        `;

      cardImg = ` 
            <img
             
              src="${img}"
              alt=""
            />       
         `;
      infoCrew.innerHTML = cardTitle;
      imgCrew.innerHTML = cardImg;
    });
}
