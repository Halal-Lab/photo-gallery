class PhotoGallery{
  constructor(){
    this.API_KEY = '563492ad6f91700001000001579fe18aa03d4408bb9dd9f1f6eb869a';
    this.galleryDIv = document.querySelector('.gallery');
    this.searchForm = document.querySelector('.header form');
    this.loadMore = document.querySelector('.load-more');
    this.logo = document.querySelector('.logo')
    this.pageIndex = 1;
    this.searchValueGlobal = '';
    this.eventHandle();
  }
  eventHandle(){
    document.addEventListener('DOMContentLoaded',()=>{
      this.getImg(1);
    });
    this.searchForm.addEventListener('submit', (e)=>{
      this.pageIndex = 1;
      this.getSearchedImages(e);
    });
    this.loadMore.addEventListener('click', (e)=>{
      this.loadMoreImages(e);
    })
    this.logo.addEventListener('click',()=>{
      this.pageIndex = 1;
      this.galleryDIv.innerHTML = '';
      this.getImg(this.pageIndex);
    })
  }
async getImg(index){
    this.loadMore.setAttribute('data-img', 'curated');
    const baseURL = `https://api.pexels.com/v1/curated?page=${index}&per_page=12`;
    const data = await this.fetchImages(baseURL);
    this.GenerateHTML(data.photos)
    console.log(data)
  }
  async fetchImages(baseURL){
    const response = await fetch(baseURL, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: this.API_KEY
      }
    });
    const data = await response.json();
    // console.log(data);
    return data;
  }
  GenerateHTML(photos){
    photos.forEach(photo=>{
      const item= document.createElement('div');
      item.classList.add('item');
      item.innerHTML = `
      <a href='${photo.src.original}' target="_blank">
        <img src="${photo.src.medium}">
        <h3>${photo.photographer}</h3>
      </a>
      `;
      this.galleryDIv.appendChild(item)
    })
  }
