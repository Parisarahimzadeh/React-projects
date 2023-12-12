import { useState } from "react";
import data from './data';

function App() {
  const [count,setCount] = useState(0);
  const [text,setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    setText(data.slice(0,amount));
    if(amount <0 ){
      alert('تعریف نشده')
    }
    if(amount > 8){
      alert('این مقدار تعریف شده همون قبلی ها رو کپی کن')
    }
  }

  return (
    <div className="section-center">
        <h4>لورم ساز </h4>
        <form className="lorem"onSubmit={handleSubmit}>
            <label htmlFor="total">تعداد پاراگراف: </label>
            <input 
              type="number" 
              name="total"
              value={count}
              onChange={(e) => setCount(e.target.value)}
            />
            <button type="sumbit">تولید کن</button>
        </form>

        <article className="lorem-text">
         {
          text.map((item,index) =>{
            return <p key={index}>{item}</p>
          })
         }
        </article>
    </div>
  );
}

export default App;
