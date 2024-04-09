
import axios from 'axios'
import { useState , useReducer } from 'react';

const options = {
    method: 'GET',
    url: 'https://tasty.p.rapidapi.com/recipes/list',
    params: {
      from: '0',
      size: '20',
    },
    headers: {
      'X-RapidAPI-Key': 'cc0d9dbdd5mshea483b8e51350ecp140b25jsn391722a5d55c',
      'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
    }
  };

  // const initialStage = {
  //   data:null,
  //   laoding:fasle,
  //   error:null
  // }

  // const Action = {
  //   FETCHING_DATA : "FETCHING_DATA",
  //   FETCHING_SUCCESSFUL : "FETCHING_SUCCESSFUL",
  //   FETCHING_ERROR : "FETCHING_ERROR"
  // }

  
  // const reducer = (_, action) => {
  //   switch(action.type){
  //     case Action.FETCHING_DATA:
  //     return {
  //       data:null,
  //       loading:true,
  //       error:null
  //     }
  //     case Action.FETCHING_SUCCESSFUL:
  //     return {
  //       data:action.payload,
  //       loading:fasle,
  //       error:null
  //     }
  //     case Action.FETCHING_ERROR:
  //       return{
  //         data:null,
  //         laoding:false,
  //         error:action.payload
  //       }
  //   }
  // }

  
const useFetchRecipes = () => {
    const [recipes , setReceipes] = useState(null)
    const [loading , setLoading] = useState(false);
    const [error, setError] = useState(null);

    // const [{data, loading, error}, dispatch] = useReducer(reducer , initialStage)
  
    const fetchrecipes =  async (searchTerm) => {

      setLoading(true)
      setReceipes(null)
      setError(null)
      // dispatch({type:Action.FETCHING_DATA})

      try {
        const reqOptions = {...options}
        if(searchTerm){
          reqOptions.params.q = searchTerm
        }
        const response = await axios.request(reqOptions);
        setReceipes(response.data.results)
        setLoading(false)
        // console.log(response.data);
        // dispatch({type:Action.FETCHING_SUCCESSFUL, payload:response.data.results})
      } catch (err) {
        console.error(err);
        setError(err.message)
        setLoading(false)
        // dispatch({type:Action.FETCHING_ERROR, payload:err.message})
      }
    }

    return [ fetchrecipes, {data:recipes ,  loading, error}];
}

export default useFetchRecipes