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
          <PopupWithForm>
            <input 
              name="profile-edit"
              title="Редактирование профиля"
              buttonText="Сохранить"
              isOpen={isEditProfilePopupOpen}
              onClose={closeAllPopup}
            />
          </PopupWithForm>
          <PopupWithForm>
            <input
              name="card-add"
              title="Новое место"
              buttonText="Создать"
              isOpen={isAddPlacePopupOpen}
              onClose={closeAllPopup}
            />
          </PopupWithForm>
          <PopupWithForm>
            <input
              name="avatar-change"
              title="Обновить аватар"
              buttonText="Сохранить"
              isOpen={isEditAvatarPopupOpen}
              onClose={closeAllPopup}
            />
          </PopupWithForm>
          <PopupWithForm>
            <input
              name="confirm-remove"
              title={`Вы уверены&#63`}
              buttonText="Да"
              onClose={closeAllPopup}
            />
          </PopupWithForm>
          <ImagePopup card={selectedCard} onClose={closeAllPopup} />
        </div>
      </div>
    </>
  );
}

export default App;