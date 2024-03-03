$(document).ready(function () {
    var taskNum = 1;
    const submitBTN = document.querySelector('#submit-button');
    var PasswordField = document.getElementById('password-input');
    var duckIcon = document.getElementById('duck-icon');

    submitBTN.addEventListener('click', function () {
        var UserIn = PasswordField.value;

        if (taskNum == 1) {
            if (UserIn == "3") {
                document.getElementById('task-num').innerText = "Task#2: I still need an outfit!!";
                document.getElementById('task-desc').innerText = "There are two ducks in front of a duck, two ducks behind a duck and a duck in the middle. How many ducks are there?"
;
                duckIcon.src = 'Images/Task1_Complete.png';//Changes Image
                PasswordField.value = "";
                taskNum++;
            } else {
                alert("Quack Quack!");
            }
        } else if (taskNum == 2) {
            if (UserIn == "Quackers") {
                document.getElementById('task-num').innerText = "Task #3";
                document.getElementById('task-desc').innerText = "What foods does a duck prefer eating with soup?"
;
                PasswordField.value = "";
                taskNum++;
            } else {
                alert("Quack Quack!");
            }
        } else if (taskNum == 3) {
            if (UserIn == "24") {
                document.getElementById('task-num').innerText = "Task completed!";
                document.getElementById('task-desc').innerText = "How many times has USC won the Rose Bowl?"
;
                errorMessage.style.color = "black";
                taskNum++;
            } else {
                errorMessage.style.color = "red";
                alert("Quack Quack!");
            }
        }
    });
});
