# Reeco
Reeco is a CLI that helps you create game with p5.js (or any other graphics/game library) and bring it to your desktop.

## Support for other Libraries
Support for other graphics/any library will be added soon. For now, p5 is the current native graphics library.

## Prerequisites
1. You must have git installed

## Config
- `screenWidth` - Screen width for the app.
- `screenHeight` - Screen height for the app.

## Installation
```bash
# Using NPM
$ npm i reeco

# Using Yarn
$ yarn global add reeco
```

## Creating new Project
1. Create a folder.
2. Add file named `ree.conf.json` and `index.js` to the folder.
3. Run `reeco build`.
4. Done! You can now add your code inside `index.js`. To test your game, simply run `reeco run`

## Example
*See repo https://github.com/repyh/reeco*

## Commands
### Initialize / Build
```bash
# Run this in the project directory
$ reeco build
```

### Running / Development
```bash
# Run this in the project directory
$ reeco run
```

### Packaging
No native support for packaging is currently in Reeco, although, you can use several electron compiler/packager to do the job.