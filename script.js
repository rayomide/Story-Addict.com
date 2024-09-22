document.getElementById("foot01").innerHTML =
"<p>&copy;  " + new Date().getFullYear() + " RAYOMIDE. All rights reserved.</p>";
document.getElementById("nav01").innerHTML =
"<ul id='menu'>" +
"<li><a href='index.html'>Home</a></li>" +
"<li><a href='adult stories.html'>Adult stories</a><li>" +
"<li><a href='kids stories.html'> Kids Stories</a></li>" +
"<li><a href='read.html'>Read</a><li>" +
"<li><a href='settings.html'>Settings</a></li>" +
"<li><a href='about.html'>About</a></li>" +
"</ul>";

const signUpForm = document.getElementById('sign-up-form');
const signInForm = document.getElementById('sign-in-form');
const signInContainer = document.getElementById('sign-in-container');

signUpForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  // Sign up logic here
  console.log('Signed up:', email, password);
  signInContainer.style.display = 'block';
});

document.getElementById('google-sign-in-btn').addEventListener('click', () => {
  // Google sign-in logic here
  console.log('Signed up with Google');
  signInContainer.style.display = 'block';
});

signInForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('sign-in-email').value;
  const password = document.getElementById('sign-in-password').value;
  // Sign in logic here
  console.log('Signed in:', email, password);
});

const notification = document.getElementById('notification-bar');
const story = []; // array to store story IDs

// Function to check for new stories
function checkForNewStories() {
  const newStories = getNewStories(); // implement this function to retrieve new story IDs
  if (newStories.length > 0) {
    notificationBar.style.display = 'block';
    setTimeout(() => {
      notificationBar.style.display = 'none';
    }, 5000); // hide after 5 seconds
    stories = newStories; // update the stories array
  }
}

// Implement this function to retrieve new story IDs
function getNewStories() {
  // TO DO: implement logic to retrieve new story IDs
  // For example, you can fetch data from a database or a file
  return []; // return an array of new story IDs
}

// Call the function to check for new stories
checkForNewStories();
const newStoryNotificationsCheckbox = document.getElementById('new-story-notifications');
const commentNotificationsCheckbox = document.getElementById('comment-notifications');
const mentionNotificationsCheckbox = document.getElementById('mention-notifications');

newStoryNotificationsCheckbox.addEventListener('change', () => {
  // Update new story notifications setting
});

commentNotificationsCheckbox.addEventListener('change', () => {
  // Update comment notifications setting
});

mentionNotificationsCheckbox.addEventListener('change', () => {
  // Update mention notifications setting
});
const storyFormatSelect = document.getElementById('story-format');
const storySortingSelect = document.getElementById('story-sorting');
const storyFilteringSelect = document.getElementById('story-filtering');

storyFormatSelect.addEventListener('change', () => {
  // Update story format
});

storySortingSelect.addEventListener('change', () => {
  // Update story sorting
});

storyFilteringSelect.addEventListener('change', () => {
  // Update story filtering
});
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const signupLink = document.getElementById('signup-link');

signupLink.addEventListener('click', () => {
  loginForm.style.display = 'none';
  signupForm.style.display = 'block';
});

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // Handle login logic here
});

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // Handle signup logic here
});
const notificationBar = document.getElementById('notification-bar');
const stories = []; // array to store story IDs

// Function to check for new stories
function checkForNewStories() {
  const newStories = getNewStories(); // implement this function to retrieve new story IDs
  if (newStories.length > 0) {
    notificationBar.style.display = 'block';
    setTimeout(() => {
      notificationBar.style.display = 'none';
    }, 5000); // hide after 5 seconds
    stories = newStories; // update the stories array
  }
}

// Implement this function to retrieve new story IDs
function getNewStories() {
  // TO DO: implement logic to retrieve new story IDs
  // For example, you can fetch data from a database or a file
  return []; // return an array of new story IDs
}

// Call the function to check for new stories
checkForNewStories();
// Replace with your analytics API calls
const pageViews = 1000;
const uniqueVisitors = 500;
const bounceRate = 20;

document.getElementById('page-views').innerText = pageViews;
document.getElementById('unique-visitors').innerText = uniqueVisitors;
document.getElementById('bounce-rate').innerText = `${bounceRate}%`;
const matureContentFilterSelect = document.getElementById('mature-content-filter');
const genreRestrictionsSelect = document.getElementById('genre-restrictions');

matureContentFilterSelect.addEventListener('change', () => {
  // Update mature content filter setting
});

genreRestrictionsSelect.addEventListener('change', () => {
  // Update genre restrictions setting
});
const customHomepageInput = document.getElementById('custom-homepage');
const favoriteAuthorsInput = document.getElementById('favorite-authors');
const favoriteStoriesInput = document.getElementById('favorite-stories');

customHomepageInput.addEventListener('input', () => {
  // Update custom homepage setting
});

favoriteAuthorsInput.addEventListener('input', () => {
  // Update favorite authors setting
});

favoriteStoriesInput.addEventListener('input', () => {
  // Update favorite stories setting
});
// Get selected values
const defaultFormat = document.getElementById('default-format').value;
const sortBy = document.getElementById('sort-by').value;
const filterBy = document.getElementById('filter-by').value;

// Use selected values to sort and filter stories
function sortAndFilterStories() {
  // TO DO: implement sorting and filtering logic here
}
const screenReaderModeCheckbox = document.getElementById('screen-reader-mode');
const highContrastModeCheckbox = document.getElementById('high-contrast-mode');

screenReaderModeCheckbox.addEventListener('change', () => {
  // Update screen reader mode setting
  if (screenReaderModeCheckbox.checked) {
    // Enable screen reader mode
    document.body.classList.add('screen-reader-mode');
  } else {
    // Disable screen reader mode
    document.body.classList.remove('screen-reader-mode');
  }
});

highContrastModeCheckbox.addEventListener('change', () => {
  // Update high contrast mode setting
  if (highContrastModeCheckbox.checked) {
    // Enable high contrast mode
    document.body.classList.add('high-contrast-mode');
  } else {
    // Disable high contrast mode
    document.body.classList.remove('high-contrast-mode');
  }
});
// Get like/dislike buttons and count elements
const likeBtn = document.getElementById('like-btn');
const dislikeBtn = document.getElementById('dislike-btn');
const likeCount = document.getElementById('like-count');
const dislikeCount = document.getElementById('dislike-count');

// Initialize like/dislike counts
let likes = 0;
let dislikes = 0;

// Handle like button click
likeBtn.addEventListener('click', () => {
  likes++;
  likeCount.innerText = likes;
});

// Handle dislike button click
dislikeBtn.addEventListener('click', () => {
  dislikes++;
  dislikeCount.innerText = dislikes;
});