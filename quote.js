document.addEventListener("DOMContentLoaded", () => {
    const quoteContainer = document.getElementById('quote');

    fetch("https://zenquotes.io/api/random")
        .then(response => response.json())
        .then(data => {
            const quote = data[0].q;
            const author = data[0].a;

            quoteContainer.innerHTML =
                `"${quote}"<br><b>- ${author}</b>`;
        })
        .catch(err => {
            console.error(err);
            quoteContainer.innerHTML = "Failed to load quote.";
        });
});