import Vue from "vue";
import VueRouter from "vue-router";
import Form from "./components/Form/index.vue";
import radio from "./components/Form/Radio.vue";
import checkbox from "./components/Form/Checkbox.vue";
import input from './components/Form/input.vue';
import Data from "./components/Data/index.vue";
import table from "./components/Data/table.vue";
import _404 from "./components/404.vue";
Vue.use(VueRouter);
const routes = [
  { path: "/Form", component: Form },
  { path: "/Form/radio", component: radio },
  { path: "/Form/checkbox", component: checkbox },
  { path: "/Form/input" , component: input },
  { path: "/Data", component: Data },
  { path: "/Data/table", component: table },
  { path: "*", component: _404 }
];
export default new VueRouter({
  mode: "history",
  routes // (缩写) 相当于 routes: routes
});
