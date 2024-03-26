function formatCurrency(value) {
    return value.toFixed(2);
 }

 let menuItems = document.getElementsByClassName("menuItem");

 for (let i = 0; i < menuItems.length; i++) {
      menuItems[i].addEventListener("click", calcTotal);
}

function calcTotal() {
      let orderTotal = 0;
      for (let i = 0; i < menuItems.length; i++) {
        if (menuItems[i].checked) {
          orderTotal += Number(menuItems[i].value);
        }
      }
      document.getElementById("billTotal").innerHTML = formatCurrency(orderTotal);
}

function convert() {
    const inputValue = document.getElementById("inputValue").value;
    const unit = document.getElementById("unit").value;
    const resultDiv = document.getElementById("result");
  
    let convertedValue;
    let convertedUnit;
  
    if (unit === "cm") {
      convertedValue = inputValue / 2.54;
      convertedUnit = "inches";
    } else {
      convertedValue = inputValue * 2.54;
      convertedUnit = "centimeters";
    }
  
    resultDiv.innerHTML = `${inputValue} ${unit} = ${convertedValue.toFixed(2)} ${convertedUnit}`;
  }

/* Validade form on Feedback page */
document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      if (validateForm()) {
        form.submit();
      }
    });
  });

  function validateForm() {
    var firstName = document.getElementById("firstName").value.trim();
    var lastName = document.getElementById("lastName").value.trim();
    var email = document.getElementById("email").value.trim();
    var quarter = document.getElementById("quarter").value;
    var likes = document.querySelectorAll('input[name="likes[]"]:checked').length;
    var takeAgain = document.querySelector('input[name="takeAgain"]:checked');
    var comments = document.getElementById("comments").value.trim();

    var errors = [];
    if (!firstName) {
      errors.push("Please enter your first name.");
    }
    if (!lastName) {
      errors.push("Please enter your last name.");
    }
    if (!email) {
      errors.push("Please enter your email address.");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.push("Please enter a valid email address.");
    }
    if (!quarter) {
      errors.push("Please select a quarter.");
    }
    if (!likes) {
      errors.push("Please select at least one thing you liked about the class.");
    }
    if (!takeAgain) {
      errors.push("Please indicate whether you would take another class from Ms. Sure.");
    }
    if (comments.length > 500) {
      errors.push("Comments must be no more than 500 characters.");
    }

    if (errors.length) {
      alert(errors.join("\n"));
      return false;
    } else {
      return true;
    }
  }