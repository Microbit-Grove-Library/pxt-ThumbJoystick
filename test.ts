let joystick: grovejoystick.GroveJoystick = undefined;

basic.forever(() => {
    let key = joystick.read(GroveJoystickPins.P0, GroveJoystickPins.P1);
    basic.showNumber(key);
    basic.pause(250);
})