import React from 'react';
import {Menu} from 'antd';
import {Link, useLocation} from 'react-router-dom';
import qs from "qs";
import '../static/nav.css';

function Nav(props){
  const {data} = props;
  const location = useLocation();
  let search = location.search;
  let {tab} = qs.parse(search.slice(1))
  let selected = ()=>{
    if(search === ''){
      return 0;
    } else {
      return data.findIndex((item)=>{
        return item.to.slice(1) === `?tab=${tab}`;
      });
    }
  };

  return <div className="nav">
    <Menu mode="horizontal" selectedKeys={[String(selected())]}>
      {data.map((item, index)=>{
        return <Menu.Item key={index}>
          <Link to={item.to}>{item.title}</Link>
        </Menu.Item>;
      })}
    </Menu>
  </div>;
}

export default Nav;