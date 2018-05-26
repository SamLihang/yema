import Community from '@page/Community'
import Mine from '@page/Mine'
import MyTask from '@page/MyTask'
import TaskDetaile from '@page/TaskDetaile'
import MyAccount from '@page/MyAccount'
import Teaching from '@page/Teaching'
import Payment from "@page/Payment";

export default {
  routes: [
    {path: '/', name: 'community', component: Community,meta: {hasHeader: true, hasFooter: true}},
    {path: '/Mine', name: 'mine', component: Mine, meta: {hasHeader: false, hasFooter: true}},
    {path: '/MyTask', name: '我的任务', component: MyTask, meta: {hasHeader: false, hasFooter: false}},
    {path: '/TaskDetaile', name: '任务详情', component: TaskDetaile, meta: {hasHeader: false, hasFooter: false}},
    {path: '/myaccount', name: '我的账号', component: MyAccount, meta: { hasHeader: false, hasFooter: false } },
    {path: '/teaching', name: '教学', component: Teaching, meta: { hasHeader: false, hasFooter: true } },
    {path: '/payment', name: '支付解锁', component: Payment, meta: { hasHeader: false, hasFooter: false } },
  ]
}
