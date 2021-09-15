import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Task4() {
  // Hooks
  // - State
  const [fetchedData, setFetchedData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  // - Side effects
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => setFetchedData(res.data))
      .catch((err) => setError(err))
      .finally(() => {
        if (!error) setLoading(false);
      });
  }, [error]);
  return loading ? (
    <div>Loading..</div>
  ) : (
    <div>
      <h3>Task 4</h3>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>email</th>
            <th>address</th>
            <th>phone</th>
            <th>company</th>
          </tr>
        </thead>
        <tbody>
          {fetchedData.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
                {item.address.street},{item.address.city}
              </td>
              <td>{item.phone}</td>
              <td>{item.company.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Task4;

/* Task 4
Atkurkite lentelę, kurioje bus randama ši informacija apie vartotoją:
- name;
- email;
- address (street + city pvz.: "Kulas Light, Gwenborough");
- phone;
- company (name).

Informaciją imkite iš čia: https://jsonplaceholder.typicode.com/users

Pastaba: naudokite useState, useEffect.
*/
