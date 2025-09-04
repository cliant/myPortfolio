// src/pages/Projects.tsx
import React, { useState } from 'react';
import './projects.css';
import hometryImage from '../assets/projects/hometry.jpg'; 
import capstoneImage from '../assets/projects/capstone.png';
import internImage from '../assets/projects/intern.png';
import portfolioImage from '../assets/projects/portfolio.png';

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

// 프로젝트 데이터
const projectsData = [
  {
    id: 1,
    title: "네이버 클라우드 실무형 프로젝트",
    image: "https://via.placeholder.com/300x200/FF0000/FFFFFF?text=Project+1",
    description: "네이버 클라우드 환경에서 서비스 기획, 개발 및 배포를 경험한 프로젝트입니다.",
    duration: "2024.02",
    details: "네이버 클라우드 환경에서 2주간 진행된 실무형 프로젝트로, 서비스 기획부터 개발 및 배포까지 전 과정을 경험했습니다. Ncloud 인프라를 직접 활용하여 클라우드 기반의 실무 협업 경험을 쌓았습니다.",
    techStack: ["Java", "Spring Boot", "Ncloud"],
    troubleshooting: "클라우드 환경에서의 서비스 배포 및 운영 과정에서 발생할 수 있는 문제들을 해결하며 안정적인 서비스 구축을 위한 경험을 쌓았습니다.",
    role: "백엔드 개발 및 서비스 배포",
    link: "링크를 입력해주세요"
  },
  {
    id: 2,
    title: "홈트라이",
    image: hometryImage,
    description: "그룹원들과 홈트 시간을 공유하며 쉽고 꾸준한 운동 습관을 길러주는 홈트 플랫폼, 홈트라이",
    duration: "2024.09 ~ 2024.11",
    details: "카카오테크 캠퍼스에서 진행했던 프로젝트로, 홈트라이는 혼자 운동하기 어려운 이들을 위해 함께 운동하는 느낌과 동기를 제공하는 홈트 플랫폼입니다. 코로나 이후 홈트 붐이 일어났지만 집에서 혼자 운동하다 보니 동기부여가 어렵고, 쉽게 포기할 수 있습니다. 홈트라이는 이러한 문제점을 해결하고자 시작되었습니다.",
    techStack: ["Java", "Spring Boot", "Jwt", 'AWS'],
    troubleshooting: "주요 트러블슈팅 및 해결 과정을 입력해주세요.",
    role: "백엔드 API 설계 및 구현",
    link: "https://github.com/kakao-tech-campus-2nd-step3/Team17_BE"
  },
  {
    id: 3,
    title: "AI 기반 날씨 및 옷차림 추천 서비스 (캡스톤 디자인)",
    image: capstoneImage,
    description: "Google Gemini API와 OpenWeather API를 연동한 맞춤형 옷차림 추천 웹 서비스",
    duration: "2025.03 ~ 2025.06",
    details: "학과 과목 프로젝트로 진행된 캡스톤 디자인 과제로, Google Gemini API와 OpenWeather API를 연동하여 날씨 정보에 따라 적절한 옷차림을 추천해주는 AI 기반 웹 서비스를 개발했습니다. 외부 API 통신 처리, 비동기 데이터 흐름 설계, 프롬프트 엔지니어링 등 실무에 가까운 기술을 적용하여 백엔드 로직과 AI 기술을 융합하는 경험을 쌓았습니다.",
    techStack: ["Java", "Spring Boot", "Google Gemini API", "OpenWeather API"],
    troubleshooting: "외부 API 연동 시 발생한 비동기 데이터 처리 문제를 해결하고, 사용자 피드백을 반영한 AI 프롬프트 엔지니어링을 통해 추천 정확도를 높였습니다.",
    role: "백엔드 API 설계 및 외부 API 연동 개발",
    link: "https://github.com/JNU-SW-Capstone-Team11-CAPSROCK/Team11_CAPSROCK_BE, https://github.com/JNU-SW-Capstone-Team11-CAPSROCK/Team11_CAPSROCK_FE"
  },
  {
    id: 4,
    title: "수액 모니터링 데이터 분석 사이트",
    image: internImage,
    description: "수액 모니터링 기기에서 수신한 데이터를 분석하기 위한 웹사이트",
    duration: "2025.07",
    details: "React를 사용하여 프론트엔드와 백엔드를 직접 구현한 개인 포트폴리오 웹사이트입니다. 컴포넌트 기반의 UI 설계와 재사용 가능한 코드를 작성하는 방법을 익혔으며, CSS 애니메이션 효과를 적용하여 동적이고 사용자 친화적인 페이지를 구현했습니다.",
    techStack: ["React", "CSS", "Docker"],
    troubleshooting: "웹사이트 내 CSS 애니메이션 및 레이아웃 관련 문제들을 해결하며 프론트엔드 개발 역량을 강화했습니다.",
    role: "프로젝트 주도 및 백엔드 개발",
    link: "https://github.com/SSTK-INTERN/new-web-BE"
  },
  {
    id: 5,
    title: "포트폴리오 웹사이트",
    image: portfolioImage,
    description: "경력과 프로젝트를 소개하기 위한 웹사이트",
    duration: "2025.09",
    details: "React를 사용하여 프론트엔드와 백엔드를 직접 구현한 개인 포트폴리오 웹사이트입니다. 컴포넌트 기반의 UI 설계와 재사용 가능한 코드를 작성하는 방법을 익혔으며, CSS 애니메이션 효과를 적용하여 동적이고 사용자 친화적인 페이지를 구현했습니다.",
    techStack: ["React", "CSS"],
    troubleshooting: "웹사이트 내 CSS 애니메이션 및 레이아웃 관련 문제들을 해결하며 프론트엔드 개발 역량을 강화했습니다.",
    role: "프론트엔드 개발",
    link: "https://github.com/cliant/myPortfolio"
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
            <img src={(project.image)} alt={project.title} className="project-image" />
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