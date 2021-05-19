
enum RemoteButton {
        //% block=A
        A = 0x45,
        //% block=B
        B = 0x46,
        //% block=C
        C = 0x47,
        //% block=D
        D = 0x44,
        //% block=UP
        UP = 0x40,
        //% block=+
        Add = 0x43,
        //% block=LEFT
        Left = 0x07,
        //% block=OK
        Ok = 0x15,
        //% block=RIGHT
        Right = 0x09,
        //% block=DOWN
        Down = 0x19,
        //% block=-
        EQ = 0x0d,
        //% block=0
        NUM0 = 0x16,
        //% block=1
        NUM1 = 0x0c,
        //% block=2
        NUM2 = 0x18,
        //% block=3
        NUM3 = 0x5e,
        //% block=4
        NUM4 = 0x8,
        //% block=5
        NUM5 = 0x1c,
        //% block=6
        NUM6 = 0x5a,
        //% block=7
        NUM7 = 0x42,
        //% block=8
        NUM8 = 0x52,
        //% block=9
        NUM9 = 0x4A,
    }


 enum IrPins {
        P0 = 3,
        P1 = 2,
        P2 = 1,
        P3 = 4,
        P4 = 5,
        P5 = 17,
        P6 = 12,
        P7 = 11,
        P8 = 18,
        P9 = 10,
        P10 = 6,
        P11 = 26,
        P12 = 20,
        P13 = 23,
        P14 = 22,
        P15 = 21,
        P16 = 16,
        P19 = 0,
        P20 = 30,
    }

enum RgbColors {
        //% block=none
        None = 0x000000,
        //% block=red
        Red = 0xFF0000,
        //% block=orange
        Orange = 0xFFA500,
        //% block=yellow
        Yellow = 0xFFFF00,
        //% block=green
        Green = 0x00FF00,
        //% block=blue
        Blue = 0x0000FF,
        //% block=indigo
        Indigo = 0x4b0082,
        //% block=violet
        Violet = 0x8a2be2,
        //% block=purple
        Purple = 0xFF00FF,
        //% block=white
        White = 0xFFFFFF,
        //% block=black
        Black = 0x000000
}

enum RgbUltrasonics {
    //% block=left
    Left = 0x00,
    //% block=right
    Right = 0x01,
    //% block=all
    All = 0x02
}

enum ColorEffect {
    //% block=none
    None = 0x00,
    //% block=breathing
    Breathing = 0x01,
    //% block=rotate
    Rotate = 0x02,
    //% block=flash
    Flash = 0x03
}

//% color="#EE6A50" icon="\uf085" block="MSP_Rover"
namespace MSP_Rover {
    const PCA9685_ADDRESS = 0x40
    const MODE1 = 0x00
    const MODE2 = 0x01
    const SUBADR1 = 0x02
    const SUBADR2 = 0x03
    const SUBADR3 = 0x04
    const PRESCALE = 0xFE
    const LED0_ON_L = 0x06
    const LED0_ON_H = 0x07
    const LED0_OFF_L = 0x08
    const LED0_OFF_H = 0x09
    const ALL_LED_ON_L = 0xFA
    const ALL_LED_ON_H = 0xFB
    const ALL_LED_OFF_L = 0xFC
    const ALL_LED_OFF_H = 0xFD

    const STP_CHA_L = 2047
    const STP_CHA_H = 4095

    const STP_CHB_L = 1
    const STP_CHB_H = 2047

    const STP_CHC_L = 1023
    const STP_CHC_H = 3071

    const STP_CHD_L = 3071
    const STP_CHD_H = 1023

    export enum Servos {
         S1 = 0x01,
         S2 = 0x02,
        
    }

    export enum Motors {
        M1 = 0x3,
        M2 = 0x1,
        M3 = 0x7,
        M4 = 0x4,
        M5 = 0x2,
        M6 = 0x8,
    }

    export enum ClampMotors {
        M7 = 0x6,	
    }

    export enum Steppers {
        STPM1 = 0x2,
        STPM2 = 0x1
    }

    export enum RGB {
        rgb1 = 0x0,
        rgb2 = 0x1,
        rgb3 = 0x2,
        rgb4 = 0x3
    }

