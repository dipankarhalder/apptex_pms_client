export const DataCard = ({ data, fields, actions }) => {
  return (
    <div
      className="card"
      style={{ padding: "10px", border: "1px solid #ddd", margin: "10px" }}
    >
      <div className="card-content">
        {Object.keys(fields).map((key) => (
          <p key={key}>
            <strong>{fields[key]}:</strong> {data[key]}
          </p>
        ))}
      </div>
      <div className="actions">
        <button onClick={() => actions.onEdit(data)}>Edit</button>
        <button onClick={() => actions.onDelete(data)}>Delete</button>
        <button
          onClick={() =>
            actions.onToggleStatus(
              data,
              data["status"] === "active" ? "inactive" : "active",
            )
          }
        >
          {data["status"] === "active" ? "Deactivate" : "Activate"}
        </button>
      </div>
    </div>
  );
};
