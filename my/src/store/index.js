import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
    //
    state:{
        isLogin:0,
        userNick:'',
        testInfo:[
            {
            account:'admin',
            password:'123456',
            userNick:'乌云'
            }
    ]
    },
    getters:{
        testUserInfo:state =>account=>{
            let userinfoIndex = state.testInfo.findIndex(info =>info.account === account)
            return userinfoIndex === -1 ?undefined:state.testInfo[userinfoIndex]
        }
    },
    mutations:{
        loginOut(state){
            state.isLogin = 0
            state.userNick = ''
        },
        loginIn(state,payload){
            state.isLogin = 1
            state.userNick = payload.userNick
        },
        register:(state,payload)=>state.testInfo.push(payload)

    }

})
