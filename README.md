# Yolla

## Description of the Project

  
 
## Project Configuration
To run yolla project, you need to have:
-  npm package manager, puts modules in place so that node can find them, and manages dependency conflicts intelligently
-  jasmine-npm, DOM-less simple JavaScript testing framework. ?????

To run Project locally
```
$ yarn i
$ yarn start
```
To run Test locally ****
```
$ yarn install ????
$ yarn test
```

## Folder Structure
The application consist:
```
yolla/
├──  src
│    ├──  App
│    │    ├──  Component
│    │    │    ├──  Title
│    │    │    │     ├──  Title.js
│    │    │    │     ├──  Title.css
│    │    │    ├──  Button
│    │    │    │     ├──  Button.js
│    │    │    │     ├──  Button.css
│    │    │    ├──  Header
│    │    │    │     ├──  Header.js
│    │    │    │     ├──  Header.css
├──  spec (Test)
│    ├──  Button - Test
│    │    ├──  Button (Test for Button functions )
│    ├──  Header - Test
│    │    ├──  Header (Navigation functionality)
├──  package.json (npm config file)
├──  README.md
```