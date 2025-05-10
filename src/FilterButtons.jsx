import React from "react"

const FilterButtons = ({ filter, setFilter, counts }) => {
  return (
    <div style={{ marginBottom: "10px" }}>
      <button onClick={() => setFilter("All")}>All ({counts.all})</button>
      <button onClick={() => setFilter("Read")}>Read ({counts.read})</button>
      <button onClick={() => setFilter("Unread")}>
        Unread ({counts.unread})
      </button>
    </div>
  )
}

export default FilterButtons
