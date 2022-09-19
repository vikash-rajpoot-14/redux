//1. npm init
//2.npm install && npm install redux
//3.make index.js


const redux =require('redux')
const createStore  = redux.createStore
const BUY_CAKE="BUY_CAKE"


//1.ACTION 
function buyCake(){
    //return ACTION as object by this function
    return {
        type:BUY_CAKE,
        info:"first redux cake"
    }
}

// REDUCER---(ppreviousState,action)=>newState

const initialState={
    totalCake:10
}

const reducer=(state=initialState,action)=>{
     switch(action.type){
        case BUY_CAKE:return{
            ...state,
            totalCake:state.totalCake-1
        }
        default: return state
     }
}

//3. STORE =----==--=HAVE THREE INBUILT FUNCTION
//i.getState= gallow access to the state
//ii.subscribe = show the changed state to the programmer(Register listeners)
//iii.dispatch = allow state to be updated 
 const store =createStore(reducer)
 console.log("initial=state",store.getState())
 const unsubscribe=store.subscribe(()=>console.log("updated state",store.getState()))
 store.dispatch(buyCake())
 store.dispatch(buyCake())
 store.dispatch(buyCake())
 console.log('done')
 unsubscribe()
 store.dispatch(buyCake())
 console.log("final state",store.getState())
 console.log("fianl done");

