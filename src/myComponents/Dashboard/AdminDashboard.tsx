import React, { useState } from "react";
import Header from "../Utils/Header";

interface User {
  email: string;
  password: string;
  tasks: any;
  TaskCount: any;
}

const AdminDashboard = ({ currUser, setUser, employees }:{currUser:any, setUser:React.Dispatch<any>, employees:User[] | []}) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = (e:any) => {
    e.preventDefault();
    const newTask = {
      active: false,
      new_task: true,
      completed: false,
      failed: false,
      task_title: title,
      task_description: description,
      task_date: date,
      task_category: category,
    };

    const employee = employees.find((e:any) => e.firstName === assignTo);

    if (!employee) {
      alert("No Such Employee Exists!");
      return;
    }

    employee.tasks.push(newTask);
    employee.TaskCount.newTasks++;

    localStorage.setItem("employees", JSON.stringify(employees));
    alert("Task Sucessfully Assigned!");
    window.location.reload();
  };

  const currUserData = currUser.data;

  return (
    <div className="w-full h-max md:min-h-screen bg-[#1C1C1C]  py-6 px-6 md:px-8">
      <Header currUserData={currUserData} setUser={setUser} />
      <br />
      <form
        onSubmit={submitHandler}
        className="bg-[hsl(0,0%,20%)] w-full h-max p-6 rounded flex flex-col md:flex-row justify-center items-center gap-2 md:gap-20"
      >
        <div className="w-full h-full flex flex-col gap-4">
          <div>
            <h3>Task Title</h3>
            <input
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              placeholder="Title"
              className="w-full mt-2 p-2 border-2 border-[hsl(0,0%,30%)] rounded"
            />
          </div>

          <div>
            <h3>Date</h3>
            <input
              type="date"
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
              className="w-full mt-2 p-2 border-2 border-[hsl(0,0%,30%)] rounded"
            />
          </div>

          <div>
            <h3>Assign To</h3>
            <input
              type="text"
              value={assignTo}
              onChange={(e) => {
                setAssignTo(e.target.value);
              }}
              placeholder="Employee Name"
              className="w-full mt-2 p-2 border-2 border-[hsl(0,0%,30%)] rounded"
            />
          </div>

          <div>
            <h3>Category</h3>
            <input
              type="text"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              placeholder="Eg. Design, Dev, etc."
              className="w-full mt-2 p-2 border-2 border-[hsl(0,0%,30%)] rounded"
            />
          </div>
        </div>
        <div className="w-full h-full px-2 pt-8 flex flex-col justify-start gap-6">
          <textarea
            rows={10}
            cols={10}
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            className="w-full bg-[hsl(0,0%,30%)] p-2 resize-none rounded"
          ></textarea>
          <button className="bg-green-600 rounded py-2 cursor-pointer hover:bg-green-700">
            Create Task
          </button>
        </div>
      </form>
      <br />

      {/* Employees Data */}

      <div className="w-full py-4 px-6 bg-[hsl(0,0%,20%)] rounded grid grid-cols-6">
        <p>ID</p>
        <p>Name</p>
        <p>New Tasks</p>
        <p>Active Tasks</p>
        <p>Completed Tasks</p>
        <p>Failed Tasks</p>
      </div>
      <div
        id="AdminTaskList"
        className="w-full h-max py-4 flex flex-col gap-4 overflow-auto"
      >
        {employees
          ? employees.map((e:any, idx) => {
              return (
                <div
                  key={idx}
                  className="w-full py-4 px-6 border-2 border-[hsl(0,0%,20%)] rounded grid grid-cols-6 text-lg"
                >
                  <p>{e.id}</p>
                  <p>{e.firstName}</p>
                  <p className="text-blue-500">{e.TaskCount.newTasks}</p>
                  <p className="text-yellow-500">{e.TaskCount.acceptedTasks}</p>
                  <p className="text-green-500">{e.TaskCount.completedTasks}</p>
                  <p className="text-red-500">{e.TaskCount.failedTasks}</p>
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
};

export default AdminDashboard;
