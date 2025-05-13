import React from "react";

const StudentList = ({ students }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Student List</h2>
      {students.map((student) => (
        <div key={student.id} className="border p-3 mb-2 rounded bg-gray-50">
          <p><strong>{student.name}</strong></p>
          <p>{student.email}</p>
          <p>Course: {student.course}</p>
        </div>
      ))}
    </div>
  );
};

export default StudentList;
