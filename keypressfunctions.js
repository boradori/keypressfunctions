(function() {
    var app = angular.module('keypress', []); // Module keypress

    app.controller('mainController', function($scope) { // Controller

        $scope.onKeyPress = function ($event) {
            if ($event.keyCode == "13") {
                console.log("The 'ENTER' key is pressed.");
            } else if ($event.keyCode == "32") {
                console.log("The 'SPACE' key is pressed.");
            } else if ($event.keyCode == "9") {
                console.log("The 'TAB' key is pressed.");
            } else if ($event.keyCode == "8") {
                console.log("The 'BACKSPACE' key is pressed.");
            } else {
                console.log("I only console.log ENTER, SPACE, TAB, and BACKSPACE!")
            }
        }
    });
})(); // For some reason, TAB and BACKSPACE do not work.


// window.addEventListener("keydown", checkKeyPressed, false);

// function checkKeyPressed(e) {
//     if (e.keyCode == "13") {
//         alert("The 'ENTER' key is pressed.");
//         console.log("The 'ENTER' key is pressed.");
//     } else if (e.keyCode =="32") {
//         console.log("The 'SPACE' key is pressed.");
//     } else if (e.keyCode =="9") {
//         console.log("The 'TAB' key is pressed.");
//     }
// }