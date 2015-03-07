window.addEventListener("keydown", checkKeyPressed, false);

function checkKeyPressed(e) {
    if (e.keyCode == "13") {
        // alert("The 'ENTER' key is pressed.");
        console.log("The 'ENTER' key is pressed.");
    } else if (e.keyCode =="32") {
        console.log("The 'SPACE' key is pressed.");
    } else if (e.keyCode =="9") {
        console.log("The 'TAB' key is pressed.");
    }
}