import React, { useState } from 'react';

function CheckboxExample() {
  const [checkbox, setcheckbox] = useState(false);

  function visualizarCheckbox(event) {
    setcheckbox(event.target.checkbox);
  }

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checkbox={checkbox}
          onChange={visualizarCheckbox}
        />
        Checkbox Example
      </label>
    </div>
  );
}

export default CheckboxExample;