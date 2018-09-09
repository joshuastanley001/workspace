# EcardWebapp

Digital Greeting Card web application.

## Install Development Tools

1. Install Java JRE(Webstorm uses this)
https://www.java.com/en/download/ 

2. Install Webstorm
https://www.jetbrains.com/webstorm/download/
Setup GitHub in settings-Version Control


3. Install Node and NPM
https://nodejs.org/en/download/ 
npm install npm@latest -g

4. Install git
https://git-scm.com/downloads 

# Local Development setup

Clone this repo to your local development workstation.

```
# cd ~
# mkdir workspace
# cd workspace
# git clone https://github.com/elebitzero/ecard-webapp 
# git status
# git branch
```
Next you should run `npm install` to install all 3rd party dependencies.  `npm install` reads the package.json in the project's root directory and downloads adn installs all packages mentioned in the 'dependencies' and 'devDependcies' sections.  (Dependencies are packages needed for the code to run in production while Dev Dependencies are packages needed to compile, build, test, and deploy the code but are otherwise not needed for the code to run in production.)
```
# npm install
```
Look at the console output. If you see any errors, you need to resolve them before proceeding.  If all package depencies were installed successfully, you can do a test build.
```
# ng build --prod
```

By default, your local git repo will be a clone of the master branch.  However, you should not work on the master branch directly, so you need to create your own development branch to work off of.

But first, let's setup Webstorm.

1. Run webstorm. 
2. Create a new project ecard-webapp
3. File->Settings, click on Directories, add ~/workspace/ecard-webapp as a new content root.

Ok, now we are ready to create a new development branch to work on.  First, you need to create the branch on GitHub. On GitHub, create a new development branch to work on, e.g. yourname-dev, e.g. elebitzero-dev.

Now back in webstorm, 
1. Git->Fetch
2. Git->Branches, Checkout myname-dev branch locally

##  Development workflow to make code changes

1. Edit files in webstorm (or other editor).
2. In Webstorm, take a look at the VCS panel at the bottom. (If you don't see this, you haven't setup GitHub/Git settings.)
3. Look at ChangeList. If you modify any files under VCS/Git control, they will show up here as modified.  There is also another folder for unversioned files.  If you add a new file, Webstorm will prompt you whether you want to add it to version control. You should say Yes. If you add files outside Webstorm, e.g. with some other editor on the cmdline, then the files will show up as unversioned. You can right-click on the files and say Add to Version Control.
4. Once you are ready to checking some code changes, Git->Commit Files will commit the changes to the local myname-dev branch. You will be prompted to enter a description of the code changes.
5. Git->Push will push the changes form the local myname-dev branch to the corresponding remote (origin) myname-dev branch on GitHub.
6. In GitHub, navigate to ecard-webapp home page, and there should be a banner message saying you recently commited changes to myname-dev branch, and you can click to Create PR to push code from Dev branch to master branch.
7. On the Create PR screen, you should add description/commments explaining what the change is.  By default, the description from the commit will be used the PR description, but you can add additional description.  In the case where you are creating a PR for multiple commits at once, you may have to manually merge the descriptions from each commit, because GitHub only copies the last commit's description.  
8.  In the description, you can also mention fellow committers e.g. @elebitzero if you want them to be notified of the PR.
9. TBD - After creating the PR, any auomated tests or checks setup with GitHub plugins would be run.  (Right now, we don't have any configured.)
10. TBD - Normally, you want to get at least one other committer to review your PR and then Approve it before you merge it to the master branch.
8. Merge PR. This merges the commits from myname-dev branch to the master branch on GitHub.   

## Development workflow to keep your myname-dev branch updated.

Your myname-dev branch should be regularly updated with the latest code on the master branch.

1. Git->Pull,  check 'master' and press OK
2. Check console. On success, it should tell you how many files were updated.  On failure, you need to look at the errors. One common error is if you have files that you have edited, but havent' committed yet, and pulling the latest master commits contain changes to one or more of those edited files, then Git will complain.  You will need to commit the files to your local myname-dev branch, before doing the Git->Pull on the remote master branch.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.


## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Credits

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.5.
