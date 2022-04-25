let flexRadioDefault = document.querySelector("#flexRadioDefault");
let flexRadioDefault1 = document.querySelector("#flexRadioDefault1");
let flexRadioDefault2 = document.querySelector("#flexRadioDefault2");
let userName = document.querySelector(".userName");
let userEmail = document.querySelector(".userEmail");
let userNumber = document.querySelector(".userNumber");
let userCity = document.querySelector(".userCity");
let add_obj = document.querySelector(".add_obj");
let form_select1 = document.querySelector(".form-select1");
let date_el1 = document.querySelector(".date_el1");
let el1_checkbox = document.querySelector(".el1_checkbox");

add_obj.addEventListener("click", (e) => {
  e.preventDefault();
  modal_container.classList.add("modal-close-anim");

  if (e.currentTarget.classList.length == 4) {
    editted(e);
  } else {
    if (
      userCity.value == "" ||
      userNumber.value == "" ||
      userEmail.value == "" ||
      userName.value == "" ||
      form_select1.value == "none" ||
      date_el1.value == ""
    ) {
    } else {
      addNew();
    }
  }

  inputsDefault();
  showCards();
});

// reset all form inputs
function inputsDefault() {
  flexRadioDefault.checked = false;
  flexRadioDefault1.checked = false;
  flexRadioDefault2.checked = false;

  userCity.value = "";
  userNumber.value = "";
  userEmail.value = "";
  userName.value = "";

  form_select1.value = "none";
  date_el1.value = "";
  el1_checkbox.checked = false;
}

// add new card obj
function addNew() {
  let i = [];
  obj.forEach((el) => {
    i.push(el.id);
  });

  let el1 = {
    id: Math.max(...i) + 1,
    userName: "",
    userEmail: "",
    userMobile: "",
    userCity: "",
    gender: {
      male: false,
      female: false,
      other: false,
    },
    department: "",
    date: "",
    permanentEmployee: false,
  };

  //   name, number, email, city form
  el1.userName = userName.value;
  el1.userEmail = userEmail.value;
  el1.userMobile = userNumber.value;
  el1.userCity = userCity.value;

  //   gender form
  el1.gender.female = false;
  el1.gender.other = false;
  el1.gender.male = false;
  if (flexRadioDefault2.checked) {
    el1.gender.other = true;
  } else if (flexRadioDefault1.checked) {
    el1.gender.female = true;
  } else {
    el1.gender.male = true;
  }

  //   department form
  el1.department = form_select1.value;

  //   date form
  el1.date = date_el1.value;

  // check box last
  if (el1_checkbox.checked == true) {
    el1.permanentEmployee = el1_checkbox.checked;
  } else {
    el1.permanentEmployee = false;
  }

  // pushing data
  obj.push(el1);
  showCards();
  inputsDefault();
}
