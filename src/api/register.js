import request from '@/utils/request'

//注册用户
export function registerUser(params){
    return request({
        url:'/inside/app/user/register',
        method:'post',
        data:params
    })
}
