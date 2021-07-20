import React, {Fragment} from 'react';
import IndexNav from '../components/indexNav';
import ListC from '../components/listc';
import {Layout} from 'antd';

function IndexPage(){
  return <Fragment>
    <Layout.Content>
      <IndexNav/>
      <ListC/>
    </Layout.Content>
  </Fragment>;
}

export default IndexPage;
