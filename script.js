const captchaTextBox = document.querySelector(".captcha_box input");
const refreshButtton = document.querySelector(".refresh_button");
const captchaInputBox = document.querySelector(".captcha_input input");
const message = document.querySelector(".message");
const submitButton = document.querySelector(".button");

let captchaText = null;

const generateCaptcha = () => {
  const randomString = Math.random().toString(36).substring(2, 7);
  const randomStringArray = randomString.split("");
  console.log(randomString);
  const changeString = randomStringArray.map((char) =>
    Math.random() > 0.5 ? char.toUpperCase() : char
  );
  captchaText = changeString.join(" ");
  captchaTextBox.value = captchaText;
};

const refreshBtnClick = () => {
  generateCaptcha();
  
  captchaInputBox.value = "";
  captchaKeyUpValidate();
};


const captchaKeyUpValidate = () => {
    submitButton.classList.toggle("disabled", !captchaInputBox.value);
    if (captchaInputBox.value === "") message.classList.remove("active");
  };

const submitBtnClick = () => {
  captchaText = captchaText
    .split("")
    .filter((char) => char !== " ")
    .join("");
  console.log(captchaText);
  message.classList.add("active");
  if (captchaInputBox.value === captchaText) {
    console.log(captchaInputBox.value, captchaText);
    message.innerText = "Entered captcha is correct";
    message.style.color = "#826afb";
  } else {
    message.innerText = "Entered captcha is incorrect";
    message.style.color = "#FF2525";
  }
};

refreshButtton.addEventListener("click", refreshBtnClick);
captchaInputBox.addEventListener("keyup", captchaKeyUpValidate);
submitButton.addEventListener("click", submitBtnClick);

// Generate captch when the page loads
generateCaptcha();
