import React, { useState } from 'react'
import { Form, Table } from 'react-bootstrap'

export default function Ex() {

 const [selectedOption, setSelectedOption] = useState('');

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
       <Table striped>
      <thead>
        <tr>
          <th>NDT</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td> 
            <select className='mt-2' value={selectedOption} onChange={handleDropdownChange}>
              <option value="">Select an option</option>
              <option value="Option 1">DP Test</option>
              <option value="Option 2">Leak</option>
              <option value="Option 3">Pressure</option>
            </select>
          </td>
          <td><Form.Control type="text" /></td>
        </tr>
        {/* Add more rows as needed */}
      </tbody>
    </Table>
    </div>
  )
}
