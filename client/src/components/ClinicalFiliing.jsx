import React, { useState } from 'react';
import axios from "axios"
const ClinicalFilling = () => {
  // Basic Information
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [complaints, setComplaints] = useState('');
  const [familyHistory, setFamilyHistory] = useState('');
  const [surgicalHistory, setSurgicalHistory] = useState('');
  const [diseaseDiagnosed, setDiseaseDiagnosed] = useState('');
  const [placeOfLiving, setPlaceOfLiving] = useState('');

  // Personal History
  const [occupation, setOccupation] = useState('');
  const [alcohol, setAlcohol] = useState('no');
  const [alcoholDesc, setAlcoholDesc] = useState('');
  const [smoking, setSmoking] = useState('no');
  const [smokingDesc, setSmokingDesc] = useState('');
  const [substanceAbuse, setSubstanceAbuse] = useState('no');
  const [substanceAbuseDesc, setSubstanceAbuseDesc] = useState('');
  const [allergies, setAllergies] = useState('no');
  const [allergiesDesc, setAllergiesDesc] = useState('');
  const [appetite, setAppetite] = useState('');
  const [sleep, setSleep] = useState('');
  const [bowelHabits, setBowelHabits] = useState('');

  // Past Medical History (Dynamic Table)
  const [pastMedHistory, setPastMedHistory] = useState('no');
  const [pastMedRows, setPastMedRows] = useState([]);

  const addPastMedRow = () => {
    setPastMedRows([...pastMedRows, { drug: '', dose: '' }]);
  };

  const removePastMedRow = (index) => {
    const newRows = [...pastMedRows];
    newRows.splice(index, 1);
    setPastMedRows(newRows);
  };

  const handlePastMedChange = (index, field, value) => {
    const newRows = [...pastMedRows];
    newRows[index][field] = value;
    setPastMedRows(newRows);
  };

  // Lab Profile (Dynamic Table)
  const [labProfile, setLabProfile] = useState('no');
  const [labProfileRows, setLabProfileRows] = useState([]);

  const addLabProfileRow = () => {
    setLabProfileRows([...labProfileRows, { parameter: '', value: '' }]);
  };

  const removeLabProfileRow = (index) => {
    const newRows = [...labProfileRows];
    newRows.splice(index, 1);
    setLabProfileRows(newRows);
  };

  const handleLabProfileChange = (index, field, value) => {
    const newRows = [...labProfileRows];
    newRows[index][field] = value;
    setLabProfileRows(newRows);
  };

  // Handle form submission
  // Inside your handleSubmit function:
  const handleSubmit = async (e) => {
    e.preventDefault();

    const clinicalData = {
      age,
      sex,
      height,
      weight,
      complaints,
      familyHistory,
      surgicalHistory,
      diseaseDiagnosed,
      placeOfLiving,
      personalHistory: {
        occupation,
        alcohol: alcohol === "yes" ? alcoholDesc : "no",
        smoking: smoking === "yes" ? smokingDesc : "no",
        substanceAbuse: substanceAbuse === "yes" ? substanceAbuseDesc : "no",
        allergies: allergies === "yes" ? allergiesDesc : "no",
        appetite,
        sleep,
        bowelHabits,
      },
      // Only send dynamic rows if the section is enabled (i.e. "yes")
      pastMedicalHistory: pastMedHistory === "yes" ? pastMedRows : [],
      labProfile: labProfile === "yes" ? labProfileRows : [],
    };

    console.log("Submitted Data:", clinicalData);

    try {
      // Retrieve userInfo from localStorage safely
      const storedUserInfo = localStorage.getItem("userInfo");
      if (!storedUserInfo) {
        alert("User not authenticated. Please log in again.");
        return;
      }

      const { token } = JSON.parse(storedUserInfo); // Extract token safely

      if (!token) {
        alert("Authentication token is missing. Please log in again.");
        return;
      }

      await axios.post(
        "http://localhost:5000/api/clinical/submit",
        clinicalData,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Corrected token format
            "Content-Type": "application/json", // Ensure JSON format
          },
        }
      );

      alert("Clinical data submitted successfully");
    } catch (error) {
      console.error("Submission error:", error.response?.data || error.message);
      alert("Error submitting clinical data");
    }

  };


  return (
    <div className="container">
      <h1 className="my-4">Clinical Data Filling</h1>
      
      <div className="alert alert-info" role="alert">
        <i className="fas fa-info-circle me-2"></i>
        <strong>Educational Contribution:</strong> The clinical data you submit will be shared with all registered users for educational purposes. This helps build a community learning resource for medical students and healthcare professionals.
      </div>
      
      <form onSubmit={handleSubmit}>
        {/* Basic Information */}
        <h3>Basic Information</h3>
        <div className="mb-3">
          <label className="form-label">Age:</label>
          <input
            type="number"
            className="form-control"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Sex:</label>
          <select
            className="form-select"
            value={sex}
            onChange={(e) => setSex(e.target.value)}
            required
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Height:</label>
          <input
            type="text"
            className="form-control"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Weight:</label>
          <input
            type="text"
            className="form-control"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">
            Complaints (e.g., pain, swellings, rashes, etc):
          </label>
          <textarea
            className="form-control"
            rows="3"
            value={complaints}
            onChange={(e) => setComplaints(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Family History:</label>
          <input
            type="text"
            className="form-control"
            value={familyHistory}
            onChange={(e) => setFamilyHistory(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Surgical History:</label>
          <input
            type="text"
            className="form-control"
            value={surgicalHistory}
            onChange={(e) => setSurgicalHistory(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Disease Diagnosed:</label>
          <input
            type="text"
            className="form-control"
            value={diseaseDiagnosed}
            onChange={(e) => setDiseaseDiagnosed(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Place They Live:</label>
          <input
            type="text"
            className="form-control"
            value={placeOfLiving}
            onChange={(e) => setPlaceOfLiving(e.target.value)}
          />
        </div>

        {/* Personal History */}
        <h3>Personal History</h3>
        <div className="mb-3">
          <label className="form-label">Occupation:</label>
          <input
            type="text"
            className="form-control"
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Alcohol (yes/no):</label>
          <select
            className="form-select"
            value={alcohol}
            onChange={(e) => setAlcohol(e.target.value)}
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
          {alcohol === 'yes' && (
            <div className="mt-2">
              <label className="form-label">
                Describe Alcohol consumption:
              </label>
              <input
                type="text"
                className="form-control"
                value={alcoholDesc}
                onChange={(e) => setAlcoholDesc(e.target.value)}
              />
            </div>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Smoking (yes/no):</label>
          <select
            className="form-select"
            value={smoking}
            onChange={(e) => setSmoking(e.target.value)}
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
          {smoking === 'yes' && (
            <div className="mt-2">
              <label className="form-label">Describe Smoking habit:</label>
              <input
                type="text"
                className="form-control"
                value={smokingDesc}
                onChange={(e) => setSmokingDesc(e.target.value)}
              />
            </div>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Substance Abuse (yes/no):</label>
          <select
            className="form-select"
            value={substanceAbuse}
            onChange={(e) => setSubstanceAbuse(e.target.value)}
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
          {substanceAbuse === 'yes' && (
            <div className="mt-2">
              <label className="form-label">
                Describe Substance Abuse:
              </label>
              <input
                type="text"
                className="form-control"
                value={substanceAbuseDesc}
                onChange={(e) => setSubstanceAbuseDesc(e.target.value)}
              />
            </div>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Any Allergies (yes/no):</label>
          <select
            className="form-select"
            value={allergies}
            onChange={(e) => setAllergies(e.target.value)}
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
          {allergies === 'yes' && (
            <div className="mt-2">
              <label className="form-label">Describe Allergies:</label>
              <input
                type="text"
                className="form-control"
                value={allergiesDesc}
                onChange={(e) => setAllergiesDesc(e.target.value)}
              />
            </div>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Appetite:</label>
          <input
            type="text"
            className="form-control"
            value={appetite}
            onChange={(e) => setAppetite(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Sleep:</label>
          <input
            type="text"
            className="form-control"
            value={sleep}
            onChange={(e) => setSleep(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Bowel Habits:</label>
          <input
            type="text"
            className="form-control"
            value={bowelHabits}
            onChange={(e) => setBowelHabits(e.target.value)}
          />
        </div>

        {/* Past Medical History */}
        <h3>Past Medical History</h3>
        <div className="mb-3">
          <label className="form-label">Past Medical History (yes/no):</label>
          <select
            className="form-select"
            value={pastMedHistory}
            onChange={(e) => setPastMedHistory(e.target.value)}
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
        {pastMedHistory === 'yes' && (
          <div className="mb-3">
            <button
              type="button"
              className="btn btn-secondary mb-3"
              onClick={addPastMedRow}
            >
              Add Row
            </button>
            <table className="table">
              <thead>
                <tr>
                  <th>Drug</th>
                  <th>Dose</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {pastMedRows.map((row, index) => (
                  <tr key={index}>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        value={row.drug}
                        onChange={(e) =>
                          handlePastMedChange(index, 'drug', e.target.value)
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        value={row.dose}
                        onChange={(e) =>
                          handlePastMedChange(index, 'dose', e.target.value)
                        }
                      />
                    </td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => removePastMedRow(index)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Lab Profile */}
        <h3>Lab Profile</h3>
        <div className="mb-3">
          <label className="form-label">Lab Profile (yes/no):</label>
          <select
            className="form-select"
            value={labProfile}
            onChange={(e) => setLabProfile(e.target.value)}
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
        {labProfile === 'yes' && (
          <div className="mb-3">
            <button
              type="button"
              className="btn btn-secondary mb-3"
              onClick={addLabProfileRow}
            >
              Add Row
            </button>
            <table className="table">
              <thead>
                <tr>
                  <th>Parameter</th>
                  <th>Value</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {labProfileRows.map((row, index) => (
                  <tr key={index}>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        value={row.parameter}
                        onChange={(e) =>
                          handleLabProfileChange(index, 'parameter', e.target.value)
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        value={row.value}
                        onChange={(e) =>
                          handleLabProfileChange(index, 'value', e.target.value)
                        }
                      />
                    </td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => removeLabProfileRow(index)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <button type="submit" className="btn btn-primary mb-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ClinicalFilling;
