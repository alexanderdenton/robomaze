---
title: Instructions
permalink: /instructions/
---

# Getting Started

Follow these steps in order. You do not need to write all of the motor-control code from scratch.

## Setup - Open Microsoft MakeCode

1. Go to [Microsoft MakeCode for micro:bit](https://makecode.microbit.org/).
2. Create a new project called **RoboMaze**.
3. Open **Extensions**.
4. Search for the **Kitronik :MOVE Motor** extension and add it.
5. Switch the editor from Blocks to **Python**.
6. Open the [Starter Code]({{ '/starter-code/' | relative_url }}), copy it, and paste it into MakeCode.

At the top of the starter code you will find:

```python
speed = 0
turnTime = 0
distanceToWall = 0
```

You will change these values while testing.

---

## Task 1 - Analyse the Maze

Before changing any code, study the maze.

Work out:

- What route reaches the exit?
- Is it the shortest route?
- How many right turns are needed?
- How many left turns are needed?
- In what order do the turns happen?

Write the order down. You will need it later.

---

## Task 2 - Calibrate the Right Turn

The code for turning right has already been written for you.

Your job is to make it turn approximately **90 degrees**.

Change:

```python
speed
turnTime
```

at the top of the program.

`speed` controls how fast the motors move.

`turnTime` controls how long the motors run before stopping.

Test the MicroMouse and keep adjusting the values until `turn_right_90()` produces a reliable 90 degree turn.

---

## Task 3 - Now Turn Left

Create a new function called:

```python
turn_left_90()
```

You do **not** need to write it from scratch.

Copy `turn_right_90()` and change only what is needed to make the MicroMouse turn the opposite way.

Think about:

- which wheel moves forwards;
- which wheel moves backwards.

> **Rule:** Do not call `turn_right_90()` three times to turn left!

---

## Task 4 - Test the Ultrasonic Sensor

Temporarily add:

```python
basic.show_number(Kitronik_Move_Motor.measure())
```

Download the program to the micro:bit and place the MicroMouse different distances from a wall.

Watch the value displayed.

Choose a sensible stopping distance and update:

```python
distanceToWall = 0
```

at the top of your program.

When you have finished testing, remove or comment out the temporary `basic.show_number(...)` line.

---

## Task 5 - Move to the Wall

The `move_to_wall()` function has already been written for you.

The important condition is:

```python
while Kitronik_Move_Motor.measure() > distanceToWall:
```

This means:

> Keep moving while the measured distance is greater than the chosen stopping distance.

Test the function.

If the MicroMouse stops too close or too far away, adjust `distanceToWall` and try again.

---

## Task 6 - Escape the Maze

You now have:

```python
move_to_wall()
turn_right_90()
turn_left_90()
```

Complete `navigate_maze()` by calling those functions in the order you discovered during Task 1.

For example:

```python
def navigate_maze():
    move_to_wall()
    turn_right_90()
    move_to_wall()
```

Continue until you have programmed the complete route.

If the result is not quite right, check:

- `speed`;
- `turnTime`;
- `distanceToWall`;
- the order of the function calls.

---

## Need Help?

Use the [RoboMaze Cheat Sheet]({{ '/cheat-sheet/' | relative_url }}) whenever you forget what a command does.

If your program becomes badly broken, copy a fresh version from the [Starter Code]({{ '/starter-code/' | relative_url }}) page.
