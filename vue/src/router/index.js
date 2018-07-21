import Vue from 'vue';
import Router from 'vue-router';

// Index is a blank component wrapper
import Index from './index.template.vue';

// Pages to render
import About from '@/components/about/about';
import NotFound from '@/components/not-found/not-found';

// Children of '/'
import ProjectRoutes from '@/components/projects/projects.routes';
import InterestRoutes from '@/components/interests/interests.routes';
import BlogRoutes from '@/components/blog/blog.routes';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '*',
            name: 'Not Found',
            component: NotFound
        },
        {
            path: '/',
            component: Index,
            children: [
                {
                    path: '',
                    name: 'Home',
                    component: About
                },
                {
                    path: '/about',
                    name: 'About',
                    component: About
                },
                ProjectRoutes,
                BlogRoutes,
                InterestRoutes
            ]
        }
    ],
    scrollBehavior (to, from, savedPosition) {
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 300);
        return null;
    }
});
