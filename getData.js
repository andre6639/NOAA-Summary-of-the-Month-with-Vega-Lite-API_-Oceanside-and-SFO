import { csv } from 'd3';

const csvUrl = 'https://gist.githubusercontent.com/andre6639/595f94303ecb60bb21c9fa4c0ddeb7c7/raw/d7bf9554332e6d7207cda1d796f7b66f27bd9473/Bay_Area_NOAA_Summary_of_the_Month_Oceanside&SFO.csv';

export const getData = async () => {
  const data = await csv(csvUrl);
  
  // Have a look at the attributes available in the console!
  console.log(data[0]);

  return data;
};