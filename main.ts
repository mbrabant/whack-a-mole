let startTijd = 0
let opKnopGedrukt = false
let positieMol = 0
let spelBezig = false
input.onGesture(Gesture.Shake, function () {
 basic.showString("3-2-1")
    spelBezig = true
 while (spelBezig == true) {
        positieMol = Math.randomRange(0, 2)
        opKnopGedrukt = false
 basic.pause(300)
 if (positieMol == 0) {
 basic.showLeds(`
                # . . . .
                # . . . .
                # . . . .
                . . . . .
                # . . . .
                `)
        }
 if (positieMol == 1) {
 basic.showLeds(`
                . . . . #
                . . . . #
                . . . . #
                . . . . .
                . . . . #
                `)
        }
 if (positieMol == 2) {
 basic.showLeds(`
                # . . . #
                # . . . #
                # . . . #
                . . . . .
                # . . . #
                `)
        }
 startTijd = input.runningTime()
 while (opKnopGedrukt == false) {
 if (input.runningTime() - startTijd > 1000) {
 game.gameOver()
            }
 if (positieMol == 0 && input.buttonIsPressed(Button.A)) {
                opKnopGedrukt = true
 		basic.showIcon(IconNames.Yes)
 		game.addScore(1)
            } else if (positieMol == 0 && input.buttonIsPressed(Button.B)) {
                opKnopGedrukt = true
 		game.gameOver()
            } else if (positieMol == 1 && input.buttonIsPressed(Button.B)) {
                opKnopGedrukt = true
 		basic.showIcon(IconNames.Yes)
 		game.addScore(1)
            } else if (positieMol == 1 && input.buttonIsPressed(Button.A)) {
                opKnopGedrukt = true
 		game.gameOver()
            } else if (positieMol == 2 && input.buttonIsPressed(Button.AB)) {
                opKnopGedrukt = true
 		basic.showIcon(IconNames.Yes)
		game.addScore(5)
            } else if (positieMol == 2 && input.buttonIsPressed(Button.A)) {
                opKnopGedrukt = true
 		game.gameOver()
} else if (positieMol == 2 && input.buttonIsPressed(Button.B)) {
opKnopGedrukt = true
 game.gameOver()
}
}
}
})
