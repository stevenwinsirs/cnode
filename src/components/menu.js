import React from 'react';
import {Menu} from 'antd';
import {Link, useLocation} from 'react-router-dom';

function MenuCom(){
  const {pathname} = useLocation();
  const selected = ()=>{
    switch(pathname){
      case '/getstart':
        return ['2'];
      case '/about':
        return ['3'];
      default:
        return ['1'];
    }
  };
  const key = selected() + '';
  return (
    <Menu
      mode="horizontal"
      theme="dark"
      selectedKeys={key}
      style={{background: '#444444'}}
    >
      <Menu.Item key="1">
        <Link to="/">首页</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/getstart">新手入门</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/about">关于</Link>
      </Menu.Item>
    </Menu>
  );
}

export default MenuCom;
