const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".cookie-btn");

const cookieName="isCookies";

cookieButton.addEventListener("click", () => {
  cookieContainer.classList.remove("active");
  localStorage.setItem(cookieName, "true");
});

setTimeout(() => {
  if (!localStorage.getItem(cookieName)) {
    cookieContainer.classList.add("active");
  }
}, 2000);