import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      <div>Contact</div>
      <div className="flex flex-col mt-12">
        <Link to="/">Menuju Halaman home</Link>
        <Link to="/About">Menuju Halaman About</Link>
      </div>
    </>
  );
}

export default Contact;
