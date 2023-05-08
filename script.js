const calculateBtn = document.getElementById("calculateBtn");
const weightInput = document.getElementById("weightInput");
const heightInput = document.getElementById("heightInput");
const resultDiv = document.getElementById("result");

calculateBtn.addEventListener("click", () => {
  const weight = weightInput.value;
  const height = heightInput.value;
  const bmi = weight / (height * height);
  const formattedBMI = bmi.toFixed(2);
  resultDiv.innerHTML = `Your BMI is ${formattedBMI}`;
});
