function showTime() {
  document.getElementById("currentTime").innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
  showTime();
}, 1000);

// Function to filter courses based on category
function filterCourses() {
  const filter = document.getElementById("course-filter").value;
  const courses = document.getElementsByClassName("course-card");

  for (let i = 0; i < courses.length; i++) {
    if (
      filter === "all" ||
      courses[i].getAttribute("data-category") === filter
    ) {
      courses[i].style.display = "block";
    } else {
      courses[i].style.display = "none";
    }
  }
}
