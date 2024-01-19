function draw() {
    facebook = document.getElementById('facebook');

    for (let i = 0; i < NUM_OBSTACLES; i++) {
        collider[i].draw(context, 0, 0);
    }

    Ufo_sprite[0].draw(context, 0, 0);
    Ufo_sprite[1].draw(context, 0, 0);
    Ufo_sprite[2].draw(context, 0, 0);

    context.clearRect(0, 0, WIDTH, HEIGHT);
    ground.clean();
    background.clean();

    background.draw();

    if (currentState == states.start) {
        facebook.style.display = "none";
        speed = initial_speed;
        menu_sprite.draw(backgroundContext, 190, 220);
    }

    if (currentState == states.playing) {
        obstacles.draw();
    }

    drawScore();
    drawSoundControl();
    ground.draw();

    if (currentState != states.start) {
        Ufo.draw();
    }
}