    export enum Turns {
        //% blockId="T1B4" block="1/4"
        T1B4 = 90,
        //% blockId="T1B2" block="1/2"
        T1B2 = 180,
        //% blockId="T1B0" block="1"
        T1B0 = 360,
        //% blockId="T2B0" block="2"
        T2B0 = 720,
        //% blockId="T3B0" block="3"
        T3B0 = 1080,
        //% blockId="T4B0" block="4"
        T4B0 = 1440,
        //% blockId="T5B0" block="5"
        T5B0 = 1800
    }

    let initialized = false
    let neoStrip: neopixel.Strip;
    let matBuf = pins.createBuffer(17);
    let distanceBuf = 0;

   

    //% blockId=roverRGB_init block="MSP_Rover init" color="#EE6A50"  group="初始化 MSP_Rover"
    export function RoverRGBInit(): void {
        let LED1 = rgb().range(0, 1);
        let LED2 = rgb().range(1, 1);
        let LED3 = rgb().range(2, 1);
        let LED4 = rgb().range(3, 1);
        LED1.showColor(neopixel.colors(NeoPixelColors.Red));
        basic.pause(500);
        LED1.clear();
        LED2.showColor(neopixel.colors(NeoPixelColors.Green));
        basic.pause(500);
        LED2.clear();
        LED3.showColor(neopixel.colors(NeoPixelColors.Blue));
        basic.pause(500);
        LED3.clear();
        LED4.showColor(neopixel.colors(NeoPixelColors.White));
        basic.pause(500);
        LED4.clear();
        LED4.show();
    }

    //% blockId="roverbit_clearRGB" block="clear board RGB " group="RGB 板载彩灯"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
    //% subcategory="显示器_Displayer"
    export function ClearRgb(): void {
        neoStrip.clear();
        neoStrip.show();
    }
	
    /**
     * Init RGB pixels mounted on roverbit
     */
    //% blockId="roverbit_setRgbColor" block="set board RGB %rgb color %rgbColor" group="RGB 板载彩灯"
    //% subcategory="显示器_Displayer"
    export function SetColor(rgb: RGB, rgbColor: RgbColors): void {
        RgbDisplay(rgb, rgb, rgbColor);
    }
	
    /**
     * Init RGB pixels mounted on roverbit
     * @param bright [0-100] ; eg: 50
     */
    //% blockId="roverbit_setBright" block="set board RGB Brightness %bright" group="RGB 板载彩灯"
    //% bright.min=0 bright.max=100
    //% subcategory="显示器_Displayer"
    export function SetBrightness(bright: number): void {
       if (!neoStrip) {
            neoStrip = neopixel.create(DigitalPin.P11, 10, NeoPixelMode.RGB)
        }
        neoStrip.setBrightness(bright);
    }
	
	
   /**
     * Init RGB pixels mounted on roverbit
     */
    //% blockId="roverbit_rgb" block="board RGB" group="RGB 板载彩灯"
    //% subcategory="显示器_Displayer"
    export function rgb(): neopixel.Strip {
        if (!neoStrip) {
            neoStrip = neopixel.create(DigitalPin.P11, 10, NeoPixelMode.RGB)
        }
        return neoStrip;
    }

    /**
	 *  LCD 1602
	 */	
		
    let i2cAddr: number
    let BK: number
    let RS: number

    function setreg(d: number) {
        pins.i2cWriteNumber(i2cAddr, d, NumberFormat.Int8LE)
        basic.pause(1)
    }

    function set(d: number) {
        d = d & 0xF0
        d = d + BK + RS
        setreg(d)
        setreg(d + 4)
        setreg(d)
    }

    function lcdcmd(d: number) {
        RS = 0
        set(d)
        set(d << 4)
    }

    function lcddat(d: number) {
        RS = 1
        set(d)
        set(d << 4)
    }
	
    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */

    //% block="lcdoff"   group="LCD1602 显示屏"  
    //% subcategory="显示器_Displayer"
    export function I2cLcdOff(): void {
        lcdcmd(0x08)
    }

    //% block="lcdclear"   group="LCD1602 显示屏"  
    //% subcategory="显示器_Displayer"
    export function I2cLcdClear(): void {
        lcdcmd(0x01)
    }
	
