// src/pages/Projects.tsx
import React, { useState } from 'react';
import Header from '../components/Header';
import './Projects.css';

// 프로젝트 상세 내용을 보여줄 모달 컴포넌트
interface ProjectModalProps {
  project: {
    id: number;
    title: string;
    image: string;
    description: string;
    duration: string;
    details: string;
    techStack: string[];
    troubleshooting: string;
    role?: string;
    link?: string;
  };
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
        <p><strong>주요 트러블슈팅:</strong> {project.troubleshooting}</p>
        {project.role && <p><strong>담당 역할:</strong> {project.role}</p>}
        {project.link && <p><strong>링크:</strong> <a href={project.link} target="_blank" rel="noopener noreferrer">{project.link}</a></p>}
      </div>
    </div>
  );
};

// ✅ 프로젝트 데이터 (이전과 동일)
const projectsData = [
  {
    id: 1,
    title: "네이버 클라우드 실무형 프로젝트",
    image: "https://via.placeholder.com/300x200/FF0000/FFFFFF?text=Project+1",
    description: "네이버 클라우드와 관련된 프로젝트입니다. 상세 내용을 입력해주세요.",
    duration: "2024.02",
    details: "이 프로젝트에 대한 상세 내용을 입력해주세요. 여기에 상세한 내용이 길게 들어갈 수 있습니다. 이 부분은 사용자가 직접 채워 넣어야 합니다. 프로젝트의 목적, 개발 과정, 사용된 알고리즘이나 특별한 기능 구현에 대한 설명 등 다양한 내용을 자유롭게 작성할 수 있습니다.",
    techStack: ["기술", "스택"],
    troubleshooting: "주요 트러블슈팅 및 해결 과정을 입력해주세요. 예를 들어, '데이터베이스 쿼리 최적화 과정에서 N+1 문제 발생. JPA의 Fetch Join과 BatchSize를 활용하여 해결함.' 와 같이 구체적으로 작성하면 좋습니다.",
    role: "담당 역할을 입력해주세요. 예: 백엔드 API 설계 및 구현",
    link: "https://github.com/your-repo/project1"
  },
  {
    id: 2,
    title: "홈트라이",
    image: "https://via.placeholder.com/300x200/00FF00/FFFFFF?text=Project+2",
    description: "홈트라이에 대한 간단한 설명을 입력해주세요.",
    duration: "2024.09 ~ 2024.11",
    details: "이 프로젝트에 대한 상세 내용을 입력해주세요. 여기에 상세한 내용이 길게 들어갈 수 있습니다. 이 부분은 사용자가 직접 채워 넣어야 합니다.",
    techStack: ["기술", "스택"],
    troubleshooting: "주요 트러블슈팅 및 해결 과정을 입력해주세요.",
    role: "담당 역할을 입력해주세요",
    link: "링크를 입력해주세요"
  },
  {
    id: 3,
    title: "일기예보 및 맞춤 옷차림 추천 서비스(캡스톤디자인)",
    image: "https://via.placeholder.com/300x200/0000FF/FFFFFF?text=Project+3",
    description: "캡스톤디자인 프로젝트입니다. 상세 내용을 입력해주세요.",
    duration: "2025.03 ~ 2025.06",
    details: "이 프로젝트에 대한 상세 내용을 입력해주세요. 여기에 상세한 내용이 길게 들어갈 수 있습니다. 이 부분은 사용자가 직접 채워 넣어야 합니다.",
    techStack: ["기술", "스택"],
    troubleshooting: "주요 트러블슈팅 및 해결 과정을 입력해주세요.",
    role: "담당 역할을 입력해주세요",
    link: "링크를 입력해주세요"
  },
  {
    id: 4,
    title: "포트폴리오",
    image: "https://via.placeholder.com/300x200/FFFF00/000000?text=Project+4",
    description: "포트폴리오 웹사이트입니다. 상세 내용을 입력해주세요.",
    duration: "2025.09",
    details: "이 프로젝트에 대한 상세 내용을 입력해주세요. 여기에 상세한 내용이 길게 들어갈 수 있습니다. 이 부분은 사용자가 직접 채워 넣어야 합니다.",
    techStack: ["기술", "스택"],
    troubleshooting: "주요 트러블슈팅 및 해결 과정을 입력해주세요.",
    role: "담당 역할을 입력해주세요",
    link: "링크를 입력해주세요"
  },
];

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
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <button className="view-details-button">자세히 보기</button>
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