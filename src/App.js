import './App.css';
import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default function App() {

  const [progress, setProgress] = useState(0);
  let apiKey = process.env.REACT_APP_NEWS_API_KEY_SECOND;

  return (
    <Router>
      <div>
        <LoadingBar color='#f11946' progress={progress}
          onLoaderFinished={() => setProgress(0)} />
        <Navbar />
        <Switch>
          <Route exact path="/"><News apiKey={apiKey} setProgress={setProgress} key="general" pageSize={9} country="in" category="general" /></Route>
          <Route exact path="/business"><News apiKey={apiKey} setProgress={setProgress} key="business" pageSize={9} country="in" category="business" /></Route>
          <Route exact path="/entertainment"><News apiKey={apiKey} setProgress={setProgress} key="entertainment" pageSize={9} country="in" category="entertainment" /></Route>
          <Route exact path="/general"><News apiKey={apiKey} setProgress={setProgress} key="general" pageSize={9} country="in" category="general" /></Route>
          <Route exact path="/science"><News apiKey={apiKey} setProgress={setProgress} key="science" pageSize={9} country="in" category="science" /></Route>
          <Route exact path="/sports"><News apiKey={apiKey} setProgress={setProgress} key="sports" pageSize={9} country="in" category="sports" /></Route>
          <Route exact path="/health"><News apiKey={apiKey} setProgress={setProgress} key="health" pageSize={9} country="in" category="health" /></Route>
          <Route exact path="/technology"><News apiKey={apiKey} setProgress={setProgress} key="technology" pageSize={9} country="in" category="technology" /></Route>
        </Switch>

      </div>
    </Router>
  )

}

