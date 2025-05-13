import React, { useState } from "react";

const StudentForm = ({ addStudent }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !course || !email.includes("@")) {
      alert("Please fill all fields correctly");
      return;
    }
    addStudent({ name, email, course });
    setName("");
    setEmail("");
    setCourse("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4 max-w-md">
      <h2 className="text-xl font-semibold">Add Student</h2>
      <input
        type="text"
        placeholder="Name"
        className="w-full border p-2 rounded bg-gray-50"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full border p-2 rounded bg-gray-50"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <select
        value={course}
        onChange={(e) => setCourse(e.target.value)}
        className="w-full border p-2 rounded bg-gray-50"
        required
      >
        <option value="">Select Course</option>
        <option value="B.Tech">B.Tech</option>
        <option value="M.Tech">M.Tech</option>
        <option value="BCA">BCA</option>
        <option value="MCA">MCA</option>
      </select>
      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Add Student
      </button>
    </form>
  );
};

export default StudentForm;
