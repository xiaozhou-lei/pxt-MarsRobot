


//% color="#EE6A50" icon="\uf085" block="MarsRobot"
namespace MarsRobot  {
    // const PCA9685_ADDRESS = 0x40
    // const MODE1 = 0x00
    // const MODE2 = 0x01
    // const SUBADR1 = 0x02
    // const SUBADR2 = 0x03
    // const SUBADR3 = 0x04
    // const PRESCALE = 0xFE
    // const LED0_ON_L = 0x06
   

    // let initialized = false
    // let neoStrip: neopixel.Strip;
    // let matBuf = pins.createBuffer(17);
    // let distanceBuf = 0;

   

	
    // function i2cwrite(addr: number, reg: number, value: number) {
    //     let buf = pins.createBuffer(2)
    //     buf[0] = reg
    //     buf[1] = value
    //     pins.i2cWriteBuffer(addr, buf)
    // }

    // function i2cread(addr: number, reg: number) {
    //     pins.i2cWriteNumber(addr, reg, NumberFormat.UInt8BE);
    //     let val = pins.i2cReadNumber(addr, NumberFormat.UInt8BE);
    //     return val;
    // }

    // function initPCA9685(): void {
    //     i2cwrite(PCA9685_ADDRESS, MODE1, 0x00)
    //     setFreq(50);
    //     for (let idx = 0; idx < 16; idx++) {
    //         setPwm(idx, 0, 0);
    //     }
    //     initialized = true
    // }

    // function setFreq(freq: number): void {
    //     // Constrain the frequency
    //     let prescaleval = 25000000;
    //     prescaleval /= 4096;
    //     prescaleval /= freq;
    //     prescaleval -= 1;
    //     let prescale = prescaleval; //Math.Floor(prescaleval + 0.5);
    //     let oldmode = i2cread(PCA9685_ADDRESS, MODE1);
    //     let newmode = (oldmode & 0x7F) | 0x10; // sleep
    //     i2cwrite(PCA9685_ADDRESS, MODE1, newmode); // go to sleep
    //     i2cwrite(PCA9685_ADDRESS, PRESCALE, prescale); // set the prescaler
    //     i2cwrite(PCA9685_ADDRESS, MODE1, oldmode);
    //     control.waitMicros(5000);
    //     i2cwrite(PCA9685_ADDRESS, MODE1, oldmode | 0xa1);
    // }

    // function setPwm(channel: number, on: number, off: number): void {
    //     if (channel < 0 || channel > 15)
    //         return;
    //     //serial.writeValue("ch", channel)
    //     //serial.writeValue("on", on)
    //     //serial.writeValue("off", off)

    //     let buf = pins.createBuffer(5);
    //     buf[0] = LED0_ON_L + 4 * channel;
    //     buf[1] = on & 0xff;
    //     buf[2] = (on >> 8) & 0xff;
    //     buf[3] = off & 0xff;
    //     buf[4] = (off >> 8) & 0xff;
    //     pins.i2cWriteBuffer(PCA9685_ADDRESS, buf);
    // }

    // function stopMotor(index: number) {
    //     setPwm((index - 1) * 2, 0, 0);
    //     setPwm((index - 1) * 2 + 1, 0, 0);
    // }

