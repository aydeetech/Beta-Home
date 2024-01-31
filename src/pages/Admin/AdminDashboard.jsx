import AdminLayout from "../../components/Admin components/AdminLayout";
import { Link, Outlet } from "react-router-dom";
import "../../styles/Admin Styles/AdminDashboard.css";
import { properties } from "../../mockData/properties";
import { FaNetworkWired } from "react-icons/fa";
import { MdFamilyRestroom } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineBedroomParent } from "react-icons/md";
import { LuBath } from "react-icons/lu";
import { GiHomeGarage } from "react-icons/gi";
import { LuRectangleHorizontal } from "react-icons/lu";
import { IoHomeOutline } from "react-icons/io5";

const AdminDashboard = () => {
  const houses = properties.slice(0, 3);
  return (
    <div className="pb-5">
      <AdminLayout>
        <Outlet />
        <div className="Admindash">
          <h1>Dashboard</h1>

          <div className=" linked me-5">
            <Link className="linked" to={"/"}>
              <IoHomeOutline /> Home{" "}
            </Link>{" "}
            / <Link className="linked"> Dashboard </Link>{" "}
          </div>
        </div>

        <div className="Recently-added-props">
          <h2>Recently added properties</h2>
          <h6 className="view-all">view all properties</h6>
        </div>

        <div className="AdminDashProperties">
          {houses.map((h, i) => {
            return (
              <div key={h._id} className="AdminDashboard-images">
                <img src={h.image} alt={h.title} />
                <p className="posted-on"> posted on{h.createdAt}</p>
                <div className="networkFamily">
                  <p className="network">
                    {" "}
                    <FaNetworkWired /> {h.tags[0]}{" "}
                  </p>{" "}
                  <p className="family">
                    {" "}
                    <MdFamilyRestroom /> {h.tags[1]}
                  </p>
                </div>
                <h2>Residential Land</h2>

                <p className="location">
                  {" "}
                  <IoLocationSharp />
                  3,{h.location} 100245
                </p>

                <h3 className="price">${h.price}</h3>

                <p className="spaces">
                  <p>
                    {" "}
                    <MdOutlineBedroomParent />
                    {h.features.bedroom} Bedroom
                  </p>

                  <p>
                    {" "}
                    <LuBath />
                    {h.features.bathroom} Bathroom
                  </p>
                  <p>
                    {" "}
                    <GiHomeGarage />
                    {h.features.garage} Garage
                  </p>
                  <p>
                    {" "}
                    <LuRectangleHorizontal />
                    {h.features.squareFeet} Squarefeet
                  </p>
                </p>
                <div>
                  <Link to={`/admin/properties/${h._id}`}>
                    <button className="AdminDashBtn">View</button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </AdminLayout>
    </div>
  );
};

export default AdminDashboard;
