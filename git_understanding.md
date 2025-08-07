# Git Concepts: Staging vs. Committing

## 1. What is the difference between staging and committing?

- **Staging** (using `git add`) is the process of selecting specific changes (files or parts of files) that you want to include in your next commit.
- **Committing** (using `git commit`) is the act of saving the staged changes into the Git history with a descriptive message.

In short:  
**Staging** = preparing your changes  
**Committing** = saving those prepared changes

---

## 2. Why does Git separate these two steps?

Git separates staging and committing to give developers more control.  
Instead of committing all changes at once, you can:

- Carefully review and group related changes together
- Create clean, meaningful commit histories
- Avoid accidental commits of unfinished or unrelated code

This two-step process improves collaboration, debugging, and version tracking.

---

## 3. When would you want to stage changes without committing?

- When you’re working on multiple features or fixes in the same file but want to separate them into different commits
- When you want to pause and review your changes before writing a commit message
- When you're collaborating and only want to commit part of your work to keep commits clean and specific

---

## Experiment Notes:

- I modified a file, then ran `git add file.js` to stage it.
- `git status` showed it as “staged for commit.”
- I ran `git reset HEAD file.js` to unstage it, which moved it back to “modified.”
- Then I committed it using `git commit -m "Updated feature X"` — it was saved to Git history.

This helped me better understand how to organize and control my changes before saving them permanently in the repo.
