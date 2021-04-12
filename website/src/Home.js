import React,{useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

function Home() {
  const history = useHistory();

  const keydown = (e)=>{
    if(e.keyCode === 39){
      history.push(`/q/1`)
    }
  }

  
  useEffect(()=>{
    document.addEventListener('keydown',keydown)
    return ()=>{
      document.removeEventListener('keydown',keydown)
    }
  },[])

  return (
    <div className="Home" style={{textAlign:'center'}}>
      <h2>JavaScript Questions</h2>
      <br/>
      <div><span>左右键 ← → 进行翻页，</span><span>回车键 ↩︎ 查看答案</span></div>
      <br/>
      <Link to="/q/1">&nbsp;&nbsp;开始吧！</Link>
    </div>
  );
}

export default Home;
