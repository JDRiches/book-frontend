import Head from "./components/Head";

import Search from "./pages/Search";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col">
      <Head />
      <div>
        <Search />
      </div>
      <Footer />
    </div>
  );
}

export default App;
