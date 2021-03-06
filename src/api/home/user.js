import axios from "@/utils/requestHome"
import qs from "qs"

const user = {
    Login(formdata){
        return axios.post(
            "/users/login"
            ,qs.stringify(formdata)
        )
    },
    QueryUsersByPage(page){
        return axios.post("/users/pages",
        qs.stringify({page})
        )
    },
    setUserOffline(state,id){
        return axios.post("/users/offline",
        qs.stringify({
            state,
            id,
        })
        )
    },
    
}

export default user;