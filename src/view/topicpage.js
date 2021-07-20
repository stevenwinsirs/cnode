import React, {Fragment, useEffect} from 'react';
import {Card} from 'antd';
import {useArticle} from '../store/action/article';
import {useSelector} from "react-redux";
import {useParams} from 'react-router-dom';
import '../static/markdown.css';

function TopicPage(){
  let article = useArticle();
  let {id} = useParams();
  let {data} = useSelector(state=>state['article']);
  useEffect(()=>{
    article(id);
  }, []);

  return <Fragment>
    <Card
      title={data.title}
      bordered={true}
      style={{width: '800px', margin: '0 auto'}}
      headStyle={{fontSize: '22px', fontWeight: "bolder"}}
      bodyStyle={{color: '#292009'}}
    >
      <div dangerouslySetInnerHTML={{
        __html: data.content
      }}/>
    </Card>
  </Fragment>;
}

export default TopicPage;
