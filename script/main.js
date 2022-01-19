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
// let b = 0;
// const containerText = document.querySelector(".tech-info-text");
// const containerImg = document.querySelector(".tech-info-img");
// const number = document.querySelectorAll(".number");

// number.forEach((key) => {
//   key.onclick = () => {
//     number.forEach((key) => {
//       key.classList.remove("active");
//     });

//     key.classList.add("active");
//     a = parseInt(key.dataset.index);

//     handleClick(a);
//   };
// });

// handleClick(a);
// /* ---------------------------------- update --------------------------------- */
// function handleClick(timer) {
//   let cardText = {};
//   let cardImg = {};

//   fetch("./data.json")
//     .then((res) => res.json())
//     .then((data) => {
//       let name = data["destinations"][timer]["name"];
//       let info = data["destinations"][timer]["description"];
//       let imgDesktop = data["destinations"][timer]["images"]["png"];
//       let distance = data["destinations"][timer]["distance"]
//       let travle = data["destinations"][timer]["travel"];

//       cardText = `          
//             <h3>the technology</h3>
//             <h1>${name} </h1>
//             <p>
//              ${info}
//             </p>
//         `;

//       cardImg = ` 
//             <img
//               class="img-desktop"
//               src="${imgDesktop}"
//               alt=""
//             />

//             <img
//               class="img-mobile"
//               src="${imgMobile}"
//               alt=""
//             />
//          `;
//       containerText.innerHTML = cardText;
//       containerImg.innerHTML = cardImg;
//     });
// }





/* -------------------------------- check ------------------------------- */
//HÀM NÀY ĐỂ CHECK INPUT VÀO LÀ GÌ
function checkTime() {
  if (daily.checked) {
    const day = dailytext.innerText.toLowerCase();
    handleClick(day);
  }
  if (weekly.checked) {
    const week = weeklytext.innerText.toLowerCase();
    handleClick(week);
  }
  if (monthly.checked) {
    const month = monthlytext.innerText.toLowerCase();
    handleClick(month);
  }
}