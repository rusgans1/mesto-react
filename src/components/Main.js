import React from "react";
import Card from "./Card";
import editBtnIcon from "../images/edit-button.svg";
import api from "../utils/Api";
import { render } from "@testing-library/react";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userInfo, data]) => {
        setUserName(userInfo.name);
        setUserDescription(userInfo.about);
        setUserAvatar(userInfo.avatar);
        setCards(data);
      })
      .catch((res) => console.log(res));
  }, []);

  return (
    <main>
      <section className="profile" aria-label="Профиль">
        <div className="profile__content">
          <div className="profile__avatar-block">
            <img
              className="profile__avatar"
              src={userAvatar}
              alt="Аватар"
            />
            <div className="profile__avatar-overlay" onClick={onEditAvatar}>
              <img
                className="profile__overlay-icon"
                src={editBtnIcon}
                alt="Редактировать Аватар"
              />
            </div>
          </div>
          <div className="profile__info">
            <div className="profile__container">
              <h1 className="profile__title">{userName}</h1>
              <button
                className="profile__button-edit"
                type="button"
                aria-label="Редактировать профиль"
                onClick={onEditProfile}
              >
              </button>
            </div>
            <p className="profile__subtitle">{userDescription}</p>
          </div>
        </div>
        <button
          className="profile__button-add"
          type="button"
          aria-label="Добавить карточку"
          onClick={onAddPlace}
        >
        </button>
      </section>

      <section className="elements" aria-label="Галерея">
        {cards.map((item) => {
          return <Card card={item} onCardClick={onCardClick} />;
        })}
      </section>
    </main>
  );
}

export default Main;