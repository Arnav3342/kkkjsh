function submitQuiz() {
  var name = document.getElementById("username").value;

  if (name === "") {
    alert("Name enter karo");
    return;
  }

  // Example score (yaha apna real score logic lagega)
  var score = 72;

  fetch("https://script.google.com/macros/s/AKfycbyf86GWAub8y-sPXjY6HZxMEgv0Bg7BHAf4vQpGM9oggfz5MtXQSNZD9f5vSYggBzhy/exec", {
  method: "POST",
  body: JSON.stringify({
    name: name,
    score: score
  }),
  headers: {
    "Content-Type": "application/json"
  }
})

  .then(res => res.json())
  .then(data => {
    document.getElementById("result").innerHTML =
      "✅ Submitted! Your Score: " + score;
  })
  .catch(err => {
    alert("Error submitting data");
  });
}
