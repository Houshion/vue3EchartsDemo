// api/user.ts

import { get, post } from '~/utils/axios'

const api = {
    dataList: '/api/getData',
}

//获取列表数据
export const getDataList = (params: any) => {
    return post(api.dataList, params).then((res: any) => {
        if (res.code === 200) {
            localStorage.setItem('token', res.data.token);
        }
        return Promise.resolve(res);
    })
}
//获取列表数据
export const getLBDataList = (params: any) => {
    return post('/api/getLBData', params).then((res: any) => {
        if (res.code === 200) {
            localStorage.setItem('token', res.data.token);
        }
        return Promise.resolve(res);
    })
}

//获取列表数据
export const getInfoMsg = (params: any) => {
    return get('/api/getInfoMsg', params).then((res: any) => {
        console.log("res",res)
        if (res.code === 200) {
            localStorage.setItem('token', res.data.token);
        }
        return Promise.resolve(res);
    })
}
//获取图表数据
export const getEchartsData = (params: any) => {
    return get('/api/getEchartsData', params).then((res: any) => {
        console.log("res",res)
        if (res.code === 200) {
            localStorage.setItem('token', res.data.token);
        }
        return Promise.resolve(res);
    })
}
