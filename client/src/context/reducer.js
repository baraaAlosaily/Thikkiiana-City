import { 
    GET_MOVIES_BEGIN,
    GET_MOVIES_SUCCESS,
    HANDLE_CHANGE,
    SETUP_USER_BEGIN,
    SETUP_USER_SUCCESS,
    REMOVE_USER_BEGIN,
    REMOVE_USER_SUCCESS
   } from "./action"


const reducer=(state,action)=>{
   if(action.type===GET_MOVIES_BEGIN){
        return {...state,isLoading:true,showAlert:false}
   }

   if(action.type===GET_MOVIES_SUCCESS){
       return {...state,
          isLoading:false,
          movies:action.payload.movies,
       }
   }
   if(action.type===HANDLE_CHANGE){
       return {...state,
          search:action.payload.value,
       }
   }
   if(action.type===SETUP_USER_BEGIN){
      return {
          ...state,isLoading:true
      }
  }
  if(action.type===SETUP_USER_SUCCESS){
   return {
       ...state,
       isLoading:false,
       user:action.payload.user,
   }
}
   if(action.type===REMOVE_USER_BEGIN){
      return {
          ...state,isLoading:true
      }
  }
  if(action.type===REMOVE_USER_SUCCESS){
   return {
       ...state,
       isLoading:false,
       user:action.payload.user,
   }
}
   throw new Error(`no such action :${action.type}`)
}

export default reducer