import React, { useState } from 'react';
import './Projects.css';

import projectsData from '../data/projectsData';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCalendarAlt, faUser } from '@fortawesome/free-solid-svg-icons';

interface ProjectModalProps {
  project: typeof projectsData[0]; // import 한 데이터 타입 사용
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>&times;</button>
        <h2>{project.title}</h2>
        <p><strong>기간:</strong> {project.duration}</p>
        <p><strong>프로젝트 내용:</strong> {project.details}</p>
        <p><strong>사용한 기술 스택:</strong> {project.techStack.join(', ')}</p>

        <h3>주요 트러블슈팅</h3>
        <div className="troubleshooting-section">
          {project.troubleshooting.map((item, index) => (
            <div key={index} className="troubleshooting-item">
              <h4>문제 {index + 1}: {item.issue}</h4>
              <p><strong>원인:</strong> {item.cause}</p>
              <p><strong>해결:</strong> {item.solution}</p>
            </div>
          ))}
        </div>

        {project.role && <p><strong>담당 역할:</strong> {project.role}</p>}
        {project.link && <p><strong>링크:</strong> <a href={project.link} target="_blank" rel="noopener noreferrer">{project.link}</a></p>}
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
            <img src={(project.image)} alt={project.title} className="project-image" />
            <div className="project-info">
              <div className="top-content">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
              
              <div className="bottom-content">
                <div className="project-meta">
                  <span className="duration"><FontAwesomeIcon icon={faCalendarAlt} /> {project.duration}</span>
                  <span className="role"><FontAwesomeIcon icon={faUser} /> {project.role || '역할 정보 없음'}</span>
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