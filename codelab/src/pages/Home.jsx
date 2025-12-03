import bt from "../assets/bt.jpg";
import "../styles/home.css";

function Home() {
  return (
    <div>
      <h1>Bornholmer Tours</h1>
      <p>
        Velkommen til Bornholmer Tours – Din guide
        til Bornholms bedste outdoor oplevelser
      </p>

      <div className="bt">
                <img src={bt} alt="bt" />
              </div>

    </div>
  );
}

export default Home;
