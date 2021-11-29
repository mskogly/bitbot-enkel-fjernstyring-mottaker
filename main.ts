radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        bitbot.motor(BBMotor.Left, 0)
        bitbot.motor(BBMotor.Right, 0)
        basic.showNumber(receivedNumber)
    }
    if (receivedNumber == 1) {
        bitbot.motor(BBMotor.Left, 600)
        bitbot.motor(BBMotor.Right, 600)
        basic.showNumber(receivedNumber)
    }
    if (receivedNumber == 2) {
        bitbot.motor(BBMotor.Left, -400)
        bitbot.motor(BBMotor.Right, -400)
        basic.showNumber(receivedNumber)
    }
})
bitbot.select_model(bitbot.BBModels(BBModel.Auto))
radio.setGroup(10)
