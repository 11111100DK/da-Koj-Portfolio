window.onscroll = function() {scrollFunction()};

var aboutReached = false; // Biến để kiểm tra xem đã đạt được phần "About" hay chưa

function scrollFunction() {
    var header = document.querySelector('header');
    var aboutSection = document.getElementById('about');
    var up = document.querySelector('.ti-arrow-up');
    var scrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
    var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;


    // Kiểm tra xem phần "About" có nằm trong tầm nhìn không
    if (aboutSection.getBoundingClientRect().top <= 0) {
        if (!aboutReached) {
            header.classList.add('hidden');
            header.style.display = 'none';
            up.style.display = 'block';

            menuVisible = false;

            aboutReached = true; // Đặt biến aboutReached thành true khi đã đạt được phần "About"
        }
    } else {
        header.classList.remove('hidden');
        up.style.display = 'none';

        menuVisible = true;

        // Đặt biến aboutReached thành false khi chưa đạt được phần "About"
        aboutReached = false;
    }

    if (scrollTop === 0 && windowWidth > 740) {
        header.style.display = 'block';

    }

}


// Biến để lưu trữ trạng thái hiện tại của menu
var menuVisible = false;

function toggleMenu() {
    var header = document.querySelector('header');

    // Nếu menu hiện đang ẩn, hiển thị nó, ngược lại ẩn nó
    if (!menuVisible) {
        header.style.display = 'block';
        menuVisible = true;
    } else {
        header.style.display = 'none';
        menuVisible = false;
    }
}


let items = document.querySelectorAll('.slider .item');
let active = 0;

function loadShow() {
    items[active].style.transform = `none`;
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;

    let stt = 0;
    for (let i = active + 1; i < items.length; i++) {
        stt++;
        items[i].style.transform = `translateX(${80}%) scale(${1 - 0.2 * stt}) perspective(16px) `;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(1px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
    
    stt = 0;
    for (let i = active - 1; i >= 0; i--) {
        stt++;
        items[i].style.transform = `translateX(${-80}%) scale(${1 - 0.2 * stt}) perspective(16px) `;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(0.1px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
}

loadShow()

function nextSlide() {
    active = active + 1 < items.length ? active + 1 : 0; // Nếu active + 1 vượt qua số lượng items, gán active bằng 0
    loadShow();
}

function prevSlide() {
    active = active - 1 >= 0 ? active - 1 : items.length - 1; // Nếu active - 1 nhỏ hơn 0, gán active bằng items.length - 1
    loadShow();
}




let next = document.getElementById('next');
let prev = document.getElementById('prev');

next.onclick = function () {
    nextSlide();
};

prev.onclick = function () {
    prevSlide();
};

// Tự chuyển slide sau mỗi 5 giây
let autoSlideInterval = setInterval(nextSlide, 3000);

// Dừng tự chuyển khi người dùng click vào các nút prev hoặc next
function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(nextSlide, 3000);
}

next.addEventListener('click', resetAutoSlide);
prev.addEventListener('click', resetAutoSlide);


const sections = document.querySelectorAll('.section');

const options = {
  threshold: 0.5
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const id = entry.target.getAttribute('id');
    const navLink = document.querySelector(`.menu a[href="#${id}"]`);

    if (entry.isIntersecting) {
      navLink.classList.add('active');
    } else {
      navLink.classList.remove('active');
    }
  });
}, options);

sections.forEach(section => {
  observer.observe(section);
});

function scrollUp() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Tạo hiệu ứng cuộn mượt
    });
}


function scrollDown() {
    // Lấy tất cả các sections trên trang
    const sections = document.querySelectorAll('.section');
    // Tìm section hiện tại
    let currentSectionIndex = -1;
    sections.forEach((section, index) => {
        const bounding = section.getBoundingClientRect();
        if (bounding.top >= 0 && bounding.top < window.innerHeight) {
            currentSectionIndex = index;
        }
    });
    // Cuộn trang xuống section kế tiếp nếu có
    if (currentSectionIndex !== -1 && currentSectionIndex < sections.length - 1) {
        const nextSection = sections[currentSectionIndex + 1];
        nextSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function viewProject() {
    // Lấy vị trí của section "Projects"
    const projectsSection = document.getElementById('projects');
    // Cuộn trang xuống section "Projects"
    projectsSection.scrollIntoView({ behavior: 'smooth' });
}

