# Sass Grunt Style Guide

Sass Grunt Style Guide is a one stop style guide for application content and development standards built upon the Style Guide Guide boilerplate by Brad Frost.

[See the demo here](https://bradfrost.github.io/style-guide-guide/)

## How it works
Sass Grunt Style Guide is built using [Jekyll](https://jekyllrb.com/), a static site generator which works quite well for managing the content of a style guide.

The tool can consume and display components from anywhere, but the ideal workflow would be importing patterns from [Pattern Lab](http://patternlab.io/) into Abrigo Patterns for display. For more info, check out this blog post (coming soon for now).

## Dependancies and Prerequisites [Required]
1. Ruby - for managing Ruby Gems [install for windows](https://rubyinstaller.org/). MacOS comes with Ruby but you will need to have X-Code command line developer tools install. For this run a simple command in terminal like 'gcc'.

![install of command line dev tools](/images/x-code-select.png)

If you get this popup click the "install" button

2. NodeJs - [download](https://nodejs.org) then check to make sure your NodeJs installation was complete by running 'node -v' and for the Node Package Manager 'npm -v'. If you are getting the version number your good.

3. Jekyll - for static site generation install by running `gem install jekyll`. Note: You may need 'sudo' before that command for super user permissions.

4. Jekyll dependencies installation `sudo gem install jekyll-theme-cayman && sudo gem install jekyll-inline-svg`

5. GruntJs Client - for running grunt specific tasks with 'grunt'. For this install with running `npm install -g grunt-cli`. Note: If your only running the 'serve' and 'build' via NPM you will not need this.

## Getting Started with GUI Client
1. Download your preferred GUI by visiting [GUI guide](https://git-scm.com/downloads/guis)

![example GUI](/images/guis.png)

2. Once you've chosen/downloaded/installed your GUI you will clone the [repository on Github](https://github.com/creativehamlet/abrigo-patterns) continue with steps 2 and 3 of 'Getting Started with Command Line'

## Getting Started with Command Line
1. Download or clone the files from the [repository on Github](https://github.com/creativehamlet/abrigo-patterns)

2. In the command line, navigate to the root of the project and run the `npm run serve` command. This will build the static site and watch for changes.

3. Visit `http://localhost:4000/` in your browser to see the style guide.

From here, obviously the point is to customize the style guide for your needs and populate it with your content and components.

## Common issues
Node Sass could not find a binding for your current environment: OS X 64-bit with Node.js 10.x

If you receive this error run 'npm rebuild node-sass'

## Importing components and assets from Pattern Lab
Coming soon!

## Feedback and Questions
If you have questions or issues with Style Guide Guide, please feel free to [open an issue](https://github.com/creativehamlet/abrigo-patterns/issues). If your organization is creating a design system and style guide and would like some help taking it to the next level, feel free to [get in touch!](brad.sosnowski@abrigo.com)
