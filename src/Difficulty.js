function difficulty() {
    if (speed == 8 && Ufo.score == 20) {
        speed = 12;
        sounds.difficulty.play();
    }

    if (speed == 12 && Ufo.score == 40) {
        speed = 16;
        sounds.difficulty.play();
    }

    if (speed == 16 && Ufo.score == 80) {
        speed = 19;
        sounds.difficulty.play();
    }

    if (speed == 19 && Ufo.score == 100) {
        speed = 24;
        sounds.difficulty.play();
    }
}
