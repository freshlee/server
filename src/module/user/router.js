export default {
  path: '/user',
  name: 'user',
  component: reslove => require(['./index.vue'], reslove),
  children: [{
    path: 'normalUser',
    name: 'normalUser',
    component: reslove => require(['./page/user'], reslove)
  }, {
    path: 'manager',
    name: 'manager',
    component: reslove => require(['./page/manager'], reslove)
  }, {
    path: 'renderTest',
    name: 'render_test',
    component: reslove => require(['./page/render_test'], reslove)
  }]
}