    //% block="showString $s|col $x|row $y"   group="LCD1602 显示屏"  
    //% subcategory="显示器_Displayer"
    export function I2cLcdShowString(s: string, x: number, y: number): void {
        let a: number
        if (y > 0)
            a = 0xC0
        else
            a = 0x80
        a += x
        lcdcmd(a)

        for (let i = 0; i < s.length; i++) {
            lcddat(s.charCodeAt(i))
        }
    }
	
    //% block="lcdon"   group="LCD1602 显示屏"  
    //% subcategory="显示器_Displayer"
    export function I2cLcdOn(): void {
        lcdcmd(0x0C)
    }
	
    //% block="lcdlightoff"   group="LCD1602 显示屏" 
    //% subcategory="显示器_Displayer" 
    export function I2cLcdBacklightOff(): void {
        BK = 0
        lcdcmd(0)
    }
	
	
    //% block="lcdlighton"   group="LCD1602 显示屏"  
    //% subcategory="显示器_Displayer"
    export function I2cLcdBacklightOn(): void {
        BK = 8
        lcdcmd(0)
    }
	
	
    //% block="LcdInit $addr" addr.defl="39"  group="LCD1602 显示屏"  
    //% subcategory="显示器_Displayer"
    export function I2cLcdInit(addr: number) {
        i2cAddr = addr
        BK = 8
        RS = 0
        lcdcmd(0x33)
        basic.pause(5)
        set(0x30)
        basic.pause(5)
        set(0x20)
        basic.pause(5)
        lcdcmd(0x28)
        lcdcmd(0x0C)
        lcdcmd(0x06)
        lcdcmd(0x01)
    }
	
	
    function i2cwrite(addr: number, reg: number, value: number) {
        let buf = pins.createBuffer(2)
        buf[0] = reg
        buf[1] = value
        pins.i2cWriteBuffer(addr, buf)
    }

    function i2cread(addr: number, reg: number) {
        pins.i2cWriteNumber(addr, reg, NumberFormat.UInt8BE);
        let val = pins.i2cReadNumber(addr, NumberFormat.UInt8BE);
        return val;
    }

    function initPCA9685(): void {
        i2cwrite(PCA9685_ADDRESS, MODE1, 0x00)
        setFreq(50);
        for (let idx = 0; idx < 16; idx++) {
            setPwm(idx, 0, 0);
        }
        initialized = true
    }

    function setFreq(freq: number): void {
        // Constrain the frequency
        let prescaleval = 25000000;
        prescaleval /= 4096;
        prescaleval /= freq;
        prescaleval -= 1;
        let prescale = prescaleval; //Math.Floor(prescaleval + 0.5);
        let oldmode = i2cread(PCA9685_ADDRESS, MODE1);
        let newmode = (oldmode & 0x7F) | 0x10; // sleep
        i2cwrite(PCA9685_ADDRESS, MODE1, newmode); // go to sleep
        i2cwrite(PCA9685_ADDRESS, PRESCALE, prescale); // set the prescaler
        i2cwrite(PCA9685_ADDRESS, MODE1, oldmode);
        control.waitMicros(5000);
        i2cwrite(PCA9685_ADDRESS, MODE1, oldmode | 0xa1);
    }

    function setPwm(channel: number, on: number, off: number): void {
        if (channel < 0 || channel > 15)
            return;
        //serial.writeValue("ch", channel)
        //serial.writeValue("on", on)
        //serial.writeValue("off", off)

        let buf = pins.createBuffer(5);
        buf[0] = LED0_ON_L + 4 * channel;
        buf[1] = on & 0xff;
        buf[2] = (on >> 8) & 0xff;
        buf[3] = off & 0xff;
        buf[4] = (off >> 8) & 0xff;
        pins.i2cWriteBuffer(PCA9685_ADDRESS, buf);
    }

