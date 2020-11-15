import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Cards';
import Data from './Data';
import "./index.css";

// function ncard(val){
//     return(
//         <Card imgSrc= {val.imgSrc}
//         title = {val.title}
//         Sname = {val.Sname}
//         link = {val.link}
//     /> 
//     );
// }

ReactDOM.render(
    <>
    <h1 className="heading_style">Top Web Series in 2020</h1>
    
    {Data.map((val)=>{
    return(
        <Card imgSrc= {val.imgSrc}
        title = {val.title}
        Sname = {val.Sname}
        link = {val.link}
    /> 
    );
})}
   
    </>
 , document.getElementById('root')
)