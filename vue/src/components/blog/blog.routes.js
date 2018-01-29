import BlogDirectory from '@/components/blog/directory/directory'
import Blog from './blog'
import PostRoutes from './posts/posts.routes'

export default {
  path: '/blog',
  component: Blog,
  children: [
    {
      path: 'home',
      name: 'BlogHome',
      component: BlogDirectory
    },
    {
      path: 'posts',
      component: Blog,
      children: [
        PostRoutes
      ]
    }
  ]
}
