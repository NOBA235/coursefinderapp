
import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import CourseList from './components/CourseList';
import MotivationalQuote from './components/Randomquote';

import './App.css';

function App() {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  const defaultCourses = [
    { id: 1, name: 'React Fundamentals', category: 'Frontend', description: 'Learn React basics, hooks, and modern patterns for building user interfaces with CodeWith Harry', duration: '4 weeks', instructor: 'CodeWithHarry', price: '$89' },
    { id: 2, name: 'Advanced JavaScript', category: 'Programming', description: 'Master ES6+ features, async programming, and design patterns', duration: '6 weeks', instructor: 'CodeWithHarry', price: '$129' },
    { id: 3, name: 'Responsive Web Design', category: 'Design', description: 'Create beautiful, accessible websites that work across all devices by Apana College', duration: '3 weeks', instructor: 'Apna College', price: '$79' },
    { id: 4, name: 'Node.js Backend Development', category: 'Backend', description: 'Build scalable server applications with Node.js and Express', duration: '8 weeks', instructor: '', price: '$149' },
    { id: 5, name: 'Python for Data Science', category: 'Data Science', description: 'Data analysis, visualization, and machine learning basics', duration: '10 weeks', instructor: 'CodeWithHarry', price: '$169' },
    { id: 6, name: 'Mobile App Development', category: 'Mobile', description: 'Build cross-platform mobile apps with React Native from the best teacher Thapa Technical', duration: '7 weeks', instructor: 'Thapa Technical', price: '$139' },
    { id: 7, name: 'UI/UX Design Principles', category: 'Design', description: 'User-centered design principles and industry best practices', duration: '5 weeks', instructor: 'Jordan Lee', price: '$99' },
     { id: 10, name: 'Cybersecurity Basics', category: 'Security', description: 'Essential security concepts and threat prevention strategies', duration: '4 weeks', instructor: 'Morgan West', price: '$109' },
    
  ];

  useEffect(() => {
    setTimeout(() => {
      setCourses(defaultCourses);
      setFilteredCourses(defaultCourses);
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredCourses(courses);
    } else {
      const filtered = courses.filter(course =>
        course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCourses(filtered);
    }
  }, [searchTerm, courses]);

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <a href="/" className="logo">
            <div className="logo-icon">📚</div>
            <div>
              <div className="logo-text">CourseFinder</div>
              <div className="logo-subtitle">Professional Learning Platform</div>
            </div>
          </a>
        </div>
        <nav className='navbar'>
          <ul className='nav-links'>
            <li><a href='/'>Home</a></li>
             <li><a href='/'>Courses</a></li>
              <li><a href='/'>Popular</a></li>
          </ul>
        </nav>
      </header>

      <main className="main-content">
        <div className="search-section">
          <div className="search-header">
            <h1>Discover Your Next Course</h1>
            <p>Find professional courses taught by industry experts to advance your career</p>
          </div>
          
          <div className="search-container">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <div className="search-info">
              <span>Showing</span>
              <span className="search-count">{filteredCourses.length} courses</span>
              {searchTerm && <span>matching "{searchTerm}"</span>}
            </div>
          </div>
        </div>

        <div className="content-grid">
          <div className="courses-section">
            <div className="section-header">
              <div className="section-title">Available Courses</div>
              <div className="total-courses">{courses.length} total courses</div>
            </div>
            
            {loading ? (
              <div className="loading">
                <div className="loading-spinner"></div>
                <p>Loading courses...</p>
              </div>
            ) : filteredCourses.length > 0 ? (
              <CourseList courses={filteredCourses} />
            ) : (
              <div className="no-results">
                <h3>No courses found</h3>
                <p>Try adjusting your search terms or browse categories</p>
              </div>
            )}
          </div>

          <div className="sidebar">
            <div className="sidebar-section">
              <div className="sidebar-title">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                Daily Inspiration
              </div>
              <MotivationalQuote />
            </div>
            
            <div className="sidebar-section">
              <div className="sidebar-title">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                </svg>
                Browse Categories
              </div>
              <div className="categories-grid">
                {[...new Set(courses.map(course => course.category))].map(category => (
                  <button
                    key={category}
                    className="category-tag"
                    onClick={() => setSearchTerm(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <p>© {new Date().getFullYear()} CourseFinder. All rights reserved.</p>
          </div>
          <div className="footer-right">
            <a href="#" className="footer-link">Privacy Policy</a>
            <a href="#" className="footer-link">Terms of Service</a>
            <a href="#" className="footer-link">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
