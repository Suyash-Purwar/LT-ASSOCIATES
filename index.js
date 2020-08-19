window.onscroll = function() {
  navbarViewEngineForLargeScreens(); // Function for showing thw navbar after some scrolling
  svgIconAnimationViewEngine(); // Function for showing
}

// This function is made for supporting Carousel in index.html
document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.querySelector('.main-carousel');
  const carouselInstance = M.Carousel.init(carousel, {
    fullWidth: true,
    indicators: true,
    // This function triggers when new slide comes  
    // Changes the content and adds animation to elements as the new slide comes
    onCycleTo: function(currentSlide) {
      currentSlide.children[1].children[0].children[1].style.animation = "moveInBottom .7s ease-in";
      setInterval(() => {
        currentSlide.children[1].children[0].children[1].style.animation = "";
      }, 3000)


      currentSlide.children[1].children[0].children[0].style.animation = "moveInTop .7s ease-in";
      setInterval(() => {
        currentSlide.children[1].children[0].children[0].style.animation = "";
      }, 3000)
    }
  });

  // Brings new slide after 5 seconds
  setInterval(function() {
    carouselInstance.next();
  }, 5000);
});

// Initialising code for sharing button slide left
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.fixed-action-btn');
  var instances = M.FloatingActionButton.init(elems, {});
});

// Adding animations in large screen nav
function navbarViewEngineForLargeScreens() {
  if (window.innerWidth > 760) {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
      document.getElementById('large-screen-nav').style.display = "block";
    } else {
      document.getElementById('large-screen-nav').style.display = "none";
    }
  }
}

// Functionality for animating svg icons
let count = 0;
function svgIconAnimationViewEngine() {
  if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
    function counter() {
      return count++;
    }
    if (counter() <= 0) {
      var $svg = $('svg').drawsvg({
        duration: 3000
      });
      $svg.drawsvg('animate');
    }
  }
}

// For large nav dropdowns
document.addEventListener('DOMContentLoaded', function() {
  const dropdown = document.querySelectorAll('.dropdown-trigger');
  const dropdownElem = M.Dropdown.init(dropdown, {
    coverTrigger: false,
    constrainWidth: false,
    inDuration: 200,
    hover: true,
    alignment:'right',
    closeOnClick: false
  });


  //  Dropdown initialization for sub dropdown
  const sub_dropdown = document.querySelector('.sub-dropdown');
  const sub_dropdownElem = M.Dropdown.init(sub_dropdown, {
    inDuration: 300,
    outDuration: 225,
    constrainWidth: false,
    hover: true,
    coverTrigger: false,
    alignment: 'left'
  });
});

// Initialising code for side nav
document.addEventListener('DOMContentLoaded', function() {
  const sidenav = document.querySelector('.sidenav');
  const sidenavInstance = M.Sidenav.init(sidenav, {
    edge: "right",
    inDuration: 400,
    preventScrolling: false
  });
});

// For sidenav About Us dropdown
function toggleAboutusDropdown(dropdown) {
  const dropdownContentStyle = document.getElementById(dropdown);
  if (dropdownContentStyle.style.display == "none") {
    document.getElementById(dropdown).style.display = "block";
  } else {
    document.getElementById(dropdown).style.display = "none";
  }
}
