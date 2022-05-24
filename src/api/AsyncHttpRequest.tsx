import axios from 'axios';
import { url } from 'inspector';

export const getData = async (url: any, cbGetresponse: any) => {
  try {
    const data = await axios.get(url);
    cbGetresponse(data?.data);
  } catch (error) {
    cbGetresponse(error);
  }
};

export const post =  async(url: string, formData: any, callBack: any) => {
    try {
      const data: any = await axios.post<any>(url, formData);
      callBack(data);
    } catch (error: any) {
      if (callBack !== null) {
        callBack(error.response.data);
      }
    }
  };
  export const put = async (url: string, params: any, headers: any, callBack: any) => {
    try {
      const data = await axios.patch(url, params, headers);
      callBack(data);
    } catch (error) {
      if (callBack !== null) {
        callBack(error);
      }
    }
  };
  export const deleteData = async (url: string,  callBack: any) => {
    try {
      const data = await axios.delete(url);
      callBack(data);
    } catch (error) {
      if (callBack !== null) {
        callBack(error);
      }
    }
  };