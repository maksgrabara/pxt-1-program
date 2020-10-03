basic.showString("Hello!")
basic.clearScreen()
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        basic.pause(100)
        music.ringTone(262)
    }
})
