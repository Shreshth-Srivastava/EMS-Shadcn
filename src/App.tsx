import React ,{useState, useEffect,useContext} from 'react'
import Login from './myComponents/Login'
import EmployeeDashboard from "@/myComponents/Dashboard/EmployeeDashboard";
import AdminDashboard from "@/myComponents/Dashboard/AdminDashboard";
import { setLocalStorage, getLocalStorage } from "@/utils/localStorage";
import { AuthContext } from "@/context/AuthProvider";

const App = () => {
  const contextData = useContext(AuthContext);
  var loggedInUser = JSON.parse(localStorage.getItem("loggedInUser") ?? "null");

  const [employeesData, setEmployeesData] = useState(null);
  const [adminData, setAdminData] = useState(null);

  useEffect(() => {
    if(contextData){
      setEmployeesData(contextData.employees);
      setAdminData(contextData.admin);
    }
  }, [contextData]);


  const [user, setUser] = useState(loggedInUser ? loggedInUser.role : null);

  const handleLogin = (email: string, password: string) => {
    const employee = employeesData.find((e)=>email == e.email && password == e.password);
    const admin = adminData.find((e)=>email == e.email && password == e.password);

    if (employee) {
      loggedInUser.role = "user";
      loggedInUser.data = employee;
      localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
      setUser("user")
    } 
    else if (admin) {
      loggedInUser.role = "admin";
      loggedInUser.data = admin;
      localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
      setUser("admin")
    } 
    else {
      loggedInUser.role = "anonymous";
      loggedInUser.data = null;
      localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
      setUser("anonymous")
      alert("Invalid Credentials");
    }
  };

  return (
    <div className='bg-black'>
      {user === "user" ? (
        <EmployeeDashboard currUser = {loggedInUser} setUser={setUser}/>
      ) : user === "admin" ? (
        <AdminDashboard currUser = {loggedInUser} setUser={setUser} employees={employeesData}/>
      ) : (
        <Login handleLogin={handleLogin} data={contextData}/>
      )}
    </div>
  );
}

export default App
