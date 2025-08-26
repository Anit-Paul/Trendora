/* eslint-disable no-unused-vars */
import { useContext } from "react";
import adminContext from "./admin";
import serverContext from "./server";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

axios.defaults.withCredentials=true;

function AdminProvider({ children }) {
  const { serverURL } = useContext(serverContext);
  const [admin,setAdmin]=useState(null)
  async function getAdmin() {
    //console.log("i am called")
    try {
      const response = await axios.post(`${serverURL}/api/admin/getAdmin`);
      if(response.status==200 || response.status==201){
        setAdmin(response.data)
      }else{
        setAdmin(null)
      }
    } catch (error) {
      setAdmin(null)
    }
  }
  useEffect(()=>{
    getAdmin()
  },[])
  const value = {
    getAdmin,
    admin,
    setAdmin
  };
  return (
    <adminContext.Provider value={value}>{children}</adminContext.Provider>
  );
}
export default AdminProvider;
