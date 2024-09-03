import React from 'react'
import { Route,createBrowserRouter,createRoutesFromElements,RouterProvider } from 'react-router-dom'
import Mainlayout from './layouts/mainlayout'
import Home from './Pages/home'
import Jobspage from './Pages/jobspage'
import Notfound from './Pages/notfound'
import Jobpagesingle,{jobloader} from './Pages/jobpagesingle'
import Addjobpage from './Pages/addjobpage'
import Editjob from './Pages/editjob'



export default function App() {
 //add new job
  const addjob = async(newjob)=>{
    const res = await fetch('/api/jobs',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(newjob)
    });
    return;
  
  }
  //delete job
  const deletejob = async(id)=>{
    const res = await fetch(`/api/jobs/${id}`,{
      method:'DELETE',
      
    });
    return;
  }
  const updatejob = async(job)=>{
    const res = await fetch(`/api/jobs/${job.id}`,{
      method:'PUT',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(job)
    });
    return;
  
  }
  

  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path = '/' element = {<Mainlayout />}>
      <Route index  element= {<Home />} />
      <Route path='/jobs' index  element= {<Jobspage />} />
      <Route path='/job/:id' index  element= {<Jobpagesingle deletejob = {deletejob} />} loader = {jobloader} />
      <Route path='/edit-jobs/:id' index  element= {<Editjob  updatejob = {updatejob}/>} loader = {jobloader} />
      
      <Route path='add-job' index  element= {<Addjobpage addjobsubmit={addjob} />} />
      <Route path='*' index  element= {<Notfound />} />
    </Route>)
  );
  return <RouterProvider router = {router}/>
}