    // let servo1Degree = 0;
    // let servo2Degree = 0;
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
    export function Servo(): void {
        let buf = pins.createBuffer(2);
        buf[0] = 0x07;
        buf[1] = 0x2d;
        pins.i2cWriteBuffer(0x14, buf);


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

    // /**
    //  * Servo Execute
    //  * @param index Servo Channel; eg: S1
    //  * @param degree1 [0-180] degree of servo; eg: 0, 90, 180
	//  * @param degree2 [0-180] degree of servo; eg: 0, 90, 180
	//  * @param speed [1-10] speed of servo; eg: 1, 10
    // */
    // //% blockId=motorbit_servospeed block="Servo|%index|degree start %degree1|end %degree2|speed %speed" group="Servo 舵机"
    // //% weight=98
    // //% degree1.min=0 degree1.max=180
    // //% degree2.min=0 degree2.max=180
    // //% speed.min=1 speed.max=10
    // //% inlineInputMode=inline
    // //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
    // //% subcategory="执行器_Actuator"
    // export function Servospeed(index: Servos, degree1: number, degree2: number, speed: number): void {
    //     if (!initialized) {
    //         initPCA9685()
    //     }
    //     // 50hz: 20,000 us
    //     if (degree1 > degree2) {
    //         for (let i = degree1; i > degree2; i--) {
    //             let v_us = (i * 1800 / 180 + 600) // 0.6 ~ 2.4
    //             let value = v_us * 4096 / 20000
    //             basic.pause(4 * (10 - speed));
    //             setPwm(index + 7, 0, value)
    //         }
    //     }
    //     else{
    //         for (let i = degree1; i < degree2; i++) {
    //             let v_us = (i * 1800 / 180 + 600) // 0.6 ~ 2.4
    //             let value = v_us * 4096 / 20000
    //             basic.pause(4 * (10 - speed));
    //             setPwm(index + 7, 0, value)
    //         }
    //     }
    //     if (index == 0x01) {
    //         servo1Degree = degree2;
    //     } else if (index == 0x02) {
    //         servo2Degree = degree2;
    //     }
    // }

    // //% blockId=roverbit_getServoDegree block="Get Servo|%index|degree "  group="Servo 舵机"
    // //% weight=97
    // //% subcategory="执行器_Actuator"
    // export function GetServoDegree(index: Servos): number {
    //     if (index == 0x01) {
    //        return servo1Degree ;
    //     } else {
    //        return servo2Degree ;
    //     }
    // }

    // //% blockId=roverbit_motor_run block="Motor|%index|speed %speed"  group="Motor 电机"
    // //% weight=85
    // //% speed.min=-255 speed.max=255
    // //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
    // //% subcategory="执行器_Actuator"
    // export function SportMotorRun(): void {
    //     MotorRun(index, speed);
    // }

    // function MotorRun(index: number, speed: number): void {
    //     if (!initialized) {
    //         initPCA9685()
    //     }
    //     if (index == 4 || index == 2 || index == 8) {
    //         speed = -speed;
    //     }
    //     speed = speed * 16; // map 255 to 4096
    //     if (speed >= 4096) {
    //         speed = 4095
    //     }
    //     if (speed <= -4096) {
    //         speed = -4095
    //     }
    //     if (index > 8 || index <= 0)
    //         return
    //     let pp = (index - 1) * 2
    //     let pn = (index - 1) * 2 + 1

    //     if (speed >= 0) {
    //         setPwm(pp, 0, speed)
    //         setPwm(pn, 0, 0)
    //     } else {
    //         setPwm(pp, 0, 0)
    //         setPwm(pn, 0, -speed)
    //     }
    // }

    // /**
    //  * Execute two motors at the same time
    //  * @param motor1 First Motor; eg: M1, M2
    //  * @param speed1 [-255-255] speed of motor; eg: 150, -150
    //  * @param motor2 Second Motor; eg: M3, M4
    //  * @param speed2 [-255-255] speed of motor; eg: 150, -150
    // */
    // //% blockId=roverbit_motor_dual block="Motor|%motor1|speed %speed1|%motor2|speed %speed2"  group="Motor 电机"
    // //% weight=84
    // //% speed1.min=-255 speed1.max=255
    // //% speed2.min=-255 speed2.max=255
    // //% inlineInputMode=inline
    // //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
    // //% subcategory="执行器_Actuator"
    // export function MotorRunDual(motor1: Motors, speed1: number, motor2: Motors, speed2: number): void {
    //     MotorRun(motor1, speed1);
    //     MotorRun(motor2, speed2);
    // }

    // /**
    //  * Execute single motors with delay
    //  * @param index Motor Index; eg: M1, M2, M3, M4
    //  * @param speed [-255-255] speed of motor; eg: 150, -150
    //  * @param delay seconde delay to stop; eg: 1
    // */
    // //% blockId=roverbit_motor_rundelay block="Motor|%index|speed %speed|delay %delay|s"  group="Motor 电机"
    // //% weight=81
    // //% speed.min=-255 speed.max=255
    // //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
    // //% subcategory="执行器_Actuator"
    // export function SportMotorRunDelay(index: Motors, speed: number, delay: number): void {
    //     MotorRunDelay(index, speed, delay);
    // }

    // function MotorRunDelay(index: number, speed: number, delay: number): void {
    //     MotorRun(index, speed);
    //     basic.pause(delay * 1000);
    //     MotorRun(index, 0);
    // }
    
    //  /**
    //  * Execute single motors with delay
    //  * @param index Motor Index; eg: M1
    // */
    // //% blockId=roverbit_stop block="Sport Motor Stop|%index|" group="Motor 电机"
    // //% weight=80
    // //% subcategory="执行器_Actuator"
    // export function SportMotorStop(index: Motors): void {
    //     MotorStop(index);
    // }

    // export function MotorStop(index: number): void {
    //     MotorRun(index, 0);
    // }

    // //% blockId=roverbit_stop_all block="Motor Stop All" group="Motor 电机"
    // //% weight=79
    // //% blockGap=50
    // //% subcategory="执行器_Actuator"
    // export function MotorStopAll(): void {
    //     if (!initialized) {
    //         initPCA9685()
    //     }
    //     for (let idx = 1; idx <= 8; idx++) {
    //         if (idx != 5 && idx != 6)
    //         stopMotor(idx);
    //     }
    // }

    //  /**
    //  * Execute single motors with delay
    //  * @param index Motor Index; eg: M7
    //  * @param speed [-255-255] speed of motor; eg: 150, -150
    // */
    // //% blockId=roverbit_clamp_motor_run block="Clamp Motor|%index|speed %speed"  group="Motor 电机"
    // //% weight=78
    // //% speed.min=-255 speed.max=255
    // //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
    // //% subcategory="执行器_Actuator"
    // export function ClampMotorRun(index: ClampMotors, speed: number): void {
    //     MotorRun(index, speed);
    // }

    // /**
    //  * Execute single motors with delay
    //  * @param index Motor Index; eg: M7
    //  * @param speed [-255-255] speed of motor; eg: 150, -150
    //  * @param delay seconde delay to stop; eg: 1
    // */
    // //% blockId=roverbit_clamp_motor_rundelay block="Clamp Motor|%index|speed %speed|delay %delay|s"  group="Motor 电机"
    // //% weight=77
    // //% speed.min=-255 speed.max=255
    // //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
    // //% subcategory="执行器_Actuator"
    // export function ClampMotorRunDelay(index: ClampMotors, speed: number, delay: number): void {
    //     MotorRunDelay(index, speed, delay);
    // }

    //  /**
    //  * Execute single motors with delay
    //  * @param index Motor Index; eg: M7
    //  * 
    // */
    // //% blockId=roverbit_clamp_stop block="Clamp Motor Stop|%index|" group="Motor 电机"
    // //% weight=76
    // //% subcategory="执行器_Actuator"
    // export function ClampMotorStop(index: ClampMotors): void {
    //     MotorStop(index);
    // }

//     /**
//      * Get RUS04 distance
//      * @param pin Microbit ultrasonic pin; eg: P0
//     */
//     //% blockId=roverbit_ultrasonic block="Read RgbUltrasonic Distance|pin %pin|cm" group="RGB Ultrasonic 超声波传感器"
//     //% weight=70
//     //% subcategory="传感器_Sensor"
//     export function Ultrasonic(pin: DigitalPin): number {
//         // send pulse
//         pins.setPull(pin, PinPullMode.PullDown); 
//         pins.digitalWritePin(pin, 0);
//         control.waitMicros(2);
//         pins.digitalWritePin(pin, 1);
//         control.waitMicros(50);
//         pins.digitalWritePin(pin, 0);
//         // read pulse
//         let d = pins.pulseIn(pin, PulseValue.High, 25000);
//         let ret = d;
//         // filter timeout spikes
//         if (ret == 0 && distanceBuf != 0) {
//             ret = distanceBuf;
//         }
//         distanceBuf = d;
//         return Math.floor(ret / 40 + (ret / 800));
//         // Correction
//     }

//     function RgbDisplay(indexstart: number, indexend: number, rgb: RgbColors): void {
//         for (let i = indexstart; i <= indexend; i++) {
// 			neoStrip.setPixelColor(i, rgb);
// 		}
//         neoStrip.show();
//     }

// 	//% blockId="roverbit_rus04" block="RgbUltrasonic|%RgbUltrasonics|show color %rgb|effect %ColorEffect" group="RGB Ultrasonic 超声波传感器"
//     //% weight=69
//     //% subcategory="传感器_Sensor"
//     export function RUS_04(index: RgbUltrasonics, rgb: RgbColors, effect: ColorEffect): void {
// 	    if(rgb == RgbColors.Red) {
// 	  	rgb = RgbColors.Green;
//              }else if(rgb == RgbColors.Green) {
// 	     	rgb = RgbColors.Red;
// 	     }
	    
//         let start, end;
//         if (!neoStrip) {
//             neoStrip = neopixel.create(DigitalPin.P11, 10, NeoPixelMode.RGB);
//             neoStrip.clear();
//         }
//         if (index == RgbUltrasonics.Left) {
//             start = 4;
//             end = 6;
//         } else if (index == RgbUltrasonics.Right) {
//             start = 7;
//             end = 9;
// 		} else if (index == RgbUltrasonics.All) {
//             start = 4;
//             end = 9;
// 		}
//         switch(effect) {
//             case ColorEffect.None:
//                 RgbDisplay(start, end, rgb);
//                 break;
//             case ColorEffect.Breathing:
//             for (let i = 0; i < 255; i+=2) {
//                 neoStrip.setBrightness(i);
//                 RgbDisplay(start, end, rgb);
//                 //basic.pause((255 - i)/2);
//                 basic.pause((i < 20)? 80 :(255/i));
//             }
//             for (let i = 255; i > 0; i-=2) {
//                 neoStrip.setBrightness(i);
//                 RgbDisplay(start, end, rgb);
//                 basic.pause((i < 20)? 80 :(255/i));
//             }
//             break;
//             case ColorEffect.Rotate:
//                 for (let i = 0; i < 4; i++) {
//                     neoStrip.setPixelColor(start, rgb);
//                     neoStrip.setPixelColor(start+1, 0);
//                     neoStrip.setPixelColor(start+2, 0);
//                     if (index == RgbUltrasonics.All) {
//                         neoStrip.setPixelColor(end-2, rgb);
//                         neoStrip.setPixelColor(end-1, 0);
//                         neoStrip.setPixelColor(end, 0);
//                     }
//                     neoStrip.show();
//                     basic.pause(150);
//                     neoStrip.setPixelColor(start, 0);
//                     neoStrip.setPixelColor(start+1, rgb);
//                     neoStrip.setPixelColor(start+2, 0);
//                     if (index == RgbUltrasonics.All) {
//                         neoStrip.setPixelColor(end-2, 0);
//                         neoStrip.setPixelColor(end-1, rgb);
//                         neoStrip.setPixelColor(end, 0);
//                     }
//                     neoStrip.show();
//                     basic.pause(150);
//                     neoStrip.setPixelColor(start, 0);
//                     neoStrip.setPixelColor(start+1, 0);
//                     neoStrip.setPixelColor(start+2, rgb);
//                     if (index == RgbUltrasonics.All) {
//                         neoStrip.setPixelColor(end-2, 0);
//                         neoStrip.setPixelColor(end-1, 0);
//                         neoStrip.setPixelColor(end, rgb);
//                     }
//                     neoStrip.show();
//                     basic.pause(150);
//                 }
//                 RgbDisplay(4, 9, 0);
//                 break;
//             case ColorEffect.Flash:
//             for (let i = 0; i < 6; i++) {
//                 RgbDisplay(start, end, rgb);
//                 basic.pause(150);
//                 RgbDisplay(start, end, 0);
//                 basic.pause(150);
//             }
//             break;
//         }
//     }

//     export enum DHT11Type {
//         //% block="temperature(℃)" enumval=0
//         DHT11_temperature_C,

//         //% block="temperature(℉)" enumval=1
//         DHT11_temperature_F,

//         //% block="humidity(0~100)" enumval=2
//         DHT11_humidity
//     }

//     /**
//      * get dht11 temperature and humidity Value
//      * @param dht11pin describe parameter here, eg: DigitalPin.P15    
//      * 
//      *  */
//     //% blockId="readdht11" block="value of dht11 %dht11type| at pin %dht11pin" group="DHT11 温湿度传感器"
//     //% weight=66
//     //% subcategory="传感器_Sensor"
//     export function Dht11value(dht11pin: DigitalPin, dht11type: DHT11Type ): number {
//         pins.digitalWritePin(dht11pin, 0)
//         basic.pause(18)
//         let i = pins.digitalReadPin(dht11pin)
//         pins.setPull(dht11pin, PinPullMode.PullUp);
//         switch (dht11type) {
//             case 0:
//                 let dhtvalue1 = 0;
//                 let dhtcounter1 = 0;
//                 while (pins.digitalReadPin(dht11pin) == 1);
//                 while (pins.digitalReadPin(dht11pin) == 0);
//                 while (pins.digitalReadPin(dht11pin) == 1);
//                 for (let i = 0; i <= 32 - 1; i++) {
//                     while (pins.digitalReadPin(dht11pin) == 0);
//                     dhtcounter1 = 0
//                     while (pins.digitalReadPin(dht11pin) == 1) {
//                         dhtcounter1 += 1;
//                     }
//                     if (i > 15) {
//                         if (dhtcounter1 > 2) {
//                             dhtvalue1 = dhtvalue1 + (1 << (31 - i));
//                         }
//                     }
//                 }
//                 return ((dhtvalue1 & 0x0000ff00) >> 8);
//                 break;
//             case 1:
//                 while (pins.digitalReadPin(dht11pin) == 1);
//                 while (pins.digitalReadPin(dht11pin) == 0);
//                 while (pins.digitalReadPin(dht11pin) == 1);
//                 let dhtvalue = 0;
//                 let dhtcounter = 0;
//                 for (let i = 0; i <= 32 - 1; i++) {
//                     while (pins.digitalReadPin(dht11pin) == 0);
//                     dhtcounter = 0
//                     while (pins.digitalReadPin(dht11pin) == 1) {
//                         dhtcounter += 1;
//                     }
//                     if (i > 15) {
//                         if (dhtcounter > 2) {
//                             dhtvalue = dhtvalue + (1 << (31 - i));
//                         }
//                     }
//                 }
//                 return Math.round((((dhtvalue & 0x0000ff00) >> 8) * 9 / 5) + 32);
//                 break;
//             case 2:
//                 while (pins.digitalReadPin(dht11pin) == 1);
//                 while (pins.digitalReadPin(dht11pin) == 0);
//                 while (pins.digitalReadPin(dht11pin) == 1);

//                 let value = 0;
//                 let counter = 0;

//                 for (let i = 0; i <= 8 - 1; i++) {
//                     while (pins.digitalReadPin(dht11pin) == 0);
//                     counter = 0
//                     while (pins.digitalReadPin(dht11pin) == 1) {
//                         counter += 1;
//                     }
//                     if (counter > 3) {
//                         value = value + (1 << (7 - i));
//                     }
//                 }
//                 return value;
//             default:
//                 return 0;
//         }
//     }

//     /**
//      * get soil moisture
//      * @param soilmoisturePin describe parameter here, eg: AnalogPin.P1  
//      * 
//      *  */
//     //% blockId="readsoilmoisture" block="value of soil moisture(0~100) at pin %soilmoisturePin" group="Soil Moisture 土壤湿度传感器"
//     //% weight=65
//     //% subcategory="传感器_Sensor"
//     export function ReadSoilHumidity(soilmoisturePin: AnalogPin): number {
//         let voltage = 0;
//         let soilmoisture = 0;
//         voltage = pins.map(
//             pins.analogReadPin(soilmoisturePin),
//             0,
//             1023,
//             0,
//             1000
//         );
//         soilmoisture = voltage;
//         return Math.round(soilmoisture);
//     }


//     /**
//      * get human Body
//      * @param bodyPin describe parameter here, eg: DigitalPin.P16  
//      * 
//      *  */

//     //% blockId="roverbit_humanBodySensor" block="Human body sensor get Body at pin %bodyPin" group="Human IR 人体红外传感器"
//     //% weight=64
//     //% subcategory="传感器_Sensor"
//    export function HumanBodySensor(bodyPin: DigitalPin): boolean {
//         pins.digitalWritePin(bodyPin, 0)
//         if (pins.digitalReadPin(bodyPin) == 1) {
//             return true;
//         }else {
//             return false;
//         }
//     }

//     /**
//      * get rotaryPotentiometer
//      * @param rotaryPin describe parameter here, eg: AnalogPin.P2 
//      * 
//      *  */
//     //% blockId=rotaryPotentiometer block="rotaryPotentiometer analog pin %rotaryPin"  group="Potentiometer 旋转电位器"
//     //% weight=70
//     //% subcategory="传感器_Sensor"
//     export function RotaryPotentiometer(rotaryPin: AnalogPin): number {
//         let row = pins.analogReadPin(rotaryPin)
//         let V = (row / 1023) * 5
//         return   V;
//     }
	          
//     /**
//      * button pushed.
//      */
//     //% blockId=ir_received_left_event
//     //% block="on |%btn| button pressed" shim=MSP_Rover::onPressEvent group="RC 红外遥控器"
//     //% subcategory="遥控器_RC"
//     export function OnPressEvent(btn: RemoteButton, body: () => void): void {
//         return;
//     }

//     /**
//      * initialises local variablesssss
//      *  @param pin describe parameter here, eg: IrPins.P5  
//      */
//     //% blockId=ir_init 
//     //% block="connect ir receiver to %pin" shim=MSP_Rover::init group="RC 红外遥控器"
//     //% subcategory="遥控器_RC"
//     export function Init(pin: IrPins): void {
//         return;
//     }



//     //% blockId=IoT_init 
//     //% block="IoT_init" 
//     //% subcategory="物联网_IoT"
//     export function IoTInit(): void {
//         return;
//     }

//      //% blockId=AIVision_init
//     //% block="AIVision_init"  
//     //% subcategory="摄像头_AI"
//     export function AIVisionInit(): void {
//         return;
//     }
    
}
