import './App.css';
import AppBar from '@mui/material/AppBar';
//import Button from '@material-ui/core/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Admin from './components/Admin';
import SchedList from './components/SchedList';
import Semester from './components/Semester';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
/*<AppBar position="static" color="default">
        <Toolbar>
           <Typography variant="h6" color="inherit">
            Course Registration
           </Typography>
        </Toolbar>
      </AppBar>*/

function App() {
  return (
    <div className="App">
      <AppBar position="static" color="default">
        <Toolbar>
           <Typography variant="h6" color="inherit">
            Course Registration
           </Typography>
        </Toolbar>
      </AppBar>
      <BrowserRouter>
       <Switch>
        <Route path='/' component={Admin} />
        <Route path='/semester' component={Semester} />
        <Route path='/schedule' component={SchedList} />
       </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;