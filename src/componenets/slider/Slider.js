import React, { useEffect, useState } from 'react'
import {IoIosArrowDropright,IoIosArrowDropleft} from 'react-icons/io';
import { useMediaQuery } from 'react-responsive';
import { Card, CardBody, CardTitle, CardText, CardImg,DropdownItem } from 'reactstrap';
const Slider = ({data}) => {
   // const [schools, setSchools] = useState(0);
    // const [pageNumber, setPageNumber] = useState(0);
    // const [myPage, setmyPage] = useState([]);
    const [schools, setSchools] = useState(0);
   const [pageSize, setPageSize] = useState(0)
   const [pageData, setPageData] = useState([]);
   const [totalPageNumber, setTotalPageNumber] = useState(0)
   const [pageNumber, setPageNumber] = useState(0);
   
   //const [schoolSlider, setschoolSlider] = useState()
    const length = data.length;
    const schoolsArray=[];
//////////////////////////////////////////////////////
const isDesktopOrLaptop = useMediaQuery({
  query: '(min-width: 992px)'
})
const isTabletOrMobile = useMediaQuery({ query: '(min-width: 768px)' })

const isSmall = useMediaQuery({ query: '(min-width: 576px)' })




const getTotalPages = (listSize, pageSize) => {
    return Math.ceil(listSize / pageSize)-1;
}

const getNextPageData = (data, pageNumber, pageSize) => {
    const startSlice = pageNumber * pageSize;
   let newPageSize= data.length-startSlice < 3?(data.length-startSlice):pageSize;
   console.log("pageNumber",pageNumber)
    const endSlice = (startSlice + newPageSize) <= data.length  ? startSlice + newPageSize: 0;
    return data.slice(startSlice, endSlice);
}
const getPrevPageData = (data, pageNumber, pageSize) => {
   console.log("pageNumber",pageNumber)
  const startSlice = ((pageNumber) * pageSize)<=0?0:((pageNumber) * pageSize);
  console.log("startSlice",startSlice)
  console.log("pageSize*pageNumber",pageSize*pageNumber)
 let newPageSize= (data.length-(startSlice + pageSize)) < 3?(data.length-(startSlice + pageSize)):pageSize;
 console.log("pageNumber",pageNumber)
  const endSlice = (startSlice + pageSize) <= data.length  ? startSlice + pageSize: data.length;
  console.log("endSlice",endSlice)
  return data.slice(startSlice, endSlice);
}
useEffect(() => {
   setPageNumber(pageNumber+1);
    const totalPages=  getTotalPages(data.length,3);
    setTotalPageNumber(totalPages);
    console.log("pageNumbergggg",pageNumber)
 
}, [data])

useEffect(() => {
  if(isDesktopOrLaptop){
    const  currentPageData=getNextPageData(data,0,3);
    setPageData(currentPageData);
  }else if(isTabletOrMobile){
    const  currentPageData=getNextPageData(data,0,2);
    setPageData(currentPageData);
  }else if (isSmall){
    const  currentPageData=getNextPageData(data,0,1);
    setPageData(currentPageData);
  }
}, [isDesktopOrLaptop,isTabletOrMobile,isSmall])
const nextSlide=()=>{
  /* steps
    1- getcurrent page number;
    2- increase page number +1 and set status
    3- getNextPageData
  */
   // console.log("pageData",pageData.length)
   
   getNextPageNumber();
   function getNextPageNumber(){
   const newPageNumber = pageNumber<totalPageNumber?pageNumber+1:0;
    setPageNumber(newPageNumber);
    console.log("ggggggg",pageNumber)
    if(pageNumber){
      console.log("pageNumberffffff",pageNumber)
    }
    
 }

//  const  currentPageData=  ;
const nextPage=getNextPageData(data,pageNumber,3) ;
 setPageData(nextPage);

}
useEffect(() => {
 console.log("pageNumber",pageNumber);
 getNextPageData(data,pageNumber,3)
}, [nextSlide])


    console.log("length",data)
      if(!Array.isArray(data)||data.length<=0){
           return null
       }
 


       //////////////////////////////////////////////////////
      const prevSlide=(e)=>{
        /* steps
          1- getcurrent page number;
          2- increase page number +1 and set status
          3- getNextPageData
        */
      
          getPrevPageNumber();
       function getPrevPageNumber(){
         const pageNumberNew = pageNumber>0?pageNumber-1:totalPageNumber
           setPageNumber(pageNumberNew);
           console.log("vvvvvvvv",pageNumber)
           if(pageNumber){
            console.log("pageNvvvvvumber",pageNumber)
          }     
          }
    
      
      setPageData(getPrevPageData(data,pageNumber,3));
         
         }
      
     
  
    return (
        <>
          <IoIosArrowDropright onClick={(e)=>nextSlide(e)} />
        

        {pageData&&pageData.map((school, index) => {
         
        return (
         
             <div className=" col-lg-4 col-md-4 col-sm-12  text-center App__schoolSection__card-container__card-row__card-col py-2" key={index} >
          <Card className="App__schoolSection__card-container__card-row__card-col__card border-0 align-items-center h-100">
            <div className="App__schoolSection__card-container__card-row__card-col__card__map-container">
              <CardImg
                width="100%"
                src={school.img}
                alt="diamond-hamburger-puzzle-img"
                className="App__schoolSection__card-container__card-row__card-col__card__map-container__map py-2"
              />
            </div>
            <CardBody className="App__schoolSection__card-container__card-row__card-col__card__card-body">
              <CardTitle tag="h6"  className="text-info App__schoolSection__card-container__card-col__card__card-body__card-title pb-3">{school.name}</CardTitle>
              <DropdownItem divider className="mx-4"/>
              <CardText className=" py-2 App__schoolSection__card-container__card-row__card-col__card__card-body__card-text">
                 {school.level}
              </CardText>
              <CardText className=" py-2 App__schoolSection__card-container__card-row__card-col__card__card-body__card-text">
                 {school.type}
              </CardText>
              <CardText className=" py-2 App__schoolSection__card-container__card-row__card-col__card__card-body__card-text">
                 {school.language}
              </CardText>
             </CardBody>
          </Card>
        </div>
     
        );
      })}
           <IoIosArrowDropleft onClick={(e)=>prevSlide(e)}/>
        </>
    )
}

export default Slider
