import Festpass from '@/components/projects/write-ups/festpass'
import TheMDG from '@/components/projects/write-ups/themdg'
import SafetyNet from '@/components/projects/write-ups/safety-net'
import Gwendolyn from '@/components/projects/write-ups/gwendolyn'
import Projects from './projects'

export default {
  path: '/projects',
  component: Projects,
  children: [
    {
      path: 'festpass',
      component: Festpass
    },
    {
      path: 'themdg',
      component: TheMDG
    },
    {
      path: 'safety-net',
      component: SafetyNet
    },
    {
      path: 'gwendolyn',
      component: Gwendolyn
    }
  ]
}
