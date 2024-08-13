import React from 'react';
import '@/assets/css/table.css'

const UserResults = () => {
  return (
    <div className="data">
      
      {/* <p>Our top community members are already listed here. If you want to keep yourself listed just fill the form on the left side...</p> */}
      {/* <li>The First Column with (D) in the list is default user</li> */}
      <table className=''>
        <thead className='w-96'>
          <tr className='h-16'>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="name">(D) Alex</td>
            <td className="email">(D) alex@gmail.com</td>
            <td className="password">(D) *********</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserResults;
