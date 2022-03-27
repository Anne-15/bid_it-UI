
import axios from 'axios';
// import React, { useContext, useEffect, useReducer } from 'react'
// import { HANDLE_SEARCH, SET_BIDS, SET_LOADING } from './actions';
// import reducer from './reducer';

// const Context = () => {
//     const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?';
    
//     const initialState = {
//         isLoading: true,
//         hits: [],
//         query: 'react',
//         page: 0,
//         nbpages: 0,
//     }
    
//     const AppContext = React.createContext()

//     const AppProvider = ({children}) => {
//         const [state, dispatch] = useReducer(reducer, initialState);

//         const fetchBids = async (url) => {
//             dispatch({ type: SET_LOADING })
//             try {
//                 const response = await fetch(url);
//                 const data = await response.json();
//                 dispatch({
//                     type: SET_BIDS,
//                     payload: { hits: data.hits, nbpages: data.nbpages },
//                 })
//             } catch(error) {
//                 console.log(error);
//             }
//         }
//     }

//     const handleSearch = (query) => {
//         dispatch({ type: HANDLE_SEARCH, payload: query});
//     }

//     useEffect(() => {
//         fetchBids(`${API_ENDPOINT}query = ${state.query}&page=${state.page}`)
//     }, [state.query, state.page])

//     return (
//     <AppContext.Provider value={{
//         ...state,
//         handleSearch
//     }}>
//         {childern}
//     </AppContext.Provider>
//     )
// }

// //make sure use
// export const useGlobalContext = () => {
//     return useContext(AppContext);
// }

// // export default Context

// export { AppContext, AppProvider}

axios({
    method: 'get',
    url: 'https://hn.algolia.com/api/v1/search?',
    responseType: 'stream'
})
    .then(function(response){
        response.data.pipe(fs.createWriteStream)
    })