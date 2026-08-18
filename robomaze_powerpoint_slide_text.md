# RoboMaze PowerPoint Slide Text — Condensed Version

## Slide 1 - Title

# RoboMaze

**Learn to code with the BBC micro:bit**

**Program. Test. Escape the maze.**

---

## Slide 2 - Mission Briefing

It is your mission, **if you choose to accept it**, to program the MicroMouse to escape the maze.

- No controller
- No changing course once it starts
- Your Python code must guide it to the exit

**Your goal: Escape the maze!**

---

## Slide 3 - Setup

Go to:

**robomaze.alexanderdenton.dev**

Then:

1. Open the **Getting Started** page
2. Open **Microsoft MakeCode**
3. Add the **Kitronik :MOVE Motor** extension
4. Switch to **Python**
5. Copy the **Starter Code**

**Keep RoboMaze and MakeCode open in separate tabs.**

---

## Slide 4 - Meet Your Variables

Three values control the MicroMouse:

```python
speed = 0
turnTime = 0
distanceToWall = 0
```

- `speed` — motor speed
- `turnTime` — how long it turns
- `distanceToWall` — how close it gets to a wall

**Test. Adjust. Try again.**

---

## Slide 5 - Task 1: Analyse the Maze

Before we program the route, we need to understand it.

Work out:

- How many **right turns**?
- How many **left turns**?
- What order do they happen in?

**Write the route down.**

Hint: You will need it later!

---

## Slide 6 - Task 2: Please Turn Right

The right-turn code is already written.

Your job:

**Make it turn approximately 90°.**

Experiment with:

```python
speed
turnTime
```

Too far? Too short?

**Adjust and test again.**

---

## Slide 7 - Task 3: Now Turn Left

We already have a right turn.

So...

**Copy it. Adapt it.**

Create:

```python
turn_left_90()
```

Hint:

**Which wheel should move forwards? Which should move backwards?**

And remember...

**Three right turns is cheating! 😄**

---

## Slide 8 - Task 4: Object Ahead!

The ultrasonic sensor measures the distance in front of the MicroMouse.

Display the reading:

```python
basic.show_number(Kitronik_Move_Motor.measure())
```

Test it at different distances.

Then choose:

```python
distanceToWall
```

**How close should the MicroMouse stop?**

---

## Slide 9 - Task 5: Move Forward

`move_to_wall()` is already written.

It keeps moving while:

```python
distance > distanceToWall
```

Your job:

**Test your stopping distance.**

Does it stop:

- too close?
- too far away?
- just right?

Adjust `distanceToWall` and try again.

---

## Slide 10 - Task 6: Escape the Maze

You now have:

```python
move_to_wall()
turn_right_90()
turn_left_90()
```

Use the route from **Task 1**.

Put the function calls into:

```python
navigate_maze()
```

Then...

**Place the MicroMouse at the entrance and see if it escapes!**

---

## Slide 11 - Something Went Wrong?

Good.

That means you are programming.

Check:

- the route
- `speed`
- `turnTime`
- `distanceToWall`
- your function calls

Use the **RoboMaze Cheat Sheet** if you get stuck.

If everything has gone horribly wrong...

**Copy a fresh Starter Code from the website.**

---

## Slide 12 - Mission Complete

Did your MicroMouse escape?

What did you have to change?

What controlled:

- the speed?
- the turning?
- the stopping distance?
- the route?

**Programming is testing, debugging and improving.**

**Mission complete.**

---

# Speaker Notes / Delivery Guide

These slides are deliberately short.

The RoboMaze website contains the detailed instructions, code examples and cheat sheet. Use the PowerPoint to introduce each stage, explain the challenge verbally, and then direct pupils back to the website when they need the exact steps.

## Suggested Delivery

### Setup

Demonstrate the setup live rather than asking pupils to read a long list from the slide.

Keep the Setup slide visible while pupils open the website and MakeCode.

### Tasks 2, 4 and 5

Encourage pupils to test the physical MicroMouse rather than guessing values.

The important lesson is the cycle:

**Change → Test → Observe → Improve**

### Task 3

Emphasise that copying and adapting working code is a normal programming technique.

They are not expected to memorise the Kitronik motor commands.

### Task 6

Bring the activity back to the route they worked out in Task 1.

The final challenge is mainly about sequencing their working functions correctly.

### If Pupils Get Stuck

Point them towards:

1. The RoboMaze Cheat Sheet
2. The Starter Code page
3. The task instructions on the website

The PowerPoint should remain the presentation layer rather than becoming a second copy of the website.
