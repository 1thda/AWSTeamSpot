import React from 'react';
//import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

import App from './App';

import { Amplify } from 'aws-amplify';
import awsmobile from './aws-exports';

//ReactDOM.render(<App />, document.getElementById('root'));

Amplify.configure(awsmobile);


createRoot(document.getElementById('root')).render(<App />);