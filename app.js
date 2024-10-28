
document.addEventListener("DOMContentLoaded", () => {
    // Функция обработки видимости
    const handleIntersection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Элемент виден, загрузите его содержимое
                const lazyElement = entry.target;
                lazyElement.classList.add('loaded');

                // Если нужно, отписаться от дальнейших наблюдений
                // observer.unobserve(lazyElement);
            } else {
                // Элемент скрыт, можете скрыть его содержимое
                // const lazyElement = entry.target;
                // lazyElement.classList.remove('loaded');
            }
        });
    };

    // Создание нового IntersectionObserver
    const observer = new IntersectionObserver(handleIntersection, {
        root: null, // наблюдаем по отношению к вьюпорту
        rootMargin: '0px', // маргин (допустимая область вокруг root)
        threshold: 0.1 // процент видимости для срабатывания
    });

    // Найдите все элементы, которые должны загружаться при видимости
    const lazyElements = document.querySelectorAll('.lazy-load');

    // Начните наблюдение за этими элементами
    lazyElements.forEach(element => {
        observer.observe(element);
    });
});






function playVideo() {
    var video = document.getElementById('video');
    var overlay = document.querySelector('.overlay');
    video.play();
    overlay.style.display = 'none';
}

function playVideo1() {
    var video1 = document.getElementById('video1');
    var overlay1 = document.querySelector('.overlay1');
    video1.play();
    overlay1.style.display = 'none';
}

function playVideo3() {
    var video2 = document.getElementById('video2');
    var overlay2 = document.querySelector('.overlay2');
    video2.play();
    overlay2.style.display = 'none';
}


//Слайдер 1

let slideIndex = 0;
const slides = document.querySelector('.slides');
const slideItems = document.querySelectorAll('.slide');
const totalSlides = slideItems.length;

function changeSlide(n) {
    slideIndex += n;
    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    }
    updateSlidePosition();
    updateSlideFade();
}

function updateSlidePosition() {
    const offset = -slideIndex * 100;
    slides.style.transform = `translateX(${offset}%)`;
}

function updateSlideFade() {
    slideItems.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === slideIndex) {
            slide.classList.add('active');
        }
    });
}

// Initialize the slider
updateSlidePosition();
updateSlideFade();

// Optional: Auto-change slides every 3 seconds
setInterval(() => {
    changeSlide(1);
}, 1000000);



let currentIndexTwo = 0;

function moveSlideTwo(step, sliderId) {
    const slider = document.getElementById(sliderId);
    const slides = slider.querySelector('.slides-two');
    const totalSlides = slides.children.length;

    currentIndexTwo = (currentIndexTwo + step + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${currentIndexTwo * 100}%)`;
}




document.querySelectorAll('.dropdownButton').forEach(button => {
    button.addEventListener('click', function () {
        var content = this.nextElementSibling;
        if (content.classList.contains('show')) {
            content.classList.remove('show');
            setTimeout(() => content.style.display = 'none', 300); // Ожидание завершения анимации
        } else {
            content.style.display = 'block';
            setTimeout(() => content.classList.add('show'), 0); // Ожидание следующего тикта времени
        }
    });
});







document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed");

    if (window.innerWidth <= 860) {
        var elements = document.querySelectorAll(".mobile-hide");
        if (elements.length > 0) {
            elements.forEach(function (element) {
                console.log("Removing element:", element);
                element.remove(); // Удаляет элемент из DOM, включая все дочерние элементы
            });
        } else {
            console.log("No elements with class 'mobile-hide' found");
        }
    } else {
        console.log("Window width is greater than 830px");
    }
});


document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed");

    if (window.innerWidth <= 861) {
        var elements = document.querySelectorAll(".desk-hide");
        if (elements.length > 0) {
            elements.forEach(function (element) {
                element.style.display = "block"; // Или другой способ сделать элементы видимыми
                console.log("Showing element:", element);
            });
        } else {
            console.log("No elements with class 'desk-hide' found");
        }
    } else {
        console.log("Window width is greater than 860px");
    }
});








document.addEventListener('DOMContentLoaded', function () {
    var popupTrigger = document.getElementById('popup-trigger');
    var popup = document.getElementById('popup');
    var popupContent = document.querySelector('.popup-content');
    var closeBtn = document.getElementById('close-btn');

    popupTrigger.addEventListener('click', function (event) {
        event.preventDefault();
        popup.style.display = 'flex';
        popup.classList.remove('fade-out');
        popupContent.classList.remove('slide-out');
        popup.style.opacity = '1';
    });

    closeBtn.addEventListener('click', function () {
        popup.classList.add('fade-out');
        popupContent.classList.add('slide-out');
        setTimeout(function () {
            popup.style.display = 'none';
        }, 500); // Длительность анимации должна совпадать с time-out
    });

    window.addEventListener('click', function (event) {
        if (event.target === popup) {
            popup.classList.add('fade-out');
            popupContent.classList.add('slide-out');
            setTimeout(function () {
                popup.style.display = 'none';
            }, 500);
        }
    });
});


document.querySelectorAll('.img').forEach(function (img) {
    img.addEventListener('click', function () {
        this.classList.toggle('rotated');
    });
});




var animation = lottie.loadAnimation({
    container: document.getElementById('lottie-animation'), // контейнер для анимации
    renderer: 'svg', // рендеринг через SVG
    loop: true, // зацикливание анимации
    autoplay: true, // автоматическое воспроизведение
    path: './team/Animation.json' // путь к вашему JSON-файлу
});
animation.setSpeed(0.9);

// Загрузка и настройка второй анимации
var animation2 = lottie.loadAnimation({
    container: document.getElementById('lottie-animation2'), // контейнер для анимации
    renderer: 'svg', // рендеринг через SVG
    loop: true, // зацикливание анимации
    autoplay: true, // автоматическое воспроизведение
    path: './team/Animation2.json' // путь к вашему JSON-файлу
});
animation2.setSpeed(0.9);