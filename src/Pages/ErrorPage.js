import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="each-page-container">
      <h3>Something, Error Happend</h3>
      <button
        type="button"
        onClick={() => navigate("/")}
        className="each-page-container-button"
      >
        Home
      </button>
    </div>
  );
};

export default ErrorPage;