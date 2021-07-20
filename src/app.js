import React from 'react';
import {Layout, Affix} from 'antd';
import Header from './components/header';
import IndexPage from './view/indexpage';
import {Route, Switch} from 'react-router-dom';
import Getstart from "./view/getstart";
import About from "./view/about";
import Page404 from './view/404';
import TopicPage from "./view/topicpage";
import Footer from "./components/footer";
import {useSelector} from 'react-redux';

function App(){
  const {loading} = useSelector(state=>state['topic']);
  return <Layout>
    <Affix offsetTop={0}>
      <Header/>
    </Affix>
    <Switch>
      <Route
        path="/"
        exact
        render={()=>{
          return <IndexPage/>;
        }}
      />
      <Route
        path="/getstart"
        exact
        component={Getstart}
      />
      <Route
        path="/about"
        exact
        strict
        component={About}
      />
      <Route
        path="/topic/:id"
        exact
        strict
        render={(location)=>{
          return <TopicPage location={location}/>;
        }}
      />
      <Route
        component={Page404}
      />
    </Switch>
    {loading ? '' : <Footer/>}
  </Layout>;
}

export default App;