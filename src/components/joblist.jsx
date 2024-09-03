import React from 'react'
import { useState ,useEffect } from 'react'
import Joblistsingle from './joblistsingle'
import Spinner from './spinner'


const Joblist = ({ishome =false}) => {
  const [jobs ,setJobs] = useState([]);  //empty array for adding the data fetched from the api
  const [loading ,setLoading] = useState(true); //we can show a spinner or something  when fetching once we do the fetching we make it false
  useEffect(() =>{
    const fetchjobs = async() =>{
      const apiURL = ishome ? '/api/jobs?_limit=3' :'/api/jobs'
      try{
        const res = await fetch(apiURL);
        const data = await res.json();
        setJobs(data);
      }
      catch(error){
        console.error('error fetching data',error)
      }
      finally{
        setLoading(false)
      }
      
    }
    fetchjobs()
  },[])

  
  
  
  
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          { ishome ? 'Recent jobs':'All jobs'}
        </h2>
        
          { loading ? (<Spinner />):(
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
            { jobs.map((job ) =>{
            return (
              <Joblistsingle key={job.id} job ={job}/>
            )
          }) }

          </div>)}
          
          
        
        
      </div>
    </section>

  )
}

export default Joblist