import React from 'react';
import {Layout, Row, Col, Typography} from 'antd';
import Menu from "./menu";
import '../static/header.css';
import {Link} from 'react-router-dom';

function Header(){
  return <Layout.Header style={{background: '#444444', overflow: 'hidden'}}>
    <div className="wrap">
      <Row align="top">
        <Col span={10}>
          <Typography.Title
            level={2}
            style={{color: 'white', height: '65px', lineHeight: '65px'}}>
            <Link to="/">CNode</Link>
          </Typography.Title>
        </Col>
        <Col span={14}>
          <Menu/>
        </Col>
      </Row>
    </div>
  </Layout.Header>;
}

export default Header;