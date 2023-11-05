const Feature = ({ data, setPrice }) => {
  const handleClick = (btn, price) => {
    btn.classList.add("selected");
    btn.nextSibling.classList.remove("selected");
    btn.previousSibling.classList.remove("selected");
    setPrice(price);
  };
  return (
    <>
      <h1>Sélectionnez {data.property}</h1>
      {data.options.map((option) => {
        return (
          <button
            key={option.name}
            onClick={(e) => handleClick(e.currentTarget, option.price)}
          >
            {option.name} - {option.price} €
          </button>
        );
      })}
    </>
  );
};

export default Feature;
