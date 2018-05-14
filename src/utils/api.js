import "whatwg-fetch"

const host = "/api"

let Request = (url, body, add='', method = 'get') => {
  if (!window.navigator.onLine){
      alert('当前网络不可用~')
  }
  return new Promise((resolve, reject) => {
        let isSuccess = true;
        let path = host + url + add
        // if(method === 'get') {
            path += '?'
            for (let i in body) {
                path += `${i}=${body[i]}&`
            }
        // }
        fetch(path, {
            method,
            body: (body && (method === 'post')) ? JSON.stringify(body) : body
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

const getTaskListUrl = '/tasks';
const getMyTasksUrl = '/tasks/my';

const postBindAccountUrl = '/account'

const getMyInfoUrl = '/my'
export let getTaskList = (body, add) => {
    return  Request(getTaskListUrl,body, add);
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