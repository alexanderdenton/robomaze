---
title: Cheat Sheet
permalink: /cheat-sheet/
---

# RoboMaze Cheat Sheet

Use this whenever you cannot remember what a piece of code does. You do **not** need to memorise everything here.

## The Three Important Variables

```python
speed = 0
turnTime = 0
distanceToWall = 0
```

### `speed`

Controls how fast the motors move.

### `turnTime`

Controls how long the motors run during a turn, in milliseconds.

### `distanceToWall`

Controls how close the MicroMouse gets to a wall before `move_to_wall()` stops.

The numbers above are placeholders. Use the values you discover while testing.

---

## Comments

```python
# This is a comment
```

Python ignores anything after `#`.

---

## Functions

Create a function:

```python
def my_function():
    # Code goes here
    pass
```

Call a function:

```python
my_function()
```

**Do not forget the `()` when calling a function.**

---

## Copying and Adapting a Function

You do not always need to start from nothing.

If you already have a similar working function, copy it and change only the parts that need to behave differently.

That is what you do when creating `turn_left_90()` from `turn_right_90()`.

---

## Turn On a Motor

Left motor forwards:

```python
Kitronik_Move_Motor.motor_on(
    Kitronik_Move_Motor.Motors.MOTOR_LEFT,
    Kitronik_Move_Motor.MotorDirection.FORWARD,
    speed
)
```

Left motor backwards:

```python
Kitronik_Move_Motor.motor_on(
    Kitronik_Move_Motor.Motors.MOTOR_LEFT,
    Kitronik_Move_Motor.MotorDirection.REVERSE,
    speed
)
```

Change `MOTOR_LEFT` to `MOTOR_RIGHT` to control the other wheel.

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

RoboMaze uses:

```python
basic.pause(turnTime)
```

so changing `turnTime` changes how long the MicroMouse spends turning.

---

## Measure the Distance Ahead

```python
Kitronik_Move_Motor.measure()
```

The starter code configures this measurement in centimetres.

---

## Show the Measured Distance

```python
basic.show_number(Kitronik_Move_Motor.measure())
```

Use this in Task 4 to help choose `distanceToWall`.

---

## Understand the Supplied `while` Loop

```python
while Kitronik_Move_Motor.measure() > distanceToWall:
    # movement code
```

This means:

> Keep repeating the indented code while the measured distance is greater than `distanceToWall`.

---

## Build the Final Route

By Task 6 you will have:

```python
move_to_wall()
turn_right_90()
turn_left_90()
```

Call them in sequence:

```python
def navigate_maze():
    move_to_wall()
    turn_right_90()
    move_to_wall()
```

The order of the function calls determines the route through the maze.

---

## Something Has Gone Wrong?

If your code becomes badly broken, return to the [Starter Code]({{ '/starter-code/' | relative_url }}) page and copy a fresh version.
