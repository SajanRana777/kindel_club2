function Filters({ filter, setFilter }) {
  return (
   <section className="page-header">
        <div>
          <h2>Weekly Mock Exam Plans</h2>
          <p>Select your preferred learning format</p>
        </div>

        <div className="filters">
          <button
            className={filter === "all" ? "active" : ""}
            onClick={() => setFilter("all")}
          >
            All Plans
          </button>

          <button
            className={filter === "classroom" ? "active" : ""}
            onClick={() => setFilter("classroom")}
          >
            Classroom
          </button>

          <button
            className={filter === "online" ? "active" : ""}
            onClick={() => setFilter("online")}
          >
            Online
          </button>
        </div>
      </section>
  );
}

export default Filters;