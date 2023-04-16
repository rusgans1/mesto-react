import React from "react";
import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function closeAllPopup() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  function onCardClick(card) {
    setSelectedCard(card);
  }

  return (
    <>
      <div className="body">
        <div className="page">
          <Header />
          <Main
            onAddPlace={handleAddPlaceClick}
            onEditProfile={handleEditProfileClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={onCardClick}
          />
          <Footer />
          <PopupWithForm
            name="profile-edit"
            title="Редактирование профиля"
            buttonText="Сохранить"
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopup}
          >
            <input
              className="popup__input popup__input_name"
              type="text"
              id="name"
              name="name"
              placeholder="Имя"
              minLength="2"
              maxLength="40"
              required
            />
            <span className="popup__error name-error" id="error-name"></span>
            <input
              className="popup__input popup__input_about"
              type="text"
              id="about"
              name="about"
              placeholder="О себе"
              minLength="2"
              maxLength="200"
              required
            />
            <span className="popup__error about-error" id="error-about"></span>
          </PopupWithForm>
          <PopupWithForm
            name="avatar-change"
            title="Обновить аватар"
            buttonText="Сохранить"
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopup}
          >
            <input
              className="popup__input popup__input_link"
              type="url"
              id="avatar-link"
              name="avatar"
              placeholder="Ссылка на картинку"
              required
            />
            <span className="popup__error avatar-link-error" id="error-avatar-link"></span>
          </PopupWithForm>
          <PopupWithForm
            name="card-add"
            title="Новое место"
            buttonText="Создать"
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopup}
          >
            <input
              className="popup__input popup__input_title"
              type="text"
              id="title"
              name="name"
              placeholder="Название"
              minLength="2"
              maxLength="30"
              required
            />
            <span className="popup__error title-error" id="error-title"></span>
            <input
              className="popup__input popup__input_link"
              type="url"
              id="link"
              name="link"
              placeholder="Ссылка на картинку"
              required
            />
            <span className="popup__error link-error" id="error-link"></span>
          </PopupWithForm>
          <PopupWithForm
            name="confirm-remove"
            title={`Вы уверены&#63`}
            buttonText="Да"
            onClose={closeAllPopup}
          >
          </PopupWithForm>
          <ImagePopup card={selectedCard} onClose={closeAllPopup} />
        </div>
      </div>
    </>
  );
}

export default App;