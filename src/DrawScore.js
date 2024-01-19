function drawScore() {
    context.fillStyle = "#fcfcfc";
    context.font = "50px Arial";

    if (currentState == states.playing) {
        context.fillText(Ufo.score, 15, 48);
    }

    if (currentState == states.lost) {
        facebook.style.display = "block";

        context.fillStyle = "blue";
        context.fillRect(Math.floor(WIDTH / 2 - 50), Math.floor(HEIGHT / 2 - 80), 100, 100);
        context.save();
        context.translate(Math.floor(WIDTH / 2), Math.floor(HEIGHT / 2 - 30));
        context.fillStyle = "#fff";

        if (Ufo.score > rank) {
            context.fillText("New record!", -145, -65);
        }
        else if (rank < 10) {
            context.fillText("Best score " + rank, -135, -65);
        }
        else if (rank >= 10 && rank < 100) {
            context.fillText("Best score " + rank, -150, -65);
        } else {
            context.fillText("Best score " + rank, -165, -65);
        }

        if (Ufo.score < 10) {
            context.fillText(Ufo.score, -13, 19);
        }
        else if (Ufo.score >= 10 && Ufo.score < 100) {
            context.fillText(Ufo.score, -26, 19);
        }
        else {
            context.fillText(Ufo.score, -39, 19);
        }
        context.restore();
    }
}
