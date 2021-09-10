# Vue 3 + Webpack 5 + Module Federation + JavaScript sample

## create

```
vue create module1
```

Vue CLI v5.0.0-beta.3

? Please pick a preset: Manually select features

? Check the features needed for your project: Choose Vue version, Babel, Router, CSS Pre-processors, Linter

? Choose a version of Vue.js that you want to start the project with 3.x

? Use history mode for router? (Requires proper server setup for index fallback in production) Yes        

? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): Sass/SCSS (with dart-sass)

? Pick a linter / formatter config: Prettier

? Pick additional lint features: Lint on save

? Where do you prefer placing config for Babel, ESLint, etc.? In dedicated config files

? Save this as a preset for future projects? No



* copy webpack.config.js

add to `package.json` 
```
    "start": "webpack serve --hot",
```

```
npm i -D webpack webpack-cli webpack-dev-server
npm i -D clean-webpack-plugin copy-webpack-plugin html-webpack-plugin
```

* remove (or set?) BASE_URL parameter from `index.html` for link to icon

* create `postcss.config.js`
```
module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-color-function'),
    require('postcss-vwh')
  ]
}
```

```
npm i -D postcss-color-function postcss-vwh autoprefixer
```

* rename `main.js` to `bootstrap.js`

* create `index.js`
```
import('./bootstrap')
```
