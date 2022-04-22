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
  modal2.classList.remove('modal2-show')

});

let countId = 0;
// ?Array of inputs
let array = [
  {
    id: countId,
    userName: userName,
    email: email,
    phoneNumber: phoneNumber,
    select: select,
    permanent: false,
  },
];

// ?Adding New Employees to list
formSubmit.addEventListener("submit", submitFunction);
function submitFunction(e) {
  e.preventDefault();
  array.map((item) => {
    item.id++;
    let successSubmitted = document.querySelector(".succes-fixed");
    tableBody.innerHTML += `
    <tr class'tr-all'>
      <td class='user-td'>${item.userName.value}</td>
      <td class='email-td'>${item.email.value}</td>
      <td class='phone-td'>${item.phoneNumber.value}</td>
      <td class='department-td'>${item.select.value}</td>
      <td class='edit-td'>
      <i class='bx bx-edit-alt edit' id='edit${item.id}' onclick="editList('edit${item.id}')"></i>
      <i class='bx bx-x remove' id='${item.id}'onclick="removeList('${item.id}')"></i></td>
  </tr>
    `;
    item.userName.value = "";
    item.email.value = "";
    item.phoneNumber.value = "";

    successSubmitted.classList.add("succes-fixed-show");
    setTimeout(() => {
      successSubmitted.classList.remove("succes-fixed-show");
    }, 3000);

    modal.classList.remove("modal1-show");
    modalBack.classList.remove("modal1-back-show");
  });
}

// ?Deleting Employees List
function removeList(id) {
  let removeBtn = document.querySelectorAll(".remove");

  removeBtn.forEach((item) => {
    if (id == item.id) {
      item.parentElement.parentElement.style.display = "none";
    }
  });
}


// ?Editing Lists
let modal2 = document.querySelector(".modal2");

function editList(id) {
  let editBtn = document.querySelectorAll(".edit");

  modal2.classList.add('modal2-show')
  modalBack.classList.add("modal1-back-show");

  editBtn.forEach(item => {
    if (id == item.id) {
      
    }
  })
}