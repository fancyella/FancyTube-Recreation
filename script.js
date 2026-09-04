// ===============================
// FANCYTUBE JAVASCRIPT
// ===============================


// ---------- SEARCH ----------

const searchBar = document.querySelector('.search-bar');
const searchButton = document.querySelector('.search-button');
const videos = document.querySelectorAll('.video-preview');


function searchVideos() {

  const searchText = searchBar.value.toLowerCase().trim();

  videos.forEach(function(video) {

    const title = video
      .querySelector('.video-name')
      .textContent
      .toLowerCase();

    const channel = video
      .querySelector('.name')
      .textContent
      .toLowerCase();

    if (title.includes(searchText) || channel.includes(searchText)) {
      video.style.display = '';
    } else {
      video.style.display = 'none';
    }

  });

}


// Search when clicking the search button
searchButton.addEventListener('click', searchVideos);


// Search while typing
searchBar.addEventListener('input', searchVideos);


// Search when pressing Enter
searchBar.addEventListener('keydown', function(event) {

  if (event.key === 'Enter') {
    searchVideos();
  }

});


// ---------- SIDEBAR ----------

const hamburgerButton = document.querySelector('.hamburger-menu');
const sidebar = document.querySelector('.sidebar');


hamburgerButton.addEventListener('click', function() {

  sidebar.classList.toggle('sidebar-hidden');

});


// ---------- NOTIFICATIONS ----------

const notificationContainer = document.querySelector(
  '.notification-icon-container'
);

const notificationCount = document.querySelector(
  '.notification-icon-count'
);


notificationContainer.addEventListener('click', function() {

  notificationCount.style.display = 'none';

});


// ---------- VIDEO CLICK ----------

videos.forEach(function(video) {

  video.addEventListener('click', function() {

    const title = video
      .querySelector('.video-name')
      .textContent;

    alert('Opening: ' + title);

  });

});


// ---------- VOICE SEARCH ----------

const voiceButton = document.querySelector(
  '.voice-icon-button'
);


voiceButton.addEventListener('click', function() {

  alert('Voice search is not available yet 🎤');

});


// ---------- UPLOAD BUTTON ----------

const uploadButton = document.querySelector(
  '.upload-button'
);


uploadButton.addEventListener('click', function() {

  alert('Create / Upload feature coming soon! 📹');

});


console.log('FancyTube JavaScript is working! 🚀');