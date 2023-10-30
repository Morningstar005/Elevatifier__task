import axios from "axios"
import { setLoading, setNews } from "../slices/FetchNewsSlices"

export function newsfetch(){
    return async(dispatch)=>{
        dispatch(setLoading(true))
        try{
            const response = await axios.get("https://linesnews.onrender.com/api/news-datas")
            dispatch(setNews(response.data.data))
            // console.log(response.data.data)

        }catch(error){
            console.log("the error is ",error)
        }
        dispatch(setLoading(false))
    }
}