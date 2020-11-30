import Axios from 'axios';

const myAxios = Axios.create({
  baseURL: 'https://mern-smart-heaters.herokuapp.com/heaters',
});

export default myAxios;
