document.addEventListener('DOMContentLoaded', ()=>{

    //Плавное появление меню
    document.addEventListener('scroll', (e)=>{
        if(document.documentElement.scrollTop > 200){
            document.querySelector('.nav').classList.add('nav--fixed');
            document.querySelector('.nav-bg').classList.add('nav-bg--active');
            document.querySelector('.nav--copy').classList.add('nav--copy-visible');
        }else{
            document.querySelector('.nav').classList.remove('nav--fixed');
            document.querySelector('.nav-bg').classList.remove('nav-bg--active');
            document.querySelector('.nav--copy').classList.remove('nav--copy-visible');
        }
    });

    //Добавление товара в корзину
    document.querySelectorAll('.plus').forEach(el => {
        el.addEventListener('click', e => {
            const count = e.target.parentNode.querySelector('span');

            count.innerHTML = +count.innerHTML + 1;
        });
    });

    document.querySelectorAll('.minus').forEach(el => {
        el.addEventListener('click', e => {
            const count = e.target.parentNode.querySelector('span');

            if(+count.innerHTML > 1){
                count.innerHTML = +count.innerHTML - 1; 
            }else{
                count.innerHTML = 1;
            }
        });
    });

    document.querySelectorAll('.market__item-btn').forEach(el => {
        el.addEventListener('click', e => {
            e.stopPropagation();
            const count = +e.target.closest('.market__item').querySelector('.market__item-count span').innerHTML;
            const cartCount = document.querySelector('.nav__cart-count');
            const success = document.createElement('div');
            success.classList.add('market__item-success');
            success.innerHTML = "Товар добавлен в корзину!";
            cartCount.innerHTML = +cartCount.innerHTML + count;

            if(!e.target.closest('.market__item').querySelector('.market__item-success')){
                e.target.closest('.market__item').append(success);
                setTimeout(() => {
                    success.remove();
                }, 3000);
            }
            
        });
    });

    //выпадающее меню
    document.querySelector('.mini').addEventListener('mouseover', e => {
        document.querySelector('.nav__main-item-mini').classList.add('nav__main-item-mini--active');
    });

    document.querySelector('.mini').addEventListener('mouseout', e => {
        document.querySelector('.nav__main-item-mini').classList.remove('nav__main-item-mini--active');
    });

    //CAROUSEL
    const btnNext = document.querySelector('.carousel__arrow-right'),
          btnPrev = document.querySelector('.carousel__arrow-left'),
          slides = document.querySelectorAll('.carousel__slide');
        
    let count = 0;

    function removeDottes(){
        document.querySelectorAll('.carousel__dots span').forEach(el => {
            el.classList.remove('active');
        });
    }

    function showDot(n){
        document.querySelectorAll('.carousel__dots span')[n].classList.add('active');
    }

    function removeSlides(){
        slides.forEach(el => {
            el.classList.remove('carousel__slide--active');
        })
        removeDottes();
    }

    function showSlide(n){
        slides[n].classList.add('carousel__slide--active');
        showDot(n);
    }

    btnNext.addEventListener('click', e => {
        removeSlides();
        if(count < slides.length-1){
            count++;
        }else{
            count = 0;
        }

        showSlide(count);
    });

    btnPrev.addEventListener('click', e => {
        removeSlides();
        if(count > 0){
            count--;
        }else{
            count = slides.length-1;
        }

        showSlide(count);
    });

    removeSlides();
    showSlide(0);

    //CAROUSEL FOR MARKET

    const marketContainer = document.querySelectorAll('.market__container');

    marketContainer.forEach(cont => {
        const btns = cont.querySelectorAll('.market__bullets-arrow'),
              widthItem = cont.querySelector('.market__grid').clientWidth,
              wrap = cont.querySelector('.market__translate'),
              countItem = cont.querySelectorAll('.market__grid').length;
        
        let count = 0;

        function dotShows(n){
            cont.querySelectorAll('.market__bullets span').forEach(el => {
                el.classList.remove('active');
            });

            cont.querySelectorAll('.market__bullets span')[n].classList.add('active');
        }
            
        btns[1].addEventListener('click', e => {
            if(count != countItem-1){
                count++;
            }else{
                count = 0;
            }
            wrap.style.transform = `translateX(-${count * widthItem}px)`;
            dotShows(count);
        });

        btns[0].addEventListener('click', e => {
            if(count != 0){
                count--;
            }else{
                count = countItem - 1;
            }
            wrap.style.transform = `translateX(-${count * widthItem}px)`;
            dotShows(count);
        })
    });

    //console.log

    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', (e)=>{
            e.preventDefault();
            console.log(1);
        });
    });
});