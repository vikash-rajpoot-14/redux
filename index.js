//1. npm init
//2.npm install && npm install redux
//3.make index.js
//4.npm install redux-logger ==for midleware

const redux =require('redux')
const reduxlogger=require('redux-logger')

const createStore  = redux.createStore
const combineReducer =redux.combineReducers
const logger = reduxlogger.createLogger()
const applyMiddleware = redux.applyMiddleware

const BUY_CAKE="BUY_CAKE"
const BUY_ICECREAM="BUY_ICECREAM"


//1.ACTION CREATOR --what to do
function buyCake(){
    //return ACTION as object by this function
    return {
        type:BUY_CAKE,
        info:"first redux BUY_CAKE"
    }
}
function buyIceCream(){
    //return ACTION as object by this function
    return {
        type:BUY_ICECREAM,
        info:"first redux BUY_ICECREAM"
    }
}

// REDUCER---(ppreviousState,action)=>newState

const initialCakeState={
    totalCake:10
}
const initialIceCreamState={
    totalIceCream:15
}

const cakeReducer=(state=initialCakeState,action)=>{
     switch(action.type){
        case BUY_CAKE:return{
            ...state,
            totalCake:state.totalCake-1
        }
        default: return state
     }
}
const iceCreamReducer=(state=initialIceCreamState,action)=>{
     switch(action.type){
        case BUY_ICECREAM:return{
            ...state,
            totalIceCream:state.totalIceCream-1
        }
        default: return state
     }
}

const rootReducer=combineReducer({
    cake:cakeReducer,
    iceCream:iceCreamReducer
})
//3. STORE =----==--=HAVE THREE INBUILT FUNCTION
//i.getState= gallow access to the state
//ii.subscribe = show the changed state to the programmer(Register listeners)
//iii.dispatch = allow state to be updated 
 const store =createStore(rootReducer,applyMiddleware(logger))
 console.log("initial state",store.getState())
 const unsubscribe=store.subscribe(()=>{})
 store.dispatch(buyCake())
 store.dispatch(buyCake())
 store.dispatch(buyCake())
 store.dispatch(buyIceCream())
 store.dispatch(buyIceCream())
 console.log('done')
 unsubscribe()


