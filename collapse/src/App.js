import { useState } from 'react';
import SingleQuestion from './Question';
import data from './data';


function App() {
   const [questions, setQuestions]= useState(data)
  return (
    <div className="container">
    <h3>سوالی برایتان پیش آمده؟</h3>
    <div className="info">
        {
          questions.map((question) => {
            return <SingleQuestion key={question.id} {...question}/> 
           })
        }
      
    </div>
  </div>
  );
}

export default App;
