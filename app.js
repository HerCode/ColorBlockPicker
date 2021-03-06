//Javascript
window.onload = init;
var temp = 0;
var level = 1;
var guesses = 3;

function init() {
    rand();
}

function correct() {
    document.getElementById("result").innerHTML = "You are correct! Guess another color.";
    level++;
    reset();
}

function incorrect() {
    document.getElementById("result").innerHTML = "Sorry, you are incorrect.";
    guesses--;
    document.getElementById("guesses").innerHTML = guesses;
    if (guesses === 0) {
        level = 1;
        reset();
        document.getElementById("result").innerHTML = "Guess a color";
    }

}

function reset() {
    $(".box").animate({
        "opacity": "1"
    }, "slow");
    guesses = 3;
    temp = Math.floor((Math.random() * 6) + 1);
    document.getElementById("level").innerHTML = level;
    document.getElementById("guesses").innerHTML = guesses;
}

function rand() {
    temp = Math.floor((Math.random() * 6) + 1);
    $("div.box").click(function() {
        if (temp == $(this).data("id")) {
            correct();
        } else {
            $(this).animate({
                "opacity": "0.25"
            }, "slow");
            incorrect();
        }
    });
}
