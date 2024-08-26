class Api {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  getUserInfo() {
    return fetch(`${this.baseUrl}/users/me`, {
      headers: this.headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        // si el servidor devuelve un error, rechaza el promise
        return Promise.reject(`Error: ${res.status}`);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getInitialCards() {
    return fetch(`${this.baseUrl}/cards`, {
      headers: this.headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        // si el servidor devuelve un error, rechaza el promise
        return Promise.reject(`Error: ${res.status}`);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  updateUserProfile(name, job) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        name: "Marie Skłodowska Curie",
        about: "Físico y químicos",
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        // si el servidor devuelve un error, rechaza el promise
        return Promise.reject(`Error: ${res.status}`);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  createCard(link, name) {
    return fetch(`${this.baseUrl}/cards`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        link: "http://www.google.com",
        name: "España",
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        // si el servidor devuelve un error, rechaza el promise
        return Promise.reject(`Error: ${res.status}`);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/web-es-cohort-15",
  headers: {
    authorization: "2bab9430-e1e0-4cbe-a60f-39a600fbd8a4",
    "Content-Type": "application/json",
  },
});

export default api;
