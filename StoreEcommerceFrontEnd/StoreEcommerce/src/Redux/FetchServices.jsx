export const FetchGetMethod = async (url) => {
    const getUrl = await fetch(`${process.env.APP_API_BASE_ENDPOINT}${url}`)
     .then((res) => res.json())
     .catch((e) => {
         console.log(e)
     })
      return getUrl;
 }