
// Home.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import dataPage from './dataPage';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter subjects based on the search query
  const filteredSubjects = dataPage.filter((subject) =>
    subject.Subject.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1 id='Subject-h1'>Subjects</h1>

      {/* Search input */}
      <input
        type="text"
        placeholder="Search subjects..."
        value={searchQuery}
        onChange={handleSearchChange}
      />

      {/* List of subjects */}
      <ul>
        {filteredSubjects.map((subject) => (
          <li key={subject.id}>
            <Link to={`/subject/${subject.id}`}>{subject.Subject}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;



