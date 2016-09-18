# My Notes

sample app to manage notes, which i created during learning React and Redux

##Features
- enables to create, update and remove simple text notes
- search for notes
- displays note details (creation and last modification time)
- notes will be stored in the browser's localStorage
- UI implementation in Material Design

## Live Demo
http://lab.mrscholty.com/mynotes

##Screenshots
<div>
<img width="420" src="https://raw.githubusercontent.com/mrscholty/mynotes/master/assets/screen-add.png" border="0" /> <img width="420" src="https://raw.githubusercontent.com/mrscholty/mynotes/master/assets/screen-list.png" border="0" />
</div>
<div>
<img width="420" src="https://raw.githubusercontent.com/mrscholty/mynotes/master/assets/screen-search.png" border="0" /> <img width="420" src="https://raw.githubusercontent.com/mrscholty/mynotes/master/assets/screen-update.png" border="0" />
</div>

##Tech-Stack
- React (https://facebook.github.io/react)
- Redux (http://redux.js.org)
- React-MDL (https://tleunen.github.io/react-mdl)
- Moment.js (http://momentjs.com)
- Webpack (https://webpack.github.io)

## Running the app

1. switch to mynotes directory `cd myNotes`
2. install the dependencies `npm install` (see package.json)

### create dev build and run server
start webpack-dev-server with Hot Module Reloading and React Hot Loader `npm run build-dev`
http://localhost:8080

### create production build
start build-production task `npm run build-production`, which will create a 'build-production' directory

## License

MIT
