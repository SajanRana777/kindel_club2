import { useState, useEffect } from "react";
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Card from './components/temp';
import './App.css';
import Filters from './components/filters';
import Services from './components/services';
import Footer from './components/footer';
import Modal from './components/Modal';

function App() {  
  const [filter, setFilter] = useState("all");
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/exam_package")
      .then(res => res.json())
      .then(data => {

        console.log("RAW DATA:", data);

        const formatted = data.map(item => ({
          id: item.id,
          title: item.title,

          // Subject
          subject_name: item.subject_name || "No description",

          // Frequency
          frequency: item.frequency || "",

          // Price
          price: item.price,

          // Learning Mode
          learning_mode: item.learning_mode || "N/A",

          // Day & Time
          day_of_week: item.day_of_week || "N/A",
          start_time: item.start_time || "N/A",
          end_time: item.end_time || "N/A",

          // Dates (T18:30:00.000Z removed)
          start_date: item.start_date?.split("T")[0],
          end_date: item.end_date?.split("T")[0],

          // Location
          location_id: item.location_id || null,
          location: item.location || "Location not found",

          // Status
          status: item.status || "inactive"
        }));

        console.log("FORMATTED:", formatted);

        setPlans(formatted);
      })
      .catch(err => console.log("FETCH ERROR:", err));
  }, []);

  // Filter Logic
  const filteredPlans =
    filter === "all"
      ? plans
      : plans.filter(plan =>
          plan.learning_mode.toLowerCase().includes(filter)
        );

  return (
    <>
      <Navbar />
      <Banner />
      <Filters 
        filter={filter} 
        setFilter={setFilter} 
      />

      <section className="cards">
        {filteredPlans.length > 0 ? (
          filteredPlans.map((plan) => (
            <Card
              key={plan.id}
              plan={plan}
              onRegister={setSelectedPlan}
            />
          ))
        ) : (
          <p style={{ textAlign: "center" }}>
            No Data Found this time
          </p>
        )}
      </section>

      {selectedPlan && (
        <Modal
          plan={selectedPlan}
          onClose={() => setSelectedPlan(null)}
        />
      )}

      <Services />
      <Footer />
    </>
  );
}

export default App;