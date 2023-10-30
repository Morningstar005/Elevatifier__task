import { createSlice } from "@reduxjs/toolkit";

const initialstate = {
    news: [],
    loading: false,
    search:"",
    category:""
}

const newsSlice = createSlice({
    name: "newsfetch",
    initialState: initialstate,
    reducers: {
        setNews(state, value) {
            state.news = value.payload
        },
        setLoading(state, value) {
            state.loading = value.payload
        },
        setSearch(state,value){
            state.search = value.payload
        },
        setCategory(state,value){
            state.category = value.payload
        }
    }
})

export const {setLoading,setNews,setCategory,setSearch}=newsSlice.actions;
export default newsSlice.reducer;