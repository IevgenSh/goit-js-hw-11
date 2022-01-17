import './sass/main.scss';
import { getImages } from './js/get-images.js';
import { renderGallery } from './js/render-gallery.js';
import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.search-form'),
  input: document.querySelector('.input'),
  srcBtn: document.querySelector('.searchBtn'),
  loadMoreBtn: document.querySelector('.load-more'),
  gallery: document.querySelector('.gallery'),
}

let name = '';
let pageNumber = 1;

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  pageNumber = 1;
  refs.loadMoreBtn.classList.add('is-hidden')
  e.preventDefault()
  name = refs.input.value.trim()
  refs.gallery.innerHTML = ''

  getImages(name, pageNumber).then((data) => {
    // console.log(data)
    if (!name) {
      Notiflix.Notify.failure('Oops! Write something!');
    }
    else if (data.hits.length === 0) {
      errorFunction()
    }
    else {
      renderGallery(data.hits)
      countFounding(data.totalHits)
      if (data.hits.length >= 40) { refs.loadMoreBtn.classList.remove('is-hidden') };
    }
  })
    .catch(error => console.log(error))
}

refs.loadMoreBtn.addEventListener('click', onloadMoreClick);

function onloadMoreClick() {
  pageNumber += 1;
  getImages(name, pageNumber).then((data) => {
    // console.log(data)
    if ((data.totalHits / pageNumber) < 40) {
      endOfSearch()
    }
    else {
      renderGallery(data.hits)
      countFounding(data.totalHits)
    }

    // console.log(data.totalHits / pageNumber)

  }).catch(error => console.log(error))
}
function errorFunction() { Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.') }

function countFounding(pages) { Notiflix.Notify.success(`Hooray! We found ${pages} images.`) }

function endOfSearch() {
  refs.loadMoreBtn.classList.add('is-hidden');
  Notiflix.Notify.warning("We're sorry, but you've reached the end of search results.")
}
