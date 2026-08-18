# RoboMaze

RoboMaze is a classroom programming activity for secondary-school pupils using a BBC micro:bit, Microsoft MakeCode Python and the Kitronik :MOVE Motor.

The pupil-facing resources are intended to be published through GitHub Pages.

## Website

Preferred public address:

`https://robomaze.alexanderdenton.dev`

## Teaching Approach

The activity deliberately does not ask pupils to build every piece of motor-control code from scratch.

The starter code provides:

- a completed `turn_right_90()` function;
- a completed `move_to_wall()` function;
- the hardware setup code.

Pupils then:

1. analyse the maze;
2. adjust `speed` and `turnTime` until the supplied right turn is approximately 90 degrees;
3. copy and adapt the right-turn code to create `turn_left_90()`;
4. test the ultrasonic sensor and choose `distanceToWall`;
5. test the supplied `move_to_wall()` function using that distance;
6. sequence the three movement functions in `navigate_maze()`.

The variables pupils are expected to adjust are kept together at the top of `main.py` because they are central to the activity.

## Repository Contents

- `index.md` - GitHub Pages homepage
- `Instructions.md` - pupil setup and activity instructions
- `cheat-sheet.md` - pupil reference sheet
- `main.py` - pupil starter template
- `solution.py` - completed example
- `LICENSE` - open-source licence

## Intended Pupil Workflow

Pupils should normally use the GitHub Pages site rather than GitHub itself.

They can always re-copy `main.py` from the website if their MakeCode project becomes badly broken.

The completed solution remains in the repository for teachers, maintainers and independent users.
