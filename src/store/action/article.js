import axios from "axios";
import {useDispatch} from 'react-redux';

const http = axios.create({
  baseURL: 'https://cnodejs.org/api/v1'
});

function useArticle(){
  const dispatch = useDispatch();

  return (id)=>{
    http.get(`/topic/${id}`).then(r=>{
      dispatch({
        type: 'ARTICLE_LOADED',
        res: r.data.data
      });
    });
  };
}

export {useArticle};