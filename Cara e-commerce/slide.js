//access html elements
const carouselRow=document.querySelector('.slides_row');
const carouselSlides=document.getElementsByClassName('slide');
const dot=document.getElementsByClassName('dot');
const nextBtn=document.querySelector('.next');
const prevBtn=document.querySelector('.prev');
//declare variable
let index=1;
width=carouselSlides[0].clientWidth;
carouselRow.style.transform='translateX('+ (-width * index) + 'px)';
//go to next slide
nextBtn.addEventListener('click',nextSlide);
function nextSlide(){
  if(index>=carouselSlides.length -1){return};
  carouselRow.style.transition='transform 0.4s ease-out';
  index++;
  carouselRow.style.transform='translateX('+ (-width * index) + 'px)';
  dotsLabel();
}
// go to previous slide
prevBtn.addEventListener('click',prevSlide);
function prevSlide(){
  if(index<=0){return};
  carouselRow.style.transition='transform 0.4s ease-out';
  index--;
  carouselRow.style.transform='translateX('+ (-width * index) + 'px)';
  dotsLabel();
}
// return to the first slide when reaches last slide
carouselRow.addEventListener('transitionend', function(){
if(carouselSlides[index].id==='firstImageDuolicate'){
  carouselRow.style.transition='none';
  index=carouselSlides.length - index;
  carouselRow.style.transform='translateX('+ (-width * index) + 'px)';
  dotsLabel();

}
if(carouselSlides[index].id==='lastImageDuplicat'){
  carouselRow.style.transition='none';
  index=carouselSlides.length - 2;
  carouselRow.style.transform='translateX('+ (-width * index) + 'px)';
  dotsLabel();
}
});
//auto sliding
function autoSlide(){
deleteInterval=setInterval(timer,1000);
function timer(){
  nextSlide();
}
}
autoSlide();
//stopauto sliding when mouse is over
const maincontainer=document.querySelector('.conatainer');
maincontainer.addEventListener('mouseover', function(){
clearInterval( deleteInterval);
});
//resume sliding when mouse is out
maincontainer.addEventListener('mouseout',autoSlide);
