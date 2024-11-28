console.log("FronEnd js ishga Tushdi");
function itemTemplate(item) {
  return `<li>
					<span class="task-text"> ${item.reja}</span>
					<div>
					  
					  <button data-id=" ${item._id}" class="btn edit-btn">Edit</button>
					  <button data-id=" ${item._id} " class="btn delete-btn">
						Delete
					  </button>
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
        createField.value ="";
        createField.focus();
    })
    .catch((err) => {
        console.log("iltimos qaytdan urinib koring")
    });
});