    function stopMotor(index: number) {
        setPwm((index - 1) * 2, 0, 0);
        setPwm((index - 1) * 2 + 1, 0, 0);
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
        if (!initialized) {
            initPCA9685()
        }
        // 50hz: 20,000 us
        let v_us = (degree * 1800 / 180 + 600) // 0.6 ~ 2.4
        let value = v_us * 4096 / 20000;
        if (index == 0x01) {
            servo1Degree = degree;
        } else if (index == 0x02) {
            servo2Degree = degree;
        }
        setPwm(index + 7, 0, value)
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
        if (!initialized) {
            initPCA9685()
        }
        // 50hz: 20,000 us
        if (degree1 > degree2) {
            for (let i = degree1; i > degree2; i--) {
                let v_us = (i * 1800 / 180 + 600) // 0.6 ~ 2.4
                let value = v_us * 4096 / 20000
                basic.pause(4 * (10 - speed));
                setPwm(index + 7, 0, value)
            }
        }
        else{
            for (let i = degree1; i < degree2; i++) {
                let v_us = (i * 1800 / 180 + 600) // 0.6 ~ 2.4
                let value = v_us * 4096 / 20000
                basic.pause(4 * (10 - speed));
                setPwm(index + 7, 0, value)
            }
        }
        if (index == 0x01) {
            servo1Degree = degree2;
        } else if (index == 0x02) {
            servo2Degree = degree2;
        }
    }

    //% blockId=roverbit_getServoDegree block="Get Servo|%index|degree "  group="Servo 舵机"
    //% weight=97
    //% subcategory="执行器_Actuator"
    export function GetServoDegree(index: Servos): number {
        if (index == 0x01) {
           return servo1Degree ;
        } else {
           return servo2Degree ;
        }
    }

    //% blockId=roverbit_motor_run block="Motor|%index|speed %speed"  group="Motor 电机"
    //% weight=85
    //% speed.min=-255 speed.max=255
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
    //% subcategory="执行器_Actuator"
    export function SportMotorRun(index: Motors, speed: number): void {
        MotorRun(index, speed);
    }

    function MotorRun(index: number, speed: number): void {
        if (!initialized) {
            initPCA9685()
        }
        if (index == 4 || index == 2 || index == 8) {
            speed = -speed;
        }
        speed = speed * 16; // map 255 to 4096
        if (speed >= 4096) {
            speed = 4095
        }
        if (speed <= -4096) {
            speed = -4095
        }
        if (index > 8 || index <= 0)
            return
        let pp = (index - 1) * 2
        let pn = (index - 1) * 2 + 1

        if (speed >= 0) {
            setPwm(pp, 0, speed)
            setPwm(pn, 0, 0)
        } else {
            setPwm(pp, 0, 0)
            setPwm(pn, 0, -speed)
        }
    }

    /**
     * Execute two motors at the same time
     * @param motor1 First Motor; eg: M1, M2
     * @param speed1 [-255-255] speed of motor; eg: 150, -150
     * @param motor2 Second Motor; eg: M3, M4
     * @param speed2 [-255-255] speed of motor; eg: 150, -150
    */
    //% blockId=roverbit_motor_dual block="Motor|%motor1|speed %speed1|%motor2|speed %speed2"  group="Motor 电机"
    //% weight=84
    //% speed1.min=-255 speed1.max=255
    //% speed2.min=-255 speed2.max=255
    //% inlineInputMode=inline
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
    //% subcategory="执行器_Actuator"
    export function MotorRunDual(motor1: Motors, speed1: number, motor2: Motors, speed2: number): void {
        MotorRun(motor1, speed1);
        MotorRun(motor2, speed2);
    }

    /**
     * Execute single motors with delay
     * @param index Motor Index; eg: M1, M2, M3, M4
     * @param speed [-255-255] speed of motor; eg: 150, -150
     * @param delay seconde delay to stop; eg: 1
    */
    //% blockId=roverbit_motor_rundelay block="Motor|%index|speed %speed|delay %delay|s"  group="Motor 电机"
    //% weight=81
    //% speed.min=-255 speed.max=255
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
    //% subcategory="执行器_Actuator"
    export function SportMotorRunDelay(index: Motors, speed: number, delay: number): void {
        MotorRunDelay(index, speed, delay);
    }

    function MotorRunDelay(index: number, speed: number, delay: number): void {
        MotorRun(index, speed);
        basic.pause(delay * 1000);
        MotorRun(index, 0);
    }
    
     /**
     * Execute single motors with delay
     * @param index Motor Index; eg: M1
    */
    //% blockId=roverbit_stop block="Sport Motor Stop|%index|" group="Motor 电机"
    //% weight=80
    //% subcategory="执行器_Actuator"
    export function SportMotorStop(index: Motors): void {
        MotorStop(index);
    }

