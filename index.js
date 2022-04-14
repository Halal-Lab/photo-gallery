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
