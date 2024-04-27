function showPopup() {
    document.getElementById("popup-container").style.display = "block";
}

function hidePopup() {
    document.getElementById("popup-container").style.display = "none";
}
function openPopup(title, imageUrl) {
    var popup = document.getElementById('popup');
    var courseTitle = document.getElementById('course-title');
    var courseImage = document.getElementById('course-image');
      // Добавляем эффект размытия к основной странице
  document.body.insertAdjacentHTML('beforeend', '<div class="popup-overlay"></div>');
  
    courseTitle.textContent = title;
    courseImage.src = imageUrl;
  
    popup.style.display = 'block';
  
    // Pause video if it's playing
    var videos = document.querySelectorAll('video');
    videos.forEach(function(video) {
      if (!video.paused) {
        video.pause();
      }
    });
  }
  
  function closePopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'none';
    document.querySelector('.popup-overlay').remove();
    // Pause video if it's playing
    var videos = document.querySelectorAll('video');
    videos.forEach(function(video) {
      if (!video.paused) {
        video.pause();
      }
    });
  }





  function showPopup1() {
    document.getElementById("popup-container").style.display = "block";
}

function hidePopup1() {
    document.getElementById("popup-container").style.display = "none";
}
function openPopup1(title, imageUrl) {
    var popup = document.getElementById('popup1');
    var courseTitle = document.getElementById('course-title');
    var courseImage = document.getElementById('course-image');
      // Добавляем эффект размытия к основной странице
  document.body.insertAdjacentHTML('beforeend', '<div class="popup-overlay"></div>');
  
    courseTitle.textContent = title;
    courseImage.src = imageUrl;
  
    popup.style.display = 'block';
  
    // Pause video if it's playing
    var videos = document.querySelectorAll('video');
    videos.forEach(function(video) {
      if (!video.paused) {
        video.pause();
      }
    });
  }
  
  function closePopup1() {
    var popup = document.getElementById('popup1');
    popup.style.display = 'none';
    document.querySelector('.popup-overlay').remove();
    // Pause video if it's playing
    var videos = document.querySelectorAll('video');
    videos.forEach(function(video) {
      if (!video.paused) {
        video.pause();
      }
    });
  }