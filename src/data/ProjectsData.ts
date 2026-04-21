import cloudImage from '../assets/projects/cloud.png';
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
  role: string;
  implementations: string[];
  techStack: string[];
  troubleshooting?: {
    issue: string;
    cause: string;
    solution: string;
  }[];
  link?: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "네이버 클라우드 실무형 프로젝트",
    image: cloudImage,
    description: "네이버 클라우드 플랫폼에서 직접 네트워크 인프라를 구성하고 보안 및 운영 과정을 실습한 프로젝트입니다.",
    duration: "2024.01",
    details: "2주간 진행된 네이버 클라우드 실무형 프로젝트로 클라우드 및 네트워크에 대한 이해를 넓힐 수 있었습니다. Ncloud 콘솔을 활용하여 VPC, Subnet, 보안 그룹, 로드밸런서, 오토스케일링 등을 직접 구성했습니다.",
    role: "인프라 설계 및 구축",
    implementations: [
      "VPC, Subnet, 보안 그룹, 로드밸런서, 오토스케일링 구성 및 구현",
      "아웃바운드/인바운드 규칙 설정 및 IPSec VPN, 방화벽을 통한 보안 네트워크 환경 구축",
      "네트워크 토폴로지 설계 후 직접 Ncloud 콘솔에서 구현까지 수행",
      "최종 성과 발표 최우수상 수상",
    ],
    techStack: ["Ncloud", "VPC", "Subnet", "Load Balancer", "Auto Scaling", "IPSec VPN"],
    troubleshooting: [
      {
        issue: "WAS 서버 과부하로 서비스 응답 지연",
        cause: "트래픽 증가에 따른 서버 자원 부족",
        solution: "로드밸런서 연결 및 오토스케일링 정책을 적용하여 자동으로 서버 자원을 확장하도록 구성했습니다."
      }
    ],
    link: ""
  },
  {
    id: 2,
    title: "홈트라이",
    image: hometryImage,
    description: "그룹원들과 홈트 시간을 공유하며 쉽고 꾸준한 운동 습관을 길러주는 홈트 플랫폼, 홈트라이",
    duration: "2024.09 ~ 2024.11",
    details: "카카오테크 캠퍼스에서 기획부터 배포까지 전 과정을 경험한 첫 팀 프로젝트입니다. 혼자 운동하기 어려운 이들을 위해 함께 운동하는 느낌과 동기를 제공하는 홈트 플랫폼입니다.",
    role: "백엔드 개발 — 일기, 태그, 메인 페이지 API 담당",
    implementations: [
      "일기(Diary) CRUD API 설계 및 구현, 회원 ID + 생성 일시 복합 인덱스 적용으로 조회 성능 최적화 시도",
      "태그(Tag) 관리 API 구현 및 RBAC 인증 체계 기반 SSR 관리자 페이지(태그 관리 기능) 구현",
      "Spring Security + Kakao OAuth 2.0 + JWT 인증 시스템 구현",
      "매주 전체 팀 회의 및 코드 리뷰를 통해 WebSocket + STOMP 기반 실시간 채팅 등 전체 코드베이스 이해",
    ],
    techStack: ["Java", "Spring Boot", "Spring Security", "Spring Data JPA", "JWT", "WebSocket (STOMP)", "MySQL", "AWS (EC2)"],
    troubleshooting: [
      {
        issue: "당일 운동 기록과 과거 운동 이력의 데이터 성격 차이",
        cause: "실시간으로 관리해야 하는 당일 데이터와 이력 보관용 과거 데이터를 동일 Entity에서 관리할 경우 유지보수성과 성능 모두 저하될 우려가 있었습니다.",
        solution: "ExerciseTime(실시간), ExerciseHistory(과거 데이터) Entity로 분리 후 스케줄러 기반 데이터 이동 로직 고안"
      },
      {
        issue: "인덱싱을 통한 성능 향상 시도",
        cause: "DB 조회 성능 향상을 위해 인덱스 적용을 검토했으나, 실제 대규모 트래픽에서의 효과 검증이 어려웠습니다.",
        solution: "member_id + created_at 컬럼 기준 복합 인덱스 적용. 실 검증은 k6와 JMeter와 같은 테스트 도구를 이용하여 테스트 예정"
      },
    ],
    link: "https://github.com/kakao-tech-campus-2nd-step3/Team17_BE"
  },
  {
    id: 3,
    title: "AI 기반 날씨 및 옷차림 추천 서비스 (캡스톤 디자인)",
    image: capstoneImage,
    description: "Google Gemini API와 OpenWeather API를 연동한 맞춤형 옷차림 추천 웹 서비스",
    duration: "2025.03 ~ 2025.06",
    details: "대학교 캡스톤 디자인 과제로, 백엔드 핵심 기능을 조기 완료한 후 프론트엔드 개발까지 지원하며 풀스택적 시야를 기른 프로젝트입니다.",
    role: "백엔드 개발 (날씨 API 연동, AI 체감온도 예측) 및 프론트엔드 개발 지원",
    implementations: [
      "OpenWeather API 연동 구현 — 동기 방식으로 실시간 날씨 데이터 무결성 확보",
      "Google Gemini API 연동 설계 — 전체 사용자에 대해 비동기 방식으로 체감온도 예측 로직 처리, 사용자 피드백(-10~+10) 기반 프롬프트 설계",
      "AI Response Model 코드 생성 및 데이터 추출 로직 구현",
      "인력 부족 상황에서 MVP 중심 개발 전략 수립 → 백엔드 핵심 기능 조기 완료 후 프론트엔드 미세먼지 예보 페이지 설계 및 구현 지원",
    ],
    techStack: ["Java", "Spring Boot", "Spring Security", "Spring Data JPA", "JWT", "MySQL", "React", "JavaScript", "Axios", "Google Gemini API", "OpenWeather API"],
    link: "https://github.com/orgs/JNU-SW-Capstone-Team11-CAPSROCK/repositories"
  },
  {
    id: 4,
    title: "수액 모니터링 데이터 분석 사이트",
    image: internImage,
    description: "수액 모니터링 기기에서 수신한 데이터를 분석하기 위한 웹사이트",
    duration: "2025.07",
    details: "신성테크 인턴십에서 팀장을 맡아 백엔드를 단독 개발하고 프론트엔드 2명을 리딩한 프로젝트입니다. 1일 기획, 3일 핵심 기능 개발, 2일 데이터 수집, 1일 분석 및 결과 도출의 일정으로 1주일 내 완료했습니다.",
    role: "팀장 — 백엔드 단독 개발 및 프론트엔드 2명 리딩",
    implementations: [
      "API 문서 기반 백엔드 전체 구현 — 수액 데이터 수신 엔드포인트, 분석 API 설계 및 개발",
      "기기 수신용 라우터 IP 환경에 맞춰 Docker 네트워크 설정 재구성 및 컨테이너 배포",
      "1초 단위 데이터를 10~30초 간격으로 평균화하는 알고리즘 구현 → 유속 오차율 20% 이상 감소",
      "기기 전송 주기(15s/30s/45s/60s) 조건별 데이터 수집 및 분석",
      "수집 데이터 분석을 통해 기기 흔들림 취약성 발견, 방진 구조 적용 및 재측정 로직 추가 등 개선 방향 제시",
      "프론트엔드 팀원과 일정 및 API 명세 조율, 의료 데이터 보안 규정 준수를 위한 로컬 네트워크 내 운영",
    ],
    techStack: ["Java", "Spring Boot", "Spring Data JPA", "MySQL", "Docker"],
    troubleshooting: [
      {
        issue: "기기 데이터 수신 불능 문제",
        cause: "기기 수신용 라우터 IP 환경이 아닌 다른 라우터 IP 환경에서 컨테이너를 실행하여 기기 송신 데이터를 수신하지 못함",
        solution: "잘못된 컨테이너를 종료하고 Docker 네트워크 설정을 재구성한 뒤 올바른 공유기 IP에 맞게 컨테이너를 재배포하여 정상 수신 처리"
      }
    ],
    link: "https://github.com/SSTK-INTERN/new-web-BE"
  },
  {
    id: 5,
    title: "포트폴리오 웹사이트",
    image: portfolioImage,
    description: "경력과 프로젝트를 소개하기 위한 개인 포트폴리오 웹사이트",
    duration: "2025.09",
    details: "백엔드 개발자로서 프론트엔드 인터페이스 설계 경험을 쌓기 위해 직접 기획부터 배포까지 수행한 첫 프론트엔드 프로젝트입니다.",
    role: "프론트엔드 개발 (기획 ~ 배포 전 과정)",
    implementations: [
      "프로젝트 카드 기반 레이아웃 및 모달 팝업을 통한 상세 정보 제공 구조 설계 및 구현",
      "TypeScript를 활용한 타입 안정성 확보 및 헤더 공통 컴포넌트 분리로 재사용성 향상",
      "CSS 애니메이션(slideUp, hover 효과)으로 동적이고 사용자 친화적인 페이지 구현",
      "Netlify를 통한 배포 완료 및 실제 포트폴리오로 활용 중",
    ],
    techStack: ["HTML", "CSS", "TypeScript", "React", "Vite", "Netlify"],
    troubleshooting: [
      {
        issue: "프로젝트 모달과 헤더 컴포넌트의 겹침",
        cause: "Header(absolute)와 ProjectModal(fixed)의 position 속성 차이로 인한 스택 컨텍스트 충돌",
        solution: "스택 컨텍스트 통일이 어렵다고 판단하여, 모달의 max-height를 조정해 헤더를 가리지 않는 UI적 접근 방식 선택"
      },
    ],
    link: "https://github.com/cliant/myPortfolio"
  },
];

export default projectsData;