

const slider = (windowSlider, listSlider, prev, next) => {
    document.querySelector(next).addEventListener('click', front);
    document.querySelector(prev).addEventListener('click', back);
    const window = document.querySelector(windowSlider);
    const widthWindow = +getComputedStyle(window).width.match(/\d/g).join('');
    const t = 300;

    function front() {
        const list = document.querySelector(listSlider);
        const start = list.firstElementChild;
        const newStart = start.cloneNode(true);
        list.style.transition = `${t}ms All`;
        list.style.transform = `translateX(-${widthWindow}px)`;
        setTimeout(() => {
            list.append(newStart);
            start.remove();
            list.style.transform = 'translateX(0px)';
            list.style.transition = 'none'
        }, t); 
    }

    function back() {
        const list = document.querySelector(listSlider);
        const end = list.lastElementChild;
        const newEnd = end.cloneNode(true);
        list.prepend(newEnd);
        end.remove();
        list.style.transform = `translateX(-${widthWindow}px)`;
        getComputedStyle(list).transform;
        list.style.transition = `${t}ms All`;
        list.style.transform = 'translateX(0px)';
        setTimeout(() => { list.style.transition = 'none' }, t); 
    }
}

const loading = () => {
    const downloader = document.querySelector('.download');
    const prom = document.querySelector('.prom');
    const container = document.querySelector('.container');
    const button = document.querySelector('.button');
    button.addEventListener('click', () => {
        prom.classList.add('hidden');
        downloader.classList.add('visible');
        setTimeout(() => {
            downloader.classList.remove('visible');
            container.classList.add('visible');
        }, 3000)
    })
}


loading();
slider(".slider__window", ".slider__list", ".slider__arow_left", ".slider__arow");