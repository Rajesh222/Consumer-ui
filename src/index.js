import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'
import 'react-accessible-accordion/dist/fancy-example.css';
import "react-datepicker/dist/react-datepicker.css";
import 'toastr/build/toastr.min.css';

import $ from 'jquery';
import Popper from 'popper.js';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

library.add(faIgloo);
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
