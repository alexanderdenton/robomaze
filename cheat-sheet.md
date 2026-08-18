# RoboMaze Cheat Sheet

Use this page when you cannot remember what a piece of code does.

You do **not** need to memorise everything here.

---

## The Three Important Variables

These are kept together at the top of your starter code.

```python
speed = 0
turnTime = 0
distanceToWall = 0
```

### `speed`

Controls how fast the motors move.

```python
speed = 50
```

### `turnTime`

Controls how long the motors run during a turn.

The value is in **milliseconds**.

```python
turnTime = 500
```

### `distanceToWall`

Controls how close the MicroMouse gets to a wall before `move_to_wall()` stops.

```python
distanceToWall = 10
```

These example numbers only show how variables are written. Use the values you discover while testing your own MicroMouse.

---

## Comments

Comments are notes for people reading the program.

Python ignores anything after `#`.

```python
# This is a comment
```

---

## Functions

A function is a named group of instructions.

### Create a function

```python
def my_function():
    # Code goes here
    pass
```

### Call a function

```python
my_function()
```

Do not forget the `()`.

---

## Copying and Adapting a Function

You do not always need to start from nothing.

If one function already performs a similar job, you can copy it, give the new function a different name, and then change only the parts that need to behave differently.

This is what you will do when turning the right-turn code into a left-turn function.

---

## Turn On a Motor

### Left motor forwards

```python
Kitronik_Move_Motor.motor_on(
    Kitronik_Move_Motor.Motors.MOTOR_LEFT,
    Kitronik_Move_Motor.MotorDirection.FORWARD,
    speed
)
```

### Left motor backwards

```python
Kitronik_Move_Motor.motor_on(
    Kitronik_Move_Motor.Motors.MOTOR_LEFT,
    Kitronik_Move_Motor.MotorDirection.REVERSE,
    speed
)
```

To control the other wheel, change `MOTOR_LEFT` to `MOTOR_RIGHT`.

---

## Stop the MicroMouse

```python
Kitronik_Move_Motor.stop()
```

---

## Pause

```python
basic.pause(1000)
```

The value is in milliseconds.

- `1000` milliseconds = `1` second
- `500` milliseconds = `0.5` seconds
- `100` milliseconds = `0.1` seconds

RoboMaze uses the `turnTime` variable in a pause:

```python
basic.pause(turnTime)
```

Changing `turnTime` therefore changes how long the MicroMouse spends turning.

---

## Measure the Distance Ahead

```python
Kitronik_Move_Motor.measure()
```

This returns the distance measured by the ultrasonic sensor.

For RoboMaze, the sensor is set to centimetres.

---

## Show the Measured Distance

```python
basic.show_number(Kitronik_Move_Motor.measure())
```

This is useful when deciding what value to use for `distanceToWall`.

---

## `while` Loops

The supplied `move_to_wall()` function contains:

```python
while Kitronik_Move_Motor.measure() > distanceToWall:
    # movement code
```

This means:

> Keep repeating the indented code while the measured distance is greater than `distanceToWall`.

You do not need to write this loop from scratch during the activity, but understanding the condition will help you choose and adjust `distanceToWall`.

---

## Useful RoboMaze Functions

By the final task you will have:

```python
move_to_wall()
turn_right_90()
turn_left_90()
```

You can call them one after another:

```python
def navigate_maze():
    move_to_wall()
    turn_right_90()
    move_to_wall()
```

The order of the function calls determines the route taken through the maze.

---

## Something Has Gone Wrong?

If your code becomes badly broken, return to the **Starter Code** on the RoboMaze website, copy a fresh version and paste it back into MakeCode.
