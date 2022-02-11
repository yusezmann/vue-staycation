import { createStore } from 'vuex'
import axios from "axios"

const store = createStore({
    state: () => ({
        mostPicked: '',
        hero:'',
        categories: '',
        testimonial:'',
        detailpage:'',
        detailtestimoni:'',
        inputValue:{
          prefix: '',
          suffix: '',
          value:'',
          placeholder:'', 
          name:'', 
          min:'', 
          max:'',
        }
    }),
  
    getters: {
        //
    },
  
    mutations: {
        SET_HERO(state, payload){
          state.hero = payload
        },
        SET_MOSTPICKED(state, payload){
          state.mostPicked = payload
        },
        SET_CATEGORIES(state, payload) {
          state.categories = payload
        },
        SET_TESTIMONIAL(state, payload) {
          state.testimonial = payload
        },
        SET_DETAILPAGE(state, payload){
          state.detailpage = payload
        },
        SET_DETAILPAGETESTIMONI(state, payload){
          state.detailtestimoni = payload
        },
        SET_INPUTVALUE(state, payload){
          state.inputValue = payload
        },
    },
  
    actions: {
      async fetchPage({commit}) {
         await axios.get('https://admin-stayserver.herokuapp.com/api/v1/member/landing-page')
            .then((res) => {
                commit('SET_HERO', res.data.hero)
                commit('SET_MOSTPICKED', res.data.mostPicked)
                commit('SET_CATEGORIES', res.data.category) 
                commit('SET_TESTIMONIAL', res.data.testimonial)
                // console.log(res.data.category);
            })
    },
    async detailPage({commit},routeId){
      await axios.get(`https://admin-stayserver.herokuapp.com/api/v1/member/detail-page/${routeId}`)
      .then((res) => {
        commit('SET_DETAILPAGE', res.data)
        commit('SET_DETAILPAGETESTIMONI', res.data.testimonial)
      })
    }
    },
})

export default store
