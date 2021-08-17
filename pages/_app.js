import Nav from "../components/nav/nav";
import Progression from "../components/progression/progression";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="app">
      <Nav />
      <Progression />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
