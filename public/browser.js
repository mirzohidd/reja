console.log("FronEnd js ishga Tushdi");
function itemTemplate(item) {
  return `<li>
    <span class="task-text">${item.reja}</span>
    <div>
      <button data-id="${item._id}" class="btn edit-btn">Edit</button>
      <button data-id="${item._id}" class="btn delete-btn">Delete</button>
    </div>
  </li>`;
}
let createField = document.getElementById("create-field");
document.getElementById("create-form").addEventListener("submit", function (e) {
  e.preventDefault();

  axios
    .post("/create-item", { reja: createField.value })
    .then((response) => {
      document
        .getElementById("item-list")
        .insertAdjacentHTML("beforeend", itemTemplate(response.data));
      createField.value = "";
      createField.focus();
    })
    .catch((err) => {
      console.log("iltimos qaytdan urinib koring");
    });
});

document.addEventListener("click", function (e) {
  //   e.preventDefault();

  // delete operation
  if (e.target.classList.contains("delete-btn")) {
    e.preventDefault();
    if (confirm("Are you sure delete this goal?")) {
      axios
        .post("delete-item", { id: e.target.getAttribute("data-id") })
        .then((response) => {
          console.log(response.data);
          e.target.parentElement.parentElement.remove();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  // edeit operation

  if (e.target.classList.contains("edit-btn")) {
    e.preventDefault();
    console.log(e.target.parentElement.parentElement.querySelector(".task-text").innerHTML);
    let userInput = prompt("O'zgartirishni kiriting",e.target.parentElement.parentElement.querySelector(".task-text").innerHTML);
    console.log(userInput)
    if (userInput) {
      axios
        .post("/edit-item", {
          id: e.target.getAttribute("data-id"),
          new_input: userInput,
        })
        .then((response) => {
          e.target.parentElement.parentElement.querySelector(
            ".task-text"
          ).innerHTML = userInput;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
});

document.getElementById("delete-all").addEventListener("click", function (e) {

    
  axios
    .post("/delete-all", { delete_all: true })
    .then((response) => {
      alert(response.data.status);
      document.location.reload();
    })
    .catch((err) => {
      console.log(err);
    });
});
