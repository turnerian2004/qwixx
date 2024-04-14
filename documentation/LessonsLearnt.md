# Lessons Learnt

1. When working a branch, the branch should have a very clearly defined objective. Often, I would be on a branch and notice something unrelated to the branch's objective and go ahead and fix the other thing. The problem with this is that I would have have 20 files changed per branch.

When working alone, this leads to no problems, but when working with others, this leads to lots of merge conflicts. Maybe more importantly, you should compartmentalize as much as you can so the tasks are clearly defined. Also, if every commit and branch has 1 clearly defined objective, you can more easily triage the bug.

2. Refactoring and understanding the game's rules are necessary to writing good code. If you write out the rules of the game neatly in bullet point form, implementing the rules as guard clauses is simple.

3. Don't overplan your code. Plan just enough to understand the problem. Once you start coding, you'll notice plenty of problems with the plan.

4. The only way to indentify bad code is to work on large projects. In isolation, almost anything can look good. Once you use the code repeatedly, you notice what sucks. In that case, refactor and redesign.
