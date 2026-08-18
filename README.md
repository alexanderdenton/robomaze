# RoboMaze

RoboMaze is a classroom programming activity for secondary-school pupils using a BBC micro:bit, Microsoft MakeCode Python and the Kitronik :MOVE Motor.

The pupil-facing resources are published using GitHub Pages.

## Website

**https://robomaze.alexanderdenton.dev**

## Teaching Approach

The activity is designed so that pupils do not have to build every piece of motor-control code from scratch.

The starter code provides:

- a completed `turn_right_90()` function;
- a completed `move_to_wall()` function;
- the required hardware setup code.

Pupils then:

1. analyse the maze;
2. adjust `speed` and `turnTime` until the supplied right turn is approximately 90 degrees;
3. copy and adapt the right-turn code to create `turn_left_90()`;
4. test the ultrasonic sensor and choose `distanceToWall`;
5. test the supplied `move_to_wall()` function using that distance;
6. sequence the movement functions inside `navigate_maze()` to escape the maze.

The variables pupils are expected to adjust are kept together at the top of `main.py` because they are central to the activity.

## Repository Contents

- `index.md` - GitHub Pages homepage
- `instructions.md` - pupil setup and Tasks 1-6
- `cheat-sheet.md` - pupil programming reference
- `starter-code.md` - website page containing copyable starter code
- `teacher.md` - teacher/source page containing the completed solution
- `license.md` - website licence page
- `main.py` - pupil starter template
- `solution.py` - completed example solution
- `_layouts/` - shared Jekyll page layout
- `_includes/` - shared site navigation
- `assets/` - site CSS and JavaScript
- `CNAME` - GitHub Pages custom domain
- `LICENSE` - MIT licence

## Intended Pupil Workflow

Pupils should normally use the RoboMaze website rather than browsing the
GitHub repository directly.

They can:

1. open the activity instructions;
2. open Microsoft MakeCode in a separate browser tab;
3. copy the starter code into MakeCode;
4. work through Tasks 1-6;
5. use the cheat sheet whenever required;
6. return to the starter-code page for a fresh copy if their code becomes
   badly broken.

The completed solution remains available for teachers, maintainers and people
using RoboMaze independently.

## GitHub Pages

The site is built with Jekyll and is intended to use:

- **Source:** Deploy from a branch
- **Branch:** `master`
- **Folder:** `/(root)`

The custom domain is:

`robomaze.alexanderdenton.dev`

## License

RoboMaze is open-source software released under the MIT License.

Copyright © 2026 Alexander Denton.

See [LICENSE](LICENSE) for the full licence terms.


## Website Setup Visuals

The website includes setup screenshots showing pupils how to:

- create a MakeCode project called `RoboMaze`;
- change **Code options** to **Python Only**;
- click **Extensions** on the left-hand side;
- select the **kitronik-move-motor** extension tile.

These visuals make the setup stage more explicit for classroom use.


The setup screenshots are styled through the shared site CSS so they remain
responsive and visually secondary to the written instructions. This keeps the
Markdown files clean when browsing the repository directly on GitHub.
