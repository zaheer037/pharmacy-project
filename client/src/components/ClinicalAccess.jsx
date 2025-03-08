import React, { useState, useEffect } from "react";
import axios from "axios";

const ClinicalAccess = () => {
  const [clinicalData, setClinicalData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Fetch clinical data
    const fetchClinicalData = async () => {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      if (userInfo) {
        try {
          const response = await axios.get(`http://localhost:5000/api/clinical/user/${userInfo._id}`, {
            headers: {
              Authorization: `Bearer ${userInfo.token}`, // Ensure token is included
            },
          });
          setClinicalData(response.data);
        } catch (error) {
          console.error("Error fetching clinical data:", error);
        }
      };
    }
    fetchClinicalData();
  }, []);

  // Filter clinical data based on search term
  const filteredData = clinicalData.filter((entry) =>
    JSON.stringify(entry).toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <div class="group">
        <svg class="icon" aria-hidden="true" viewBox="0 0 24 24">
          <g>
            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
          </g>
        </svg>
        <input placeholder="Search" type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} class="input"/>
      </div>
      {/* Display Filtered Clinical Data */}
      <div className="mt-4">
        {filteredData.length > 0 ? (
          filteredData.map((entry, index) => (
            <div key={index} className="border p-4 mb-2 rounded-lg shadow">
              <pre className="whitespace-pre-wrap">{JSON.stringify(entry, null, 2)}</pre>
            </div>
          ))
        ) : (
          <p>No matching results found.</p>
        )}
      </div>
      <div className="container categorized mt-4" id="cart-div">
        <div className="card">
        <h3 className="text-center" style={{paddingTop:25}}>Categorized Data</h3>
          <div className="card-body bg-none">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <a href="/" className="text-decoration-none text-primary">Family history based diseases</a>
              </li>
              <li className="list-group-item">
                <a href="/" className="text-decoration-none text-primary">Drug induced diseases</a>
              </li>
              <li className="list-group-item">
                <a href="/" className="text-decoration-none text-primary">Biological markers</a>
              </li>
              <li className="list-group-item">
                <a href="/" className="text-decoration-none text-primary">Gender / age prevalence</a>
              </li>
              <li className="list-group-item">
                <a href="/" className="text-decoration-none text-primary">Cost analysis studies</a>
              </li>
              <li className="list-group-item">
                <a href="/" className="text-decoration-none text-primary">New ADR's identification</a>
              </li>
              <li className="list-group-item">
                <a href="/" className="text-decoration-none text-primary">Regional prevalence</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ClinicalAccess;
