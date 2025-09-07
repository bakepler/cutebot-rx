function setSpeed () {
    Right = 0
    Left = 0
    speed = 512 / rockerValueY
    if (rockerValueX > 0) {
        Left = speed * (512 / rockerValueY)
    }
    if (rockerValueX < 0) {
        Right = speed * (512 / rockerValueY)
    }
    cuteBot.motors(Left, Right)
}
radio.onReceivedString(function (receivedString) {
    if (receivedString == "a") {
        buttonValue = 0
    }
    if (receivedString.includes("rockerX")) {
        rockerValueX = parseRockerValue(receivedString)
    }
    if (receivedString.includes("rockerY")) {
        rockerValueY = parseRockerValue(receivedString)
    }
})
function parseRockerValue (value: string) {
    return parseFloat(value.substr(7, 20000))
}
let buttonValue = 0
let rockerValueX = 0
let rockerValueY = 0
let speed = 0
let Left = 0
let Right = 0
radio.setGroup(1)
basic.forever(function () {
    setSpeed()
})
