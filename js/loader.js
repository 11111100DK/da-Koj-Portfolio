document.addEventListener("DOMContentLoaded", function() {
    typeWriter("Please wait a second", "loading-text", 100);
  });
  
  window.addEventListener("load", function() {
    const img = document.querySelector("#intro img");
    img.addEventListener("load", function() {
      const loader = document.getElementById("loader");
      const intro = document.getElementById("intro");
  
      // Ẩn loader và hiển thị phần intro khi hình ảnh đã load xong
      loader.style.display = "none";
    });
  
    // Đề phòng trường hợp hình ảnh đã được cache và load ngay lập tức
    if (img.complete) {
      const event = new Event('load');
      img.dispatchEvent(event);
    }
  });
  
  // Hàm để tạo hiệu ứng đánh máy
  function typeWriter(text, elementId, delay = 200) {
    let i = 0;
    function type() {
      if (i < text.length) {
        document.getElementById(elementId).innerHTML += text.charAt(i);
        i++;
        setTimeout(type, delay); // Thời gian lặp lại giữa các ký tự
      }
    }
    type();
  }
  
  
window.onload = function() {
    // Scroll lên đầu trang
    window.scrollTo(0, 0);
  
    // Chặn scroll trong 5 giây
    document.body.classList.add('no-scroll');
    setTimeout(function() {
        document.body.classList.remove('no-scroll');
    }, 5000);
  
    var intro = document.getElementById('intro');
  
    // Hiển thị modal
    intro.classList.add('show');
  
    // Thay đổi màu nền sau 3 giây
    setTimeout(function() {
        intro.style.transition = 'background-color 1s';
        intro.style.backgroundColor = '#E5D283';
    }, 3000);
  
  // Ẩn modal dần dần sau 5 giây
  setTimeout(function() {
    intro.style.transition = 'opacity 1s';
    intro.style.opacity = '0';
  
    // Biến mất hoàn toàn sau khi ẩn dần
    setTimeout(function() {
        intro.style.display = 'none';
    }, 1000); // Thời gian này phải tương ứng với thời gian transition
  }, 5000);
  }