import { SAMPLE_COMPANIES } from "../data/sampleCompanies";


export const fetchCompanies = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(SAMPLE_COMPANIES), 500); // simulate API delay
  });
};
