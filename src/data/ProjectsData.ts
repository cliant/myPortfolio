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
  isMain?: boolean;
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
    details: "2주간 진행된 네이버 클라우드 실무형 프로젝트로 클라우드 및 네트워크에 대한 이해를 넓힐 수 있었습니다. Ncloud 콘솔을 활용하여 네트워크 토폴로지 설계부터 보안 환경 구축까지 직접 수행했습니다.",
    role: "인프라 설계 및 구축",
    implementations: [
      "서비스 영역 분리와 접근 제어를 위해 VPC·Subnet을 구성하고, 트래픽 분산을 위한 로드밸런서와 Scale in-out을 위한 오토스케일링을 구성",
      "외부 위협 차단을 위해 보안 그룹·방화벽 규칙을 설계하고, 거점 간 안전한 통신을 위해 IPSec VPN 터널을 구성하여 네트워크 보안 환경 구축",
      "최종 성과 발표 최우수상 수상",
    ],
    techStack: ["Ncloud", "VPC", "Subnet", "Load Balancer", "Auto Scaling", "IPSec VPN"],
    link: ""
  },
  {
    id: 2,
    title: "홈트라이",
    image: hometryImage,
    isMain: true,
    description: "그룹원들과 홈트 시간을 공유하며 쉽고 꾸준한 운동 습관을 길러주는 홈트 플랫폼, 홈트라이",
    duration: "2024.09 ~ 2024.11 / 2026.04 ~",
    details: "카카오테크 캠퍼스에서 기획부터 배포까지 전 과정을 경험한 팀 프로젝트로, 혼자 운동하기 어려운 이들을 위해 함께 운동하는 느낌과 동기를 제공하는 홈트 플랫폼입니다. 현재 서비스 고도화를 위해 리팩토링을 진행 중입니다.",
    role: "백엔드 개발 — 메인페이지, 일기, 태그 API 및 관리자 페이지 담당",
    implementations: [
      "소셜 로그인 기반 사용자 편의를 위해 Kakao OAuth 2.0을 도입하고, 안정적인 인증·인가를 위해 Spring Security + JWT를 조합한 인증 시스템 구축",
      "그룹 간 유대감 형성을 위해 WebSocket + STOMP 프로토콜을 활용한 실시간 채팅 기능 설계",
      "에러 응답의 일관성과 프론트엔드 협업 효율을 높이기 위해 ErrorType을 Enum으로 정형화하여 도메인별 고유 에러 코드·메세지를 반환하는 커스텀 예외 처리 시스템 구현",
      "태그·상품 관리자가 필요함에 따라 별도 로그인 대신 특정 경로에서 관리자 코드 입력 시 권한을 획득하는 RBAC 기반 인증·인가 체계 설계, 데이터 정합성을 위해 CSR 대신 SSR로 관리자 페이지 구현",
      "가장 트래픽이 많을 메인페이지 응답 속도 개선을 위해 K6로 worst-case 부하 테스트(avg: 202ms) 후, 복합 인덱스 적용(avg: 71ms) → 커서 기반 페이징(avg: 48ms)으로 개선하여 평균 응답 속도 76% 향상, tail latency(p90: 309ms → 167ms)도 개선",
    ],
    techStack: ["Java", "Spring Boot", "Spring Security", "Spring Data JPA", "JWT", "WebSocket (STOMP)", "MySQL", "AWS EC2", "K6"],
    troubleshooting: [
      {
        issue: "당일 운동 기록과 과거 운동 이력의 데이터 성격 차이",
        cause: "운동이라는 공통 분모 안에서 실시간으로 갱신되는 당일 운동 데이터와 이력 보관용 과거 데이터를 동일 Entity에서 관리하면 유지보수성과 성능 모두 저하될 우려가 있었습니다.",
        solution: "운동 이름 정규화와 SoftDelete를 위한 Exercise Entity를 두고, 이를 참조하는 ExerciseTime(당일 운동)과 ExerciseHistory(과거 기록) Entity를 분리. 운동 생성 시 ExerciseTime으로 관리하다 매일 03:00 스케줄러를 통해 ExerciseHistory로 전환."
      },
      {
        issue: "커스텀 예외 처리 시스템 설계",
        cause: "프로그램 복잡도가 높아질수록 에러가 다양해지는 반면, HTTP 상태 코드만으로는 클라이언트가 에러 원인을 파악하기 어려워 사용자 서비스 고립 문제가 발생했습니다.",
        solution: "ErrorType Enum으로 에러를 정형화하고 도메인별 고유 코드·메세지를 정의한 후 에러 코드 정의서를 작성. 프론트엔드와의 협업 효율을 높이고 사용자에게 명확한 에러 안내를 제공."
      },
      {
        issue: "관리자 페이지 인증 방식 설계",
        cause: "사용자 편의를 위해 Kakao 로그인을 도입했지만, 태그·상품 관리 기능이 필요해짐에 따라 별도 관리자 로그인을 만들지, 특정 방식으로 권한을 획득할지 고민이 필요했습니다.",
        solution: "특정 경로에서 관리자 코드를 입력하면 RBAC 기반으로 관리자 권한을 획득하고 JWT에 담는 방식으로 설계. 보안과 데이터 정합성을 고려해 CSR 대신 SSR로 관리자 페이지를 구현."
      },
      {
        issue: "메인페이지 API 응답 속도 개선",
        cause: "트래픽이 가장 집중될 메인페이지 조회에서 K6 부하 테스트 결과 avg: 202ms, p90: 309ms, max: 766ms의 느린 응답과 높은 tail latency를 확인했습니다.",
        solution: "1차로 복합 인덱스(회원 ID + 생성 일시)를 적용하여 avg: 71ms로 개선, 2차로 커서 기반 페이징을 도입하여 avg: 48ms(기존 대비 24% 수준)로 단축. p90: 167ms, max: 196ms로 tail latency도 크게 개선. 현재 속도와 데이터 정합성을 고려한 L1(Caffeine) + L2(Redis) 2단계 캐싱 도입 중."
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
    details: "대학교 캡스톤 디자인 과제로, 인력 부족 상황에서 MVP 중심 전략을 수립해 백엔드 핵심 기능을 조기 완료한 후 프론트엔드 개발까지 지원하며 풀스택적 시야를 기른 프로젝트입니다.",
    role: "백엔드 개발 (날씨 API 연동, AI 체감온도 예측) 및 프론트엔드 개발 지원",
    implementations: [
      "실시간 날씨 데이터의 정확성과 시점이 중요하므로, 사용자 경험을 고려해 OpenWeather API를 동기 방식으로 연동하여 데이터 무결성 확보",
      "사용자 맞춤형 체감온도 예측을 위해 Google Gemini API를 비동기 방식으로 연동하고, 사용자 피드백(-10~+10 점수)을 반영한 프롬프트를 설계하여 개인화 예측 시스템 구현",
      "인력 부족 상황에서 MVP 중심 개발 전략 수립 → 백엔드 핵심 기능 조기 완료 후 프론트엔드 미세먼지·자외선 예보 페이지 설계 및 구현 지원, 패키지 구조 정리",
      "9주 내 날씨·미세먼지·자외선 예보, 옷차림 추천, 로그인·회원가입 등 핵심 기능 배포 완료",
    ],
    techStack: ["Java", "Spring Boot", "Spring Security", "Spring Data JPA", "JWT", "MySQL", "React", "JavaScript", "Axios", "Google Gemini API", "OpenWeather API"],
    link: "https://github.com/orgs/JNU-SW-Capstone-Team11-CAPSROCK/repositories"
  },
  {
    id: 4,
    title: "수액 모니터링 데이터 분석 플랫폼 (인턴십)",
    image: internImage,
    description: "수액 모니터링 기기에서 수신한 데이터를 분석하여 기기의 문제점을 파악하기 위한 데이터 분석 플랫폼",
    duration: "2025.07 (1주)",
    details: "신성테크 인턴십에서 팀장을 맡아 요구사항 정의부터 배포·데이터 분석까지 전 과정을 1주일 내에 완료한 프로젝트입니다.",
    role: "팀장 — 백엔드 단독 개발 및 프론트엔드 2명 리딩",
    implementations: [
      "협업 병목을 방지하기 위해 코딩 전 와이어프레임 제작과 API 문서를 먼저 작성하고, 매일 2회 회의를 주도하여 1주일 내 기획-개발-배포-데이터 수집-분석 전 과정 완료",
      "의료 데이터 보안 규정 준수를 위해 외부 서버 대신 Docker 컨테이너를 활용한 사내 로컬망 내 배포 적용",
      "수액 속도 데이터 분석 중 이상값으로 인한 데이터 오염 발견 → 원인을 센서·네트워크·알고리즘 측면에서 분석하고, 1초 단위 데이터를 구간 평균화하는 알고리즘을 설계·구현하여 오차율 20% 이상 감소 달성",
      "분석 결과를 바탕으로 흔들림 취약성을 기기 설계 문제로 판단, 방진 구조 적용·가우시안 필터 도입·재측정 로직 추가 등 하드웨어·소프트웨어 양면의 개선 방향 제시",
    ],
    techStack: ["Java", "Spring Boot", "Spring Data JPA", "MySQL", "Docker"],
    link: "https://github.com/SSTK-INTERN/new-web-BE"
  },
  {
    id: 5,
    title: "포트폴리오 웹사이트",
    image: portfolioImage,
    description: "경력과 프로젝트를 소개하기 위한 개인 포트폴리오 웹사이트",
    duration: "2025.09",
    details: "백엔드 개발자로서 사용자 관점의 인터페이스 설계 경험을 쌓기 위해 직접 기획부터 배포까지 수행한 첫 프론트엔드 프로젝트입니다.",
    role: "프론트엔드 개발 (기획 ~ 배포 전 과정)",
    implementations: [
      "정보 전달력 개선을 위해 텍스트 나열 방식 대신 프로젝트 카드 기반 레이아웃과 모달 팝업으로 상세 정보를 제공하는 구조 설계 및 구현",
      "런타임 오류를 줄이기 위해 TypeScript를 활용한 타입 안정성 확보, 헤더 공통 컴포넌트 분리로 재사용성 향상",
      "사용자 경험을 고려해 CSS 애니메이션(slideUp, hover 효과)을 적용하여 동적이고 친화적인 인터랙션 구현",
      "Netlify를 통한 배포 완료 및 실제 포트폴리오로 활용 중",
    ],
    techStack: ["HTML", "CSS", "TypeScript", "React", "Vite", "Netlify"],
    troubleshooting: [
      {
        issue: "프로젝트 모달과 헤더 컴포넌트의 겹침",
        cause: "Header(absolute)와 ProjectModal(fixed)의 position 속성이 달라 서로 다른 스택 컨텍스트가 형성되어 z-index만으로 제어가 불가능했습니다.",
        solution: "스택 컨텍스트 통일이 구조적으로 어렵다고 판단하여, 모달의 max-height를 조정해 헤더 영역을 침범하지 않는 UI 접근 방식을 선택했습니다."
      },
    ],
    link: "https://github.com/cliant/myPortfolio"
  },
];

export default projectsData;