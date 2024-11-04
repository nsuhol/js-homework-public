// Task 2

function addStyle() {
  const header = document.querySelector("h2.header");
  header.style.color = "red";
  header.style.textDecoration = "underline";
  const paragraph = document.getElementById("data");
  paragraph.style.color = "brown";
  paragraph.style.fontSize = "18px";
  paragraph.style.fontFamily = "Comic Sans MS";
  header.style.color = "green";
  header.style.fontStyle = "italic";
  const divElement = document.querySelector("section div");
  divElement.style.display = "none";
}
document.getElementById("btn").addEventListener("click", addStyle);
