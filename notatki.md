
## Instalacje 

node -v
v16.13.1

npm -v
8.1.2

git --version
git version 2.36.0.windows.1

Visual Studio Code
Menu -> Help -> About
1.67

Google Chrome	
chrome://version
101.0.4951.64

## Angular CLI

npm install -g @angular/cli

ng --version
ng help 
ng
ng new --help

## New Project Workspace
ng new --directory "." 
? What name would you like to use for the new workspace and initial project? jsystems
? Would you like to add Angular routing? Yes
? Which stylesheet format would you like to use? SCSS   [ https://sass-lang.com/documentation/syntax#scss       


## GIT 
cd katalog_roboczy/

git clone https://bitbucket.org/ev45ive/jsystems-angular-maj.git jsystems-angular-maj
cd jsystems-angular-maj
npm install
npm start

 
## Schematics 

ng g m shared -m app
ng g c shared/clock --export

ng g c shared/pages/page-not-found

## Playlists module

ng g m playlists -m app --routing --route "playlists"

ng g c playlists/containers/playlists-view -m playlists 

ng g c playlists/components/playlist-list -m playlists 
ng g c playlists/components/playlist-details -m playlists 
ng g c playlists/components/playlist-editor -m playlists 


