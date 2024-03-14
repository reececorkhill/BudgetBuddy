# Deployment Guide for React and Vite Project on GitHub Pages

This guide provides detailed instructions for deploying a React application built with Vite to GitHub Pages. Follow these steps to prepare, build, and deploy your project.

## Prerequisites

- Ensure you have a GitHub account.
- Your React and Vite project should already be pushed to a repository on GitHub.

## Step 1: Prepare Your Project

1. **Install the gh-pages package**:
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