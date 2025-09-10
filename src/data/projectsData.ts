import hometryImage from '../assets/projects/hometry.jpg';
import capstoneImage from '../assets/projects/capstone.png';
import internImage from '../assets/projects/intern.png';
import portfolioImage from '../assets/projects/portfolio.png';

export interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  duration: string;
  details: string;
  techStack: string[];
  troubleshooting: {
    issue: string;
    cause: string;
    solution: string;
  }[];
  role?: string;
  link?: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "네이버 클라우드 실무형 프로젝트",
    image: "https://via.placeholder.com/300x200/FF0000/FFFFFF?text=Project+1",
    description: "네이버 클라우드 환경에서 서비스 기획, 개발 및 배포를 경험한 프로젝트입니다.",
    duration: "2024.02",
    details: "네이버 클라우드 환경에서 2주간 진행된 실무형 프로젝트로, 서비스 기획부터 개발 및 배포까지 전 과정을 경험했습니다. Ncloud 인프라를 직접 활용하여 클라우드 기반의 실무 협업 경험을 쌓았습니다.",
    techStack: ["Java", "Spring Boot", "Ncloud"],
    troubleshooting: [
      {
        issue: "클라우드 환경에서의 서비스 배포 및 운영 과정에서 발생할 수 있는 문제",
        cause: "로컬 개발 환경과 다른 네트워크 및 보안 설정으로 인한 연결 문제",
        solution: "Ncloud의 VPC, Subnet, NACL, Security Group 설정을 검토하고, 필요한 포트와 IP를 개방하여 해결했습니다."
      },
    ],
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
    troubleshooting: [
      {
        issue: "사용자 증가에 따른 API 응답 속도 지연",
        cause: "게시물 목록 조회 시 좋아요 수를 실시간으로 계산하는 N+1 쿼리 발생",
        solution: "Redis를 활용해 좋아요 수를 캐싱하고, 캐시에서 값을 가져오는 방식으로 로직을 변경하여 응답 속도를 개선했습니다."
      },
      {
        issue: "배포 후 프로필 이미지가 보이지 않는 문제",
        cause: "로컬 파일 경로가 배포 환경(AWS S3)에서 유효하지 않음",
        solution: "사용자가 이미지를 업로드하면 S3에 저장하고, DB에는 S3 URL을 저장하여 클라이언트가 직접 S3로부터 이미지를 불러오도록 수정했습니다."
      },
    ],
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
    troubleshooting: [
        {
          issue: "외부 API 연동 시 발생하는 비동기 데이터 처리 문제",
          cause: "순차적으로 API를 호출해야 하지만 비동기 처리 과정에서 순서가 꼬이는 문제 발생",
          solution: "Java의 `CompletableFuture`를 사용하여 비동기 호출을 순차적으로 체이닝하여 의도한 대로 데이터 흐름을 제어했습니다."
        },
        {
          issue: "AI 추천 결과의 정확도 문제",
          cause: "초기 프롬프트가 모호하여 일관되지 않은 답변을 생성함",
          solution: "사용자 피드백을 반영하여 날씨, 온도, 계절별 키워드를 포함한 구체적인 프롬프트 템플릿을 설계하여 추천 정확도를 높였습니다."
        },
    ],
    role: "백엔드 API 설계 및 외부 API 연동 개발",
    link: "https://github.com/orgs/JNU-SW-Capstone-Team11-CAPSROCK/repositories"
  },
  {
    id: 4,
    title: "수액 모니터링 데이터 분석 사이트",
    image: internImage,
    description: "수액 모니터링 기기에서 수신한 데이터를 분석하기 위한 웹사이트",
    duration: "2025.07",
    details: "React를 사용하여 프론트엔드와 백엔드를 직접 구현한 개인 포트폴리오 웹사이트입니다. 컴포넌트 기반의 UI 설계와 재사용 가능한 코드를 작성하는 방법을 익혔으며, CSS 애니메이션 효과를 적용하여 동적이고 사용자 친화적인 페이지를 구현했습니다.",
    techStack: ["React", "CSS", "Docker"],
    troubleshooting: [
        {
          issue: "데이터 시각화 라이브러리 연동 문제",
          cause: "서버에서 받은 데이터 형식이 차트 라이브러리가 요구하는 형식과 불일치",
          solution: "데이터를 컴포넌트로 전달하기 전, 필요한 형식으로 가공하는 유틸리티 함수를 만들어 데이터 전처리 과정을 분리했습니다."
        },
        {
          issue: "Docker 환경에서 DB 연결 실패",
          cause: "컨테이너 간 네트워크 설정 문제로, 웹 컨테이너가 DB 컨테이너에 접근할 수 없었음",
          solution: "Docker Compose를 사용하여 컨테이너를 관리하고, 동일한 네트워크 브릿지에 두 컨테이너를 연결하여 통신 문제를 해결했습니다."
        }
    ],
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
    troubleshooting: [
      {
        issue: "반응형 웹 디자인에서의 레이아웃 깨짐",
        cause: "고정된 px 값을 사용하여 모바일 기기에서 요소들이 겹치거나 잘림",
        solution: "CSS Grid와 Flexbox를 활용하고, @media 쿼리를 사용해 화면 크기에 따라 레이아웃이 유동적으로 변경되도록 조정했습니다."
      },
    ],
    role: "프론트엔드 개발",
    link: "https://github.com/cliant/myPortfolio"
  },
];

export default projectsData;