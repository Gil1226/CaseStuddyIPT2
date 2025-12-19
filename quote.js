const quoteEl = document.getElementById('quote');

    async function loadQuote() {
        const res = await fetch('https://zenquotes.io/api/random');
        const data = await res.json();
        const quote = data[0];
        quoteEl.textContent = `“${quote.q}” — ${quote.a}`;
    }

    loadQuote();
