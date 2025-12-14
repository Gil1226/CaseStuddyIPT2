function loadQuote() {
  fetch("https://api.quotable.io/random")
    .then(res => res.json())
    .then(data => {
      document.getElementById("quote").innerHTML =
        `"${data.content}" <br><b>— ${data.author}</b>`;
    })
    .catch(err => {
      document.getElementById("quote").innerText = "Failed to load quote.";
      console.error(err);
    });
}

loadQuote();