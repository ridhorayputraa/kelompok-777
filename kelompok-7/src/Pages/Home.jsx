import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div>Halo ini Home</div>
      <div className="flex flex-col mt-12">
        <Link to="/about">Menuju Halaman About</Link>
        <Link to="/contact">Menuju Halaman Contact</Link>
      </div>
    </>
  );
}

export default Home;
