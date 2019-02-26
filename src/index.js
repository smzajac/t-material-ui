import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const muiTheme = createMuiTheme({
    typography: {
        useNextVariants: true,
      },
      palette: {
        primary: {
          light: '#757ce8',
          main: '#f50057',
          dark: '#002884',
          contrastText: '#fff',
        },
        secondary: {
          light: '#ff7961',
          main: '#f44336',
          dark: '#ba000d',
          contrastText: '#000',
        },
      },

})

//The MuiThemeProvider passes down the theme through the context property of react

console.log(muiTheme)

ReactDOM.render(
    <MuiThemeProvider theme={muiTheme}>
        <App/>
    </MuiThemeProvider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
