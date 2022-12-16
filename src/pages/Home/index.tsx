import React from "react";
import FormComponent from "../../components/Form";

function Home() {
  return (
    <main>
      <h1>Do you want to get new talent?</h1>
      <h3>We've got the best devs for you.</h3>
      <p>You can filter devs by these categories: </p>

      <FormComponent />
    </main>
  );
}

export default Home;
