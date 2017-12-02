import user from '@/module/user/router.js'

export default {
  routes: [
    user,
    {
      path: '/',
      redirct: '/user/normalUser'
    }
  ]}
