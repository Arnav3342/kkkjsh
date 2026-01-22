function submitQuiz() {
  var name = document.getElementById("username").value;

  if (name === "") {
    alert("Name enter karo");
    return;
  }

  // Example score (yaha apna real score logic lagega)
  var score = 72;

  fetch("https://script.google.com/macros/s/AKfycbwJY5p3ckZ9L2sY2--mgx1YKz_Pfx2qXsQ6c7W1u6Re6Jos_fhNCHlKpffLGn2iMWmdfA/exec", {
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
