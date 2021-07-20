import React from 'react';
import {Pagination} from 'antd';
import {useHistory} from 'react-router-dom';
import '../static/pagenate.css';

function Paginate(props){
  let {page, tab} = props;
  const {push} = useHistory();
  return <div className="page">
    <Pagination
      total={1000}
      pageSize={20}
      current={Number(page)}
      showQuickJumper={true}
      onChange={(currentPage)=>{
        push(`/?tab=${tab}&page=${currentPage}`);
      }}
      style={{marginTop: '20px'}}
    />
  </div>;
}

export default Paginate;