input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showIcon(IconNames.No)
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showIcon(IconNames.No)
})
basic.showIcon(IconNames.Heart)
