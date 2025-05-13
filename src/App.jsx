import React, { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase";
import StudentList from "./components/StudentList";
import StudentForm from "./components/StudentForm";
import LoginForm from "./components/LoginForm";

const App = () => {
  const [students, setStudents] = useState([]);
  const [user, setUser] = useState(null);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    
    setTimeout(() => {
      setStudents([
        { id: 1, name: "Abhimanyu Ray", email: "abhimanyu@gmail.com", course: "B.Tech",},
        { id: 2, name: "Aditya Raj", email: "aditya@123gmail.com", course: "BCA" },
        { id: 3, name: "Rahul Sharma", email: "rahul@62gmail.com", course: "B.Tech" },
        { id: 4, name: "Ashwin Chauhan", email: "ashwin00@gmail.com", course: "M.Tech" },
        { id: 5, name: "Parthib Mondal", email: "parthib@gmail.com", course: "MCA" },
      ]);
    }, 1000);
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const addStudent = (student) => {
    setStudents([...students, { ...student, id: Date.now() }]);
  };

  const handleLogout = () => {
    signOut(auth);
  };

  const filteredStudents = filter
    ? students.filter((s) => s.course === filter)
    : students;

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Student Dashboard</h1>

      {user ? (
        <div className="mb-4">
          <p>Welcome, {user.email}</p>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-gray-100 px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>
      ) : (
        <LoginForm auth={auth} setUser={setUser} />
      )}

      <div className="mb-4 ">
        <label>Filter by course: </label>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border p-2 rounded bg-gray-50"
        >
          <option value="">All</option>
          <option value="B.Tech">B.Tech</option>
          <option value="M.Tech">M.Tech</option>
          <option value="BCA">BCA</option>
          <option value="MCA">MCA</option>
        </select>
      </div>

      <StudentList students={filteredStudents} />

      {user && <StudentForm addStudent={addStudent} />}
    </div>
  );
};

export default App;
