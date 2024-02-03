import { useEffect, useState } from "react";
import { getBookingByPropertyOwnerId } from "../../../Apis/Booking";
import MyBookCard from "./MyBookCard";

function MyBookedList() {
  const [getData, setGetData] = useState(null);
  const token = localStorage.getItem("authToken");
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchBookingData = async () => {
      try {
        const data = await getBookingByPropertyOwnerId(userId, token);
        setGetData(data);
      } catch (error) {
        console.error(error);
      }
    };

    if (userId) {
      fetchBookingData();
    }
  }, [userId]);

  // console.log(userId);
  return (
    <div className="profile-main-container bord-pro p-4 ">
      {getData?.map((item, index) => (
        <MyBookCard key={index} data={item} />
      ))}
    </div>
  );
}

export default MyBookedList;
