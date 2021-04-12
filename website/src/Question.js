import React,{useEffect, useState,useRef } from 'react';
import { useParams,useHistory } from "react-router-dom";

const MAX_SIZE = process.env.REACT_APP_Q_FILE_SIZE;

const Question = ()=>{
  const {id} = useParams();
  const history = useHistory();
  const ref = useRef(id);
  const [loading, setLoading] = useState(false);
  const [Component, setComponent] = useState(null);
  const [finish, setFinish] = useState(false);
  const IS_MOBILE = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)
  useEffect(()=>{
    if(!id) return;
    ref.current = id;
    setLoading(true)
    import(`./q/${id}.js`).then((C)=>{
      setComponent(C);
      window.localStorage.setItem('__JS_Q_ID__', id);
      setLoading(false)
    }).catch(()=>{
      setComponent(null)
      setLoading(false)
    });
  },[id]);

  const toggleAnswer = ()=>{
    const el = document.querySelector('summary');
    el && el.click()
  }

  const keydown = (e)=>{
    if(loading) return;
    if(e.keyCode === 37){
      const n = Math.max(parseInt(ref.current) - 1, 1);
      history.push(`/q/${n}`)
    }else if(e.keyCode === 39){
      const n = Math.min(parseInt(ref.current) + 1, MAX_SIZE) 
      const _finish = n == MAX_SIZE;
      if(_finish) {
        setFinish(true)
        setTimeout(() => {
          setFinish(false)
        }, 2000);
      }
      history.push(`/q/${n}`)
    }else if(e.keyCode === 13){
      toggleAnswer()
    }
  }

  
  useEffect(()=>{
    document.addEventListener('keydown',keydown)
    return ()=>{
      document.removeEventListener('keydown',keydown)
    }
  },[])
  if(loading) return <div>我很努力啦...</div>
  if(!Component) return <div>没有该题目</div>;
  return (
    <div className="question-box">
    <Component.default />
    <span className={finish ? "message finish": "message"}>没有啦，下次再来咯~</span>
    {
      IS_MOBILE ?
      (<div className="actions">
        <span className="action prev" onClick={()=>{
          keydown({keyCode: 37})
        }}>prev</span>
        <span className="action next" onClick={()=>{
          keydown({keyCode: 39})
        }}>next</span>
      </div>)
      :null
    }
    </div>
  );
}

export default Question;