import { useState } from "react";


function App() {
  const [mode,setMode] = useState(false);
  console.log(mode);
  return (
    <div className={mode ?"app dark-mode" : "app" }>
      <header className="header">
        <div className="container">
          <div className="nav">
            <ul>
              <li>خانه</li>
              <li>درباره ما</li>
              <li>تماس با ما</li>
            </ul>
            <label className="switch" >
              <input type="checkbox" 
              onChange={()=>setMode(!mode)}
              checked={mode}
              />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
      </header>
      <div className="content">
        <div className="container">
          <h1>{mode ? "لایت مود فعال شده است " :"دارک مود فعال شده است "}</h1>
          <p>لایت مود باعث می شود فضا روشن شود</p>
        </div>
        <div className="container">
          <div className="card">
            <div className="card-item">
              <img src="image/1.jpg"/>
              <h2>کارت اول</h2>
              <p>این کارت اول است</p>
            </div>
            <div className="card-item">
              <img src="image/2.jpg"/>
              <h2>کارت دوم</h2>
              <p>این کارت دوم است</p>
            </div>
            <div className="card-item">
              <img src="image/3.jpg"/>
              <h2>کارت سوم</h2>
              <p>این کارت سوم است</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
