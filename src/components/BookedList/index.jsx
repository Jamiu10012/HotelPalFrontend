import { useEffect, useState } from "react";
import BookedCard from "./BookedCard";
import { getBookingByUserId } from "../../../Apis/Booking";

function BookedList() {
  const [getData, setGetData] = useState(null);
  const token = localStorage.getItem("authToken");
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchBookingData = async () => {
      try {
        const data = await getBookingByUserId(userId, token);
        setGetData(data);
      } catch (error) {
        console.error(error);
      }
    };

    if (userId) {
      fetchBookingData();
    }
  }, [userId]);

  console.log(getData);
  return (
    <div className="profile-main-container bord-pro p-4 ">
      {getData?.map((item, index) => (
        <BookedCard key={index} data={item} />
      ))}
    </div>
  );
}

export default BookedList;
