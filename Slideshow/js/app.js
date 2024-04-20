let merry = ["hero.jpg", "offer.jpg", "testimonial.jpg"];

let index = 0;
function slideShow() {
  let html = `
      <div class="mySlides show">
                  <div class="slide_show">
                      <div class="numbertext">${index + 1}/${
    merry.length
  }</div> 
                      <img id="image" src="images/${
                        merry[index]
                      }" style="width:100%; height: 380px;">
                  </div>
              </div>
                  <div style="text-align:center">
                  <button class="btn-custom btn-outline-primary"onclick = "firts()">Firts</button>
                  <button class="btn-custom btn-outline-primary"onclick = "next()">Next</button> 
                  <button class="btn-custom btn-outline-danger"onclick = "play()">Plays</button>
                  <button class="btn-custom btn-outline-warning"onclick = "stop()">Stops</button>
                  <button class="btn-custom btn-outline-primary"onclick= "previous()">Previous</button>                 
                  <button class="btn-custom btn-outline-primary"onclick = "end()">Last</button>
                  </div>
      `;
  document.getElementById("slideshow").innerHTML = html;
}
slideShow(); // Gọi hàm thực thi

// Chuyen tu dau toi cuoi
function next() {
  index++;
  if (index === merry.length) {
    index = 0;
  }
  slideShow();
}

//Chuyen tu cuoi về đầu
function previous() {
  index--;
  console.log(index);
  if (index < 0) {
    index = merry.length - 1;
  }
  slideShow();
}

function firts() {
  index = 0;
  slideShow();
}

function end() {
  index = 2;
  slideShow();
}

//Bắt đầu slideshow tự động
function play() {
  play.disabled = true;
  stop.disabled = false;
  next.disabled = true;
  end.disabled = true;
  startSlideshow();
}

function startSlideshow() {
  slideshowPlaying = true;
  slideshowInterval = setInterval(function () {
    next(); // chuyển sang slide khác
  }, 1800); // thời gian delay giữa 3 ảnh
}

// Dừng slideshow tự động
function stop() {
  play.disabled = false;

  next.disabled = false;
  end.disabled = false;
  stopSlideshow();
}
//Dừng Slideshow
function stopSlideshow() {
  // slideshowPlaying = false;
  clearInterval(slideshowInterval); // Dừng interval
}
