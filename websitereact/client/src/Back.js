import "./App.css";
import { useState, useEffect } from "react";
import Axios from "axios";
import "react-bootstrap";
import Navbar from "./Navbar";

function Back() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState(0);

  const [newName, setNewName] = useState(0);
  const [newAge, setNewAge] = useState(0);
  const [newCountry, setNewCountry] = useState(0);
  const [newPosition, setNewPosition] = useState(0);
  const [newWage, setNewWage] = useState(0);

  const [employeeList, setEmployeeList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/employees ")
      .then((res) => setEmployeeList(res.data))
      .catch((err) => console.log(err));
  }, []);
  //alert
  const handleSubmit = () => {
    alert("บันทึกข้อมูลเสร็จสิ้น");
  };
  const handleSubmit_Delete = () => {
    alert("ลบข้อมูลเสร็จสิ้น");
  };

  const addEmployee = () => {
    Axios.post("http://localhost:3001/create", {
      name: name,
      age: age,
      country: country,
      position: position,
      wage: wage,
    }).then(() => {
      setEmployeeList([
        ...employeeList,
        {
          name: name,
          age: age,
          country: country,
          position: position,
          wage: wage,
        },
      ]);
    });
  };

  const updateEmployeeWage = (id) => {
    Axios.put("http://localhost:3001/update", {
      country : newCountry,
      age: newAge,
      position: newPosition,
      wage: newWage,
      name: newName,
      id: id,
    }).then((response) => {
      setEmployeeList(
        employeeList.map((val) => {
          return val.id == id
            ? {
                id: val.id,
                name: newName,
                country: newCountry,
                age: newAge,
                position: newPosition,
                wage: newWage,
              }
            : val;
        })
      );
    });
  };

  const deleteEmployee = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      setEmployeeList(
        employeeList.filter((val) => {
          return val.id != id;
        })
      );
    });
  };
  return (
    <>
    <div className="Add_main mt-3">
      <h1 className="text-3xl font-bold text-gray-700">Music Infomation</h1>
      <div className="information">
        <form action="">
          <div className="mb-3 mt-3">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              className="form-input"
              placeholder="Enter name"
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="age">Age:</label>
            <input
              type="number"
              className="form-input"
              placeholder="Enter age"
              onChange={(event) => {
                setAge(event.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="country">Country:</label>
            <input
              type="text"
              className="form-input"
              placeholder="Enter country"
              onChange={(event) => {
                setCountry(event.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Position">Position:</label>
            <input
              type="text"
              className="form-input"
              placeholder="Enter Position"
              onChange={(event) => {
                setPosition(event.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Wage">Wage:</label>
            <input
              type="number"
              className="form-input"
              placeholder="Enter Wage"
              onChange={(event) => {
                setWage(event.target.value);
              }}
            />
          </div>
          <button
            class="bg-green-900 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              addEmployee();
              handleSubmit();
            }}
          >
            Add Employee
          </button>
        </form>
      </div>
      <hr />
      <div className="employee">
        <div className="employee_control">
          {employeeList.map((val, key) => {
            return (
              <div className="card_result">
                <div className="result text-left">
                  <p className="mt-2">id: {val.id}</p>
                  <p className="mt-2">Name: {val.name}</p>
                  <p className="mt-2">Age: {val.age}</p>
                  <p className="mt-2">Country: {val.country}</p>
                  <p className="mt-2">Position: {val.position}</p>
                  <p className="mt-2">Wage: {val.wage}</p>
                </div>
                <div className="d-flex">
                  <h1 className="text-xl">จัดการข้อมูล</h1>
                  <input
                    className="form-input mt-2"
                    style={{ width: "300px" }}
                    type="text"
                    placeholder="name..."
                    onChange={(event) => {
                      setNewName(event.target.value);
                    }}
                  />
                  <input
                    className="form-input mt-2"
                    style={{ width: "300px" }}
                    type="number"
                    placeholder="age..."
                    onChange={(event) => {
                      setNewAge(event.target.value);
                    }}
                  />
                  <input
                    className="form-input mt-2"
                    style={{ width: "300px" }}
                    type="text"
                    placeholder="Country..."
                    onChange={(event) => {
                      setNewCountry(event.target.value);
                    }}
                  />
                  <input
                    className="form-input mt-2"
                    style={{ width: "300px" }}
                    type="text"
                    placeholder="Position..."
                    onChange={(event) => {
                      setNewPosition(event.target.value);
                    }}
                  />
                  <input
                    className="form-input mt-2"
                    style={{ width: "300px" }}
                    type="number"
                    placeholder="Wage..."
                    onChange={(event) => {
                      setNewWage(event.target.value);
                    }}
                  />
                  <button
                    class="bg-amber-500 mt-2 m-1 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => {
                      updateEmployeeWage(val.id);
                    }}
                  >
                    Update
                  </button>
                  <button
                    class="bg-red-500 mt-2 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => {
                      handleSubmit_Delete();
                      deleteEmployee(val.id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    </>
  );
}

export default Back;
