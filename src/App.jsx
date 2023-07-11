import Content from "./component/Content";
import Footer from "./component/Footer";
import Header from "./component/Header";

const App = () => {
  return (
    <div>
      <Header title="My Simple React App" />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
