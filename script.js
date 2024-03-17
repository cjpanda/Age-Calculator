function calculateAge() {
  const dayInput = document.getElementById("dayInput").value.trim();
  const monthInput = document.getElementById("MonthInput").value.trim();
  const yearInput = document.getElementById("YearInput").value.trim();

  // Check if any of the input fields are empty
  if (dayInput === "" || monthInput === "" || yearInput === "") {
    const errorMessage1 = document.getElementById("dayErrorMessage");
    const errorMessage2 = document.getElementById("monthErrorMessage");
    const errorMessage3 = document.getElementById("yearErrorMessage");
    errorMessage1.innerText = "This field is required";
    errorMessage2.innerText = "This field is required";
    errorMessage3.innerText = "This field is required";

    const inputFields = document.querySelectorAll("input");
    inputFields.forEach((input) => {
      input.style.border = "1px solid var(--errorColor)";
    });

    const labels = document.querySelectorAll("label");
    labels.forEach((label) => {
      label.style.color = "var(--errorColor)";
    });

    // Add event listener to each input field
    inputFields.forEach((input) => {
      // Event listener for click
      input.addEventListener("click", () => {
        // Reset error messages
        const errorMessage1 = document.getElementById("dayErrorMessage");
        const errorMessage2 = document.getElementById("monthErrorMessage");
        const errorMessage3 = document.getElementById("yearErrorMessage");
        errorMessage1.innerText = "";
        errorMessage2.innerText = "";
        errorMessage3.innerText = "";

        // Reset border styles
        inputFields.forEach((input) => {
          input.style.border = "1px solid var(--backgroundColor)"; // Change border to transparent
        });

        // Reset label colors
        const labels = document.querySelectorAll("label");
        labels.forEach((label) => {
          label.style.color = ""; // Reset color to default (inherit)
        });
      });
    });
    return;
  }

  // Parse the input values as integers
  const day = parseInt(dayInput);
  const month = parseInt(monthInput);
  const year = parseInt(yearInput);

  let currentDate = new Date();

  // Reset error messages
  const errorMessage1 = document.getElementById("dayErrorMessage");
  errorMessage1.innerText = "";
  const errorMessage2 = document.getElementById("monthErrorMessage");
  errorMessage2.innerText = "";
  const errorMessage3 = document.getElementById("yearErrorMessage");
  errorMessage3.innerText = "";

  // Validate input fields
  if (dayInput > 31) {
    errorMessage1.innerText = "Must be a valid day";
  }

  if (monthInput > 12) {
    errorMessage2.innerText = "Must be a valid month";
  }

  if (yearInput > 2024 || yearInput.length < 4 || yearInput < 1940) {
    errorMessage3.innerText = "Must be a valid year";
  }

  // Check if any error messages were displayed
  if (
    !errorMessage1.innerText &&
    !errorMessage2.innerText &&
    !errorMessage3.innerText
  ) {
    // Calculate the Age
    let age = currentDate.getFullYear() - year;
    let currentMonth = currentDate.getMonth() + 1;
    let currentDay = currentDate.getDate();

    if (currentMonth < month || (currentMonth === month && currentDay < day)) {
      age--;
      console.log(
        age + " years, " + currentMonth + " months, " + currentDay + " days"
      );
    }

    const yearResult = document.getElementById("yearResult");
    yearResult.textContent = age;
    const monthResult = document.getElementById("monthResult");
    monthResult.textContent = currentMonth;
    const dayResult = document.getElementById("dayResult");
    dayResult.textContent = currentDay;
  }
}
