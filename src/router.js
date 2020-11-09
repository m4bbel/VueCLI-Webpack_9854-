import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function importComponent(path){
    return () => import(`./components/${path}.vue`)
}

Vue.use (VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            name:"admin",
            component: importComponent('DashboardLayout'),
            children:[
                //dashboard
                {
                    path: "/",
                    name:"root",
                    component: importComponent('Dashboard'),
                },
                //to-do list
                {
                    path: "/gd",
                    name:"guided",
                    component: importComponent('Todolist/List'),
                }
            ]
        }
    ]
});

export default router;