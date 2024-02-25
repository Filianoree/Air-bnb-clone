import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

function App() {
  const cards = data.map((info) => {
    return (
      <Card
        key={info.id}
        {...info}
        // title={info.title}
        // price={info.price}
        // img={info.coverImg}
        // rating={info.stats.rating}
        // location={info.location}
        // reviewCount={info.stats.reviewCount}
        // openSpots={info.openSpots}
      />
    );
  });

  return (
    <div>
      <NavBar />
      <Hero />
      <section className="cards-list">{cards}</section>
    </div>
  );
}

export default App;
