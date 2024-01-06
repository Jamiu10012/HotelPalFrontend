import { useState } from "react";
import profile from "../../img/profile.jpg";
import { useNavigate } from "react-router-dom";

function EditDashboard() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [contact_phone, setPhone] = useState("");
  const [job_title, setJobTitle] = useState("");
  const [gender, setGender] = useState("");
  const [date_of_birth, setDob] = useState("");
  const [nationality, setNationality] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  // const [full_address, setAddress] = useState(jobSeeker?.full_address);
  const [yearofExperience, setYOE] = useState("");
  const [twitter, setTwitter] = useState("");
  const [instagram, setInstagram] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [facebook, setFacebook] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // const [zipcode, setZipcode] = useState(jobSeeker?.zipcode);

  const [file, setFile] = useState("");
  const [previewUrl, setPreviewUrl] = useState(profile);

  const onFileUploadChange = (e) => {
    const fileInput = e.target;

    if (!fileInput.files) {
      alert("No file was chosen");
      return;
    }

    if (!fileInput.files || fileInput.files.length === 0) {
      alert("Files list is empty");
      return;
    }

    const file = fileInput.files[0];

    /** File validation */
    if (!file.type.startsWith("image")) {
      alert("Please select a valide image");
      return;
    }

    /** Setting file state */
    setFile(file); // we will use the file state, to send it later to the server
    setPreviewUrl(URL.createObjectURL(file)); // we will use this to show the preview of the image

    /** Reset file input */
    e.currentTarget.type = "text";
    e.currentTarget.type = "file";
  };

  // const handleCancel = (event) => {
  //   event.target.reset();
  //   setPreviewUrl("");
  // };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   // const userId = localStorage.getItem("id");

  //   let formData = new FormData();
  //   formData.append("file", file || jobSeeker?.profile_picture);
  //   formData.append("upload_preset", "zwrcr9d7");

  //   await axios({
  //     method: "POST",
  //     url: "https://api.cloudinary.com/v1_1/dhyk7zned/image/upload",
  //     data: formData,
  //   }).then((response) => {
  //     setIsLoading(true);
  //     axios(
  //       // `http://localhost:8080/api/jobseekers/${jobSeekerId}`,
  //       `https://app-b25f845d-8391-478d-b1b9-530681ce6233.cleverapps.io/api/jobseekers/${jobSeekerId}`,
  //       {
  //         method: "PUT", // or "PATCH" if your API supports partial updates
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         data: {
  //           // full_name: {
  //           //   firstname: full_name.firstname,
  //           //   lastname: full_name.lastname,
  //           // },
  //           // location: {
  //           //   full_address: location.full_address,
  //           //   city: location.city,
  //           //   zipcode: location.zipcode,
  //           //   state: location.state,
  //           // },
  //           firstname,
  //           lastname,
  //           contact_phone,
  //           // full_address,
  //           yearofExperience,
  //           city,
  //           skills: skills,
  //           state,
  //           profile_picture: response.data.secure_url,
  //           gender,
  //           date_of_birth,
  //           job_title,
  //           nationality,
  //           linkedin,
  //           instagram,
  //           facebook,
  //           twitter,

  //           // social_media: {
  //           //   linkedin: social_media.linkedin,
  //           //   instagram: social_media.instagram,
  //           //   facebook: social_media.facebook,
  //           //   twitter: social_media.twitter,
  //           // },
  //         },
  //       }
  //     )
  //       .then((response) => response.data)
  //       .then((updatedJobSeeker) => {
  //         setIsLoading(false);
  //         alert("Jobseeker Updated");

  //         navigate("/seekerdashboard", { replace: true });
  //         // console.log("Job seeker updated:", updatedJobSeeker);
  //         // Do something with the updated job seeker data
  //       })
  //       .catch((error) => {
  //         setIsLoading(false);
  //         console.error("Error updating job seeker:", error);
  //         alert("Something went wrong");
  //       });
  //   });
  // };

  return (
    <div className="profile-main-container bord-pro ">
      <form action="" className="dashboard-form">
        <div className="dashboard-img">
          <img src={previewUrl} alt="profile" />
          <div>
            Upload Image
            <p className="text-[14px]">* recommended size: minimum 550px</p>
            <label htmlFor="profile-img">Upload</label>
            <input
              id="profile-img"
              type="file"
              name="image"
              onChange={onFileUploadChange}
            />
          </div>
        </div>
        {/* <div className="dashboard-img">
          <img src={previewUrl} alt="profile" />
          <div>
            Upload an Id Scan
            <p className="text-[14px]">* recommended size: minimum 550px</p>
            <label htmlFor="profile-img">Upload</label>
            <input
              id="profile-img"
              type="file"
              name="image"
              onChange={onFileUploadChange}
            />
          </div>
        </div> */}

        <fieldset>
          <input
            type="text"
            placeholder={"First Name"}
            name="full_name.firstname"
            onChange={(e) => setFirstName(e.target.value)}
            className="edit-input"
          />
          <input
            type="text"
            placeholder={"Last Name"}
            name="full_name.lastname"
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="text"
            placeholder={"Job Title"}
            name="Job_title"
            onChange={(e) => setJobTitle(e.target.value)}
          />
          <input
            type="tel"
            placeholder={"Phone No"}
            name="contact_phone"
            onChange={(e) => setPhone(e.target.value)}
          />

          <input
            type="text"
            placeholder={"Gender"}
            name="gender"
            onChange={(e) => setGender(e.target.value)}
          />
          <input
            type="text"
            placeholder={"DOB: dd/mm/yyyy"}
            pattern="\d{1,2}/\d{1,2}/\d{4}"
            name="dob"
            onChange={(e) => setDob(e.target.value)}
          />
          <input
            type="text"
            placeholder={"Nationality"}
            name="nationality"
            onChange={(e) => setNationality(e.target.value)}
          />

          <input
            type="text"
            placeholder={"State"}
            name="state"
            onChange={(e) => setState(e.target.value)}
          />
          <input
            type="text"
            placeholder={"City"}
            name="city"
            onChange={(e) => setCity(e.target.value)}
          />
          <input
            type="number"
            placeholder={"Year of Expr."}
            name="yearofex"
            onChange={(e) => setYOE(e.target.value)}
          />
          {/* <input
            type="text"
            placeholder={jobSeeker.full_address || "Address"}
            className="longg"
            name="address"
            onChange={(e) => setAddress(e.target.value)}
          /> */}
        </fieldset>
        <div className="profile-social">Social Networks</div>
        <fieldset>
          <input
            type="url"
            placeholder={"Facebook URL"}
            name="social_media.facebook"
            onChange={(e) => setFacebook(e.target.value)}
          />
          <input
            type="url"
            placeholder={"LinkedIn URL"}
            name="social_media.linkedin"
            onChange={(e) => setLinkedin(e.target.value)}
          />
          <input
            type="url"
            placeholder={"Instagram URL"}
            name="social_media.instagram"
            onChange={(e) => setInstagram(e.target.value)}
          />
          <input
            type="url"
            placeholder={"Twitter URL"}
            name="social_media.twitter"
            onChange={(e) => setTwitter(e.target.value)}
          />
        </fieldset>

        <div className="update-btn">
          {/* Conditionally render based on isLoading */}
          {isLoading ? (
            <button type="submit" disabled>
              Loading...
            </button> // Show loading indicator and disable button
          ) : (
            <button type="submit">Update</button> // Show "Update" button
          )}
        </div>
      </form>
    </div>
  );
}

export default EditDashboard;
