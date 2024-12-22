let postsData = [];
const searchDisplay = document.querySelector(".search-display");

const isBedroomPage = window.location.pathname.includes("bedroom.html");
const isLivingPage = window.location.pathname.includes("living-room.html");
const isDiningPage = window.location.pathname.includes("dining-room.html");
const isOfficePage = window.location.pathname.includes("office.html");
const isOutdoorPage = window.location.pathname.includes("outdoor.html");

// Fetching data from JSON file
fetch("https://tavishi-07.github.io/icrave-products/products.json")
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    postsData = data;
    if (isBedroomPage) {
      resetBedroomPosts();
    } else if (isLivingPage) {
      resetLivingPosts();
    } else if (isDiningPage) {
      resetDiningPosts();
    } else if (isOfficePage) {
      resetOfficePosts();
    } else if (isOutdoorPage) {
      resetOutdoorPosts();
    } else {
      resetPosts();
    }
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });

const createPost = (postData) => {
  const { name, image, link } = postData;
  const post = document.createElement("div");
  post.className = "post";

  // Get the current location
  const currentLocation = window.location.pathname;
  let imagePath;

  // Set the image path based on the current location
  if (currentLocation.includes('index.html')) {
      imagePath = '';
  } else {
      imagePath = '../../';
  }

  post.innerHTML = `
      <a href="${link}" class="post-preview" target="_blank">
        <img class="post-image" src="${imagePath}${image}">
        <div class="post-content">
          <p class="post-title">${name}</p>
        </div>
      </a>
  `;

  return post;
  
};

const displayPostsInSection = (sectionId, filterCriteria) => {
  const section = document.getElementById(sectionId).querySelector(".product-cards");
  section.innerHTML = "";
  
  const filteredPosts = postsData.filter(post =>
    filterCriteria.every(criteria => post.categories.includes(criteria))
  );

  filteredPosts.forEach(postData => {
    section.appendChild(createPost(postData));
  });

  console.log(`Section: ${sectionId}, Posts:`, filteredPosts);
};

const resetBedroomPosts = () => {
  displayPostsInSection("beds", ["Bedroom", "Beds"]);
  displayPostsInSection("wardrobes", ["Bedroom", "Wardrobes"]);
  displayPostsInSection("nightstands", ["Bedroom", "Nightstands"]);
  displayPostsInSection("dressers", ["Bedroom", "Dressers"]);
  displayPostsInSection("mattresses", ["Bedroom", "Mattresses"]);
  displayPostsInSection("side-end-tables", ["Bedroom", "Side & End Tables"]);
};

const resetLivingPosts = () => {
  displayPostsInSection("sofas", ["Living Room", "Sofas"]);
  displayPostsInSection("coffee-tables", ["Living Room", "Coffee Tables"]);
  displayPostsInSection("tv-units", ["Living Room", "TV Units"]);
  displayPostsInSection("recliners", ["Living Room", "Recliners"]);
  displayPostsInSection("bookshelves", ["Living Room", "Bookshelves"]);
  displayPostsInSection("lounge-chairs", ["Living Room", "Lounge Chairs"]);
  displayPostsInSection("center-table", ["Living Room", "Center Tables"]);
  displayPostsInSection("side-end-tables", ["Living Room", "Side & End Tables"]);
  console.log("Living room sections reset.");
};

const resetDiningPosts = () => {
  displayPostsInSection("dining-tables", ["Dining Room", "Dining Tables"]);
  displayPostsInSection("chairs", ["Dining Room", "Chairs"]);
  displayPostsInSection("sideboards", ["Dining Room", "Sideboards"]);
  displayPostsInSection("bar-stools", ["Dining Room", "Bar Stools"]);
  console.log("Dining room sections reset.");
};

const resetOfficePosts = () => {
  displayPostsInSection("desks", ["Office Furniture", "Desks"]);
  displayPostsInSection("office-chairs", ["Office Furniture", "Office Chairs"]);
  displayPostsInSection("filing-cabinets", ["Office Furniture", "Filing Cabinets"]);
  displayPostsInSection("conference-tables", ["Office Furniture", "Conference Tables"]);
  console.log("Office Furniture sections reset.");
};

const resetOutdoorPosts = () => {
  displayPostsInSection("patio-sets", ["Outdoor Furniture", "Patio Sets"]);
  displayPostsInSection("lounge-chairs", ["Outdoor Furniture", "Lounge Chairs"]);
  displayPostsInSection("outdoor-tables", ["Outdoor Furniture", "Outdoor Tables"]);
  displayPostsInSection("umbrellas", ["Outdoor Furniture", "Umbrellas"]);
  console.log("Outdoor Furniture sections reset.");
};

