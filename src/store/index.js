import Vue from "vue";
import Vuex from "vuex";
import axios from "axios"

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    city:'Chester, UK',
    queried : 'false',
    current:{
      clouds: '',
      dew_point: '',
      dt: '',
      feels_like: '',
      humidity: '',
      pressure: '',
      sunrise: '',
      sunset: '',
      temp: '',
      uvi: '',
      wind_deg: '',
      wind_speed: '',
      },

    weather:{
      description:'',
      main:'',
      icon:''
    },

    options : {
      method: 'GET',
      url: 'https://api.openweathermap.org/data/2.5/onecall',
      params: {
        lat: '53.1905',
        lon: '-2.8919',
        appid: '89e8221509dc52f16a32ea0c2a4cdb61',
        lang: 'null',
        units: 'metric',
      }
    }

  },
  getters: {
    returnWeather: state => {
      return state.weather;
    },

    returnCurrent: state => {
      return state.current;
    },

    returnQueryStatus: state => {
      return state.queried;
    },

    returnWeatherIcon: state => {
      return "http://openweathermap.org/img/w/" +  state.weather.icon + ".png";
    },

    lookupCity: state => {
      return state.city;
    },

    returnQuery: state => {
      return state.options;
    },

  },

  mutations: {
    SET_DATA_WEATHER(state, payload) {
      state.weather = payload.current.weather[0];
      state.current = payload.current;
      state.queried = 'true'
    },

    SET_LOOKUP_CITY(state, city) {
      state.options.city = city
    },

  },

  actions: {
    async newWeather({ commit }, query) {
      return axios.request(query)
      .then(res => {
        commit('SET_DATA_WEATHER', res.data)
      })
    },
    
    setLookupCity({ commit }, newValue){
      commit("SET_LOOKUP_CITY", newValue)
    },

    }
}
);
