import RockClimbing from './hobbies/rock-climbing'
import Photography from './hobbies/photography'
import MountainBiking from './hobbies/mountain-biking'
import Interests from './interests'

export default {
  path: '/interests',
  component: Interests,
  children: [
    {
      path: 'mountain-biking',
      component: MountainBiking
    },
    {
      path: 'adventure-photography',
      component: Photography
    },
    {
      path: 'rock-climbing',
      component: RockClimbing
    }
  ]
}
