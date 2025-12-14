const submit = document.querySelector('#nutrition-btn');

submit.addEventListener("click", async () => {
    const input = document.querySelector('#input-nutri').value;

    if (!input) {
        alert("Please enter food");
        return;
    }

    const url = `https://api.calorieninjas.com/v1/nutrition?query=${encodeURIComponent(input)}`;

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "X-Api-Key": "i0RHOWbYKK5nvyS8ywLLvw==0aiLa8vtBeOgpXoD"
            }
        });

        const data = await response.json();

        const container = document.getElementById("resultNutrition");
        container.innerHTML = "";

        if (!data.items || data.items.length === 0) {
            container.innerHTML = "<p>No results found.</p>";
            return;
        }

        data.items.forEach(food => {
            container.innerHTML += `
                <div class="nutrition-card">
                    <h3>${food.name}</h3>
                    Calories: <b>${food.calories}</b><br>
                    Protein: <b>${food.protein_g} g</b><br>
                    Carbs: <b>${food.carbohydrates_total_g} g</b><br>
                    Fat: <b>${food.fat_total_g} g</b>
                </div>
            `;
        });

    } catch (error) {
        console.error(error);
        document.getElementById("resultNutrition").innerHTML =
            "<p>Error fetching nutrition data.</p>";
    }
});




