function program() {
document.getElementById("pro").style.color="rgb(75, 250, 75)";
document.getElementById("homes").style.color="white";
document.getElementById("contacts").style.color="white";
document.getElementById("plans").style.color="white";
document.getElementById("blogs").style.color="white";
}

function contact() {
    document.getElementById("contacts").style.color="rgb(75, 250, 75)";
    document.getElementById("homes").style.color="white";
    document.getElementById("pro").style.color="white";
    document.getElementById("plans").style.color="white";
    document.getElementById("blogs").style.color="white";
}

function plan() {
    document.getElementById("plans").style.color="rgb(75, 250, 75)";
    document.getElementById("homes").style.color="white";
    document.getElementById("pro").style.color="white";
    document.getElementById("contacts").style.color="white";
    document.getElementById("blogs").style.color="white";
}

function home() {
    document.getElementById("homes").style.color="rgb(75, 250, 75)";
    document.getElementById("pro").style.color="white";
    document.getElementById("contacts").style.color="white";
    document.getElementById("plans").style.color="white";
    document.getElementById("blogs").style.color="white";
}
            
function blog() {
    document.getElementById("homes").style.color="white";
    document.getElementById("pro").style.color="white";
    document.getElementById("contacts").style.color="white";
    document.getElementById("plans").style.color="white";
    document.getElementById("blogs").style.color="rgb(75, 250, 75)";
}

function submit() {
    let Name = document.getElementById("Name");
    let Password = document.getElementById("Password");

    if(Name.value == "") {
        alert("Enter Your Name");
    }
    else if(Password.value == "") {
        alert("Create Your Password");
    }
    else {
        alert("Thanks For Joining The Fitfinity Gym : "+Name.value)
    }
    }