    export function MotorStop(index: number): void {
        MotorRun(index, 0);
    }

    //% blockId=roverbit_stop_all block="Motor Stop All" group="Motor 电机"
    //% weight=79
    //% blockGap=50
    //% subcategory="执行器_Actuator"
    export function MotorStopAll(): void {
        if (!initialized) {
            initPCA9685()
        }
        for (let idx = 1; idx <= 8; idx++) {
            if (idx != 5 && idx != 6)
            stopMotor(idx);
        }
    }

     /**
     * Execute single motors with delay
     * @param index Motor Index; eg: M7
     * @param speed [-255-255] speed of motor; eg: 150, -150
    */
    //% blockId=roverbit_clamp_motor_run block="Clamp Motor|%index|speed %speed"  group="Motor 电机"
    //% weight=78
    //% speed.min=-255 speed.max=255
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
    //% subcategory="执行器_Actuator"
    export function ClampMotorRun(index: ClampMotors, speed: number): void {
        MotorRun(index, speed);
    }

    /**
     * Execute single motors with delay
     * @param index Motor Index; eg: M7
     * @param speed [-255-255] speed of motor; eg: 150, -150
     * @param delay seconde delay to stop; eg: 1
    */
    //% blockId=roverbit_clamp_motor_rundelay block="Clamp Motor|%index|speed %speed|delay %delay|s"  group="Motor 电机"
    //% weight=77
    //% speed.min=-255 speed.max=255
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
    //% subcategory="执行器_Actuator"
    export function ClampMotorRunDelay(index: ClampMotors, speed: number, delay: number): void {
        MotorRunDelay(index, speed, delay);
    }

     /**
     * Execute single motors with delay
     * @param index Motor Index; eg: M7
     * 
    */
    //% blockId=roverbit_clamp_stop block="Clamp Motor Stop|%index|" group="Motor 电机"
    //% weight=76
    //% subcategory="执行器_Actuator"
    export function ClampMotorStop(index: ClampMotors): void {
        MotorStop(index);
    }

    /**
     * Get RUS04 distance
     * @param pin Microbit ultrasonic pin; eg: P0
    */
    //% blockId=roverbit_ultrasonic block="Read RgbUltrasonic Distance|pin %pin|cm" group="RGB Ultrasonic 超声波传感器"
    //% weight=70
    //% subcategory="传感器_Sensor"
    export function Ultrasonic(pin: DigitalPin): number {
        // send pulse
        pins.setPull(pin, PinPullMode.PullDown); 
        pins.digitalWritePin(pin, 0);
        control.waitMicros(2);
        pins.digitalWritePin(pin, 1);
        control.waitMicros(50);
        pins.digitalWritePin(pin, 0);
        // read pulse
        let d = pins.pulseIn(pin, PulseValue.High, 25000);
        let ret = d;
        // filter timeout spikes
        if (ret == 0 && distanceBuf != 0) {
            ret = distanceBuf;
        }
        distanceBuf = d;
        return Math.floor(ret / 40 + (ret / 800));
        // Correction
    }

    function RgbDisplay(indexstart: number, indexend: number, rgb: RgbColors): void {
        for (let i = indexstart; i <= indexend; i++) {
			neoStrip.setPixelColor(i, rgb);
		}
        neoStrip.show();
    }

