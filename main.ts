let x = 0
input.onGesture(Gesture.Shake, function () {
    if (true) {
        x = randint(0, 2)
    }
    if (x == 0) {
        basic.showIcon(IconNames.Heart)
    } else if (x == 1) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
})
