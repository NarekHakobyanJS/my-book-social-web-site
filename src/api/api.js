import * as axios from "axios";

const instance = axios.create({
    baseURL : `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials : true,
    headers : {
        "API-KEY" : "2077cebc-7509-4b52-94c0-d0021e114526"
    }
});

export const usersAPI = {
    getUsers (currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    follow(userId){
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId){
        return instance.delete(`follow/${userId}`)
    },
    getProfile(profileId){
        return profileAPI.getProfile(profileId)
    }
}

export const profileAPI = {
    getProfile(userId){
        return instance.get(`/profile/${userId}`)
    },
    getStatus(userId){
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status){
        return instance.put(`profile/status`, {status : status})
    },

}


export const authAPI = {
    me(){
        return instance.get(`auth/me`)
    }
}

