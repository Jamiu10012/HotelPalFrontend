import { useState } from "react";
import AmentyForm from "../components/AmentyForm";
import DescrForm from "../components/DescrForm";
import ImageForm from "../components/ImageForm";
import LocationForm from "../components/LocationForm";
import PriceForm from "../components/PriceForm";

const ListProp = () => {
  const [isPrice, SetIsPrice] = useState(false);
  const [isImage, SetIsImage] = useState(false);
  const [isLocation, SetIsLocation] = useState(false);
  const [isAmenty, SetIsAmenty] = useState(false);

  const handleAmentyClick = (e) => {
    e.preventDefault();
    SetIsAmenty(true);
  };
  const handleAmentyClose = () => {
    SetIsAmenty(false);
  };

  const handleLocationClick = (e) => {
    e.preventDefault();
    SetIsLocation(true);
  };
  const handleLocationClose = () => {
    SetIsLocation(false);
  };

  const handleImageClick = (e) => {
    e.preventDefault();
    SetIsImage(true);
  };
  const handleImageClose = () => {
    SetIsImage(false);
  };

  const handlePriceClick = (e) => {
    e.preventDefault();
    SetIsPrice(true);
  };
  const handlePriceClose = () => {
    SetIsPrice(false);
  };
  return (
    <div className="p-10 w-full overflow-hidden ">
      {!isPrice && !isImage && !isLocation && !isAmenty && (
        <DescrForm handlePriceClick={handlePriceClick} />
      )}
      {isPrice && !isImage && !isLocation && !isAmenty && (
        <PriceForm
          handlePriceClose={handlePriceClose}
          handleImageClick={handleImageClick}
        />
      )}

      {isImage && !isLocation && !isAmenty && (
        <ImageForm
          handleImageClose={handleImageClose}
          handleLocationClick={handleLocationClick}
        />
      )}
      {isLocation && !isAmenty && (
        <LocationForm
          handleLocationClose={handleLocationClose}
          handleAmentyClick={handleAmentyClick}
        />
      )}
      {isAmenty && <AmentyForm handleAmentyClose={handleAmentyClose} />}
    </div>
  );
};

export default ListProp;
