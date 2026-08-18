# RoboMaze

## Your Mission

Your mission is to program a MicroMouse to navigate through a maze **without using a controller**.

Once the MicroMouse enters the maze, you will not be able to change its direction manually. It must reach the exit using the Python code you have prepared.

You will have:

- starter code;
- this set of instructions;
- a RoboMaze cheat sheet;
- a physical maze and MicroMouse to test.

You do **not** need to write everything from scratch. Some code is provided so that you can focus on testing, changing values, adapting code and building the final route.

---

# Getting Started

## 1. Open Microsoft MakeCode

Go to:

**https://makecode.microbit.org/**

Create a new micro:bit project and give it a name such as:

`RoboMaze`

---

## 2. Add the Kitronik :MOVE Motor extension

The MicroMouse uses the Kitronik :MOVE Motor board.

In MakeCode:

1. Open **Extensions**.
2. Search for the Kitronik :MOVE Motor extension.
3. Add the extension to your project.
4. Return to the editor.

Your teacher may demonstrate this part on screen.

---

## 3. Switch to Python

Switch the MakeCode editor from Blocks to **Python**.

---

## 4. Copy the Starter Code

Open the **Starter Code** from the RoboMaze website.

Copy all of it and paste it into the MakeCode Python editor.

At the top of the program you will see three important variables:

```python
speed = 0
turnTime = 0
distanceToWall = 0
```

You will change these values during the activity.

If your code gets badly broken, you can always return to the website and copy a fresh version of the starter code.

---

# Task 1 - Analyse the Maze

Before changing any code, study the maze.

Work out:

- What route reaches the exit?
- Is it the shortest route?
- How many right turns are needed?
- How many left turns are needed?
- In what order do the turns happen?

Write the order down.

You will need it for the final task.

---

# Task 2 - Calibrate the Right Turn

The code for turning right has already been written for you.

Your job is to make it turn by approximately **90 degrees**.

The function uses two variables from the top of the program:

```python
speed
turnTime
```

`speed` controls how fast the motors move.

`turnTime` controls how long the motors run before stopping.

Change these values, test the MicroMouse and keep adjusting them until `turn_right_90()` produces a reliable 90 degree turn.

You do not need to change the motor commands inside `turn_right_90()` for this task.

---

# Task 3 - Now Turn Left

You already have working code for turning right.

Create a new function called:

```python
turn_left_90()
```

You do **not** need to write it from scratch.

Copy the code from:

```python
turn_right_90()
```

and change only what is needed to make the MicroMouse turn in the opposite direction.

Think about:

- which wheel moves forwards;
- which wheel moves backwards.

Use the cheat sheet if you need help.

**Do not call `turn_right_90()` three times to turn left.**

---

# Task 4 - Test the Ultrasonic Sensor

The MicroMouse has an ultrasonic sensor at the front. It measures the distance between the MicroMouse and the object or wall in front of it.

To see the measured distance, temporarily use:

```python
basic.show_number(Kitronik_Move_Motor.measure())
```

Test the sensor at different distances from a wall.

Choose how close you want the MicroMouse to get before it stops.

Store that distance in the variable at the top of your program:

```python
distanceToWall = 0
```

Replace `0` with the distance you have chosen.

The ultrasonic units have already been set to centimetres in the starter code.

---

# Task 5 - Move to the Wall

The `move_to_wall()` function has already been written for you.

You do not need to build the motor-control loop yourself.

The important part is this condition:

```python
while Kitronik_Move_Motor.measure() > distanceToWall:
```

This means:

> Keep moving while the measured distance is greater than the chosen stopping distance.

The function stops the motors when the MicroMouse reaches `distanceToWall`.

Test the function using the value you chose in Task 4.

If the MicroMouse stops too close or too far away, change:

```python
distanceToWall
```

and test it again.

---

# Task 6 - Escape the Maze

You now have three movement functions:

```python
move_to_wall()
turn_right_90()
turn_left_90()
```

Complete:

```python
navigate_maze()
```

by calling those functions in the order you worked out during Task 1.

For example:

```python
def navigate_maze():
    move_to_wall()
    turn_right_90()
    move_to_wall()
```

Continue the sequence until the MicroMouse has a complete route from the entrance to the exit.

Then test it in the maze.

If something does not quite work, think about whether you need to adjust:

- `speed`;
- `turnTime`;
- `distanceToWall`;
- the order of your function calls.

---

# Need Help?

Use the **RoboMaze Cheat Sheet** whenever you forget what a command does.

If your program becomes badly broken, copy a fresh version of the **Starter Code** from the RoboMaze website.

---

# Completed Solution

A completed example solution is kept in the RoboMaze repository for teachers, maintainers and people using the activity independently.

If you are completing the classroom activity, try the tasks yourself before looking at the solution.
