function placeOrder() {
  let choice = "";
  let total = 0;

  if (document.getElementById("Meal").checked) {
    choice = "Meal";
  }
  else if (document.getElementById("Burger").checked) {
    choice = "Burger";
  }
  else if (document.getElementById("Fries").checked) {
    choice = "Fries";
  }
  else {
    document.getElementById("orderResult").innerText = "Select 1 item!";
    return;
  }

  switch (choice) {
    case "Meal":
      total = 300;
      break;

    case "Burger":
      total = 150;
      break;

    case "Fries":
      total = 100;
      break;
  }

  document.getElementById("orderResult").innerText =
    "Selected: " + choice + " | Total Bill = ₹" + total;
}