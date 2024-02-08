import { customFetch } from '../helper/customFetch';


export class Photographer {

  token;

  constructor() {
    this.token = localStorage?.getItem('token');
  }

  register = async (data) => {

    try {

      const response = await customFetch({
        path: '/photographer/register',
        method: 'POST',
        data,
      })


      return response;

    } catch (error) {

      console.log(error)

    }
  }


  login = async (data) => {

    try {

      const response = await customFetch({
        path: '/photographer/login',
        method: 'POST',
        data
      })


      return response;

    } catch (error) {

      console.log(error);

    }
  }
}
