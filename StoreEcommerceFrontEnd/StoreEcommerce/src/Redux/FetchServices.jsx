export const FetchGetMethod = async (url) => {
    const getUrl = await fetch(`${process.env.APP_API_BASE_ENDPOINT}${url}`)
     .then((res) => res.json())
     .catch((e) => {
         console.log(e)
     })
      return getUrl;
 }
 export const FetchDeleteMethod =async (url ,id) => {
    await fetch(`http://localhost:8080/${url}/${id}`,{
           method: 'DELETE',
           mode: "cors",
           headers: {
             'Accept': 'application/json, text/plain, */*',
             'Content-Type': 'application/json',
            //  "Authorization": "Bearer " + localStorage.getItem("accessToken")
   
           }
       }).catch((e) => console.log(e))
   }