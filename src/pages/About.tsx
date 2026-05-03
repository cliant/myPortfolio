// src/pages/About.tsx
import './About.css';

function About() {
  return (
    <main className="about-content">
      <div className="about-box">

        {/* 1. Experiences + 프로필 */}
        <div className="profile-and-experience">
          <div className="about-section profile-image-container">
            <div className="profile-image"></div>
          </div>
          <div className="about-section experience-section">
            <h2>Experiences</h2>
            <ul>
              <li>전남대학교 소프트웨어공학과 (2020.03 ~ 2026.02)</li>
              <li>정보보호 119 동아리 활동 (2020.09 ~ 2021.11)</li>
              <li>카카오 테크 캠퍼스 백엔드 과정 수료 (2024.03 ~ 2024.11)</li>
              <li>(주)신성테크 학생 인턴십 참여 (2025.07)</li>
              <li>(주)인탑스테크닉 학생 인턴십 참여 (2025.09 ~ 2025.12)</li>
            </ul>
          </div>
        </div>

        <hr className="divider" />

        {/* 2. Introduce */}
        <div className="about-section introduce-section">
          <h2>Introduce</h2>
          <p className="introduce-summary">
            "동작하는 코드"가 아닌 "설명할 수 있는 구조"를 만드는 백엔드 개발자입니다.
          </p>
          <ul className="introduce-list">
            <li>
              <span className="introduce-keyword">설계 원칙을 코드로 증명합니다</span>
              <span className="introduce-desc">
                현직 개발자와 코드 리뷰에서 "왜 이 구조가 더 나은지"를 스스로 설명할 수 있을 때까지 다시 설계하는 습관을 길렀습니다. 서비스 계층에 도메인 로직이 몰리는 구조적 문제를 발견하고 도메인 모델 패턴을 적용해 로직을 분리했으며, 인턴십에서는 1,000줄 모놀리식 코드를 Router-Controller-Service 구조로 전환했습니다.
              </span>
            </li>
            <li>
              <span className="introduce-keyword">보안은 설계 단계에서 고려합니다</span>
              <span className="introduce-desc">
                Kakao OAuth + RBAC 기반 권한 체계를 설계했고, Sql Injection를 고려해 Spring Data JPA를 선택했습니다. Axios Interceptor를 활용한 무중단 토큰 갱신으로 인증 만료 시 사용자가 서비스에서 고립되는 문제를 제거했습니다.
              </span>
            </li>
            <li>
              <span className="introduce-keyword">성능은 측정하고, 개선은 수치로 말합니다</span>
              <span className="introduce-desc">
                k6 부하 테스트로 메인페이지 응답 병목(avg 202ms)을 확인하고, 복합 인덱스와 커서 기반 페이징을 단계적으로 적용해 avg 48ms로 76% 개선했습니다. 
              </span>
            </li>
            <li>
              <span className="introduce-keyword">협업을 설계의 일부로 생각합니다</span>
              <span className="introduce-desc">
                인턴십에서 팀장으로서 와이어프레임·API 문서를 먼저 작성해 팀원 간 병목을 없애고, 1주일 내 기획-개발-배포-데이터 분석까지 완수한 경험이 있습니다. 카카오테크 캠퍼스에서는 매주 팀 전체 코드 리뷰 문화를 통해, 내 코드가 아닌 부분도 함께 이해하는 문화를 만들었습니다.
              </span>
            </li>
          </ul>
        </div>

        <hr className="divider" />

        {/* 3. Skill Set */}
        <div className="about-section skills-section">
          <h2>Skill Set</h2>
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
                <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white" alt="JWT Badge" />
              </div>
            </div>
            <div className="skill-category">
              <h3>Database</h3>
              <div className="badges-container">
                <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL Badge" />
                <img src="https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white" alt="Redis Badge" />
              </div>
            </div>
            <div className="skill-category">
              <h3>Deployment & Infrastructure</h3>
              <div className="badges-container">
                <img src="https://img.shields.io/badge/Amazon%20AWS-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white" alt="AWS Badge" />
                <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker Badge" />
                <img src="https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux Badge" />
              </div>
            </div>
            <div className="skill-category">
              <h3>Tools & Collaboration</h3>
              <div className="badges-container">
                <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git Badge" />
                <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Badge" />
                <img src="https://img.shields.io/badge/k6-7D64FF?style=for-the-badge&logo=k6&logoColor=white" alt="k6 Badge" />
                <img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white" alt="Notion Badge" />
                <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" alt="Figma Badge" />
              </div>
            </div>
          </div>
        </div>

        <hr className="divider" />

        {/* 4. Certifications */}
        <div className="about-section certifications-section">
          <h2>Certifications</h2>
          <ul>
            <li>정보처리기사 (2025.12)</li>
            <li>OPIC IH (2026.01)</li>
            <li>TOEIC 800점 (2024.02, 만료)</li>
          </ul>
        </div>

      </div>
    </main>
  );
}

export default About;
