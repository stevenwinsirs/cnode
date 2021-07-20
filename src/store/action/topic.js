import axios from "axios";
import {useDispatch} from 'react-redux';

let http = axios.create({
  baseURL: 'https://cnodejs.org/api/v1'
});

function useGetTopic(){
  const dispatch = useDispatch();
  return (page = 1, tab = 'all', limit = 20)=>{
    http.get(`/topics?tab=${tab}&page=${page}`).then(res=>{
      // console.log(res);
      dispatch({
        type: 'TOPIC_GET',
        data: res.data.data
      });
    });
  };
}

export {useGetTopic};