import "whatwg-fetch"

const host = "/api"

let Request = (url, body, add='', method = 'get') => {
  console.log(url, body, add)
  if (!window.navigator.onLine){
      alert('当前网络不可用~')
  }
  return new Promise((resolve, reject) => {
      let isSuccess = true;
      fetch(host + url + add, {
          method,
          body:body?JSON.stringify(body):body
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