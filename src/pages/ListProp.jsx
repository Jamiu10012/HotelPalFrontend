import { useState } from "react";
import AmentyForm from "../components/AmentyForm";
import DescrForm from "../components/DescrForm";
import ImageForm from "../components/ImageForm";
import LocationForm from "../components/LocationForm";
import PriceForm from "../components/PriceForm";
import { CreateProperty } from "../../Apis/ListProp";
import { ToastContainer, toast } from "react-toastify";

const ListProp = () => {
  const [isPrice, SetIsPrice] = useState(false);
  const [isImage, SetIsImage] = useState(false);
  const [isLocation, SetIsLocation] = useState(false);
  const [isAmenty, SetIsAmenty] = useState(false);
  const [coverData, setCoverData] = useState("");
  const [restImage, setRestImage] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  console.log(coverData);
  const token = localStorage.getItem("authToken");
  const userId = localStorage.getItem("userId");
  const [formData, setFormData] = useState({
    description: "",
    title: "",
    category: "",
    room_type: "",
    guest_no: "",
    bathrooms: "",
    bedrooms: "",

    currency: "",
    price_per_night: "",
    price_per_night_month: "",
    price_per_night_week: "",
    tax_fee: "",
    cleaning_fee: "",
    extra_people: "",

    cover_image: "",
    rest_images: [],

    county: "",
    city: "",
    state: "",
    area: "",
    country: "",
    postal_code: "",

    late_checkin: "",
    optional_service: "",
    outdor_facilities: "",
    amenties: [],
  });

  const handleAmentyClick = (e) => {
    e.preventDefault();
    // if (
    //   formData.county.trim() === "" ||
    //   formData.city.trim() === "" ||
    //   formData.state.trim() === "" ||
    //   formData.area.trim() === "" ||
    //   formData.country.trim() === "" ||
    //   formData.postal_code.trim() === ""
    // ) {
    //   // If any field is empty, you can handle it accordingly (e.g., show an error message)
    //   toast.error("Please fill in all fields before proceeding to next step");
    // } else {
    //   // If all fields are filled, proceed to set isPrice to true
    //   SetIsAmenty(true);
    // }
    SetIsAmenty(true);
  };
  const handleAmentyClose = () => {
    SetIsAmenty(false);
  };

  const handleLocationClick = (e) => {
    setFormData({
      ...formData,
      cover_image: coverData,
      rest_images: restImage,
    });
    SetIsLocation(true);
    console.log(restImage);
  };
  const handleLocationClose = () => {
    SetIsLocation(false);
  };

  const handleImageClick = (e) => {
    e.preventDefault();
    // Check if any of the required fields are empty
    // if (
    //   formData.currency.trim() === "" ||
    //   formData.price_per_night.trim() === "" ||
    //   formData.price_per_night_month.trim() === "" ||
    //   formData.price_per_night_week.trim() === "" ||
    //   formData.tax_fee.trim() === "" ||
    //   formData.cleaning_fee.trim() === "" ||
    //   formData.extra_people.trim() === ""
    // ) {
    //   // If any field is empty, you can handle it accordingly (e.g., show an error message)
    //   toast.error("Please fill in all fields before proceeding to next step");
    // } else {
    //   // If all fields are filled, proceed to set isImage to true
    //   SetIsImage(true);
    // }
    SetIsImage(true);
  };
  const handleImageClose = () => {
    SetIsImage(false);
  };

  const handlePriceClick = (e) => {
    e.preventDefault();
    // if (
    //   formData.description.trim() === "" ||
    //   formData.title.trim() === "" ||
    //   formData.category.trim() === "" ||
    //   formData.room_type.trim() === "" ||
    //   formData.guest_no.trim() === "" ||
    //   formData.bathrooms.trim() === "" ||
    //   formData.bedrooms.trim() === ""
    // ) {
    //   // If any field is empty, you can handle it accordingly (e.g., show an error message)
    //   toast.error("Please fill in all fields before proceeding to next step");
    // } else {
    //   // If all fields are filled, proceed to set isPrice to true
    // SetIsPrice(true);
    // }
    SetIsPrice(true);
  };
  const handlePriceClose = () => {
    SetIsPrice(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  console.log(formData);
  console.log(selectedOptions);
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(selectedOptions);
    setFormData({
      ...formData,
      amenties: selectedOptions,
    });
    // if (selectedOptions.length === 0) {
    //   setFormData({
    //     ...formData,
    //     amenties: selectedOptions,
    //   });
    // }
    try {
      const result = await CreateProperty(formData, userId, token);
      console.log(result);
      toast.success("Property Created Successfully!!!");

      return () => clearTimeout(timeoutId);
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <form
      action=""
      className="p-10 w-full overflow-hidden "
      onSubmit={handleFormSubmit}
    >
      {!isPrice && !isImage && !isLocation && !isAmenty && (
        <DescrForm
          handlePriceClick={handlePriceClick}
          formData={formData}
          handleInputChange={handleInputChange}
        />
      )}
      {isPrice && !isImage && !isLocation && !isAmenty && (
        <PriceForm
          handlePriceClose={handlePriceClose}
          handleImageClick={handleImageClick}
          formData={formData}
          handleInputChange={handleInputChange}
        />
      )}

      {isImage && !isLocation && !isAmenty && (
        <ImageForm
          handleImageClose={handleImageClose}
          handleLocationClick={handleLocationClick}
          setCoverData={setCoverData}
          setRestImage={setRestImage}
        />
      )}
      {isLocation && !isAmenty && (
        <LocationForm
          handleLocationClose={handleLocationClose}
          handleAmentyClick={handleAmentyClick}
          formData={formData}
          handleInputChange={handleInputChange}
        />
      )}
      {isAmenty && (
        <AmentyForm
          handleAmentyClose={handleAmentyClose}
          formData={formData}
          handleInputChange={handleInputChange}
          selectedOptions={selectedOptions}
          setSelectedOptions={setSelectedOptions}
        />
      )}
      <ToastContainer />
    </form>
  );
};

export default ListProp;
