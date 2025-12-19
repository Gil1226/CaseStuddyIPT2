const quoteEl = document.getElementById('quote');

    async function loadQuote() {
      try {
        const res = await fetch('https://zenquotes.io/api/random');
        const data = await res.json();
        const quote = data[0]; // ZenQuotes returns an array
        quoteEl.textContent = `“${quote.q}” — ${quote.a}`;
      } catch (err) {
        quoteEl.textContent = "Oops! Could not load a quote.";
        console.error(err);
      }
    }

    loadQuote();
