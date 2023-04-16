import React from "react";

function PopupWithForm({
  name,
  title,
  buttonText,
  isOpen,
  onClose,
  children,
}) {
  return (
    <section
      className={`popup popup_${name} ${isOpen && "popup_opened"}`}
      aria-label={`${title}`}
    >
      <div className="popup__container">
        <button
          className="popup__button-close"
          type="button"
          aria-label="Закрыть окно"
          onClick={onClose}
        >
        </button>
        <h2 className="popup__title">{title}</h2>
        <form className="popup__form" name="popup-form" noValidate>
        {children}
          <button className="popup__button-submit" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;