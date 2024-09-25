// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();



// owl carousel slider js
var owl = $('.project_carousel').owlCarousel({
    loop: false,
    margin: 15,
    center: true,
    startPosition: 2,
    autoplay: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    autoplayHoverPause: true,
    responsive: {
        0: {
            center: false,
            items: 1,
            margin: 0
        },
        769: {
            items: 2,
        },
        992: {
            center: true,
            items: 3
        }
    }
})


// owl.owlcarousel2_filter

$('.owl-filter-bar').on('click', '.item', function (e) {
    var $items = $('.owl-filter-bar a')
    var $item = $(this);
    var filter = $item.data('owl-filter')
    $items.removeClass("active");
    $item.addClass("active");
    owl.owlcarousel2_filter(filter);

    e.preventDefault();
})
/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
/**function toggleText() {
    var moreText = document.getElementById("more-text");
    var btnText = document.getElementById("read-more");
  
    if (moreText.style.display === "none") {
      moreText.style.display = "inline";
      btnText.innerHTML = "Read Less";
    } else {
      moreText.style.display = "none";
      btnText.innerHTML = "Read More";
    }
  }**/
 // POST

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const resultElement = document.createElement("p"); // Create a paragraph element to display the result
    form.appendChild(resultElement); // Append the result element to the form
  
    form.addEventListener("submit", async function(event) {
      event.preventDefault();
      resultElement.textContent = "Sending...."; // Display "Sending..." message
      const formData = new FormData(event.target);
  
      formData.append("access_key", "ceab3c13-e6a3-4430-8465-74656f19626b");
  
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
  
        const data = await response.json();
  
        if (data.success) {
          resultElement.textContent = "Form Submitted Successfully";
          form.reset(); // Reset the form
        } else {
          console.log("Error", data);
          resultElement.textContent = data.message; // Display the error message
        }
      } catch (error) {
        console.error("Request failed", error);
        resultElement.textContent = "An error occurred. Please try again."; // Display a generic error message
      }
    });
  });
  // POST  