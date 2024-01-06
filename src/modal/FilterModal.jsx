const FilterModal = ({ data, handleIsGuestClose }) => {
  const handleSelectGuests = (guests) => {
    handleIsGuestClose(guests);
  };
  return (
    <div className="filter-modal-container absolute flex justify-center flex-col items-center">
      {data.map((item, index) => (
        <div
          key={index}
          className="list-filt"
          onClick={() => handleSelectGuests(item)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default FilterModal;
