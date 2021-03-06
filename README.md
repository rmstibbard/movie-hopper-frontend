# DevelopMe_ Cohort #16: Final Project
## Front-end Architecture - React Redux

[Trello Planning Board](https://trello.com/b/3IYLhVts)

### Team:
#### Front End
- Nik Osvalds
- Richard Stibbard

#### Back End
- Kieran Cott
- Henry MacFarlane


### Collaborating:

**Never commit directly to the master branch. Create a new feature branch from the development branch, and make a pull request for a team-mate to review and merge.**

### Getting Started:

1. Clone the repository to your local machine using the URL in the Repo
```bash
git clone {url} {foldername}
```
2. Install neccessary packages using npm
```bash
npm install
```
3. Find a new task in the task-list to work on (either Github issues or Trello)

4. Create a branch on your local machine to work on that issue/feature
```bash
git checkout -b {name of branch}
```
5. Develop your features in your feature branch, and test on your local machine

6. Once you're happy with your branch push your branch to the remote repo on gitHub
```bash
git push origin {branch}
```
7. In gitHub create a pull request for your new branch, assign a reviewer from the team (probably your other teammate) and link the issue you were working on (if it's a gitHub issue)

8. Have a team member review the pull request and merge!

9. Ensure the branch is deleted once its merged

### API Set Up
- To test the front end fully you'll need to set up a local instance of the API on a VM. Follow the instructions on this gitHub repo to install:
  - (https://github.com/kierancott/developMe-final-project--backend)
  
#### development/testing endpoint
(http://homestead.test/api/)

#### production endpoint
(https://hopper.developme.space/api/



## Deploying
```bash
npm run deploy
```

- The above command uses the gh-pages package to deploy to gitHub pages. Script lives in package.json and runs:
```
react-scripts build
gh-pages -d build
```


# Create React App Documentation

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
