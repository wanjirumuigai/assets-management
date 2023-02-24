import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AssetAdd = () => {
  const navigate = useNavigate();
  const [assets, setAssets] = useState([]);
  const [formData, SetFormdata] = useState({
    assetName: "",
    assetTag: " ",
    serialNumber: "",
    model: "",
    category: "",
    status: "",
    assigned: "",
    location: "",
    purchaseCost: "",
    acquisition_date: "",
  });
  function handleChange(event) {
    let name = event.target.name;
    let value = event.target.value;
    event.preventDefault();
    SetFormdata({
      ...formData,
      [name]: value,
    });
    console.log(value, name);
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:4000/assets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => setAssets([...assets, data]));

    navigate("/");
  }

  return (
    <>
      <div class="formbold-main-wrapper">
        <div class="formbold-form-wrapper">
          <form onSubmit={handleSubmit}>
            <p onClick={() => navigate("/")}>
              <button id="close-btn">Close X</button>
            </p>
            <div class="formbold-form-title">
              <h2 class="">Add Asset Item</h2>
            </div>

            <div class="formbold-input-flex">
              <div>
                <label class="formbold-form-label">Asset Name</label>
                <input
                  type="text"
                  name="assetName"
                  onChange={handleChange}
                  value={formData.assetName}
                  class="formbold-form-input"
                />
              </div>

              <div>
                <label class="formbold-form-label">Serial Number</label>
                <input
                  type="text"
                  name="serialNumber"
                  onChange={handleChange}
                  value={formData.serialNumber}
                  class="formbold-form-input"
                />
              </div>
            </div>
            <div class="formbold-input-flex">
              <div>
                <label class="formbold-form-label">Model</label>
                <input
                  type="text"
                  name="model"
                  value={formData.model}
                  onChange={handleChange}
                  class="formbold-form-input"
                />
              </div>
              <div>
                <label class="formbold-form-label">Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  class="formbold-form-input"
                >
                  <option value="desktops">Desktops</option>
                  <option value="laptops">Laptops</option>
                  <option value="servers">Servers</option>
                  <option value="projectors">Projectors</option>
                  <option value="switches">Switches</option>
                </select>
                {/* <input
                  type="text"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  class="formbold-form-input"
                /> */}
              </div>
            </div>
            <div class="formbold-input-flex">
              <div>
                <label class="formbold-form-label">Assigned To</label>
                <input
                  type="text"
                  name="assigned"
                  value={formData.assigned}
                  onChange={handleChange}
                  class="formbold-form-input"
                />
              </div>
              <div>
                <label class="formbold-form-label">Department</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  class="formbold-form-input"
                />
              </div>
            </div>
            <div class="formbold-input-flex">
              <div>
                <label class="formbold-form-label">Status</label>
                <select
                  type="text"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  class="formbold-form-input"
                >
                  <option value="ready_to_deploy" color="green">
                    Ready for Deployment
                  </option>
                  <option value="deployed">Deployed</option>
                  <option value="obsolete" color="red">
                    Obsolete
                  </option>
                  <option value="lost">Lost</option>
                </select>
              </div>
              <div>
                <label class="formbold-form-label">Date of Acquisition</label>
                <input
                  type="date"
                  name="acquisition_date"
                  value={formData.acquisition_date}
                  onChange={handleChange}
                  class="formbold-form-input"
                />
              </div>
            </div>
            <div class="formbold-input-flex">
              <div>
                <label class="formbold-form-label">Purchase Price</label>
                <input
                  type="text"
                  name="purchaseCost"
                  value={formData.purchaseCost}
                  onChange={handleChange}
                  class="formbold-form-input"
                />
              </div>
              <div>
                <label class="formbold-form-label">Asset Tag</label>
                <input
                  type="text"
                  name="assetTag"
                  onChange={handleChange}
                  value={formData.assetTag}
                  class="formbold-form-input"
                />
              </div>
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AssetAdd;
