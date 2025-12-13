const CourseList = ({ courses }) => {
  const getCategoryColor = (category) => {
    const colors = {
      'Frontend': '#3e4949ff',
      'Backend': '#582819ff',
      'Programming': '#8b5cf6',
      'Design': '#253c4eff',
      'Data': '#3d1010ff',
      'Mobile': '#402ee4ff'
    };
    return colors[category] || '#6b7280';
  };

  return (
    <div className="course-grid">
      {courses.map(course => (
        <div key={course.id} className="course-card">
          <div className="course-image">
            <div 
              className="course-category"
              style={{ color: getCategoryColor(course.category) }}
            >
              {course.category}
            </div>
          </div>
          
          <div className="course-content">
            <div className="course-header">
              <h3 className="course-title">{course.name}</h3>
              <p className="course-description">{course.description}</p>
            </div>
            
            <div className="course-meta">
              <div className="course-duration">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                {course.duration}
              </div>
              
              <div className="course-instructor">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                {course.instructor}
              </div>
            </div>
            
            <div className="course-footer">
              <div className="course-price">{course.price}</div>
              <button className="enroll-btn">Enroll Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseList;