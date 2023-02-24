import {useState , useEffect} from 'react'

// Hook for finding screen screen size

function useMediaQuery(query) {
    const [matches , setMatches] = useState(false)

    useEffect(() => {
        const media = window.matchMedia(query)

        if(media !== matches ){
            setMatches(media.matches)
        }

        const listener = () => setMatches(media.matches)
        window.addEventListener('resize' , listener)
        return () => window.removeEventListener('resize' , listener)

    } , [matches , query])

    return matches

}

export default useMediaQuery
