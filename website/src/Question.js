import React,{useEffect, useState} from 'react';
import { useParams } from "react-router-dom";

const Question = ()=>{
  const {id} = useParams();

  const [loading, setLoading] = useState(false);
  const [Component, setComponent] = useState(null);
  useEffect(()=>{
    if(!id || loading) return;
    setLoading(true);
    import(`./q/${id}.js`).then((C)=>{
      setComponent(C);
      setLoading(false);
    });
  },[]);
  if(loading) return <div>Loading...</div>
  if(!Component) return <div>没有该题目</div>;
  return (<Component.default />);
}

export default Question;