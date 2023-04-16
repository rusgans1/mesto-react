class Api {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  _checkResult(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(console.log(res.status));
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: {
        authorization: `${this._headers.authorization}`,
      },
    }).then(this._checkResult);
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      method: "GET",
      headers: {
        authorization: `${this._headers.authorization}`,
      },
    }).then(this._checkResult);
  }

  setUserInfo(obj) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: obj.name,
        about: obj.about,
      }),
    }).then(this._checkResult);
  }

  setNewCard(obj) {
    return fetch(`${this._url}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: obj.name,
        link: obj.link,
      }),
    }).then(this._checkResult);
  }

  removeCard(idCard) {
    return fetch(`${this._url}/cards/${idCard}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkResult);
  }

  changeLikeCardStatus(idCard, isLiked) {
    return fetch(`${this._url}/cards/${idCard}/likes`, {
      method: `${isLiked ? "PUT" : "DELETE"}`,
      headers: this._headers,
    }).then(this._checkResult);
  }

  setUserAvatar(obj) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: obj.avatar,
      }),
    }).then(this._checkResult);
  }
}

const api = new Api({
  url: "https://mesto.nomoreparties.co/v1/cohort-60",
  headers: {
    authorization: "0250b2ff-4a35-418c-a094-de9de5877fe5",
    "Content-Type": "application/json",
  },
});

export default api;