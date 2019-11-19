function broadcast(targetName, eventName, ...params){
  
}
function dispatch(targetName, eventName, ...params){
  
}

export default {
  methods: {
    dispatch(targetName, eventName, ...params) {
        return dispatch.apply(this, [targetName, eventName, ...params])
    },
    broadcast(targetName, eventName, ...params) {
        return broadcast.apply(this, [targetName, eventName, ...params])
    }
  }
}