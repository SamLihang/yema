import Community from '@/components/Community'
import Mine from '@/components/Mine'
import MyTask from '@/components/MyTask'
import TaskDetaile from '@/components/TaskDetaile'
import MyAccount from '@/components/MyAccount'

export default {
  routes: [
    {path: '/', name: 'community', component: Community,meta: {hasHeader: true, hasFooter: true}},
    {path: '/Mine', name: 'mine', component: Mine, meta: {hasHeader: false, hasFooter: true}},
    {path: '/MyTask', name: '我的任务', component: MyTask, meta: {hasHeader: false, hasFooter: false}},
    {path: '/TaskDetaile', name: '任务详情', component: TaskDetaile, meta: {hasHeader: false, hasFooter: false}},
    { path: '/myaccount', name: '我的账号', component: MyAccount, meta: { hasHeader: false, hasFooter: false } },
  ]
}
