import React from 'react';
import {Layout, Typography} from 'antd';

function Footer(){
  return <Layout.Footer>
    <div style={{width: '800px', margin: '0 auto'}}>
      <Typography.Title level={1} style={{margin: '0 auto', textAlign: 'center'}}>
        Footer
      </Typography.Title>
    </div>
  </Layout.Footer>;
}

export default Footer;