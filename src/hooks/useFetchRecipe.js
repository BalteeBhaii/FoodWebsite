import { useReducer } from "react";
import axios from "axios"
const options = {
    method: 'GET',
    url: 'https://tasty.p.rapidapi.com/recipes/get-more-info',
    params: {id: '8138'},
    headers: {
      'X-RapidAPI-Key': 'cc0d9dbdd5mshea483b8e51350ecp140b25jsn391722a5d55c',
      'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
    }
  };

  const initialStage = {

    data:null,
    loading:false,
    error:null

  }

  const Action = {
    FETCHING_DATA:"FETCHING_DATA",
    FETCH_SUCCESSFUL:"FETCH_SUCCESSFUL",
    FETCH_ERROR : "FETCH_ERROR",
  }

  const reducer = (_, action) => {
    switch(action.type){
        case Action.FETCHING_DATA:
            return {
                data:null,
                error:null,
                loading:true
            }
        case Action.FETCH_SUCCESSFUL:
            return {
                error:null,
                loading:false,
                data:action.payload 
            }
        case Action.FETCH_ERROR:
            return {
                error:action.payload,
                loading:false,
                data:null
            }
        default:
            return initialStage
    }
  }
  
const useFetchRecipe = () =>{
    const [{data, loading, error}, dispatch] = useReducer(reducer, initialStage )

    const fetchrecipe = async (id) => {

        dispatch({type:Action.FETCHING_DATA})

        try {
            const reqOptions = {...options}
            reqOptions.params.id = id
            const response = await axios.request(reqOptions);
            dispatch({type:Action.FETCH_SUCCESSFUL, payload:response.data})
        } catch (error) {
            dispatch({type:Action.FETCH_ERROR, payload:error.message})
        }
    }

    return [fetchrecipe, {data,loading,error}]

}

export default useFetchRecipe