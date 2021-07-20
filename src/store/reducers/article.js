function article(data = {
  data: []
}, action){
  switch(action.type){
    case 'ARTICLE_LOADED':
      return {
        data: action.res
      };
    default:
      return data;
  }
}

export default article;
