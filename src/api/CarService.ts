import axios from 'axios';

let endpointEnv = 'prod';
if (process.env.NODE_ENV === 'development') {
  endpointEnv = 'dev';
}

export default class CarService {
  static endpoint = {
    dev: 'http://localhost:8001/api/v1/cars',
    prod: 'NEED TO BE ADD IT',
  };

  static getCars = async (filter) => {
    try {
      const url = this.endpoint[endpointEnv];
      const res = await axios.get(url);
      const filteredData = res?.data.filter((obj) => obj.carType === filter);
      return filteredData;
    } catch (error) {
      // we can log error cloudwatch but for now we'll just log it here
      console.log('Error', error);
    }
  };
}
