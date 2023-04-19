const films = document.querySelectorAll('.movie-list')
const slider = document.querySelectorAll('.arrow')

slider.forEach((arrow, i) => {
    const sliderLength = films[i].querySelectorAll('img').length;
    let counter = 0;
    
    arrow.addEventListener('click', function(){
      const respon = Math.floor(window.innerWidth / 300)
        if(sliderLength - (counter+4) + (4 - respon) >= 0){
        counter++;
        films[i].style.transform = `translateX(${
            films[i].computedStyleMap().get("transform")[0].x.value - 300
          }px)`;
        }
          else{
            counter = 0;
            films[i].style.transform = `translateX(0px)`
          }
    })

});

const toggleBut = document.querySelector('.toggle-ball');
const toggleItems = document.querySelectorAll(".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle");

toggleBut.addEventListener('click', function(){
    for(let i of toggleItems) i.classList.toggle('active');
    toggleBut.classList.toggle('active')
})