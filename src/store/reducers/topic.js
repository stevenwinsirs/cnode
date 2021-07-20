function topic(topic = {
  loading: true,
  data: [],
}, action){
  switch(action.type){
    case "TOPIC_LOAD":
      return {
        loading: true,
        data: []
      };
    case "TOPIC_GET":
      return {
        loading: false,
        data: action.data
      };
  }
  return topic;
}

export default topic;