const resetPosts = () => {
  const sectionIds = ["beds", "wardrobes", "nightstands", "dressers", "mattresses", 
                      "sofas", "coffee-tables", "tv-units", "recliners", "bookshelves",
                      "dining-tables", "chairs", "sideboards", "bar-stools", 
                      "desks", "office-chairs", "filing-cabinets", "conference-tables", 
                      "patio-sets", "lounge-chairs", "outdoor-tables", "umbrellas"];
  sectionIds.forEach(sectionId => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.querySelector(".product-cards").innerHTML = "";
    }
  });
  postsData.forEach(post => {
    if (isBedroomPage) {
      resetBedroomPosts();
    } else if (isLivingPage) {
      resetLivingPosts();
    } else if (isDiningPage) {
      resetDiningPosts();
    } else if (isOfficePage) {
      resetOfficePosts();
    } else if (isOutdoorPage) {
      resetOutdoorPosts();
    }
  });
};

const handleSearchPosts = (query) => {
  const searchQuery = query.trim().toLowerCase();

  if (searchQuery.length === 0) {
    if (isBedroomPage) {
      resetBedroomPosts();
    } else if (isLivingPage) {
      resetLivingPosts();
    } else if (isDiningPage) {
      resetDiningPosts();
    } else if (isOfficePage) {
      resetOfficePosts();
    } else if (isOutdoorPage) {
      resetOutdoorPosts();
    } else {
      resetPosts();
    }
    searchDisplay.innerHTML = "";
    return;
  }

  let searchResults = postsData.filter(post =>
    post.categories.some(category => category.toLowerCase().includes(searchQuery)) ||
    post.name.toLowerCase().includes(searchQuery)
  );

  searchDisplay.innerHTML = searchResults.length === 0 ?
    "No results found" :
    `Result(s) found for your query: ${query}`;

  const globalSection = document.querySelector(".posts-container1");
  globalSection.innerHTML = "";
  
  searchResults.forEach(post => {
    globalSection.appendChild(createPost(post));
  });

  if (isBedroomPage) {
    resetBedroomPosts();
  } else if (isLivingPage) {
    resetLivingPosts();
  } else if (isDiningPage) {
    resetDiningPosts();
  } else if (isOfficePage) {
    resetOfficePosts();
  } else if (isOutdoorPage) {
    resetOutdoorPosts();
  }
};

const search = document.getElementById("input-search");
const searchButton = document.getElementById("search-btn");

searchButton.addEventListener("click", () => {
  const query = search.value;
  handleSearchPosts(query);
});

// Keyboard enter search
search.addEventListener("keypress", (event) => {
  if (event.key === 'Enter') {
    const query = search.value;
    handleSearchPosts(query);
  }
});

let debounceTimer;
const debounce = (callback, time) => {
  window.clearTimeout(debounceTimer);
  debounceTimer = window.setTimeout(callback, time);
};




// Voice search functionality
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (!window.SpeechRecognition) {
    alert("Speech recognition not supported by your browser!");
} else {
    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.addEventListener("result", event => {
        const transcript = Array.from(event.results)
            .map(result => result[0])
            .map(result => result.transcript)
            .join("");

        search.value = transcript;
        handleSearchPosts(transcript);
    });

    recognition.addEventListener("end", recognition.start);

    // document.getElementById('mic-btn').addEventListener('click', () => {
    //     recognition.start();
    // });

    const micButton = document.getElementById('mic-btn');

    micButton.addEventListener('click', () => {
        micButton.classList.add('active');
  
        // Start speech recognition here
        recognition.start();

        // Simulate stopping of the effect after a certain time
        setTimeout(() => {
            micButton.classList.remove('active');
        }, 3000); // Duration for how long the effect should last
    });
}



// search bar
const input = document.getElementById("input-search");

input.addEventListener("focus", () => {
  input.parentElement.classList.add("active");
});

input.addEventListener("blur", () => {
  if (input.value.trim() === "") {
    input.parentElement.classList.remove("active");
  }
});


 document.addEventListener('DOMContentLoaded', function() {
      const input = document.getElementById('input-search');
      const micButton = document.getElementById('mic-btn');

      // Function to handle microphone button click
      micButton.addEventListener('click', function() {
        input.value = ''; // Clear the input field
      });
    });

  