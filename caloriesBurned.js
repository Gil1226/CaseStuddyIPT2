const calsBtn = document.querySelector('#calories-btn');

calsBtn.addEventListener("click", async () => {
    const activity = document.querySelector('#activity').value;
    const weight = document.querySelector('#cals-weight').value;
    const duration = document.querySelector('#duration').value;

    if (!activity || !weight || !duration) {
        alert("Please fill in all fields");
        return;
    }

    const url = `https://api.api-ninjas.com/v1/caloriesburned?activity=${encodeURIComponent(activity)}&weight=${weight}&duration=${duration}`;

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "X-Api-Key": "+w+jMJQ66zHKmGkzHGWVVA==JmFvTfZ07CskRG09"
            }
        });

        const data = await response.json();

        console.log(data);
        document.querySelector('#resultCalories').innerHTML = "";

        data.forEach(item => {
            document.querySelector('#resultCalories').innerHTML += `
                <div class="calories-card">
                    <h2>${item.name}</h2>
                    <p><strong>Calories per hour:</strong> ${item.calories_per_hour}</p>
                    <p><strong>Duration:</strong> ${item.duration_minutes} minutes</p>
                    <p><strong>Total Calories Burned:</strong> ${item.total_calories}</p>
                </div>
            `;
        });

    } catch (error) {
        console.error(error);
        document.querySelector('#resultCalories').innerText =
            "Failed to calculate calories.";
    }
});

