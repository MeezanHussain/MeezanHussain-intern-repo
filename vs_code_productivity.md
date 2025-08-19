# VS Code Productivity Guide: Top 10 Shortcuts

> **📸 Screenshot Proof**: [View VS Code with shortcuts file open](./screenshots/vscode-shortcuts.png)

## How Keyboard Shortcuts Improve Productivity

Keyboard shortcuts are essential for maximizing productivity in VS Code because they:

1. **Reduce Context Switching**: Keep your hands on the keyboard instead of reaching for the mouse
2. **Speed Up Workflow**: Execute commands instantly without navigating menus
3. **Maintain Flow State**: Avoid interruptions that break your coding concentration
4. **Reduce Repetitive Strain**: Minimize mouse movements and clicks
5. **Enable Advanced Features**: Access powerful features like multiple cursors efficiently

## Top 10 Most Useful VS Code Shortcuts

### Navigation Shortcuts

#### 1. **Ctrl + P** (Quick Open)
- **What it does**: Instantly search and open files
- **Why it's essential**: Navigate large codebases without folder browsing
- **Daily use**: Opening files, switching between components

#### 2. **Ctrl + Shift + P** (Command Palette)
- **What it does**: Access all VS Code commands
- **Why it's essential**: Execute any action without memorizing shortcuts
- **Daily use**: Running commands, accessing settings, installing extensions

#### 3. **Ctrl + G** (Go to Line)
- **What it does**: Jump to specific line number
- **Why it's essential**: Quick navigation in large files
- **Daily use**: Debugging, code review, finding specific code sections

### Editing Shortcuts

#### 4. **Alt + Shift + ↓/↑** (Multiple Cursors - MUST HAVE)
- **What it does**: Create multiple cursors above/below current line
- **Why it's essential**: Edit multiple lines simultaneously
- **Daily use**: Adding/removing prefixes, bulk editing, refactoring

#### 5. **Ctrl + D** (Select Next Occurrence)
- **What it does**: Select next occurrence of current selection
- **Why it's essential**: Multi-cursor editing for same text
- **Daily use**: Renaming variables, updating similar strings

#### 6. **Ctrl + L** (Select Current Line)
- **What it does**: Select entire current line
- **Why it's essential**: Quick line manipulation
- **Daily use**: Moving, copying, or deleting entire lines

#### 7. **Alt + ↑/↓** (Move Line Up/Down)
- **What it does**: Move current line up or down
- **Why it's essential**: Reorganize code without copy/paste
- **Daily use**: Reordering functions, fixing code structure

### Debugging Shortcuts

#### 8. **F9** (Toggle Breakpoint)
- **What it does**: Add/remove breakpoint on current line
- **Why it's essential**: Essential for debugging workflow
- **Daily use**: Setting breakpoints during development

#### 9. **F5** (Start Debugging)
- **What it does**: Start debugging session
- **Why it's essential**: Quick access to debugging
- **Daily use**: Testing code, troubleshooting issues

### Terminal Commands

#### 10. **Ctrl + `** (Toggle Integrated Terminal)
- **What it does**: Open/close integrated terminal
- **Why it's essential**: Access command line without leaving editor
- **Daily use**: Running scripts, git commands, package management

## Personal Experience: Terminal Commands in My Assignment Projects

During my assignment projects, I've found that the integrated terminal in VS Code has been incredibly valuable for my daily workflow. Here are the commands I use most frequently:

### **mkdir** - Creating Project Structure
I regularly use `mkdir` to create new folders for different components or features. For example, when building a React project, I'll quickly create directories like:
```bash
mkdir components
mkdir pages
mkdir utils
mkdir assets
```

### **cd** and **ls** - Navigation and Exploration
The `cd` command helps me navigate between different project directories, while `ls` gives me a quick overview of what files are in each folder. This is especially useful when working with complex project structures.

### **npm run dev** - Development Workflow
One of my most-used commands is `npm run dev` to start the development server. This command has saved me countless clicks and time compared to manually navigating to the terminal or using the mouse to run scripts.

### Real-World Time Savings
Just yesterday, while working on a project, I needed to create a new feature folder and start the dev server. Using the integrated terminal with these commands:
1. `mkdir new-feature` (2 seconds)
2. `cd new-feature` (1 second) 
3. `npm run dev` (2 seconds)

Total time: 5 seconds. If I had used the GUI, it would have taken at least 15-20 seconds with mouse navigation and menu clicking.

The **Ctrl + `** shortcut to toggle the terminal has become second nature to me, and I can't imagine coding without these terminal commands readily available in VS Code. 