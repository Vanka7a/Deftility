import axios from 'axios';

const apiUrl = 'https://localhost:44375/api';

const authAxios = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('jwt')}`
  }
});

export function getAllJobs() {
  return axios.get(`${apiUrl}/job/all`);
};

export function getJobDetails(jobId) {
  return axios.get(`${apiUrl}/job/get/${jobId}`);
};

export function createJob(jobData) {
  return authAxios.post(`${apiUrl}/job/create`, jobData);
}