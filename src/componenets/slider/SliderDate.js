import React, { useEffect, useState } from 'react'
import Slider from './Slider';
import {IoIosArrowDropright,IoIosArrowDropleft} from 'react-icons/io'


const SliderDate = () => {
    const [currentSchools, setCurrentschools] = useState(null);

    // setCurrentschools("ggfg");
    
    // console.log("Ff",currentSchools)
    const fetchData = async() =>{
        try {
        const res = await fetch("http://www.scholarhood.ca/dev-test.json") ;
        const data = await res.json();
            if(data){
              setCurrentschools(data)
            }
        }catch(error) {
            console.log(error);
          }
      }
   useEffect(() => {
    fetchData();
   }, [])
   
  

    return (
        <div className="row App__schoolSection__card-container__card-row">
            {currentSchools&&<Slider data={currentSchools}/>}
        </div>
    )
}

export default SliderDate
