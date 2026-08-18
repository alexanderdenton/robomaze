# RoboMaze Completed Example
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
    """Turn the MicroMouse approximately 90 degrees to the right."""
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
    """Turn the MicroMouse approximately 90 degrees to the left."""
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
    """Move forwards until the ultrasonic sensor reaches the stop distance."""
    while Kitronik_Move_Motor.measure() > distanceToWall:
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
    """Run the movement sequence for the current maze."""
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
