---
title: Teachers & Source
permalink: /teacher/
---

# Teacher Resources

The completed solution is intentionally kept separate from the main pupil navigation.

## Completed Solution

This example includes explanatory docstrings so it can be used as reference material after the activity.

<div class="code-wrap">
<button class="copy-button" data-copy-target="solution-code" onclick="copyCode(this)">Copy code</button>
<pre><code id="solution-code"># RoboMaze Completed Example
# ==========================
# This is a completed example for teachers, maintainers and reference.
#
# IMPORTANT:
# Motor speed, turn time, stopping distance and motor balance depend on the
# individual MicroMouse, batteries and physical maze. Calibrate these values
# on the hardware being used.


# --------------------------------------------------------------------------
# IMPORTANT VARIABLES
# --------------------------------------------------------------------------
# These are the values from the current example solution.
# Change them to match the physical MicroMouse and maze being used.
speed = 50
turnTime = 100
distanceToWall = 100


def turn_right_90():
    &quot;&quot;&quot;
    Turn the MicroMouse approximately 90 degrees to the right.

    The left motor moves forwards while the right motor moves backwards,
    causing the MicroMouse to rotate clockwise on the spot.

    The global &#x27;speed&#x27; variable controls how quickly the motors turn and
    &#x27;turnTime&#x27; controls how long they run for. These values should be
    calibrated on the physical MicroMouse so that the turn is as close to
    90 degrees as possible.

    The motors are stopped at the end of the turn.
    &quot;&quot;&quot;
    Kitronik_Move_Motor.motor_on(
        Kitronik_Move_Motor.Motors.MOTOR_LEFT,
        Kitronik_Move_Motor.MotorDirection.FORWARD,
        speed
    )
    Kitronik_Move_Motor.motor_on(
        Kitronik_Move_Motor.Motors.MOTOR_RIGHT,
        Kitronik_Move_Motor.MotorDirection.REVERSE,
        speed
    )

    basic.pause(turnTime)
    Kitronik_Move_Motor.stop()


def turn_left_90():
    &quot;&quot;&quot;
    Turn the MicroMouse approximately 90 degrees to the left.

    This function is based on turn_right_90(), but the motor directions are
    reversed. The right motor moves forwards while the left motor moves
    backwards, causing the MicroMouse to rotate anticlockwise on the spot.

    The global &#x27;speed&#x27; and &#x27;turnTime&#x27; variables are shared with the right-turn
    function, so the same calibrated values are used for both directions.

    The motors are stopped at the end of the turn.
    &quot;&quot;&quot;
    Kitronik_Move_Motor.motor_on(
        Kitronik_Move_Motor.Motors.MOTOR_RIGHT,
        Kitronik_Move_Motor.MotorDirection.FORWARD,
        speed
    )
    Kitronik_Move_Motor.motor_on(
        Kitronik_Move_Motor.Motors.MOTOR_LEFT,
        Kitronik_Move_Motor.MotorDirection.REVERSE,
        speed
    )

    basic.pause(turnTime)
    Kitronik_Move_Motor.stop()


def move_to_wall():
    &quot;&quot;&quot;
    Move the MicroMouse forwards until it reaches the chosen stopping distance.

    The ultrasonic sensor repeatedly measures the distance to the wall or
    object in front of the MicroMouse.

    While the measured distance is greater than the global &#x27;distanceToWall&#x27;
    value, both motors run forwards at the global &#x27;speed&#x27; value.

    Once the measured distance is equal to or less than distanceToWall, the
    loop finishes and the motors are stopped.

    The short pause inside the loop prevents the sensor from being checked
    unnecessarily quickly.
    &quot;&quot;&quot;
    while Kitronik_Move_Motor.measure() &gt; distanceToWall:
        Kitronik_Move_Motor.motor_on(
            Kitronik_Move_Motor.Motors.MOTOR_LEFT,
            Kitronik_Move_Motor.MotorDirection.FORWARD,
            speed
        )
        Kitronik_Move_Motor.motor_on(
            Kitronik_Move_Motor.Motors.MOTOR_RIGHT,
            Kitronik_Move_Motor.MotorDirection.FORWARD,
            speed
        )

        basic.pause(100)

    Kitronik_Move_Motor.stop()


def navigate_maze():
    &quot;&quot;&quot;
    Run the full sequence of movements needed to escape the maze.

    This function combines the three smaller movement functions:
    move_to_wall(), turn_right_90() and turn_left_90().

    Each function call represents one part of the route through the maze.
    The order of these calls comes from the maze analysis completed in Task 1.

    Breaking the route into separate function calls makes the final program
    easier to read and allows each movement behaviour to be tested
    independently before the full maze sequence is attempted.
    &quot;&quot;&quot;
    move_to_wall()
    turn_left_90()

    move_to_wall()
    turn_right_90()

    move_to_wall()
    turn_right_90()

    move_to_wall()
    turn_left_90()

    move_to_wall()
    turn_right_90()

    move_to_wall()
    turn_left_90()

    move_to_wall()
    turn_left_90()


# --------------------------------------------------------------------------
# SETUP CODE
# --------------------------------------------------------------------------
biasValue = 0

Kitronik_Move_Motor.motor_balance(
    Kitronik_Move_Motor.SpinDirections.RIGHT,
    biasValue
)

Kitronik_Move_Motor.set_ultrasonic_units(
    Kitronik_Move_Motor.Units.CENTIMETERS
)


# Start the maze program.
navigate_maze()
</code></pre>
</div>

## Repository

The source code, teaching materials and licence are available in the public repository.

[Open GitHub Repository](https://github.com/alexanderdenton/robomaze){: .button }
