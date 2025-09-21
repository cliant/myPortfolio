// src/pages/About.tsx
import './About.css';

function About() {
  return (
    <main className="about-content">
      <div className="about-box">
        <div className="profile-and-experience">
          <div className="about-section profile-image-container">
            <div className="profile-image"></div>
          </div>
          <div className="about-section experience-section">
            <h2>Experiences</h2>
            <ul>
              <li>전남대학교 소프트웨어공학과 (2020.03 ~ 2026.02)</li>
              <li>카카오 테크 캠퍼스 백엔드 과정 수료 (2024.03 ~ 2024.11)</li>
              <li>(주)신성테크 학생 인턴십 참여 (2025.07)</li>
              <li>(주)인탑스테크닉 학생 인턴십 참여 (2025.09 ~ 2025.12)</li>
            </ul>
          </div>
        </div>

        <hr className="divider" />

        <div className="about-section certifications-section">
          <h2>Certifications</h2>
          <ul>
            <li>TOEIC(800, 2024.02)</li>
          </ul>
        </div>

        <hr className="divider" />

        <div className="about-section skills-section">
          <h2>Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Frontend</h3>
              <div className="badges-container">
                <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5 Badge" />
                <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3 Badge" />
                <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript Badge" />
                <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript Badge" />
                <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React Badge" />
                <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite Badge" />
              </div>
            </div>
            <div className="skill-category">
              <h3>Backend</h3>
              <div className="badges-container">
                <img src="https://img.shields.io/badge/java-007396?style=for-the-badge&logo=java&logoColor=white" alt="Java Badge" />
                <img src="https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white" alt="Spring Badge" />
                <img src="https://img.shields.io/badge/springboot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white" alt="Spring Boot Badge" />
                <img src="https://img.shields.io/badge/Spring%20Data%20JPA-6DB33F?style=for-the-badge&logo=springdata&logoColor=white" alt="Spring Data JPA Badge" />
                <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python Badge" />
                <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white" alt="JWT Badge" />
              </div>
            </div>
            <div className="skill-category">
              <h3>Database</h3>
              <div className="badges-container">
                <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL Badge" />
              </div>
            </div>
            <div className="skill-category">
              <h3>Tools & Collaboration</h3>
              <div className="badges-container">
                <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git Badge" />
                <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Badge" />
                <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" alt="Figma Badge" />
                <img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white" alt="Notion Badge" /> {/* ✅ Notion 배지 추가 */}
              </div>
            </div>
            <div className="skill-category">
              <h3>Deployment & Infrastructure</h3>
              <div className="badges-container">
                <img src="https://img.shields.io/badge/Amazon%20AWS-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white" alt="AWS Badge" />
                <img src="https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux Badge" />
                <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker Badge" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;