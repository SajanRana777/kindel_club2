import React from "react";

const Modal = ({  onClose, plan }) => {
  if ( !plan) return null;

  return (
    <div className="modal active" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="close-btn" onClick={onClose}>
          ×
        </span>

        <h3>Book Your Mock Exam Plan</h3>

        <div className="plan-info">
          <div>
            <p><strong>Subject:</strong> {plan.subtitle}</p>
            <p><strong>Schedule:</strong> {plan.schedule}</p>
          </div>
          <div>
            <p><strong>Frequency:</strong> Weekly</p>
            <p><strong>Price:</strong> {plan.price}</p>
          </div>
        </div>

        <form className="booking-form">
          <label>Student Name *</label>
          <input type="text" required />

          <label>Email Address *</label>
          <input type="email" required />

          <label>Phone Number *</label>
          <input type="tel" required />

          <label>Preferred Start Date *</label>
          <input type="date" required />

          <button type="submit" className="submit-btn">
            Submit Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;