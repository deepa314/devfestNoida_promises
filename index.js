const appDiv1 = document.getElementById('app');
const appDiv2 = document.getElementById('country');
const appDiv3 = document.getElementById('state');
const appDiv4 = document.getElementById('city');

appDiv1.innerHTML = `<h1>JS Promises at Devfest 2022</h1>`;

const country = 'India';

const promise = getCountryCode(country);

promise
  .then((countryCode) => {
    return countryCode;
  })
  .then((countryCode) => {
    appDiv2.innerHTML = `<h3>Country </h3> ${countryCode} `;
    return getState(countryCode);
  })
  .then((state) => {
    appDiv3.innerHTML = `<h3>State </h3> ${state} `;
    return getCity(state);
  })
  .then((city) => {
    appDiv4.innerHTML = `<h3>City </h3> ${city} `;
  })
  .catch(function (err) {
    console.log(err);
  })
  .finally((res) => {
    console.log('I will always run no matter what');
  });

function getCountryCode(country) {
  const pr = new Promise((resolve, reject) => {
    if (!validateResponse(country)) {
      const err = new Error('Cannot fetch country');
      reject(err);
    }
    const countryCode = 'INDIA';
    if (countryCode) {
      resolve(countryCode);
    }
  });
  return pr;
}

function getState(countryCode) {
  const pr = new Promise((resolve, reject) => {
    if (countryCode) {
      resolve('UP');
    } else {
      const err = 'Cannot fetch State';
      reject(err);
    }
  });
  return pr;
}

function getCity(state) {
  const pr = new Promise((resolve, reject) => {
    if (state) {
      resolve('Noida');
    } else {
      const err = 'Cannot fetch city';
      reject(err);
    }
  });

  return pr;
}

function validateResponse(country) {
  return true;
}
