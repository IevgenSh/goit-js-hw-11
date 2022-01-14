import './sass/main.scss';
import { getImages } from './js/get-images.js';
import { renderGallery } from './js/render-gallery.js';
import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.search-form'),
  input: document.querySelector('input'),
  srcBtn: document.querySelector('.searchBtn'),
  loadMoreBtn: document.querySelector('.load-more'),
}
let name = '';
let pageNumber = 1;

console.log(refs);

refs.srcBtn.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
}

refs.loadMoreBtn.addEventListener('submit', onloadMoreSubmit);

function onloadMoreSubmit(e) {

}