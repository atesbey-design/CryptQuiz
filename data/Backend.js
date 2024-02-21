
import api from './clients'




const Backend = {
  User: {
    login: async (data) => {

      return await api.post('user/create', { data }).then((response) => {
        console.log("response", response);
        return response;
      }).catch((error) => {
        console.log("error", error);
        return error;
      });
    },
    register: async (username, password) => {
      return await api.post('register', { username, password });
    },
    logout: async () => {
      return await api.post('logout');
    },




  },

  Quiz: {
    getAll: async () => {
      const data = await api.get('quiz')
      console.log("data", data)


      return data
    },
    get: async (id) => {
      return await api.get(`quiz/${id}`);
    },
    create: async (quiz) => {
      return await api.post('quiz', quiz);
    },
    update: async (id, quiz) => {
      return await api.put(`quiz/${id}`, quiz);
    },
    delete: async (id) => {
      return await api.delete(`quiz/${id}`);
    },
  }

};

export default Backend;
