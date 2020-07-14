import axios from 'plugins/fetch'

export function getBanner(data) {
    return axios({
        url: "/banner/list",
        method: "get",
        params: data
    })
}

export async function asyncGetBanner(data) {
    return await axios({
        url: "/banner/list",
        method: "get",
        params: data
    })
}

export function getActivity(data) {
    return axios({
        url: "/activity/list",
        method: "get",
        params: data
    })
}


export function getGoods(data) {
    return axios({
        url: "/activity/goods",
        method: "get",
        params: data
    })
}

export function getTitle(data) {
    return axios({
        url: "/promote",
        method: "get",
        params: data
    })
}

export function getNav() {
    return axios({
        url: "/nav",
        method: "get",
    })
}

