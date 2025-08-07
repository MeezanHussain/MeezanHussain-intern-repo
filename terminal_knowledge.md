# Terminal Knowledge & Windows PowerShell Experience

## Terminal Client Choice

### Selected Terminal: **Windows PowerShell**
I chose to use **Windows PowerShell** as my primary terminal client because:

#### Why Windows PowerShell?
1. **Native Windows Integration**: Built into Windows, no additional installation required
2. **Powerful Scripting**: Advanced scripting capabilities with .NET integration
3. **Object-Oriented**: Commands return objects rather than just text
4. **Extensive Cmdlets**: Rich set of built-in commands for system administration
5. **Familiar Environment**: Already available and configured on Windows systems


## Terminal Customization Status

### Current Setup: **Default Configuration**
I have not made any customizations to my PowerShell environment yet, but I'm aware of the following customization options:

#### Available Customization Options:

##### 1. **PowerShell Profile Customization**
- **Location**: `$PROFILE` (typically `C:\Users\[Username]\Documents\WindowsPowerShell\Microsoft.PowerShell_profile.ps1`)
- **Purpose**: Load custom functions, aliases, and settings on startup
- **Benefits**: Persistent customizations across sessions

##### 2. **Theme and Visual Customizations**
- **Color Schemes**: Customize background, foreground, and syntax highlighting colors
- **Font Settings**: Change font family, size, and weight
- **Window Properties**: Adjust transparency, size, and position

## Basic Terminal Usage Knowledge

### Essential PowerShell Commands:

#### 1. **Navigation Commands**
```powershell
# Change directory
cd C:\path\to\directory
Set-Location C:\path\to\directory

# List directory contents
ls
Get-ChildItem
dir

# Go to home directory
cd ~
cd $HOME

# Go to parent directory
cd ..
```

#### 2. **File and Directory Management**
```powershell
# Create directory
mkdir new-directory
New-Item -ItemType Directory -Name "new-directory"

# Create file
New-Item -ItemType File -Name "new-file.txt"

# Copy files/directories
Copy-Item source.txt destination.txt
cp source.txt destination.txt

# Move files/directories
Move-Item source.txt destination.txt
mv source.txt destination.txt

# Remove files/directories
Remove-Item file.txt
rm file.txt
```

#### 3. **System Information**
```powershell
# Get system information
Get-ComputerInfo

# Get current user
whoami
Get-WmiObject -Class Win32_ComputerSystem

# Get disk space
Get-WmiObject -Class Win32_LogicalDisk

# Get running processes
Get-Process
ps
```

## Most Useful Commands Learned

### 1. **Get-Help** - PowerShell's Built-in Documentation
```powershell
# Get help for any command
Get-Help Get-Process
Get-Help Get-Process -Examples
Get-Help Get-Process -Detailed
```

**Why it's useful**: Provides comprehensive documentation for any PowerShell command, including examples and parameter details.

### 2. **Get-Command** - Discover Available Commands
```powershell
# Find commands containing "process"
Get-Command *process*

# Find commands in a specific module
Get-Command -Module Microsoft.PowerShell.Utility
```

**Why it's useful**: Helps discover available commands and their locations.


## Comparison with Other Terminals

### PowerShell vs Command Prompt:
- **Advantages**: Object-oriented, better scripting, more commands
- **Disadvantages**: Slightly slower startup, different syntax


### PowerShell vs Git Bash:
- **Advantages**: Full Windows integration, system administration
- **Disadvantages**: Different from Unix-like environments


