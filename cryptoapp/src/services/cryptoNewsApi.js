import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
    'X-RapidAPI-Key': '0cb9603e61mshc81b13f1cebefc8p184e3cjsn424d131f82cc',
    'X-RapidAPI-Host': 'crypto-news16.p.rapidapi.com'
}

const baseUrl = 'https://crypto-news16.p.rapidapi.com';
const createRequest = (url) =>({url,headers:cryptoNewsHeaders});


export const cryptoNewsApi = createApi({
    reducerPath:'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder)=>({
        getCryptosNews: builder.query({
            query:(count)=>createRequest(`/news/top/${count}`)
        })
    })
});

export const {useGetCryptosNewsQuery} = cryptoNewsApi;



// const axios = require('axios');

// const options = {
//   method: 'GET',
//   url: 'https://crypto-news16.p.rapidapi.com/news/top/5',
//   headers: {
//     'X-RapidAPI-Key': '0cb9603e61mshc81b13f1cebefc8p184e3cjsn424d131f82cc',
//     'X-RapidAPI-Host': 'crypto-news16.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }