const btn = document.querySelector(".btn");
const container = document.querySelector(".container");

btn.addEventListener("click", async () => {
  const response = await fetch("https://api.thecatapi.com/v1/images/search");
  const data = await response.json();
  const imgUrl = data[0].url;

  container.innerHTML = `<img src="${imgUrl}" alt="Random Cat" />`;
});
