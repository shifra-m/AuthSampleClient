import axios from 'axios';
 axios.defaults.baseURL= process.env.REACT_APP_API;

  process.env.REACT_APP_API


export default {
  getTasks: async () => {
    const result = await axios.get(`/items`)    
    return result.data;
  },


  addTask: async(name)=>{
    console.log('addTask', name)
    const result = await axios.post(`/items`,{name:name,isComplete:false})    
    return result.data;
  },

 
  
  setCompleted: async(id, isComplete)=>{
        const result = await axios.put(`/items/${id}?isComplete=${isComplete}`)    
        return result.data;
    
      },
      deleteTask:async(id)=>{
            console.log('deleteTask')
            const result = await axios.delete(`/items/${id}`)    
            return result.data;
          }
};
axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.log(error);
  }
);

// export const axiosInstance = axios.create({
//   baseURL: "https://swapi.dev/api/",
// });

// axiosInstance.interceptors.request.use(
//   function (config) {
//     // Do something before request is sent
//     return config;
//   },
//   function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   }
// );

// axiosInstance.interceptors.response.use(
//   function (response) {
//     return response;
//   },
//   function (error) {
//     return Promise.reject(error);
//   }
// );
