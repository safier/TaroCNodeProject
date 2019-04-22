import Taro from '@tarojs/taro';
import api from '../constants/api';
export function getJSON(url,data) {
    return Taro.request({url:url,data,method:'GET'})
}

export function postJSON(url,data) {
    return Taro.request({url:url,data:data,method:'POST'})
}

//获取话题列表
export async function getTopicList() {
      let result =  await getJSON(api.gettopics).catch(messagfe=>{
          console.log('出错了，错误信息：' + message)
      })
      return result;
}
