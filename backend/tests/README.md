For just incase Sascha's instructions and `npm install` doesn't work for some reason, you need to do the following:     

`npm install --save-dev babel-jest`     

In *package.json* make the following changes:

``` JSON
{
    "type": "module",
    "scripts": {
        "test": "jest"
    },
    "jest": {
        "transform": {
            "^.+\\.jsx?$": "babel-jest"
        }
    }
}
```     

This is what your [package.json](https://drive.google.com/file/d/1SiOfhpFY1BSaflTzyMpSM3y8sPwnpIce/view?usp=sharing)  should look like.      

Install babel preset:       
`npm install @babel/preset-env --save-dev`      

Create a `.babelrc` file in the root of backend and add:       
``` JSON
{
    "presets": ["@babel/preset-env"]
}
```     

This is where your [.babelrc](https://drive.google.com/file/d/1QxHLtNwvBZcJZpTi-JUnc0vdKulZBlPp/view?usp=sharing) should be located.      

Run the tests:  
`npm run test`      

The results of the [example.test.js](https://drive.google.com/file/d/1cZqWdy3lDcIR3AXDknRqbdrwIONc_Z7v/view?usp=sharing)!