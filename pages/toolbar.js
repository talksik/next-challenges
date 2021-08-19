const Toolbar = () => {
  return (
    <div>
      <div style={{ width: 300, height: 300, backgroundColor: "#FFDDDD" }}>
        <h3>Block</h3>
        <button>top left</button>
        <button>top right</button>
        <button>bottom left</button>
        <button>bottom right</button>
      </div>
      <div style={{ width: 200, height: 200, backgroundColor: "#DDFFDD" }}>
        <h3>Toolbar</h3>
      </div>
    </div>
  );
};

export default Toolbar;
