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
