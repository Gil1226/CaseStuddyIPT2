const btn = document.querySelector('#bmi-btn');

btn.addEventListener("click", async () => {
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;

    if (!height || !weight) {
        alert("Please enter height and weight");
        return;
    }

    const url = `https://smart-body-mass-index-calculator-bmi.p.rapidapi.com/api/BMI/metric?kg=${weight}&cm=${height}`;

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "X-RapidAPI-Key": "a644a9875emsh18fecb830a4ebabp16ee23jsn06c6bec1818d",
                "X-RapidAPI-Host": "smart-body-mass-index-calculator-bmi.p.rapidapi.com"
            }
        });

        const data = await response.json();

        document.getElementById("result").innerHTML = `
            BMI: <b>${data.bmi}</b><br>
            Category: <b>${data.bmiCategoryForAdults.category}</b><br>
            Normal Range: <b>${data.bmiCategoryForAdults.normalRange}</b>
        `;
    } catch (error) {
        console.error(error);
        document.getElementById("result").innerText = "Error calculating BMI";
    }
});
