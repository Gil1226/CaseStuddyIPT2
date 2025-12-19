const quoteEl = document.getElementById('quote');

    async function loadQuote() {
      try {
        const res = await fetch('https://api.quotable.io/random');
        const data = await res.json();
        quoteEl.textContent = `“${data.content}” — ${data.author}`;
      } catch (err) {
        quoteEl.textContent = "Oops! Could not load a quote.";
        console.error(err);
      }
    }

    loadQuote();
