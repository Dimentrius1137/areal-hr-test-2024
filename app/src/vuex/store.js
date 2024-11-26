import { createStore } from "vuex";
import adminModule from "./modules/admin";
const store = createStore({
    state:{
        isAuth: true,

    },
  modules: {
    admin: adminModule
  }
});
export default store