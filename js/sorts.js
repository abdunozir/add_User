function asName(n) {
  obj = obj.sort(hofCompare("userName"));
  console.log(obj);
  showCards();
}

function asEmail() {
  obj = obj.sort(hofCompare("userEmail"));
  showCards();
}

let numS = false;
function numSort() {
  obj = obj.sort((a, b) => {
    if (!numS) {
      numS = true;
      return b.userMobile - a.userMobile;
    } else {
      numS = false;
      return a.userMobile - b.userMobile;
    }
  });

  showCards();
  console.log(numS);
}

let namS = false;
function hofCompare(field) {
  return function (a, b) {
    if (!namS) {
      namS = true;
      return a[field].localeCompare(b[field]);
    } else {
      namS = false;
      return b[field].localeCompare(a[field]);
    }
  };
}

// search

let search_input = document.querySelector(".search-input");

function searched(e) {
  let cards = "";
  table_body.innerHTML = "";
  obj.forEach((item) => {
    if (item.userName.toLowerCase().includes(e.target.value.toLowerCase())) {
      cards += `
      <tr>
          <th scope="row">${item.userName}</th>
          <td>${item.userEmail}</td>
          <td>${item.userMobile}</td>
          <td>${item.department}</td>
          <td>
          <button class="${item.id} btn btn-primary" onclick="del(event)">
             <i class="bi bi-pencil"></i>
          </button>
          <button class="${item.id} dlt_btn btn btn-danger" onclick="deleteEl(event)">
              <i class="bi bi-x"></i>
          </button>
          </td>
      </tr>`;
    }
  });
  table_body.innerHTML = cards;
  if (e.target.value == "") {
    showCards();
  }
}
