window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  const content = document.getElementById("content");

  // Ẩn loader và hiển thị nội dung khi trang đã load
  loader.style.display = "none";
  content.style.display = "block";
});
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementsByTagName('img');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
for (let i = 0; i < img.length; i++) {
  img[i].onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

modal.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
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