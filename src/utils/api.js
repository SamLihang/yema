import "whatwg-fetch"

const host = "/api"

let Request = (url, body, method = 'get') => {
  console.log(url, body)
  if (!window.navigator.onLine){
      alert('当前网络不可用~')
  }
  return new Promise((resolve, reject) => {
      let isSuccess = true;
      fetch(host + url, {
          method,
          body:body?JSON.stringify(body):body
      }).then((response) => {
          isSuccess = response.ok;
          return response.json();
      }).then((response) => {
          console.log('返回',response)            
          if (isSuccess) {
              resolve(response.data);
          } else {
              reject(response);
          }
      }).catch((error) => {
          reject(error);
      });
  })
}

const getTaskListUrl = '/tasks';

export let getTaskList = (body) => {
  return  Request(getTaskListUrl,body);
}
