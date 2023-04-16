function ImagePopup({ card, onClose }) {
  return (
    <section
      className={`popup popup_fullsize popup_overlay ${
        card && "popup_opened"
      }`}
      aria-label="Открытие полного размера"
    >
      <figure className="fullsize-image">
        <img
          src={card?.link}
          alt={card?.name}
          className="fullsize-image__picture"
        />
        <button
          className="popup__button-close"
          type="button"
          aria-label="Закрыть окно"
          onClick={onClose}
        >
        </button>
        <figcaption>
          <p className="fullsize-image__caption">{card?.name}</p>
        </figcaption>
      </figure>
    </section>
  );
}

export default ImagePopup;