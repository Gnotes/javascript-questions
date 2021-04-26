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
      <div>
        <p>Forked from <a href="https://github.com/lydiahallie/javascript-questions" target="_blank">lydiahallie/javascript-questions</a></p>
        <p>从基础到进阶，测试你有多了解 JavaScript，刷新你的知识，或者帮助你的 coding 面试！</p>
        <p>💪 🚀 祝你好运  ❤️</p>
      </div>
      <Link to="/q/1">&nbsp;&nbsp;开始吧！</Link>
    </div>
  );
}

export default Home;
