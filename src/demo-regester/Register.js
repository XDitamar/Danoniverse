import React, { useState } from "react";
import "./Register.css";

const Register = () => {
  // State to store form input values
  const [formData, setFormData] = useState({
    productName: "",
    productType: "",
    purchaseDate: "",
    warranty: false,
    warrantyExpires: "",
    insurance: false,
    insuranceCompany: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can perform any actions to register the product insurance with the provided data.
    console.log("Form Data:", formData);
  };

  return (
    <div className="register-container">
      <h2>Product Insurance Registration</h2>
      <form onSubmit={handleSubmit}>
        {/* Add form fields for product information */}
        <div className="form-group">
          <label htmlFor="productName">Product Name:</label>
          <input
            type="text"
            id="productName"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            required
          />
        </div>
        {/* Add more form fields for product type, purchase date, warranty, insurance, etc. */}
        {/* Example for a checkbox input */}
        <div className="form-group">
          <label htmlFor="warranty">Warranty:</label>
          <input
            type="checkbox"
            id="warranty"
            name="warranty"
            checked={formData.warranty}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
