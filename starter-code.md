---
title: Starter Code
permalink: /starter-code/
---

# Starter Code

Copy all of this code and paste it into the Microsoft MakeCode Python editor.

> **Need to reset?** You can return to this page at any time and copy a clean version.

<div class="code-wrap">
<button class="copy-button" type="button" onclick="copyCode(this)">Copy code</button>
<pre><code># RoboMaze Starter Code
# =====================
# Work through the tasks in order.
#
# The important settings are kept together at the top so they are easy to
# find and change while testing the MicroMouse.


# --------------------------------------------------------------------------
# IMPORTANT VARIABLES
# --------------------------------------------------------------------------
# How fast the motors run.
# Change this while testing the MicroMouse.
speed = 0

# How long the motors run when making a turn, in milliseconds.
# Change this until turn_right_90() makes an approximately 90 degree turn.
turnTime = 0

# How close the MicroMouse should get to a wall before it stops, in cm.
# You will choose this value during Task 4 after testing the ultrasonic sensor.
distanceToWall = 0


# --------------------------------------------------------------------------
# TASK 2 - TURN RIGHT
# --------------------------------------------------------------------------
# This function has been written for you.
#
# Your job is to TEST it and adjust the variables above:
#   speed
#   turnTime
#
# Keep testing until the MicroMouse turns approximately 90 degrees right.
def turn_right_90():
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


# --------------------------------------------------------------------------
# TASK 3 - TURN LEFT
# --------------------------------------------------------------------------
# Create a new function called turn_left_90().
#
# You do NOT need to write it from scratch.
# Copy turn_right_90() and change only what is needed to make the
# MicroMouse turn in the opposite direction.


# --------------------------------------------------------------------------
# TASK 4 - TEST THE ULTRASONIC SENSOR
# --------------------------------------------------------------------------
# Before using move_to_wall(), test how the ultrasonic sensor measures the
# distance to an object or wall in front of the MicroMouse.
#
# TEMPORARILY add this line below the comment:
#
# basic.show_number(Kitronik_Move_Motor.measure())
#
# Download the program to the micro:bit and move the MicroMouse different
# distances from a wall. Watch the number shown on the micro:bit.
#
# Decide how close you want the MicroMouse to get before stopping.
# Then update distanceToWall at the TOP of this file.
#
# When you have finished Task 4, REMOVE or COMMENT OUT the test line before
# continuing to Task 5.


# --------------------------------------------------------------------------
# TASK 5 - MOVE TO THE WALL
# --------------------------------------------------------------------------
# This function has been written for you.
#
# It keeps the MicroMouse moving forwards while the measured distance is
# greater than distanceToWall.
#
# Your job is to test it using the distanceToWall value you chose in Task 4.
# If it stops too close or too far away, change distanceToWall at the top.
def move_to_wall():
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


# --------------------------------------------------------------------------
# TASK 6 - ESCAPE THE MAZE
# --------------------------------------------------------------------------
# Use the functions below in the order you worked out during Task 1:
#
#   move_to_wall()
#   turn_right_90()
#   turn_left_90()
#
# Add each function call needed to navigate from the entrance to the exit.
def navigate_maze():
    pass


# --------------------------------------------------------------------------
# SETUP CODE - DO NOT CHANGE
# --------------------------------------------------------------------------
# This helps compensate if the MicroMouse naturally veers slightly to one
# side.
biasValue = 3
Kitronik_Move_Motor.motor_balance(
    Kitronik_Move_Motor.SpinDirections.RIGHT,
    biasValue
)

# Make the ultrasonic sensor return distances in centimetres.
Kitronik_Move_Motor.set_ultrasonic_units(
    Kitronik_Move_Motor.Units.CENTIMETERS
)


# Start the maze program.
navigate_maze()
</code></pre>
</div>

[Back to Instructions]({{ '/instructions/' | relative_url }}){: .button }
[Open Cheat Sheet]({{ '/cheat-sheet/' | relative_url }}){: .button .secondary }