	//% blockId="roverbit_rus04" block="RgbUltrasonic|%RgbUltrasonics|show color %rgb|effect %ColorEffect" group="RGB Ultrasonic 超声波传感器"
    //% weight=69
    //% subcategory="传感器_Sensor"
    export function RUS_04(index: RgbUltrasonics, rgb: RgbColors, effect: ColorEffect): void {
	    if(rgb == RgbColors.Red) {
	  	rgb = RgbColors.Green;
             }else if(rgb == RgbColors.Green) {
	     	rgb = RgbColors.Red;
	     }
	    
        let start, end;
        if (!neoStrip) {
            neoStrip = neopixel.create(DigitalPin.P11, 10, NeoPixelMode.RGB);
            neoStrip.clear();
        }
        if (index == RgbUltrasonics.Left) {
            start = 4;
            end = 6;
        } else if (index == RgbUltrasonics.Right) {
            start = 7;
            end = 9;
		} else if (index == RgbUltrasonics.All) {
            start = 4;
            end = 9;
		}
        switch(effect) {
            case ColorEffect.None:
                RgbDisplay(start, end, rgb);
                break;
            case ColorEffect.Breathing:
            for (let i = 0; i < 255; i+=2) {
                neoStrip.setBrightness(i);
                RgbDisplay(start, end, rgb);
                //basic.pause((255 - i)/2);
                basic.pause((i < 20)? 80 :(255/i));
            }
            for (let i = 255; i > 0; i-=2) {
                neoStrip.setBrightness(i);
                RgbDisplay(start, end, rgb);
                basic.pause((i < 20)? 80 :(255/i));
            }
            break;
            case ColorEffect.Rotate:
                for (let i = 0; i < 4; i++) {
                    neoStrip.setPixelColor(start, rgb);
                    neoStrip.setPixelColor(start+1, 0);
                    neoStrip.setPixelColor(start+2, 0);
                    if (index == RgbUltrasonics.All) {
                        neoStrip.setPixelColor(end-2, rgb);
                        neoStrip.setPixelColor(end-1, 0);
                        neoStrip.setPixelColor(end, 0);
                    }
                    neoStrip.show();
                    basic.pause(150);
                    neoStrip.setPixelColor(start, 0);
                    neoStrip.setPixelColor(start+1, rgb);
                    neoStrip.setPixelColor(start+2, 0);
                    if (index == RgbUltrasonics.All) {
                        neoStrip.setPixelColor(end-2, 0);
                        neoStrip.setPixelColor(end-1, rgb);
                        neoStrip.setPixelColor(end, 0);
                    }
                    neoStrip.show();
                    basic.pause(150);
                    neoStrip.setPixelColor(start, 0);
                    neoStrip.setPixelColor(start+1, 0);
                    neoStrip.setPixelColor(start+2, rgb);
                    if (index == RgbUltrasonics.All) {
                        neoStrip.setPixelColor(end-2, 0);
                        neoStrip.setPixelColor(end-1, 0);
                        neoStrip.setPixelColor(end, rgb);
                    }
                    neoStrip.show();
                    basic.pause(150);
                }
                RgbDisplay(4, 9, 0);
                break;
            case ColorEffect.Flash:
            for (let i = 0; i < 6; i++) {
                RgbDisplay(start, end, rgb);
                basic.pause(150);
                RgbDisplay(start, end, 0);
                basic.pause(150);
            }
            break;
        }
    }

    export enum DHT11Type {
        //% block="temperature(℃)" enumval=0
        DHT11_temperature_C,

        //% block="temperature(℉)" enumval=1
        DHT11_temperature_F,

        //% block="humidity(0~100)" enumval=2
        DHT11_humidity
    }

    /**
     * get dht11 temperature and humidity Value
     * @param dht11pin describe parameter here, eg: DigitalPin.P15    
     * 
     *  */
    //% blockId="readdht11" block="value of dht11 %dht11type| at pin %dht11pin" group="DHT11 温湿度传感器"
    //% weight=66
    //% subcategory="传感器_Sensor"
    export function Dht11value(dht11pin: DigitalPin, dht11type: DHT11Type ): number {
        pins.digitalWritePin(dht11pin, 0)
        basic.pause(18)
        let i = pins.digitalReadPin(dht11pin)
        pins.setPull(dht11pin, PinPullMode.PullUp);
        switch (dht11type) {
            case 0:
                let dhtvalue1 = 0;
                let dhtcounter1 = 0;
                while (pins.digitalReadPin(dht11pin) == 1);
                while (pins.digitalReadPin(dht11pin) == 0);
                while (pins.digitalReadPin(dht11pin) == 1);
                for (let i = 0; i <= 32 - 1; i++) {
                    while (pins.digitalReadPin(dht11pin) == 0);
                    dhtcounter1 = 0
                    while (pins.digitalReadPin(dht11pin) == 1) {
                        dhtcounter1 += 1;
                    }
                    if (i > 15) {
                        if (dhtcounter1 > 2) {
                            dhtvalue1 = dhtvalue1 + (1 << (31 - i));
                        }
                    }
                }
                return ((dhtvalue1 & 0x0000ff00) >> 8);
                break;
            case 1:
                while (pins.digitalReadPin(dht11pin) == 1);
                while (pins.digitalReadPin(dht11pin) == 0);
                while (pins.digitalReadPin(dht11pin) == 1);
                let dhtvalue = 0;
                let dhtcounter = 0;
                for (let i = 0; i <= 32 - 1; i++) {
                    while (pins.digitalReadPin(dht11pin) == 0);
                    dhtcounter = 0
                    while (pins.digitalReadPin(dht11pin) == 1) {
                        dhtcounter += 1;
                    }
                    if (i > 15) {
                        if (dhtcounter > 2) {
                            dhtvalue = dhtvalue + (1 << (31 - i));
                        }
                    }
                }
                return Math.round((((dhtvalue & 0x0000ff00) >> 8) * 9 / 5) + 32);
                break;
            case 2:
                while (pins.digitalReadPin(dht11pin) == 1);
                while (pins.digitalReadPin(dht11pin) == 0);
                while (pins.digitalReadPin(dht11pin) == 1);

                let value = 0;
                let counter = 0;

                for (let i = 0; i <= 8 - 1; i++) {
                    while (pins.digitalReadPin(dht11pin) == 0);
                    counter = 0
                    while (pins.digitalReadPin(dht11pin) == 1) {
                        counter += 1;
                    }
                    if (counter > 3) {
                        value = value + (1 << (7 - i));
                    }
                }
                return value;
            default:
                return 0;
        }
    }

