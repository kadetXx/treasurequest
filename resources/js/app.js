function blink(){
    $("h4").fadeOut(500).fadeIn(300);
}

let blinkID = setInterval(blink, 1000);

function randomNumber(size){
    return Math.floor(Math.random() * size);
};

function getDistance(event, target) {
    let diffX = event.offsetX - target.x;
    let diffY = event.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
};

function distanceHint(distance){
    if (distance < 20) {
        return "It's right in front of you!";
    }
    else if (distance < 40){
        return "Very close to treasure!"
    }
    else if (distance < 80){
        return "A little more effort Amigos!"
    }
    else if (distance < 160){
        return "Getting closer... I see you have some skills"
    }
    else if (distance < 320){
        return "Cmon, you can do better!"
    }
    else if (distance < 350){
        return "I'm not sure you are ready for this adventure"
    }
    else {
        return "Are you even a pirate at all?"
    };
};

let width = 570;
let height = 687;

let target = {
    x: randomNumber(width),
    y: randomNumber(height)
};

let clickCount = 0;

function clicker(event){
    clickCount++
    let distance = getDistance(event, target);
    let distanceHinter = distanceHint(distance);
    let remainder = 71 - clickCount;
    $("#distance").text(distanceHinter);
    $("#over").text("\nRemaining Clicks: " + remainder);

    if (distance < 15){
        alert("Welldone Pirate! Treasure found in " + clickCount + " clicks!");
        alert("Reload page to start New game");
        $("#message").text("Reload Page To Start New Game!")
        $("#message").css({"color": "green"})
        $("#over").text("You Won!");
        $("#over").css({"color": "green"})
        $("#distance").hide(3000);
    };

    if (clickCount > 70){
        alert("Game Over!");
        alert("Reload page to start New game");
        $("#message").text("Reload Page To Start New Game!")
        $("#message").css({"color": "green"})
        $("#distance").hide(3000);
        $("#over").text("You Lost!");
    };
};