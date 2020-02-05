import axios from 'axios';

const ENDPONT_ODATA_PIEMONTE = 'https://api.smartdatanet.it';
const ENDPONT_OPEN_DATA_PIEMONTE = 'http://www.dati.piemonte.it';

export const getDoctors = (
  path,
  $top = 0,
  $skip = 10,
  $orderby = 'Data_inizio_attivita', // property asc/desc
  startsWith,
  filterField
) => {
  const params = {
    $top,
    $skip,
    $orderby,
    $format: 'json'
  };
  if (startsWith && filterField) {
    params['$filter'] = `startswith(${filterField},'${startsWith}')`;
  }
  return axios.get(`/api/${path}/DataEntities/`, { params });
};

export const processError = error => {
  let message = 'Generic Error! Try again.';
  console.error(error);
  if (error.response) {
    console.log('SERVER_RESPONSE', error.response);
    try {
      const { data } = error.response;
      message = data.error.message.value;
    } catch {
      message = 'Generic Error! Try again.';
    }
  }
  return message;
};

export const getPackageIds = () => {
  return axios.get('/rpapisrv/api/rest/package');
};

export const getPackageById = id => {
  return axios.get('/rpapisrv/api/rest/package/' + id);
};

export const getPackages = ids => {
  const requests = ids.map(id => getPackageById(id));
  return axios.all(requests);
};
