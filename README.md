## WebGL Application Framework

## Synopsis
gaf.js is a minimal WebGL application framework (ES6) that is composed of an App class that helps create an environment like Processing, Openframeworks, Cinder so you can just override the setup and draw methods and get going without having to care too much about the HTML canvas or setting up a valid WebGL context or setting up a draw loop via requestAnimationFrame (which is used inside of gaf.js)

## Code Example
The library contains one key class that is meant to be overridden like so:
```js
import App from 'gaf';

class MyApp extends App {
  constructor( props ) {
    super( props );
    // runs before setup   
  }
  setup  = () => { /* setup app  */ };
  update = () => { /* update app */ };
  render = () => { /* render app */ };    
};
```

To get your application running, create a new instance:
```js
// continuing from the example above
var myApp;
if( myApp == undefined ) {
  myApp = new myApp();
}
```

If you need to get access to the WebGL context or HTML canvas:
```js
// continuing from the example above
var gl = myApp.getContext();
var canvas = myApp.getCanvas();
```        

## Motivation
This library is part of a larger project / series of libraries that aspires to bring computational and parametric design applications to the web. This library aspires to provide a flexible & modular internal app framework to help power all types of web apps dealing with computational design, 3d printing, g-code generation, cnc milling tool path creation, laser cutting paths, robotic motion planning, and more.

## Build Requirements
node.js (4.4.0+) & npm

gaf.js is built for ES6 so be sure to transpile to ES5 if your browser / server doesn't support ES5, here is how I do it:
```json
"browserify": {
  "transform": [ [ "babelify", { "presets": [ "es2015", "stage-0" ] } ] ]
}
```

## Installation
You can add this library to your project by running:
```
npm install --save https://github.com/YCAMInterlab/gaf.js.git
```

or via npm:
```
npm install --save gaf
```

## Contribution
Copyright 2015-2016 [Reza Ali](http://www.syedrezaali.com) co-developed by [YCAMInterLab](http://interlab.ycam.jp/en/) during the [Guest Research Project v.3](http://interlab.ycam.jp/en/projects/guestresearch/vol3)

## License
Apache-2.0
