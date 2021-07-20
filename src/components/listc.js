import React, {useEffect, useRef} from "react";
import {List} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {useGetTopic} from "../store/action/topic";
import {useLocation, Link, Route} from "react-router-dom";
import qs from "qs";
import Paginate from "./pagniation";

function ListC(){
  const state = useSelector((state)=>state);
  const {topic} = state;
  const {search} = useLocation();
  const getTopic = useGetTopic();
  const dispatch = useDispatch();
  let update = useRef(false);
  let {page = 1, tab} = qs.parse(search.slice(1));
  if(search === ''){
    tab = 'all';
    page = 1;
  }

  useEffect(()=>{
    if(update){
      dispatch({
        type: "TOPIC_LOAD"
      });
      getTopic(page, tab);
    } else {
      update.current = true;
    }
  }, [page, tab]);

  useEffect(()=>{
    dispatch({
      type: "TOPIC_LOAD"
    });
    getTopic(page, tab);
  }, []);

  return (
    <Route path={["/", "/topic"]} exact>
      <div style={{width: "800px", margin: "0 auto", background: "#C1E6C6"}}>
        <List
          size={'small'}
          loading={topic.loading}
          dataSource={topic.data}
          renderItem={(item)=>{
            return (
              <List.Item>
                <Link to={`/topic/${item.id}`}>{item.title}</Link>
              </List.Item>
            );
          }}
        />
      </div>
      {topic.loading ? '' : <Paginate tab={tab} page={page}/>}
    </Route>
  );
}

export default ListC;
