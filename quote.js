function loadQuote() {
    fetch("https://quoteapi.infinityfreeapp.com/quote.php")
        .then(res => res.json())
        .then(data => {
            document.getElementById("quote").innerHTML =
                `"${data[0].q}" <br><b>— ${data[0].a}</b>`;
        })
}

loadQuote();
