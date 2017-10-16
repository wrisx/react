const baseAPI = '/api';

const wrisxService = {
  get() {
    return new Promise((resolve, reject) => {
      fetch(`${baseAPI}/wrisxs`)
        .then(response => response.json())
        .then(json => resolve(json))
        .catch(err => {
          reject(err);
        });
    });
  },

  create(wrisx) {
    return new Promise((resolve, reject) => {
      fetch(`${baseAPI}/wrisx`, {
        method: 'PUT',
        body: JSON.stringify(wrisx),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(result => result.json())
        .then(json => resolve(json))
        .catch(err => {
          reject(err);
        });
    });
  },

  update(wrisx) {
    return new Promise((resolve, reject) => {
      fetch(`${baseAPI}/wrisx`, {
        method: 'POST',
        body: JSON.stringify(wrisx),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(result => {
          resolve(result);
        })
        .catch(err => {
          reject(err);
        });
    });
  },

  destroy(wrisx) {
    return new Promise((resolve, reject) => {
      fetch(`${baseAPI}/wrisx/${wrisx.id}`, { method: 'DELETE' })
        .then(response => response.json())
        .then(json => resolve(json))
        .catch(err => {
          reject(err);
        });
    });
  }
};

export default wrisxService;
