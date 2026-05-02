function Card({ plan, onRegister }) {
  return (
   
    <div className="card">

     {(plan.frequency || plan.price) && (
  <div className="badge">
    {plan.frequency} - ${plan.price}
  </div>
)}

      <h3>{plan.title}</h3>
      <p>{plan.subject_name}</p>

      <ul>
        <li><strong>Price:</strong> {plan.price}</li>

        <li><strong>Mode:</strong> {plan.learning_mode}</li>

        <li><strong>Day:</strong> {plan.day_of_week}</li>

        <li>
          <strong>Time:</strong> {plan.start_time} - {plan.end_time}
        </li>

        <li><strong>Start:</strong> {plan.start_date}</li>

        <li><strong>End:</strong> {plan.end_date}</li>

        <li><strong>Location:</strong> {plan.location}</li>

        <li><strong>Status:</strong> {plan.status}</li>
      </ul>

      <button
        className="btn"
        onClick={() => onRegister(plan)}
      >
        Register Interest
      </button>

    </div>
   
  );
}

export default Card;