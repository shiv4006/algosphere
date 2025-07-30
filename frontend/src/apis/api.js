import axiosInstance from '../axios';

export const signUp = async (payload) => {
  try {
    const response = await axiosInstance.post('/auth/signup', payload);
    return response;
  } catch (error) {
    return error.response;
  }
}

export const signIn = async (payload) => {
  try {
    const response = await axiosInstance.post('/auth/signin', payload);
    return response;
  } catch (error) {
    return error.response;
  }
}

export const logOut = async () => {
  try {
    const response = await axiosInstance.post('/auth/logout');
    return response;
  } catch (error) {
    return error.response;
  }
}

export const checkUser = async () => {
  try {
    const response = await axiosInstance.get('/auth');
    return response;
  } catch (error) {
    return error.message;
  }
}

export const markProblemComplete = async (payload) => {
  try {
    const response = await axiosInstance.post('/users/complete-problem', payload);
    return response;
  } catch (error) {
    return error.response;
  }
}

export const markProblemRevised = async (payload) => {
  try {
    const response = await axiosInstance.post('/users/revise-problem', payload);
    return response;
  } catch (error) {
    return error.response;
  }
}

export const getUserProgress = async () => {
  try {
    const response = await axiosInstance.get('/users/progress');
    return response;
  } catch (error) {
    return error.response;
  }
}