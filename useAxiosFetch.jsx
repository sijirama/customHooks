import {useEffect, useState} from 'react'

//custom hook to fetch data
function useAxiosFetch(url) {

    const [isLoading, setIsLoading] = useState(false)
    const [apiData , setApiData] = useState(null)
    const [serverError, setServerError] = useState(null)
    
    useEffect(() => {
        setIsLoading(true)

        const fetchData = async () => {
            try {
                const response  = await axios.get(url)
                const data = response?.data

                setApiData(data)
                setIsLoading(false)
            } catch (error) {

                setServerError(error)
                setIsLoading(false)
                }
        }

        fetchData()

    }, [url])

  // Return if its still loading, the data if the call was successful and the server error if the call failed  
  return {isLoading , apiData , serverError}
}

export default useAxiosFetch
