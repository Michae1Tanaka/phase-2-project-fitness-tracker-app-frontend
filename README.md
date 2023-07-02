# Flatiron School Phase 2 Project : Fitness Tracker

# Introduction

This project was meant for more of a personal project as I'd like to be able to track certain workouts, volume, and begin to understand which muscles I lack in targeting and which muscles I over-train. I wanted something that would implement everything I want in a fitness tracking application. I am no where near an end product I would like, but over time I wish to implement new ideas to my application.
Currently this application provides functionalities such as :

- Tracking of major muscle groups volume (bicep,back,chest,tricep,shoulders,legs,forearms, and core).
- Able to store 1 previous muscle group to be able to compare the last workout volume to the current workout volume.
- Stores workouts on a card that displays workout name, an image to show the workout or any image the user provides, primary and secondary muscles hit, weight, reps, duration of workout, and that workouts volume.
- Ability to edit saved workouts to change any of the information from above.
- Ability to delete a current workout saved or add a new workout if necessary.

# Installation

First fork the backend repository [here](https://github.com/Michae1Tanaka/phase-2-fitness-tracker-backend) :

1. Copy the SSH key from the forked repo.
2. Open your terminal.
3. Navigate to the folder in which you would like the repository to be placed.
4. Type `git clone` and then paste the SSH key after `clone`. It should look something like `git clone https://github.com/Michael1Tanaka/phase-2-project-workout-app.git`.
5. Navigate to the project directory.
6. Open in the IDE of your choosing.
7. Open the terminal and type `npm install`
8. Type `npm start` in the terminal to allow the json-server to begin.

Then:

9. Fork the repository [here](https://github.com/Michae1Tanaka/phase-2-project-fitness-tracker-app-frontend) :
10. Repeat Steps 1-7 but for the newly forked repository.
11. After the dependencies download, type `npm start` to allow the website to deploy on your local host.

Also you can check out the application [https://flatiron-phase-2-project.netlify.app/](https://flatiron-phase-2-project.netlify.app/) and the json-server [https://json-server-api-fitness-tracker.onrender.com/](https://json-server-api-fitness-tracker.onrender.com/)

# Contributor's Guide

I encourage contributions to my fitness tracker application. Any and all help is appreciated. Here are some guidelines to follow if you would like to contribute:

1. **Fork and Clone the Repository**:
   Start by following the instructions in the [Installation](#installation) portion of the README.md. Check that your fork is the "origin" remote with `git remote -v`. If you do not see an "origin" remote, you can add it using `git remote add origin https://github.com<your-username>/phase-2-project-fitness-tracker-app-frontend.git`. Replace `<your-username>` with your GitHub username.
2. **Set up Development Environment**:
   After forking and cloning the repository, contributors should create a new branch on which they can make their changes. This can be done using the command git checkout -b <branch-name>. Replace <branch-name> with a name that describes the feature or bugfix the contributor will be working on. In addition, contributors may need to install any necessary dependencies for the project using npm install.
3. **Work on Your Own Feature or a Bug fix**:
   Contributors should pick a feature to add or a bug to fix. Ideally, this should be something that they've discussed with the project maintainer(s) to ensure it's something the project needs. Contributors may want to create a detailed plan or outline for how they're going to implement the feature or fix the bug to keep themselves organized and ensure they've thought through the problem.
4. **Make Changes in Your Local Repo**:
   After picking a feature or bugfix and planning their approach, contributors should make the changes in their local copy of the repository. This might involve adding new files or modifying existing ones.
5. **Commit your changes**:
   As contributors make changes, they should regularly commit these changes to their branch. Each commit should be a logical chunk of work and should include a clear, concise message that describes the change. This can be done using the command git commit -m "Your descriptive message here".
6. **Push Your Changes to Your Fork**:
   Once they've made their changes and committed them to their branch, contributors should push their branch to their fork of the repository on GitHub. This can be done using the command git push origin <branch-name>.
7. **Begin the Pull Request**:
   After pushing their changes to GitHub, contributors can start a pull request on the original repository. To do this, they should navigate to their fork of the repository on GitHub, switch to their branch, and click the "New pull request" button.
8. **Create the Pull Request**:
   When creating the pull request, contributors should provide a title and description that explains what the changes do and why they should be included in the project. Once they've filled out this information, they can click "Create pull request". Then, it's up to the project maintainer(s) to review the changes and decide whether to merge them into the project.

## Credits

This Project uses [Semantic UI](https://semantic-ui.com/) for their React Components and CSS rules. I haven't seen nor tried to look for a decent fitness tracking application since most I use end up disappointing me so if this is similar to any apps already please feel free to let me know as I did not and nor do I intend to pass this idea off as my own. It's more of a personal project than anything.

## License

MIT License

Copyright (c) [2023] [Michael Tanaka]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
