import React from "react";
import "./Content.css";
import { useState, useEffect } from "react";
import axios from "axios";
function Content() {
  const [resultList, setResultList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/employees ")
      .then((res) => setResultList(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="content_box">
        <div className="icon">
          <h1>เพลงใหม่มาแรง</h1>
        </div>
        <div className="box_control">
        {resultList.map((val, key) => {
          return (
              <div className="box-item">
                <img
                  src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
                <p >Name: {val.name}</p>
                <p >Age: {val.age}</p>
                <p >Country: {val.country}</p>
                <p >Position: {val.position}</p>
                <p >Wage: {val.wage}</p>
              </div>
            
          );
        })}
        </div>
      </div>
    </>
  );
}

export default Content;
