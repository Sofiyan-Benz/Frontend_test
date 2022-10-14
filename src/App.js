import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";

import "./App.css";
import Data from "./data.json";
import ContactForm from "./Components/ContactForm";

function App() {
    const [name, setName] = useState(" please select ... ");
    const [name2, setName2] = useState(" please select ... ");
    const [name3, setName3] = useState(" please select ... ");
    const [displayForm, setDisplayForm] = useState(false);

    function handelClick(e) {
        setDisplayForm(true);
        console.log(displayForm);
    }

    function renderform(params, select, update) {
        return (
            <div className="mb-3">
                <label
                    style={{
                        fontSize: " 1.4rem",
                        fontWeight: " bold",
                        marginBottom: "1rem "
                    }}
                >
                    {params.name}
                </label>
                <Dropdown>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                        {select}
                    </Dropdown.Toggle>
                    <Dropdown.Menu onClick={handelClick}>
                        {params.options.map((element, i) => {
                            return (
                                <Dropdown.Item
                                    key={i}
                                    href="#/action-1"
                                    onClick={() => update(element)}
                                >
                                    {element}
                                </Dropdown.Item>
                            );
                        })}
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        );
    }

    return (
        <div className="App shadow ">
            <header className="App-header">
                <h1 className="mt-3 mb-5" style={{ fontFamily: "cursive" }}>
                    Sofiane Ziri
                </h1>
            </header>
            {/* =========== Dropdown ===========*/}
            {renderform(Data.forms[0], name, setName)}
            {renderform(Data.forms[1], name2, setName2)}
            {renderform(Data.forms[2], name3, setName3)}

            {/* Form Contact */}
            {displayForm ? <ContactForm /> : null}
        </div>
    );
}

export default App;
