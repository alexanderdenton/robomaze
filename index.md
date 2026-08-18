# RoboMaze

## Program a MicroMouse. Escape the maze.

RoboMaze is a classroom programming activity using the **BBC micro:bit**, **Microsoft MakeCode Python** and the **Kitronik :MOVE Motor**.

Your challenge is to prepare a program that allows the MicroMouse to navigate through the maze by itself.

> Once it enters the maze, there is no controller. Your code has to do the work.

---

## Start Here

### [Getting Started and Activity Instructions](Instructions.md)

Set up Microsoft MakeCode and work through Tasks 1–6.

### [Starter Code](main.py)

Copy this code into the MakeCode Python editor.

The starter already contains the right-turn and move-to-wall logic. Your job is to **calibrate important variables, adapt the right-turn code into a left turn, and build the final route**.

If your program becomes badly broken, come back here and copy a fresh version.

### [RoboMaze Cheat Sheet](cheat-sheet.md)

Use this whenever you need help remembering a command or understanding one of the important variables.

---

## The Three Values You Will Test

At the top of the starter code you will find:

```python
speed = 0
turnTime = 0
distanceToWall = 0
```

During the activity you will test and change these values so that the MicroMouse works reliably with the physical maze.

---

## For Teachers and Maintainers

### [Completed Solution](solution.py)

A completed example remains available in the repository for teachers, maintainers and independent users.

Pupils completing the classroom activity should try the tasks before looking at the solution.

---

## What You Will Practise

RoboMaze introduces or reinforces:

- variables;
- functions and function calls;
- reading and adapting existing code;
- motor control;
- ultrasonic distance sensing;
- `while` loops;
- sequencing;
- testing and calibration;
- breaking a larger problem into smaller tasks.

---

## Open Source

RoboMaze is open-source software.

See the repository `LICENSE` file for the full license terms.
