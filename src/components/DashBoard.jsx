import React,{useState} from 'react'
import "./DashBoard.css"
import headericon from "../assets/b251a693f86366116521344341649e62.png"
import surveyicon from "../assets/survey.png"
import { FaPlus } from "react-icons/fa";
import { RiSurveyLine } from "react-icons/ri";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const DashBoard = () => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
  return (
    <div className='dashboard-container'>
        <div className='dashboard-top'>
     <img src={headericon} className='header-icon'/>
     <p className='header-title'>USER FEEDBACK</p>
     </div>
     <div className='dashboard-bottom'>
       <div className='dashboard-items'>
        <div className='dashboard-form'>
            <button className='plus-btn' onClick={handleClickOpen}>
      <FaPlus className='plus-icon'/>
      </button>
      <h4 className='dashboard-newform-title'>New form</h4>
      </div>
   </div>

   <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"New Form"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              This is where you can add details about creating a new form.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose} autoFocus>
              Confirm
            </Button>
          </DialogActions>
        </Dialog>

   <div className='card-container'>
   <div className='dashboard-form-bg'>
    <div className='survey-bg'>
    <img src={surveyicon} className='survey-img'/>
    </div>
   </div>
    <h5 className='title-survey'>Delivery</h5>
    <div className="survey-data">
    <p>Submitted</p>
    <p className='num'>10</p>
    </div>
    <div className="survey-data">
    <p> Viewed</p>
    <p className="num">55</p>
    </div>

    <div className="survey-data">
    <p>Date Published</p>
    <p className="num">8/8/2024</p>
    </div>
    <div className='submit-btn'>
    <Button
variant="contained"
color="secondary"
size="large">
VIEW SUBMISSION
</Button>
</div>
<div className='btn-container'>

<Button
style={{margin:"3px"}}
variant="contained"
color="success"
size="large">
EDIT
</Button>
<Button
style={{margin:"3px"}}
variant="contained"
color="primary"
size="large">
DELETE
</Button>

</div>

   </div>



   <div className='card-container'>
   <div className='dashboard-form-bg'>
    <div className='survey-bg'>
    <img src={surveyicon} className='survey-img'/>
    </div>
   </div>
    <h5 className='title-survey'>Product Quality</h5>
    <div className="survey-data">
    <p>Submitted</p>
    <p className='num'>10</p>
    </div>
    <div className="survey-data">
    <p> Viewed</p>
    <p className="num">300</p>
    </div>

    <div className="survey-data">
    <p>Date Published</p>
    <p className="num">07/8/2024</p>
    </div>
    <div className='submit-btn'>
    <Button
variant="contained"
color="secondary"
size="large">
VIEW SUBMISSION
</Button>
</div>
<div className='btn-container'>

<Button
style={{margin:"3px"}}
variant="contained"
color="success"
size="large">
EDIT
</Button>
<Button
style={{margin:"3px"}}
variant="contained"
color="primary"
size="large">
DELETE
</Button>

</div>

   </div>


   






     </div>
    </div>
  )
}

export default DashBoard
