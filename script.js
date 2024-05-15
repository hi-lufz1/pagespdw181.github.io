// Function to update greeting and datetime dynamically
function updateGreetingAndDateTime() {
    // Get current date and time
    var now = new Date();

    // Get hour from current time
    var hour = now.getHours();

    // Define greetings based on the time of the day
    var greeting;
    if (hour >= 5 && hour < 12) {
        greeting = "Good morning";
    } else if (hour >= 12 && hour < 18) {
        greeting = "Good afternoon";
    } else {
        greeting = "Good evening";
    }

    // Update greeting element
    document.getElementById("greeting").textContent = greeting;

    // Get current date
    var date = now.toDateString();

    // Get current time
    var time = now.toLocaleTimeString();

    // Update datetime element
    document.getElementById("datetime").textContent = date + " " + time;
}

// Call the function initially to update greeting and datetime
updateGreetingAndDateTime();

// Call the function every second to update datetime dynamically
setInterval(updateGreetingAndDateTime, 1000);

$(document).ready(function(){
    // Update current slide number
    $('#carouselExampleSlidesOnly').on('slide.bs.carousel', function (e) {
        var currentSlide = e.to + 1;
        $('.current-slide').text(currentSlide);
    });
});