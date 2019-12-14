import React from "react";
import Header from "../src/components/header/header";

import Form from "../src/components/form/form";
import Footer from "../src/components/footer/footer";
import Carusel from "../src/components/carusel/carusel";

function App() {
  return (
    <div>
      <Header></Header>

      <Carusel></Carusel>
      <Form></Form>
      <Footer></Footer>
    </div>
  );
}

export default App;
