import "./App.css";
import "./assets/sass/styles.css";
import axios from "axios";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { useRef, useState } from "react";

function App() {
  const inputSubjectRef = useRef();
  const inputDescriptionRef = useRef();

  const [loading, setLoading] = useState(false);
  const handleSend = () => {
    const subject = inputSubjectRef.current.value;
    const description = inputDescriptionRef.current.value;
    setLoading(true);

    
    if(subject!="" && description!=""){
    axios
      .post("http://localhost:3000/chat", {
        subject,
        description,
      })
      .then((response) => {
        ans = response.data.answer;
        console.log(ans);
        document.getElementById("myTextarea").value = ans;
      })
      .finally(() => {
        setLoading(false);
      });
    }
  };

  return (
    <>
      <NavBar></NavBar>

      <main class="main-container">
        <div class="chat-input">
          <input
            type="text"
            ref={inputSubjectRef}
            class="form-control col"
            placeholder="Email Subject"
            required
          />

          <input
            type="text"
            ref={inputDescriptionRef}
            class="form-control col"
            placeholder="Email Description"
            required
          />

          <button disabled={loading} class="btn" onClick={handleSend}>
            {/* <button class="btn" onClick={handleSend}> */}
            Generate
          </button>
        </div>

        <div>
          <pre>
            <textarea id="myTextarea" columns="50" rows="15">
              {/* {ans} */}
            </textarea>
          </pre>
        </div>
      </main>

      <Footer></Footer>
    </>
  );
}

export default App;
