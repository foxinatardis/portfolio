import Promises from '@/components/blog/posts/promises/promises'
import TrafficCircle from '@/components/blog/posts/traffic-circle/traffic-circle'
import Posts from './posts'
export default {
  path: '',
  component: Posts,
  children: [
    {
      path: 'promises',
      name: 'promises',
      component: Promises
    },
    {
      path: 'traffic-circle',
      name: 'traffic-circle',
      component: TrafficCircle
    }
  ]
}
