import { createRouter, createWebHistory } from 'vue-router';

import Home from "../components/homepage/HomePage.vue"
import Class from "../components/class/Class.vue"
import Management from "../components/management/Management.vue"
import Exam from "../components/exam/Exam.vue"
import Information from "../components/information/Information.vue"
import Schedule from "../components/schedule/Schedule.vue"
import Support from "../components/support/Support.vue"

const routes = [
    {path:'/home' , component: Home},
    {path:'/class' , component: Class},
    {path:'/management' , component: Management},
    {path:'/exam' , component: Exam},
    {path:'/information' , component: Information},
    {path:'/schedule' , component: Schedule},
    {path:'/support' , component: Support}
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;