    /**
     * get soil moisture
     * @param soilmoisturePin describe parameter here, eg: AnalogPin.P1  
     * 
     *  */
    //% blockId="readsoilmoisture" block="value of soil moisture(0~100) at pin %soilmoisturePin" group="Soil Moisture 土壤湿度传感器"
    //% weight=65
    //% subcategory="传感器_Sensor"
    export function ReadSoilHumidity(soilmoisturePin: AnalogPin): number {
        let voltage = 0;
        let soilmoisture = 0;
        voltage = pins.map(
            pins.analogReadPin(soilmoisturePin),
            0,
            1023,
            0,
            1000
        );
        soilmoisture = voltage;
        return Math.round(soilmoisture);
    }


    /**
     * get human Body
     * @param bodyPin describe parameter here, eg: DigitalPin.P16  
     * 
     *  */

    //% blockId="roverbit_humanBodySensor" block="Human body sensor get Body at pin %bodyPin" group="Human IR 人体红外传感器"
    //% weight=64
    //% subcategory="传感器_Sensor"
   export function HumanBodySensor(bodyPin: DigitalPin): boolean {
        pins.digitalWritePin(bodyPin, 0)
        if (pins.digitalReadPin(bodyPin) == 1) {
            return true;
        }else {
            return false;
        }
    }

    /**
     * get rotaryPotentiometer
     * @param rotaryPin describe parameter here, eg: AnalogPin.P2 
     * 
     *  */
    //% blockId=rotaryPotentiometer block="rotaryPotentiometer analog pin %rotaryPin"  group="Potentiometer 旋转电位器"
    //% weight=70
    //% subcategory="传感器_Sensor"
    export function RotaryPotentiometer(rotaryPin: AnalogPin): number {
        let row = pins.analogReadPin(rotaryPin)
        let V = (row / 1023) * 5
        return   V;
    }
	          
    /**
     * button pushed.
     */
    //% blockId=ir_received_left_event
    //% block="on |%btn| button pressed" shim=MSP_Rover::onPressEvent group="RC 红外遥控器"
    //% subcategory="遥控器_RC"
    export function OnPressEvent(btn: RemoteButton, body: () => void): void {
        return;
    }

    /**
     * initialises local variablesssss
     *  @param pin describe parameter here, eg: IrPins.P5  
     */
    //% blockId=ir_init 
    //% block="connect ir receiver to %pin" shim=MSP_Rover::init group="RC 红外遥控器"
    //% subcategory="遥控器_RC"
    export function Init(pin: IrPins): void {
        return;
    }



    //% blockId=IoT_init 
    //% block="IoT_init" 
    //% subcategory="物联网_IoT"
    export function IoTInit(): void {
        return;
    }

     //% blockId=AIVision_init
    //% block="AIVision_init"  
    //% subcategory="摄像头_AI"
    export function AIVisionInit(): void {
        return;
    }
    
}
