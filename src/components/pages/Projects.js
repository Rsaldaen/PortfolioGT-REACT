import React from 'react';
import './style.css';
import GitFit from '../../images/GitFit.png';
import UnblockUnwind from '../../images/UnblockUnwind.jpg';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';



export default function Projects() {
  return (

    <div> 
      <Card className='center' sx={{ maxWidth: 600, maxHeight: 700}}>
        <CardContent >
        <img className = "GitFitPic" alt="screenshot of GitFit" src={GitFit}></img>   
        <p className='GitFittext'>
        <a href='https://peaceful-dusk-53929.herokuapp.com/'>
          GitFit App
          </a></p>
        <p className='GitFittext'>
        <a href='https://github.com/Rsaldaen/Git-Fit'>
          GitFit Repo
        </a></p>
        <p>With the app the user can sign-up, login, and generate a workout with exercises/set/reps, by simply choosing a day of the week and a body part focused workout.</p>
        </CardContent>
      </Card>
      <Card className='center' sx={{ maxWidth: 600, maxHeight: 700}}>
        <CardContent >
        <img className = "UnblockUnwindPic" alt="screenshot of Unblock.Unwind" src={UnblockUnwind}></img>   
        <p className='UnblockUnwindtext'>
        <a href='https://christinaa126.github.io/unblock-unwind/'>
          Unblock.Unwind App
          </a></p>
        <p className='UnblockUnwindtext'>
        <a href='https://github.com/Rsaldaen/Project-1-Unblock.Unwind'>
          Unblock.Unwind Repo
        </a></p>
        <p className='marginbtm'>App where user will be able to select their daily mood and be given a random dad joke and motivational quote followed by the option to log a journal entry.</p>
        </CardContent>
      </Card>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div> 
    
  );
}
