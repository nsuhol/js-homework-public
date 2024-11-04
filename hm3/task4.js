const article = document.createElement("article");
article.className = "article postList";
const container = document.createElement("div");
container.id = "container";
for (let i = 1; i <= 3; i++) {
  const paragraph = document.createElement("p");
  paragraph.textContent = `Post ${i}`;
  container.appendChild(paragraph);
}
article.appendChild(container);
document.body.appendChild(article);
