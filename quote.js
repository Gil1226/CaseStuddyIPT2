const quoteBox = document.getElementById("quote");

async function getQuote() {
    try {
        const response = await fetch("https://type.fit/api/quotes");
        const data = await response.json(); 

        const randomQuote = data[Math.floor(Math.random() * data.length)];

        quoteBox.innerHTML = `
            <p style="font-family: 'Questrial', sans-serif; font-size: 16px;">
                “${randomQuote.text}”
            </p>
            <span style="font-size: 14px; opacity: 0.7;">
                — ${randomQuote.author || "Unknown"}
            </span>
        `;
    } catch (error) {
        quoteBox.textContent = "Failed to load quote";
        console.error("Error fetching quote:", error);
    }
}

getQuote();;
