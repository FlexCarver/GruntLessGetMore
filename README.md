# FlexCarver: Grunt & LESS based basic website builder

<img align="right" height="260" src="https://comfortpages.com/media/logo/thumbnail/FlexCarverLogo_V1.0.svg">

### History

FlexCarver was built to help students @ the [Fachhochschule Salzburg](https://www.fh-salzburg.ac.at/) get a head start building websites.


### Install

- install node and npm globally - [Node.js](https://nodejs.org/en/)
- install grunt globally "npm install grunt -g"
- install git/git bash [Git](https://git-scm.com/downloads)
- in your gitbash command window -> go to the project directory and into src
- run "npm install --only=dev"
- point your [xampp](https://www.apachefriends.org/de/index.html) installation to the project directory (httpd.config - DocumentRoot and the Directory-tag underneath), which is the projectname/web for the root of your site - restart apache

#### Ready to go!
- Use "grunt" command for development mode
- Make sure to reload your site once after the first dev build - this will activate the auto-reload script
- Use "grunt --prod=t" for production mode


### Documentation

- change the theme in the config.json file
- using [UIkit](https://getuikit.com/docs/introduction) as a css framework - with LESS


### License - MIT

Copyright 2020 [ComfortPages GmbH](https://comfortpages.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
