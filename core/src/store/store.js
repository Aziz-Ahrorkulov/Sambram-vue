import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state: {
    userRole: null,
    applications: [],
  },
  getters: {
    getUserRole: state => state.userRole,
    getApplications: state => state.applications,
  },
  mutations: {
    setUserRole(state, role) {
      state.userRole = role;
    },
    setApplications(state, applications) {
      state.applications = applications;
    },
  },
  actions: {
    fetchUserAndApplications({ commit }) {
      axios.get('http://127.0.0.1:8000/api/applications/')
        .then(response => {
          const applications = response.data;
          commit('setApplications', applications);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    },
  },
});

export default store;
