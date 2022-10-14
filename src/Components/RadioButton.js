import React, { useState } from "react";

import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import Data from "../data.json";

export default function RadioButton() {
    const [radioValue, setRadioValue] = useState("1");

    const radios = Data.forms;
    return (
        <React.Fragment>
            <ButtonGroup>
                {radios.map((radio, idx) => {
                    return (
                        <ToggleButton
                            key={idx}
                            id={`radio-${idx}`}
                            type="radio"
                            variant={
                                idx % 2 ? "outline-primary" : "outline-primary"
                            }
                            name="radio"
                            value={radio.contact[idx]}
                            checked={radioValue === radio.contact[idx]}
                            onChange={e => setRadioValue(e.currentTarget.value)}
                        >
                            {radio.contact[idx]}
                        </ToggleButton>
                    );
                })}
            </ButtonGroup>
        </React.Fragment>
    );
}
