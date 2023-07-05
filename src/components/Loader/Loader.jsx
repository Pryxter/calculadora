import "../../styles/Loader.css";

export const Loader = (props) => {
  const status = ["none", "flex"];
  return (
    <>
      <div className="loader" style={{ display: `${status[props.selector]}` }}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  );
};
