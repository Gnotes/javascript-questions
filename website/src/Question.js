import React,{useEffect, useState,useRef } from 'react';
import { useParams,useHistory } from "react-router-dom";

const Question = ()=>{
  const {id} = useParams();
  const history = useHistory();
  const ref = useRef(id);
  const [Component, setComponent] = useState(null);

  useEffect(()=>{
    if(!id) return;
    ref.current = id;

    import(`./q/${id}.js`).then((C)=>{
      setComponent(C);
    }).catch(()=>{
      setComponent(null)
    });
  },[id]);

  const toggleAnswer = ()=>{
    const el = document.querySelector('summary');
    el && el.click()
  }

  const keydown = (e)=>{
    if(e.keyCode === 37){
      const n = Math.max(parseInt(ref.current) - 1, 1);
      history.push(`/q/${n}`)
    }else if(e.keyCode === 39){
      history.push(`/q/${(parseInt(ref.current) + 1 )}`)
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
  
  if(!Component) return <div>没有该题目</div>;
  return (<Component.default />);
}

export default Question;