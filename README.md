# Project Introduction

To better learn React, I chose to build something I could not find online. This way, there's no code I can copy or tutorial I can watch to directly solve the problems I encounter. To the best of my knowledge, no one has yet to build a fully implemented version of qwixx online in any language or with any framework.

I hope you enjoy playing the game!

In the `documentation folder`, you can read more about the architecture, design decisions, and game rules. In the explanation box of the app, you can also read about the game rules.

# Build Instructions

1. Run `npm i`
2. Run `npm run build`
3. run `npm install -g serve`
4. run `serve -s build`
5. Go to [http://localhost:3000](http://localhost:3000)

# Test Instructions

1. Run `npm i`
2. Run `npm test`

# Areas to Improve

> - I have many functions that do the same thing: Identify the component's colour. I should standarize this. Specifcally, I should have one enum class called `COLOURS` instead of a unique enum colour class for every component. I have multiple colour enums, and this has led to spaghetti code.

> - For a better use experience, I should've had a counter that tells users how many buttons they may still select on their turn.

> - The board button objects should've been given an index number. This would've simplifed the code.

# Concluding Thoughts

> - This was my fifth rewrite of the code. The first write was in plain vanilla javascript. I almost quit coding because of how brutal writing code in vanilla js is. The second write was with React. I didn't know how to reuse components, so I wrote everything in the `App.tsx`. That was ugly. The third write was with NextJS. That tech stack is not as developed as React, and there were little bugs I was never able to resolve. The fourth write was in React. I didn't get too far, but my coding game was better. Basically, I gave up because I was bored with attempting to build this game. The fifth and final write is this codebase. By that time, I understood the problem well enough to complete task.

> - Writing the code for the 'Is player 'x' done? was tricky. If the dice roller clicks the button, the button needs to indicate that player clicked the button, but the box also needs to reset `blank`, so that the next player can click the box, if they desire.

# Design Decisions

The design inspired by this [version](https://images.squarespace-cdn.com/content/v1/59ea6080a803bb2f70ecbae5/1618414430622-MIG9ZEQXIVL1HX0KLPWR/1ce8e79e2d1121c1bd2f3089200cbe42.jpg) of Qwixx.

The colours were taken from this [version](https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Qwixx_scorecard_nofonts.svg/1701px-Qwixx_scorecard_nofonts.svg.png).

# Git Etiquette

Commits should adhere to this format: type/message. Example: documention/documented-git-etiquette

Here are the categories of git commits:

1. testing -> often tests are incorporated into feature commits
2. fix -> resolves a problem
3. feature -> a new component, for example
4. documentation -> explains a new feature, for example
5. todo -> a running list of what is left to work on
