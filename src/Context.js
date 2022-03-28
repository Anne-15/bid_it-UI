// import React, { useContext, useEffect, useState } from 'react'
// import { useCallback } from 'react';


// const url = 'http://localhost:5000/tenders/list';

// const AppContext = React.createContext()

// const AppProvider = ({children}) => {
//     const [loading, setLoading] = useState(true);
//     const [search, setSearch] = useState('a');
//     const [tenderList, setTenderList] = useState([]);

//     const fetchBids = async () => {
//         try {
//             const response = await fetch(url);
//             const data = await response.json();
//             const {bid} = data;
//             if(bid){
//                 const newBid = bid.map((item) => {
//                     const {id, tenderName, services, closingDate} = item;
//                     <article key={id} className='story'>
//                         <h4 className='title'>{tenderName}</h4>
//                         <p className='info'>{services}</p>
//                         <p className='info'>{closingDate}</p>
//                     </article>
//                 })
//                 setTenderList(newBid);
//             } else {
//                 setTenderList([])
//             }
//             setLoading(false)
//             // console.log(data)
//         } catch (error) {
//             console.log(error);
//             setLoading(false);
//         }
//     }
//     fetchBids();

//     return <AppContext.Provider value={{
//         loading,
//         tenderList,
//         setSearch 
//     }}>
//         {children}
//     </AppContext.Provider>
// }


// export const useGlobalContext = () => {
//     return useContext(AppContext);
// }

// export { AppContext, AppProvider }