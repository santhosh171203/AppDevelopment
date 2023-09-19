import {configStore} from "@reduxjs/toolkit";


export default configStore({
    reducer:{
        user:UserSlice.reducer
    }
})