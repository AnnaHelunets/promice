import "../../utils/add_header.js";
import "../../style/css/main.css";
import "../../style/css/common.css";


import articlesTpl from "../../templates/news_card.hbs";
import LoadMoreBtn from "../../utils/load_more_btn.js";
import NewsApiService from "../../utils/news-service.js";

const refs = {
    searchForm: document.querySelector(".js-search-form"),
    articlesContainer: document.querySelector(".js-articles-container")
}

const loadMoreBtn = new LoadMoreBtn({
    selector: '[data-action="load-more"]', 
    hidden: true
})

// створюємо екземпляр класу для взаємодії з NEWS API
const newsApiService = new NewsApiService()

//подія для пошуку
refs.searchForm.addEventListener('submit', onSearch)

//колбек для пошуку
function onSearch (e) {
    e.preventDefault()
    console.dir(e)
    newsApiService.query = e.target.elements.query.value
    console.log(newsApiService.searchQuery);
    if (newsApiService.query === "") {
        return alert ("Введіть свій запит!")
    }

//показати кнопку "завантажити ще"
loadMoreBtn.show()
newsApiService.resetPage()
clearArticlesContainer()
fetchArticles()

}


//достаємо статті
function fetchArticles () {
    loadMoreBtn.disable()
    newsApiService.fetchArticles().then(articles => {
    refs.articlesContainer.insertAdjacentHTML('beforeend', articlesTpl(articles))
    })
    loadMoreBtn.enable()
}

function clearArticlesContainer () {
    refs.articlesContainer.innerHTML = ""
}

loadMoreBtn.refs.button.addEventListener('click', (e) => {
    // loadMoreBtn.disable()
    fetchArticles()
})

//обробник події скролу
window.addEventListener('scroll', scrollHandler)
function scrollHandler (e) {
    const {clientHeight, scrollHeight, scrollTop} = document.documentElement
    
    //перевірка чи дійшов користувач до краю сторінки 100px донизу
    if (scrollHeight - scrollTop - clientHeight < 100) {
        newsApiService.incrementPade()
        fetchArticles()
    }

}