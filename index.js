//Step 1. Defining Variables
let data = "raktim";
const number = 123;
data = "kshitiz";
//Fooling around
document.addEventListener("click", (e) => {
  if (e.target.className === "mb1") {
    alert("raktim");
  } else if (e.target.className === "mb2") {
    alert("kshitiz");
  } else {
    alert("pravat");
  }
});
