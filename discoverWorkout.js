const discoverBtn = document.querySelector(".discoverBtn");

if (discoverBtn) {
    discoverBtn.addEventListener("click", async () => {
        try {
            const response = await fetch(
                "https://api.workoutapi.com/exercises/random",
                {
                    method: "GET",
                    headers: {
                        "Accept": "application/json",
                        "x-api-key": "20f382799c9157d9b2e57d1af2d1ed6e810c8daa658ea49f9372d1565bf09d14"
                    }
                }
            );

            const data = await response.json();

            if (data.error) {
                document.getElementById("result").innerHTML =
                    `<p>Error: ${data.error}</p>`;
                return;
            }

            const imgHome = document.querySelector('.imgHome');
            if (imgHome) imgHome.style.display = "none";

            document.getElementById("result").innerHTML = `
                <div class="card">
                    <h2>${data.name}</h2>
                    <p><strong>Target Muscle:</strong>
                        ${data.primaryMuscles.map(m => m.name).join(", ")}
                    </p>
                    <p><strong>To do:</strong> ${data.description}</p>
                </div>
            `;
        } catch (error) {
            console.error(error);
            document.getElementById("result").innerHTML =
                "<p>Failed to fetch workout.</p>";
        }
    });
}