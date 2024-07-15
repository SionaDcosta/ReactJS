// src/utils/readCSV.js
import Papa from 'papaparse';

export const readCSV = async (file) => {
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      header: true,
      complete: (results) => { // complete receives the results as the parsed data
        resolve(results.data); //promise fulfilled
      },
      error: (error) => {
        reject(error);
      },
    });
  });
};