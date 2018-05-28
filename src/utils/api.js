import "whatwg-fetch"
import store from '../store'
const host = "/api"

let Request = (url, body, add='', method = 'get') => {
  if (!window.navigator.onLine){
      alert('当前网络不可用~')
  }
  console.log('url:'+url, 'body:'+body, 'add:'+add, 'method:'+method)
  return new Promise((resolve, reject) => {
        let isSuccess = true;
        let path = host + url + add
        // if(method === 'get') {
            // path += '?'
            // for (let i in body) {
            //     path += `${i}=${body[i]}&`
            // }
        // }
        fetch(path, {
            method,
            body: (body && (method === 'post')) ? JSON.stringify(body) : body,
            headers: {
                'content-type': 'application/json;charset=UTF-8',
                openid: store.state.openid
            }
        }).then((response) => {
            isSuccess = response.ok;
            return response.json();
        }).then((response) => {
            console.log('返回',response)                 
            if (isSuccess) {
                resolve(response);
            } else {
                reject(response);
            }
        }).catch((error) => {
            reject(error);
        });
  })
}
//任务大厅 get 发布任务 post 任务详情 get /{taskid} 领取任务 post /{taskid} 确认完成 put /{taskid}
const getTaskListUrl = '/tasks';
//我发布过的任务 get
const getMyTasksUrl = '/tasks/my';
//绑定账号 post
const postBindAccountUrl = '/account'
//我的 get
const getMyInfoUrl = '/my'

export let getTaskList = (body, add, method = 'get') => {
    return  Request(getTaskListUrl,body, add, method);
}

export let postTask = (body) => {
   return Request(getTaskListUrl, body, '', 'post') 
}

export let getMyTasks = (body) => {
    return  Request(getMyTasksUrl,body);
}

export let getMyInfo = (body) => {
    return  Request(getMyInfoUrl,body);
}

export let postBindAccount = (body) => {
    return Request(postBindAccountUrl, body, '', 'post')
}