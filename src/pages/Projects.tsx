import React, { useState } from 'react';
import './Projects.css';

import projectsData from '../data/ProjectsData';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCalendarAlt, faUser } from '@fortawesome/free-solid-svg-icons';

interface ProjectModalProps {
  project: typeof projectsData[0];
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>&times;</button>

        {/* 프로젝트 제목 */}
        <h2>{project.title}</h2>

        {/* 기간 */}
        <p className="modal-duration">
          <FontAwesomeIcon icon={faCalendarAlt} /> {project.duration}
        </p>

        {/* 프로젝트 소개 */}
        <section className="modal-section">
          <h3>📋 프로젝트 소개</h3>
          <p>{project.details}</p>
        </section>

        {/* 담당 역할 */}
        <section className="modal-section">
          <h3>👤 담당 역할</h3>
          <p>{project.role}</p>
        </section>

        {/* 구현 내용 */}
        <section className="modal-section">
          <h3>🛠️ 주요 구현 내용</h3>
          <ul className="implementations-list">
            {project.implementations.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        {/* 기술 스택 */}
        <section className="modal-section">
          <h3>🗂️ 기술 스택</h3>
          <div className="tech-stack-list">
            {project.techStack.map((tech, index) => (
              <span key={index} className="tech-badge">{tech}</span>
            ))}
          </div>
        </section>

        {/* 주요 트러블슈팅 — 데이터가 있을 때만 렌더링 */}
        {project.troubleshooting && project.troubleshooting.length > 0 && (
          <section className="modal-section">
            <h3>🎯 주요 트러블슈팅</h3>
            <div className="troubleshooting-section">
              {project.troubleshooting.map((item, index) => (
                <div key={index} className="troubleshooting-item">
                  <h4>🚨 문제 {index + 1}: {item.issue}</h4>
                  <p><strong>⚠️ 원인:</strong> {item.cause}</p>
                  <p><strong>💡 해결:</strong> {item.solution}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* GitHub 링크 */}
        {project.link && (
          <section className="modal-section modal-link-section">
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="modal-github-link">
              <FontAwesomeIcon icon={faGithub} /> GitHub 바로가기
            </a>
          </section>
        )}
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);

  const openModal = (project: typeof projectsData[0]) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <main className="projects-content">
      <div className="projects-grid-container">
        {projectsData.map((project) => (
          <div key={project.id} className="project-card" onClick={() => openModal(project)}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
              <div className="top-content">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>

              <div className="bottom-content">
                <div className="project-meta">
                  <span className="duration"><FontAwesomeIcon icon={faCalendarAlt} /> {project.duration}</span>
                  <span className="role"><FontAwesomeIcon icon={faUser} /> {project.role}</span>
                </div>

                <div className="project-links" onClick={(e) => e.stopPropagation()}>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="link-icon">
                      <FontAwesomeIcon icon={faGithub} /> Github
                    </a>
                  )}
                </div>

                <button className="view-details-button">자세히 보기</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </main>
  );
};

export default Projects;
