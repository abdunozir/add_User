let userName = document.querySelector(".username");
let email = document.querySelector(".email");
let phoneNumber = document.querySelector(".number");
let select = document.querySelector(".select");

let tableBody = document.querySelector(".table-body");
let submitBtn = document.querySelector(".submit-btn");
let formSubmit = document.querySelector(".form-submit");
let modal = document.querySelector(".modal1");
let modalBack = document.querySelector(".modal-back");

let addUser = document.querySelector(".add-use");

//? Modal Show
addUser.addEventListener("click", () => {
  modal.classList.add("modal1-show");
  modalBack.classList.add("modal1-back-show");
});

// ?Modal Hide
modalBack.addEventListener("click", () => {
  modal.classList.remove("modal1-show");
  modalBack.classList.remove("modal1-back-show");
  modal2.classList.remove("modal2-show");
});
let count = 1;
// ?Array of inputs
let array = [
  {
    id: count,
    userName: "Shaxzod",
    email: "shaxzod@gmail.com",
    phoneNumber: +990901020440,
    select: "HR",
    permanent: false,
  },
];

let newArr = [];
function showCard(array) {
  newArr = [];
  array.map((item) => {
    let div = `
    <tr class='tr-all' id='${item.id}'>
      <td class='user-td'>${item.userName}</td>
      <td class='email-td'>${item.email}</td>
      <td class='phone-td'>${item.phoneNumber}</td>
      <td class='department-td'>${item.select}</td>
      <td class='edit-td'>
      <i class='bx bx-edit-alt edit' onclick="editList('${item.id}')"></i>
      <i class='bx bx-x remove' id='${item.id}'onclick="removeList('${item.id}')"></i></td>
  </tr>
    `;

    newArr.push(div);
  });
  tableBody.innerHTML = newArr.join("");
}
showCard(array);

// ?Adding New Employees to list
formSubmit.addEventListener("submit", submitFunction);

function submitFunction(e) {
  e.preventDefault();
  count++;
  let userError = document.querySelector(".user-error");
  if (phoneNumber.value == "" && phoneNumber.value.length < 9) {
    phoneNumber.style.border = "1px solid red";
  } else {
    let successSubmitted = document.querySelector(".succes-fixed");
    successSubmitted.classList.add("succes-fixed-show");
    setTimeout(() => {
      successSubmitted.classList.remove("succes-fixed-show");
    }, 3000);

    modal.classList.remove("modal1-show");
    modalBack.classList.remove("modal1-back-show");

    array.push({
      id: count,
      userName: userName.value,
      email: email.value,
      phoneNumber: phoneNumber.value,
      select: select.value,
    });
    showCard(array);

    userName.value = "";
    email.value = "";
    phoneNumber.value = "";
  }
}

// ?Editing Lists
let modal2 = document.querySelector(".modal2");
function editList(id) {
  let editName = document.querySelector(".edit-name");
  let editEmail = document.querySelector(".edit-email");
  let editNumber = document.querySelector(".edit-number");
  let editSelect = document.querySelector(".edit-select2");
  let saveAdit = document.querySelector(".save");

  modal2.classList.add("modal2-show");
  modalBack.classList.add("modal1-back-show");
  array.forEach((item, index) => {
    if (id == item.id) {
      editName.value = item.userName;
      editEmail.value = item.email;
      editNumber.value = item.phoneNumber;
      editSelect.value = item.select;
      editItem(id, editName, editEmail, editNumber, editSelect);
    }
  });
}

let formSubmit1 = document.querySelector(".form-submit2");
function editItem(id, editName, editEmail, editNumber, editSelect) {
  let count2 = 1;
  formSubmit1.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log((array[id - 1].userName = editName.value));
    if (count2 === 1) {
      array[id - 1].userName = editName.value;
      array[id - 1].email = editEmail.value;
      array[id - 1].phoneNumber = editNumber.value;
      array[id - 1].select = editSelect.value;
      showCard(array);
      count2++;
    }
    modalBack.classList.remove("modal1-back-show");
    modal2.classList.remove("modal2-show");
  });
}

function removeList(id) {
  array.forEach((item) => {
    if (id !== item.id) {
      // ! Shu joyi
    }
  });
}


// ?Search filter

let searchMain = document.querySelector('.search-main')
searchMain.addEventListener("keyup", (e) => {
  e.preventDefault();
  let searchReady = e.target.value.toLowerCase();
  let liAr = document.querySelectorAll('.user-td')
  let editTd = document.querySelectorAll('.edit-td')
  console.log(liAr);
  liAr.forEach((li) => {
    let liText = li.textContent;

    if (liText.toLowerCase().indexOf(searchReady) != -1) {
      li.parentElement.classList.add('show')
    } else {
      li.parentElement.classList.add('hide')
    }
  });
});
