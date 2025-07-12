import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <div>About</div>
      <div className="flex flex-col mt-12">
        <Link to="/">Menuju Halaman Home</Link>
        <Link to="/contact">Menuju Halaman Contact</Link>
      </div>
    </>
  );
}

export default About;
