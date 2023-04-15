const Card = (props) => {
  function handleCardClick() {
    props.onCardClick(props.card);
  }

  return (
    <article className="element">
      <img
        className="element__pic"
        src={props.card.link}
        alt={props.card.name}
        onClick={handleCardClick}
      />
      <button 
        className="element__button-trash" 
        type="button" 
        aria-label="Удалить"
      >
      </button>
      <div className="element__container">
        <h2 className="element__title">{props.card.name}</h2>
        <div className="element__like-container">
          <button
            className="element__button-like"
            type="button"
            aria-label="Поставить лайк"
          >
          </button>
          <p className="element__counter-likes">{props.card.likes.length}</p>
        </div>
      </div>
    </article>
  );
};

export default Card;