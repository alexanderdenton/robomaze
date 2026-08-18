# Debrief
It is your mission, if you choose to accept it, to write the code for the micromouse to navigate a maze without the use of a controller.
The mouse will enter the maze and navigate itself through the maze to the exit.
It will do so using python code you have written
There will be no way for you to change the course of the mouse once it has entered the maze.

You will be provided with “cheat sheets” that will contain the commands you’ll need to program the mouse. Use these commands to implement each of the tasks.

# Setup
Follow demonstration on screen to setup your development environment.

Tip: You’ll need to go to https://makecode.microbit.org/

A template for your code can be found here: 
https://github.com/Atden04/robomaze/blob/master/main.py

# Task 1 - Analysis of the maze
Can you find the correct path out of the maze? Is this the shortest way?
How many right turns are there?
How many left turns are there?

In what order do the turns occur. Hint - This will be needed later!

# Task 2 - Please turn right
As you can see from the analysis of the maze, you will need the mouse to make turns. 
But how do we do this?

Add code to the turn_right_90 function to turn the mouse **right** by 90 degrees. 
Hint – you’ll want to turn the wheels individually.
(Don’t forget to use your cheat sheets to help you!)

# Task 3 - Now turn left
Now we need to copy and adapt the function for turning the mouse right.
(Don’t forget to give your new function a different name)

Hint – Reverse the wheel movement

DO NOT use the turn right method 3x to turn left. This is cheating!

# Task 4 - Object ahead!
The mouse can now turn left or right. Before we can program the mouse to move forward on it’s own we first need to learn how the sensors at the front work.

Step 1 – Within the on_forever function display the distance from the mouse to the object in front of it.
Step 2 – Use the number displayed to work out how far away you want the mouse to stop from the wall.

# Task 5 - Move forward
Unlike turning, we want both of the motors to move in the same direction.
We want the mouse to move forward while the measured distance is less than the distance you calculated in the previous task.

Write a new function move_to_wall. At the end of the function don’t forget the pause and stop commands (like at the end of turn_right_90).


# Task 6 - Escape the Maze
Finally, using the functions you’ve written so far, move_to_wall, turn_right_90, and turn_left_90, you will piece these all together to program the mouse to exit the maze.
