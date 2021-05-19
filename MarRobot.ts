
//% color="#EE6A50" icon="\uf085" block="MarRobot"
namespace MarRobot {
    const MarRobot_IICADDRESS = 0x14

    

    export enum Servos {
         S1 = 0x00,
         S2 = 0x01,
		 S3 = 0x02,
         S4 = 0x03,
		 S5 = 0x04,
         S6 = 0x05,
		 S7 = 0x06,
         S8 = 0x07
    }

    let servo1Degree = 0;
    let servo2Degree = 0;
    /**
     * Servo Execute
     * @param index Servo Channel; eg: S1
     * @param degree [0-180] degree of servo; eg: 0, 90, 180
    */
    //% blockId=roverbit_servo block="Servo|%index|degree %degree" group="Servo 舵机"
    //% weight=100
    //% degree.min=0 degree.max=180
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
    //% subcategory="执行器_Actuator"
    export function Servo(index: Servos, degree: number): void {
        let buf = pins.createBuffer(2);
        buf[0] = index;
        buf[1] = Math.round(Math.map(degree, 0, 180, 50, 250));
        pins.i2cWriteBuffer(MarRobot_IICADDRESS, buf);
        
        // if (!initialized) {
        //     initPCA9685()
        // }
        // // 50hz: 20,000 us
        // let v_us = (degree * 1800 / 180 + 600) // 0.6 ~ 2.4
        // let value = v_us * 4096 / 20000;
        // if (index == 0x01) {
        //     servo1Degree = degree;
        // } else if (index == 0x02) {
        //     servo2Degree = degree;
        // }
        // setPwm(index + 7, 0, value)
    }

    /**
     * Servo Execute
     * @param index Servo Channel; eg: S1
     * @param degree1 [0-180] degree of servo; eg: 0, 90, 180
	 * @param degree2 [0-180] degree of servo; eg: 0, 90, 180
	 * @param speed [1-10] speed of servo; eg: 1, 10
    */
    //% blockId=motorbit_servospeed block="Servo|%index|degree start %degree1|end %degree2|speed %speed" group="Servo 舵机"
    //% weight=98
    //% degree1.min=0 degree1.max=180
    //% degree2.min=0 degree2.max=180
    //% speed.min=1 speed.max=10
    //% inlineInputMode=inline
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
    //% subcategory="执行器_Actuator"
    export function Servospeed(index: Servos, degree1: number, degree2: number, speed: number): void {
        // 50hz: 20,000 us
		let buf = pins.createBuffer(2);
        buf[0] = index;
        if (degree1 > degree2) {
            for (let i = degree1; i > degree2; i--) {
                let v_us = (i * 1800 / 180 + 600) // 0.6 ~ 2.4
                let value = v_us * 4096 / 20000
                basic.pause(4 * (10 - speed));
                buf[1] = Math.round(Math.map(value, 0, 180, 50, 250));
				pins.i2cWriteBuffer(MarRobot_IICADDRESS, buf);
            }
        }
        else{
            for (let i = degree1; i < degree2; i++) {
                let v_us = (i * 1800 / 180 + 600) // 0.6 ~ 2.4
                let value = v_us * 4096 / 20000
                basic.pause(4 * (10 - speed));
                buf[1] = Math.round(Math.map(value, 0, 180, 50, 250));
				pins.i2cWriteBuffer(MarRobot_IICADDRESS, buf);
            }
        }
    }
}
