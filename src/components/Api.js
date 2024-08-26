class Api {
  constructor(url) {
    this.url = url;
  }

  getUserInfo() {
    return fetch("https://apimocha.com/zyantesting/users/me", {
      // (sustituir groupId por el ID del grupo):
      /*headers: {
        authorization: "c56e30dc-2883-4270-a59e-b2f7bae969c6", // reemplazar este header con mi token
      },*/
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
    return fetch("https://apimocha.com/zyantesting/cards", {
      // (sustituir groupId por el ID del grupo):
      /*headers: {
        authorization: "c56e30dc-2883-4270-a59e-b2f7bae969c6", // reemplazar este header con mi token
      },*/
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

  updateUserProfile(data) {
    return fetch("https://apimocha.com/zyantesting/users/me", {
      // (sustituir url)
      method: "PATCH",
      headers: {
        // authorization: "c56e30dc-2883-4270-a59e-b2f7bae969c6", // reemplazar este header con mi token
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        about: data.about,
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

  createCard(data) {
    return fetch("https://apimocha.com/zyantesting/cards", {
      method: "POST",
      /*headers: {
        authorization: "c56e30dc-2883-4270-a59e-b2f7bae969c6", // reemplazar este header con mi token
      },*/
      body: JSON.stringify({
        name: data.name,
        link: data.link,
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
  baseUrl: "https://apimocha.com/zyantesting/cards", //Cambiar URL
  headers: {
    authorization: "c56e30dc-2883-4270-a59e-b2f7bae969c6",
    "Content-Type": "application/json",
  },
});

export default api;
