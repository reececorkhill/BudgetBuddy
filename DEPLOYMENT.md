# BudgetBuddy Deployment Guide to Netlify

This technical guide is designed for deploying the BudgetBuddy project, a React application built with Vite, to Netlify. Follow these steps to deploy your application efficiently.

## Prerequisites

- A GitHub account with the BudgetBuddy project already pushed.
- Node.js and npm installed locally for testing and build purposes.

## Step 1: Sign Up for a Netlify Account

1. Go to [Netlify](https://www.netlify.com/) and sign up for a free account. You can sign up using your GitHub account to streamline the process.

## Step 2: Prepare Your Project for Deployment

Ensure your project is ready and tested:

1. **Install dependencies** (if you haven't already):
   ```bash
   npm install
   ```
2. **Test your application locally** using:
   ```bash
   npm run dev
   ```
3. **Build your project** to generate the production build. For a Vite project, the build command might slightly differ from the traditional Create React App projects:
   ```bash
   npm run build
   ```
   This command will generate a `dist/` directory containing your production-ready static files.

## Step 3: Deploy Your Project on Netlify

### Connect Your GitHub Repository

1. **Log in to Netlify** and navigate to your dashboard.
2. Click on the **New site from Git** button.
3. Select **GitHub** as your Git provider. You may be prompted to authorize Netlify to access your GitHub account.
4. **Choose your repository**: Search for the `BudgetBuddy` repository and select it.

### Configure Your Build Settings

Netlify should automatically detect that you are using Vite. If not, you can manually configure your build settings:

1. **Build command**: Enter `npm run build`.
2. **Publish directory**: Enter `dist/` (Vite's default build output directory).
3. (Optional) **Environment Variables**: Add any environment variables your project requires under "Advanced build settings."

### Deploy

1. After configuring your build settings, click on the **Deploy site** button. Netlify will start the deployment process, which includes cloning your repository, building your project using the specified commands, and deploying it to their global network.

2. Once the deployment process completes, Netlify will provide you with a unique URL to access your site. You can also configure a custom domain in the site settings.

## Continuous Deployment

Netlify automatically redeploys your site every time you push changes to your connected repository, ensuring your site is always up to date.

## Custom Domains and Advanced Configurations

- For custom domain configuration, navigate to **Site settings > Domain management** on your Netlify dashboard.
- For advanced build configurations and troubleshooting, refer to the [Netlify Docs](https://docs.netlify.com/).

Congratulations, you have successfully deployed your BudgetBuddy project to Netlify!