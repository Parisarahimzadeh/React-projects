import React, { useState } from 'react'
import { FaPlus,FaMinus  } from "react-icons/fa";

function Question({title,info}) {

     const [showInfo, setShowInfo] = useState(false);

     return (
          <div className="question">
               <header>
                    <h4>{title}</h4>
                    <button onClick={() => setShowInfo(!showInfo)}>
                         {showInfo ? <FaMinus /> : <FaPlus />}
                    </button>
               </header>
              {
                   showInfo &&  <p>{info}</p>
              }
          </div>
     )
}

export default Question
