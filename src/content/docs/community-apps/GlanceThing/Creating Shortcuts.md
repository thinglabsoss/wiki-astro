---
title: Creating Shortcuts
---
## Creating shortcuts
To make a shortcut, you'll have to manually find and specify the correct command to run the application. This process will be better in a future update.

### Cover images
For the shortcut, you need a cover image which will show up on the CarThing. The image needs to be in a PNG format, and preferably have a transparent background, however you can do whatever you like. For best performance, the image should be 56x56 pixels, however it doesn't matter too much.

## Windows
Most Windows applications run a command line command in their shortcut to open, so it's pretty simple to copy that. However, UWP applications are a little harder to run using the command line, and are not supported as of now.

Most applications provide a shortcut to open it, for example on the desktop or in the start menu. We'll need that command, so you can do the following to find them:
1. Using Windows search, search up the app you want
2. Click "Open file location" (you may have to expand the menu)
3. Open Properties for the shortcut file
4. Copy the entire command in the "Target" section

Note: If you want to launch a URI (for example, Steam games), you'll have to prepend the command with `start`. For example, to launch BeamNG.drive, the command would be `start steam://rungameid/284160`. For Windows Calculator, the command would be `start calculator:`

You can now paste the command into the input box when creating a new shortcut. This will essentially replicate exactly what the shortcut does, and has worked with all programs i've tried.

If the command is not working, you can try running it manually in the PowerShell terminal. Just put a `&` and a space in the terminal, and paste the shortcut command afterwards. This is how the command is ran internally. By running the command here, you'll get more output to see if there's something wrong with the command.

## macOS
There are a couple commands for opening a macOS application:
- Open by name: `open -a Firefox`
- Open by path: `open /Applications/Firefox.app`
Most applications in macOS live under `/Applications`, in that case you should be able to open it by name. If not, you may have to manually specify the path.

Similar to Windows, to launch a URI instead (like Steam games) you can do `open <URI>`.

You can now paste the command into the input box when creating a new shortcut.

If you are having problems with launching the shortcut, try copying the command and running it in the terminal. The command is ran as is, so here you should be able to see if there's an issue with the path or name.