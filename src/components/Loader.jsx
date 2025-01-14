const Loader = () => {
  return (
    <div className="d-flex justify-content-center af-loader-div">
      <div className="spinner-border text-primary af-loader" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};
export default Loader;
