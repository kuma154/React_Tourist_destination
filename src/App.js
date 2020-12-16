import React,{useState,useEffect} from 'react'
import Loading from './components/Loading'
import Tours from './components/Tours'

const url = 'https://course-api.com/react-tours-project'
function App() {
  
  const [tours,setTours]=useState([]);
  const [loading,setLoading]=useState(true);

  const fetchTours = async ()=>{
    setLoading(true)
   try {
     const response = await fetch(url)
     const tourst = await response.json()
     setLoading(false)
     setTours(tourst);
   } catch (error) {
     setLoading(false)
     console.log(error)
   }
  }

  useEffect(()=>{
    fetchTours()
    
  },[])

  const removeTour = (id)=>{
    const newArr = tours.filter(tour => tour.id !== id);
    setTours(newArr);
  }
  if(loading===true){
    return <main>
        <Loading></Loading>
    </main>
  }
  if(tours.length ===0 ){
    return (
      <main>
          <div className='title'>
            <h2>没有目的地信息</h2> 
            <button className='git config --global core.autocrlf falsebtn' onClick={()=>fetchTours()}>重新获取</button>
          </div>
         
      </main>
    )
  }
  return (
  
   <main>
      <Tours removeTour={removeTour} tours={tours}>

      </Tours>
   </main>
    
     
    
  );
}

export default App;
