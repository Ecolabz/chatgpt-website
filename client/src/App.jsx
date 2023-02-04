import { useState } from "react";
import "./App.css";
import { useRef } from "react";
import axios from "axios";

var ans=""
function App() {
  const inputSubjectRef = useRef();
  const inputDescriptionRef = useRef();
  console.log(ans)
  // const [qna, setQna] = useState([]);
  const [loading, setLoading] = useState(false);
  // const updateQna = (value) => {
  //   setQna((qna) => [...qna, { value }]);
  // };
  const handleSend = () => {
    const subject = inputSubjectRef.current.value;
    const description = inputDescriptionRef.current.value;
    setLoading(true);
    // if(subject!="" && description!=""){
      axios
      .post("http://localhost:3000/chat", {
        subject,
        description,
      })
      .then((response) => {
        ans=response.data.answer
        console.log(ans)
        // updateQna(response.data.answer);
        // setQna(response.data.answer);
      })
      .finally(() => {
        setLoading(false);
      });
      // inputSubjectRef.current.value = ""
      // inputDescriptionRef.current.value = ""
    // }
    // else{
    //   alert("please input")
    // }
  
  };

  // const renderContent = (qna) => {
  //   const value = qna.value;
  //   // if (Array.isArray(value)) {
  //   //   return value.map((v) =>
  //   //   <pre>
  //   //   <textarea className="message-text">{v}</textarea>
  //   //   </pre>

  //   //   )};

  //   return value;
  // };
  return (
    <main class="main-container">
      <div class="chat-input">
        <input
          type="text"
          ref={inputSubjectRef}
          class="form-control col"
          placeholder="Email Subject"
        />

        <input
          type="text"
          ref={inputDescriptionRef}
          class="form-control col"
          placeholder="Email Description"
        />

        <button disabled={loading} class="btn" onClick={handleSend}>
        {/* <button class="btn" onClick={handleSend}> */}
          Generate
        </button>
      </div>

<div>
<pre>
              <textarea columns="50" rows="20">
              {ans}
              </textarea>
            </pre>

</div>
      {/* <div>
        {qna.map((qna) => {
          return (
            <pre>
              <textarea columns="50" rows="20">
                {renderContent(qna)}
              </textarea>
            </pre>
          );
        })}
      </div> */}
    </main>
  );
}

export default App;
