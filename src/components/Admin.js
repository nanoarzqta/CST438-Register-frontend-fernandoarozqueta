import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import AddStudent from './AddStudent';
import Cookies from 'js-cookie';
import {SERVER_URL} from '../constants.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Admin extends Component {
    constructor(props) {
      super(props);
      this.state = { };
      console.log("admin page class");
    }

    // Add student
    addStudent = (student) => {
      const token = Cookies.get('XSRF-TOKEN');
  
      console.log("Name: " + student.name + " email: " + student.email);
   
      //fetch(`${SERVER_URL}/addstudent?email=${student.email}&name=${student.name}`,
      fetch(`${SERVER_URL}/addstudent`,
      {
        method: 'POST',
        //headers: {'Accept': 'application/json','Content-Type': 'application/json'}, //Old
        headers: { 'Content-Type': 'application/json',
                   'X-XSRF-TOKEN': token },
                   credentials: 'include',         
		    body: JSON.stringify({studentEmail:student.email, studentName: student.name})
  
        /*
        method: 'POST', 
        headers: { 'Content-Type': 'application/json',
                   'X-XSRF-TOKEN': token },
                   credentials: 'include', 
        body: JSON.stringify(course)
        */
      })
      .then(res => {
          if (res.ok) {
            console.log("Student Added");
            toast.success("Student successfully added", {
                position: toast.POSITION.BOTTOM_LEFT
            });
            //this.fetchCourses();
          } else {
            toast.error("Error when adding", {
                position: toast.POSITION.BOTTOM_LEFT
            });
            console.error('Post http status =' + res.status);
          }})
      .catch(err => {
        console.log("Error");
        toast.error("Error when adding", {
              position: toast.POSITION.BOTTOM_LEFT
          });
          console.error(err);
      })
    } 
 
    render()  { 
      return (
        <div>
          <AppBar position="static" color="default">
             <Toolbar>
                <Typography variant="h6" color="inherit">
                   Admin
                </Typography>
             </Toolbar>
          </AppBar>
         <Grid container>
           <Grid item>
             <AddStudent addStudent={this.addStudent}  />
           </Grid>
         </Grid>
         <ToastContainer autoClose={1500} /> 
       </div>
     )
   }
}
export default Admin;