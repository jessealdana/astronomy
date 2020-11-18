import React from "react";
import "../styles.css"
import Navigation from "../components/Navigation";
import CardForm from "../components/CardForm";
import  { saveCodex }  from "../utils/API";
import codex from "../models/Codex";
// import { List } from "../components/List";
// import {userContext} from "../utils/appContext";

// export default () => {
//   const { user } = useContext(userContext)
//   const [codex, setCodex] = useState([])

// }

const handleSubmit = codex => saveCodex(codex, codex.id)


function Contact() {

  return (
    <div className="contact">
      <Navigation />
      <div className="container">
        <div className="row" style={{marginTop: "20%"}}>
          <div className="pitch col-sm-6">
            <p>
              Thank you for your interest in and support of our program.  If you would like to contribute to the narrative, please fill out the following form with the title of the work, name of the author or authors, their school affiliation and the url of the finished piece.   
            </p>
            <p>
              If you have questions or comments please email us at: whosThat@example.com
            </p>
          </div>
          <div className="cardForm col-sm-6">
            <CardForm style={{postition: "relative", marginTop: "20vh", marginLeft: "50vw", fontSize: "24px", fontWeight: "bolder"}} 
                        Button={() => (
                          <button
                           onClick={() => handleSubmit(codex)}
                           className="btn btn-primary ml-2"
                          >
                            Submit
                          </button>
                        )}
            />

          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;