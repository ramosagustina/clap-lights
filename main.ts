input.onSound(DetectedSound.Loud, function () {
    Lights0n = !(Lights0n)
    if (Lights0n) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    } else {
        basic.clearScreen()
    }
})
let Lights0n = false
input.setSoundThreshold(SoundThreshold.Loud, 128)
