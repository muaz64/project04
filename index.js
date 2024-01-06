function placeOrder() {
    document.getElementById("orderSummary").style.display = "block";

    var uname = document.getElementById("txtName");
    var mobile = document.getElementById("txtMobile");
    var burger = document.getElementById("optBurger");
    var springRoll = document.getElementById("optSproll");
    var fries = document.getElementById("optfries");
    var coke = document.getElementById("optcoke");
    var mirinda = document.getElementById("optmirinda");

    var mcost = 0;
    var acost = 0;
    var mname = "";
    var aname = "";

    // Checking meal options
    if (burger.checked) {
        mcost += 120;
        mname = burger.value;
    }
    if (springRoll.checked) {
        mcost += 80;
        mname = springRoll.value;
    }
    if (fries.checked) {
        mcost += 50;
        mname = fries.value;
    }

    // Checking add-ons
    if (coke.checked) {
        acost += 30;
        aname += coke.value + "<br>";
    }
    if (mirinda.checked) {
        acost += 30;
        aname += mirinda.value + "<br>";
    }

    // Adding add-on cost to total meal cost
    mcost += acost;

    // Displaying order summary
    document.getElementById("lblName").innerHTML = uname.value;
    document.getElementById("lblMobile").innerHTML = mobile.value;
    document.getElementById("lblMeal").innerHTML = mname;
    document.getElementById("lblAdd").innerHTML = aname;
    document.getElementById("lblAmount").innerHTML = mcost;
}
