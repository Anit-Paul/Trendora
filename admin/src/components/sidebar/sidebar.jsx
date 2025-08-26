import { NavLink } from "react-router-dom";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaList } from "react-icons/fa6";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import styles from "./sidebar.module.css";

function Sidebar() {
  return (
    <>
      <div className={styles.sidebar}>
        <NavLink to="/add-items">
          <IoIosAddCircleOutline />
          <p>Add Items</p>
        </NavLink>
        <NavLink to="/list-items">
          <FaList />
          <p>List Items</p>
        </NavLink>
        <NavLink to="view-orders">
          <IoMdCheckmarkCircleOutline />
          <p>View Orders</p>
        </NavLink>
      </div>
    </>
  );
}
export default Sidebar;
