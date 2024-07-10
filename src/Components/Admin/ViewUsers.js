import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewUsers() {
  const [user, setUser] = useState({
    id: "",
    name: "",
    username: "",
    email: "",
  });

  const { id } = useParams();

  const loadUser = useCallback(async () => {
    try {
      const result = await axios.get(`http://localhost:8080/api/users/${id}`);
      console.log(result.data); // Check the fetched data in console
      setUser(result.data);
    } catch (error) {
      console.error("Error fetching user data:", error); // Log any errors
    }
  }, [id]);

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  // Debugging: Check if `id` is correctly fetched
  console.log("Current ID:", id);
  // Debugging: Check if `user` state updates with fetched data
  console.log("Current User:", user);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">User Details</h2>

          <div className="card">
            <div className="card-header">
              Details of user id : {user.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Name:</b> {user.name}
                </li>
                <li className="list-group-item">
                  <b>Username:</b> {user.username}
                </li>
                <li className="list-group-item">
                  <b>Email:</b> {user.email}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to="/admin/actions">
            Back to Actions
          </Link>
        </div>
      </div>
    </div>
  );
}
