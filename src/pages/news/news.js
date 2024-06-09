import "../../utils/add_header.js";
import "../../style/css/main.css";
import { api_options } from "../../utils/constants.js";
import newsTPL from "../../templates/news_card.hbs";

const { url, key } = api_options.news;
const newsContainer = document.querySelector(".news-container");
const search = document.querySelector(".input-js");

search.addEventListener("change", (e) => {
  e.preventDefault();
  getData(e.target.value);
});

async function getData(query) {
  try {
    fetch(`${url}q=${query}&from=2024-05-09&sortBy=publishedAt&apiKey=${key}`)
      // fetch(`https://newsapi.org/v2/everything?q=tesla&from=2024-05-05&sortBy=publishedAt&apiKey=5be321389e7c4927b70d1bd9b2ccc972`)
      .then((response) => response.json())
      .then((news) => {
        const new_tpl = newsTPL(news.articles);
        newsContainer.innerHTML = new_tpl;
      });
  } catch (error) {
    console.log(error);
  }
}
getData("Ukraine");
