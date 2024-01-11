function convertTemperature() {
    const temperatureInput = document.getElementById("temperature");
    const unitSelect = document.getElementById("unit");
    const resultDiv = document.getElementById("result");

    const temperature = parseFloat(temperatureInput.value);
    const unit = unitSelect.value;

    if (isNaN(temperature)) {
        resultDiv.textContent = "Please enter a valid temperature.";
        return;
    }

    let result;

    switch (unit) {
        case "celsius":
            result = {
                fahrenheit: (temperature * 9/5) + 32,
                kelvin: temperature + 273.15
            };
            break;
        case "fahrenheit":
            result = {
                celsius: (temperature - 32) * 5/9,
                kelvin: ((temperature - 32) * 5/9) + 273.15
            };
            break;
        case "kelvin":
            result = {
                celsius: temperature - 273.15,
                fahrenheit: ((temperature - 273.15) * 9/5) + 32
            };
            break;
        default:
            resultDiv.textContent = "Invalid unit selected.";
            return;
    }

    resultDiv.textContent = `Converted Temperatures:
    Celsius: ${result.celsius ? result.celsius.toFixed(2) : "N/A"}°C
    Fahrenheit: ${result.fahrenheit ? result.fahrenheit.toFixed(2) : "N/A"}°F
    Kelvin: ${result.kelvin ? result.kelvin.toFixed(2) : "N/A"}K`;
}
function openFeedbackForm() {
    document.getElementById("feedbackModal").style.display = "block";
}

function closeFeedbackForm() {
    document.getElementById("feedbackModal").style.display = "none";
}

// Close the modal if the user clicks outside the modal
window.onclick = function(event) {
    const modal = document.getElementById("feedbackModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

// Handle form submission (you may need server-side code for handling actual feedback submission)
document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Feedback submitted!"); // You can replace this with actual feedback submission logic
    closeFeedbackForm();
});
