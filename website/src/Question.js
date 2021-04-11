import React,{useEffect, useState} from 'react';
import { useParams } from "react-router-dom";

const Question = ()=>{
  const {id} = useParams();
  const [Component, setComponent] = useState(null);

  useEffect(()=>{
    if(!id) return;
    import(`./q/${id}.js`).then((C)=>{
      setComponent(C);
    });
  },[id]);
  
  if(!Component) return <div>没有该题目</div>;
  return (<Component.default />);
}

export default Question;