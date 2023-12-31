import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import dataPage from './dataPage';

const PdfDownload = () => {
  const { subjectId, semester } = useParams();
  const subject = dataPage.find((subject) => subject.id === parseInt(subjectId));
  const navigate = useNavigate();

  useEffect(() => {
    if (!subject || !subject.Semester[semester]) {
      navigate('/');
    }
  }, [subject, semester, navigate]);

  if (!subject || !subject.Semester[semester]) {
    return null;
  }

  const downloadPdf = () => {
    const pdfPath = process.env.PUBLIC_URL + subject.Semester[semester].pdfPath;
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = `Subject_${subjectId}_${semester}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <h1 id='h1'>PDF for</h1>
      <h2>
        {subject.Subject} 
      </h2>
      <h2 id='semester-h2'>- {semester}</h2>
    <button onClick={downloadPdf} id='download'>
    ⬇️Download
</button> <br/>
      <Link to={`/subject/${subjectId}`} id='back_too'>Back to Semesters</Link>
    </div>
  );
};

export default PdfDownload;





