import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";

import "./Join.css";

export default function SignIn() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <Fragment>
      <Container className="bodyroom">
        <div className="joinOuterContainer">
          <div className="joinInnerContainer">
            <div className="text-center ring">
              <h1 className="heading display-4">Join Team A Chat Ui</h1>

              <div className="text-center">
                <input
                  placeholder="Name"
                  className="joinInput"
                  type="text"
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              <div>
                <input
                  placeholder="Room"
                  className="joinInput mt-20"
                  type="text"
                  onChange={(event) => setRoom(event.target.value)}
                />
              </div>
              <Link
                onClick={(e) => (!name || !room ? e.preventDefault() : null)}
                to={`/chat?name=${name}&room=${room}`}
              >
                <button className={"button mt-20"} type="submit">
                  Sign In
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Fragment>
  );
}
