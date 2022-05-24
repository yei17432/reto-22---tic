radio.onReceivedNumber(function (receivedNumber) {
    potato = receivedNumber
})
input.onGesture(Gesture.Shake, function () {
    if (potato > 0) {
        radio.sendNumber(potato)
        potato = -1
    }
})
input.onButtonPressed(Button.AB, function () {
    potato = randint(10, 20)
})
let potato = 0
radio.setGroup(82)
potato = -1
basic.forever(function () {
    if (potato == 0) {
        basic.showIcon(IconNames.Skull)
        soundExpression.slide.play()
    }
    if (true) {
        basic.clearScreen()
    }
    if (potato > 0) {
        basic.showIcon(IconNames.Target)
        potato += -1
    }
})
