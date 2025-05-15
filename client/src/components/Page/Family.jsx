import { useState } from "react";

const schools = [
  { name: "Engineering", departments: ["CSE", "ECE", "ME"] },
  { name: "Humanities and Social Sciences", departments: ["English", "Sociology"] },
  { name: "Management Sciences", departments: ["Finance", "Marketing"] },
  { name: "Sciences", departments: ["Physics", "Chemistry"] },
];

const Family = () => {
  const [selectedSchool, setSelectedSchool] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [batchYears] = useState(["2023", "2022", "2021", "2020"]);

  return (
    <div className="flex flex-col items-center  p-5">
      <h1 className="bg-indigo-400 font-medium text-white px-6 py-2 rounded-lg text-xl mb-4">
        ALUMNI FAMILY
      </h1>
      
      {!selectedSchool ? (
        <>
          <div className="bg-blue-800 text-white px-4 py-2 rounded-md  mb-4">
            SELECT A SCHOOL
          </div>
          <div className="mt-4 flex flex-col gap-3">
            {schools.map((school, index) => (
              <button
                key={index}
                className="bg-blue-200 text-black px-6 py-2 rounded-md cursor-pointer"
                onClick={() => setSelectedSchool(school)}
              >
                {school.name}
              </button>
            ))}
          </div>
        </>
      ) : !selectedDepartment ? (
        <>
          <h2 className="bg-blue-800 text-white px-4 py-2 rounded-md  mb-4">Select a Department</h2>
          <div className="mt-4 flex flex-col gap-3">
            {selectedSchool.departments.map((dept, index) => (
              <button
                key={index}
                className="bg-blue-200 text-black px-6 py-2 rounded-md cursor-pointer"
                onClick={() => setSelectedDepartment(dept)}
              >
                {dept}
              </button>
            ))}
          </div>
        </>
      ) : !selectedBranch ? (
        <>
          <h2 className="bg-blue-800 text-white px-4 py-2 rounded-md  mb-4">Select a Branch</h2>
          <div className="mt-4 flex flex-col gap-3">
            {["MTech", "BTech", "Phd"].map((branch, index) => (
              <button
                key={index}
                className="bg-blue-200 text-black px-6 py-2 rounded-md cursor-pointer"
                onClick={() => setSelectedBranch(branch)}
              >
                Branch {branch}
              </button>
            ))}
          </div>
        </>
      ) : (
        <>
          <h2 className="bg-blue-800 text-white px-4 py-2 rounded-md  mb-4">Select a Batch Year</h2>
          <div className="mt-4 flex flex-col gap-3">
            {batchYears.map((year, index) => (
              <button
                key={index}
                className="bg-blue-200 text-black px-6 py-2 rounded-md cursor-pointer"
              >
                {year}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Family;
