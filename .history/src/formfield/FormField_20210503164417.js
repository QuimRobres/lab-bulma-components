import React from "react";
import "./FormField.css";
import "bulma/css/bulma.css";
import Navbar from "../navbar/Navbar";

function FormField({firstField, secondField, firstFieldEg, secondFieldEg}) {
  return (
    <div>
      <div class="field">
        <label class="label">{firstField.label}</label>
        <div class="control">
          <input class="input" type="text" placeholder={firstFieldEg} />
        </div>
      </div>
      <div class="field">
        <label class="label">secondField</label>
        <div class="control">
          <input
            class="input"
            type="email"
            placeholder="e.g. alexsmith@gmail.com"
          />
        </div>
      </div>
    </div>
  );
}

export default FormField;