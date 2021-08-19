const Outline = () => {
  const handleBlockClick = () => {
    console.log("Block Clicked!");
  };

  const handleCloseClick = () => {
    console.log("Close Clicked!");
  };

  const handleSubmitClick = () => {
    console.log("Submit Clicked!");
  };

  return (
    <div
      style={{ width: 300, height: 300, backgroundColor: "#FFDDDD" }}
      onClick={handleBlockClick}
    >
      <h3>Block</h3>
      <button style={{ margin: 40 }} onClick={handleCloseClick}>
        Close
      </button>
      <button style={{ margin: 40 }} onClick={handleSubmitClick}>
        Submit
      </button>
    </div>
  );
};

export default Outline;
