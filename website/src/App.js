import React,{ useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const App = ({children})=>{
  const [notifyId, setNotifyId] = useState(false);

  useEffect(()=>{
    const id = window.localStorage.getItem('__JS_Q_ID__');
    if(!id) return;
    setNotifyId(id)
    setTimeout(() => {
      setNotifyId(null)
    }, 3000);
  },[])

  return (
    <div className="App">
      {children}
      {
        notifyId ? (
          <div className="notify">
            <Link to={`/q/${notifyId}`}>上次看到第 {notifyId} 题，继续查看？</Link>
          </div>
        ) : null
      }
    </div>
    )
  ;
}

export default App;