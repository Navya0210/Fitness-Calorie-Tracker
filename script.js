function calculateCalories() {
    var height = document.getElementById('height').value;
    var weight = document.getElementById('weight').value;

    if (height && weight) {
        var bmi = calculateBMI(weight, height);
        var calories = calculateCaloricNeeds(bmi);

        displayResults(calories, bmi);
    }
}

function calculateBMI(weight, height) {
    // BMI formula: weight (kg) / (height (m) * height (m))
    return (weight / ((height / 100) * (height / 100))).toFixed(2);
}

function calculateCaloricNeeds(bmi) {
    // Assumptions for caloric needs and instructions based on BMI
    if (bmi < 18.5) {
        return "To maintain a healthy weight, aim for 2000-2200 calories per day. Include a balanced diet with protein, carbohydrates, and healthy fats. Consider consulting a nutritionist for personalized advice.";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return "Great job! Your weight is in a healthy range. Aim for 1800-2000 calories per day to maintain. Focus on nutrient-dense foods and regular physical activity.";
    } else if (bmi >= 25 && bmi < 29.9) {
        return "To support weight loss, aim for 1500-1800 calories per day. Focus on a balanced diet with plenty of vegetables, lean proteins, and whole grains. Combine this with regular exercise for optimal results.";
    } else {
        return "For weight management, target 1200-1500 calories per day. It's advisable to consult with a healthcare professional or registered dietitian for personalized guidance. Consider a combination of nutrition and exercise tailored to your needs.";
    }
}

function displayResults(calories, bmi) {
    var resultContainer = document.getElementById('result-container');
    resultContainer.innerHTML = `
        <h3>Caloric Recommendation:</h3>
        <p>${calories}</p>
        <h3>Instructions:</h3>
        <p>Your BMI: ${bmi}</p>
    `;
}