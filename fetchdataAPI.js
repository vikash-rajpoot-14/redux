const redux =require('redux')
const reduxlogger=require('redux-logger')

const createStore  = redux.createStore
const logger = reduxlogger.createLogger()
const applyMiddleware = redux.applyMiddleware


const FETCH_USER_REQUEST="FETCH_USER_REQUEST"  //fetch list of data
const FETCH_USER_SUCCESS="FETCH_USER_SUCCESS"   //fetch usrs succesfully
const FETCH_USER_FAILURE="FETCH_USER_FAILURE"    //error while fetching data

const fetchUserRequest=()=>{
    return{
        type:FETCH_USER_REQUEST
    }
}
const fetchUserSuccess=(users)=>{
    return{
        type:FETCH_USER_SUCCESS,
        payload:users         //data feom the api
    }
}
const fetchUserFailure=(error)=>{
    return{
        type:FETCH_USER_FAILURE,
        payload:error          //error from the api
    }
}//display spinner in your component
 //users from api call
  //display error to the user

const initialState={
    loading:true,  
    users:[],     
    error:''      
}

const reducer=(state=initialState,action)=>{
      switch(action.type){
        case FETCH_USER_REQUEST:return{
            ...state,
            loading:true,  //loading data while new user is coming 
        }
        case FETCH_USER_SUCCESS:return{
            loading:false,
            users:action.payload,
            error:''

        }
        case FETCH_USER_FAILURE:return{
            loading:false,
            users:[],
            error:action.payload
        }
      }
}

const store =createStore(reducer,applyMiddleware(logger))
console.log("initial error",store.getState())
 const unsubscribe=store.subscribe(()=>{})
store.dispatch(fetchUserRequest())
store.dispatch(fetchUserSuccess([{"id":1,"name":"vikash"},{"id":2,"name":"rajpoot"}]))
store.dispatch(fetchUserFailure("bada error"))
unsubscribe()