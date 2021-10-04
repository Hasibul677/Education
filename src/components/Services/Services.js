import React, { useEffect, useState } from "react";
import Service from "./../Service/Service";

const Services = () => {
  //create state for take load data
  const [courses, setCourses] = useState([]);
  // create useState for load json data
  useEffect(() => {
    fetch("./fakeData.JSON")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="text-gray-400 bg-gray-900 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-12">
          {courses.map((course) => (
            <Service key={course.id} course={course}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
