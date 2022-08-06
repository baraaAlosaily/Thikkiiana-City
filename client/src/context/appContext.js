import React, { useReducer, useContext } from "react";
import axios from "axios";
import reducer from "./reducer";
import {
  GET_MOVIES_BEGIN,
  GET_MOVIES_SUCCESS,
  HANDLE_CHANGE,
  SETUP_USER_BEGIN,
  SETUP_USER_SUCCESS,
  REMOVE_USER_BEGIN,
  REMOVE_USER_SUCCESS
} from "./action";

  const user = localStorage.getItem("user");
  
  const initialState = {
    isLoading: false,
    showAlert: false,
    alertText: "",
    alertType: "",
    search:"",
    movies:[],
    user: user ? JSON.parse(user) : null,
  };
  
  const AppContext = React.createContext();
  
  const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
  
  
    const getMovies=async()=>{

      const {search}=state;
  
      let url=process.env.REACT_APP_API;

      if(search){
        url+=`?q=${search}`;
      }
  
      dispatch({type:GET_MOVIES_BEGIN})
      try {
        const {data}=await axios.get(url,{
            headers: { Authorization:process.env.REACT_APP_TOKEN}
        });
        const {movies}=data
        dispatch({type:GET_MOVIES_SUCCESS,payload:{
            ...state,
            movies
        }})  
      } catch (error) {
        console.log(error.response);
      }
    }

    const setUser=()=>{
      const user=JSON.parse(localStorage.getItem("user"));
      dispatch({ type: SETUP_USER_BEGIN });
      dispatch({
        type: SETUP_USER_SUCCESS,
        payload: {user},
      });
    }

    const removeUser=()=>{
      const user=null
      dispatch({ type: REMOVE_USER_BEGIN });
      dispatch({
        type: REMOVE_USER_SUCCESS,
        payload: {user},
      });
    }

    const handleChange=(value)=>{
      dispatch({type:HANDLE_CHANGE,payload:{
        ...state,
        value}});
    }

    return (
      <AppContext.Provider
        value={{ ...state, 
             getMovies,
             handleChange,
             setUser,
             removeUser
         }}
      >
        {children}
      </AppContext.Provider>
    );
  };
  
  
  const useAppContext = () => {
    return useContext(AppContext);
  };
  
  export { AppProvider, initialState, useAppContext ,AppContext};