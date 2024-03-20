## Table of Contents

* [Description of the assignment](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Link to the Site]()
* [Credits](#credits)
* [License](#license)

## Description


Working within our group, we will collaborate and again conceive and execute a design that solves a real-world problem. In creating the first collaborative front-end, single-page application, our main onjective is to create a React front end app in order to build a user-focused platform. We will continue to build on the agile development methodologies so that we are well informed throughout this course. 

For this project we will build an expense tracker known as Budget Buddy. This application is very beneficial towards society and undisciplined spenders across World. Managing personal finances is essential for maintaining a healthy financial life. One effective way to achieve this is by keeping track of expenses and thus keeping you well informed of any upcoming expenses and to also help minimise stress. So that we can look foward to a better and brighter future for the ones we care for and nurture.

## Installation

**Install the gh-pages package**:
   - Run `npm install gh-pages --save-dev` to add `gh-pages` as a development dependency.

2. **Configure your `vite.config.js`**:
   - Add a base property to the export default object in your `vite.config.js` file. This should match your GitHub repository name with a leading slash and trailing slash. For a repository named `example`, it would be:
     ```js
     export default defineConfig({
       base: '/example/',
       plugins: [react()]
     })
     ```

## Step 2: Update Your `package.json`

1. **Add a homepage field**:
   - Add a `"homepage"` field with the URL of your GitHub Pages site. This will be `"https://<username>.github.io/<repository-name>/"`.
   
2. **Add deployment scripts**:
   - In the `"scripts"` section of your `package.json`, add two scripts to build and deploy your application:
     ```json
     "scripts": {
       "build": "vite build",
       "deploy": "gh-pages -d dist"
     }
     ```

## Step 3: Deploy Your Application

1. **Build your project**:
   - Run `npm run build` to build your project.

2. **Deploy to GitHub Pages**:
   - Run `npm run deploy` to deploy your project to GitHub Pages. This script builds your project and pushes it to a `gh-pages` branch on your repository.

## Step 4: Configure GitHub Pages

1. **Go to your repository's settings on GitHub**.
2. **Navigate to the Pages section**.
3. **Select the `gh-pages` branch as your source**.
4. **Save your changes**.

Your React application is now live on GitHub Pages at the URL specified in the `"homepage"` field of your `package.json`.

## Note

Remember to replace `<username>` and `<repository-name>` with your actual GitHub username and repository name. Adjust the `"base"` in `vite.config.js` accordingly.

## Usage

## Link to Site

This site can be accessed on GitPages [HERE]()

## Credits

Shout out to the teachings of each team at EdX and the fellow students for the help and collaboration.

The group members and project responsibilities:

Reece Corkhill: Build AddTransaction.jsx Component (Priority), also store locally. Build Transactions.jsx component. 

Abdullah Bhatti: Balance.jsx component, Recharts, Victory, other options https://blog.logrocket.com/top-8-react-chart-libraries/#recharts  

Jubane Khumbulani: Readme.md, Header.js component, GlobalState.js component, AppReducer.js in the context folder 

Sridhar Aniruddha: Income.jsx component,  CSS and include React-Bootstrap, Create presentation template 

Frank Lapa: Deployment of app, Unit test cases, and include library Jest Enzyme or Cypress.

Deployment of app 

Unit test cases, and include library Jest Enzyme or Cypress 
  

## License

MIT License

Copyright (c) 2024 Reece

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
