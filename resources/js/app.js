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
        return "It's right in front of you Captain!";
    }
    else if (distance < 40){
        return "Extremely close to treasure captain! One more step."
    }
    else if (distance < 80){
        return "Very close to trasure, don't look too far!"
    }
    else if (distance < 160){
        return "Almost there! Stay in this area"
    }
    else if (distance < 320){
        return "Getting closer, don't give up yet!"
    }
    else if (distance < 350){
        return "A bit off course, you can do better"
    }
    else {
        return "Totally off, are you even ready for this adventure?"
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
    let remainder = 51 - clickCount;
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

    if (clickCount > 50){
        alert("Game Over!");
        alert("Reload page to start New game");
        $("#message").text("Reload To Start New Game!")
        $("#message").css({"color": "green"})
        $("#distance").hide(3000);
        $("#over").text("You Lost!");
    };
};