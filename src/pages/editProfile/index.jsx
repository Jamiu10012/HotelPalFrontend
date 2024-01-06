import { Fragment } from "react";
import "./style.css";
import EditDashboard from "../../components/editDashboard";
import Sidebar from "../../components/dashboardSidebar";

function EditProfile() {
  // const [dashboardActive, setDashboardActive] = useState(false);
  // const [logoutActive, setLogoutActive] = useState(false);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   setDashboardActive(true);
  // }, []);
  // function activateDashboard() {
  //   setLogoutActive(false);
  //   setDashboardActive(true);
  // }

  // function activateLogout() {
  //   setDashboardActive(false);
  //   setLogoutActive(true);
  //   navigate("/");
  // }
  return (
    <Fragment>
      <div className="edit-container">
        <Sidebar />
        <EditDashboard />

        {/* {dashboardActive && } */}
      </div>
    </Fragment>
  );
}

export default EditProfile;
