import React from 'react'

function Card(props)  {
    console.log(props);
    return (

          <div className="card">
               <img className="img1" src={props.imgsrc} className="card-img-top" alt="..."/>
             <div className="card-body">
                  <h5 className="card-title">{props.title}</h5>
                  <p className="para">{props.shortpara} </p>
                  <p className="card-text">{props.mainpara}</p>
              </div>
          </div>
 
    )
  }
  

export default Card
