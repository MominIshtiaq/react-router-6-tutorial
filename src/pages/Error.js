import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="section">
      <h2>404 - Error</h2>
      <h4>Page Not Found</h4>
      <Link to="/" className="btn">
        Back Home
      </Link>
    </section>
  );
};
export default Error;
