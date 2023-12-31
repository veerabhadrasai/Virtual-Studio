import React from 'react';
import { useParams, Link } from 'react-router-dom';
import dataPage from './dataPage';

const Semester = () => {
  const { subjectId, semester: selectedSemester } = useParams();
  const subject = dataPage.find((subject) => subject.id === parseInt(subjectId));

  if (!subject) {
    return <div>Subject not found</div>;
  }

  return (
    <div>
      <h1 id='semester-h1'>{subject.Subject}</h1> <h1 id='semester-h11'>- Semesters</h1>
      <ul>
        {Object.entries(subject.Semester).map(([semester, info]) => (
          <li key={semester}>
            <Link
              to={`/subject/${subject.id}/${semester}`}
              className={selectedSemester === semester ? 'selected' : ''}
            >
              {semester}
            </Link>
            {selectedSemester === semester && (
              <a
                href={process.env.PUBLIC_URL + info.pdfPath}
                download
                className="download-link"
              >
                Download PDF
              </a>
            )}
          </li>
        ))}
      </ul>
      <Link to='/' id='back_to'>Back to Subject</Link>
    </div>
  );
};

export default Semester;





