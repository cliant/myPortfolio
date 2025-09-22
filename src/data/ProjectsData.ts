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
    image: cloudImage,
    description: "네이버 클라우드 플랫폼에서 직접 네트워크 인프라를 구성하고 보안 및 운영 과정을 실습한 프로젝트입니다.",
    duration: "2024.02",
    details: "2주간 진행된 네이버 클라우드 실무형 프로젝트로 클라우드 및 네트워크에 대한 이해를 넓힐 수 있던 프로젝트 입니다. Ncloud 콘솔을 활용하여 VPC, Subnet, 보안 그룹, 로드밸런서, 오토스케일링 등을 직접 구성했습니다. 또한 아웃바운드/인바운드 규칙을 설정하고 보안 터널(IPSec VPN)과 방화벽을 통해 안정적인 네트워크 환경을 설계하며 실무형 클라우드 경험을 쌓았습니다.",
    techStack: ["Ncloud", "VPC", "Subnet", "Load Balancer", "Auto Scaling", "IPSec VPN"],
    troubleshooting: [
      {
        issue: "외부 접속이 되지 않는 문제 발생",
        cause: "보안 그룹 및 NACL 설정에서 HTTP/HTTPS 포트 미개방",
        solution: "보안 그룹과 네트워크 ACL을 점검하고 필요한 포트를 허용하여 문제를 해결했습니다."
      },
      {
        issue: "WAS 서버 과부하로 서비스 응답 지연",
        cause: "트래픽 증가에 따른 서버 자원 부족",
        solution: "로드밸런서 연결 및 오토스케일링 정책을 적용하여 자동으로 서버 자원을 확장하도록 구성했습니다."
      }
    ],
    role: "네트워크 토폴로지 설계 및 클라우드 인프라 구축",
    link: ""
  },
  {
    id: 2,
    title: "홈트라이",
    image: hometryImage,
    description: "그룹원들과 홈트 시간을 공유하며 쉽고 꾸준한 운동 습관을 길러주는 홈트 플랫폼, 홈트라이",
    duration: "2024.09 ~ 2024.11",
    details: "카카오테크 캠퍼스에서 진행했던 프로젝트로 A to Z를 경험한 첫 프로젝트였습니다. 홈트라이는 혼자 운동하기 어려운 이들을 위해 함께 운동하는 느낌과 동기를 제공하는 홈트 플랫폼입니다.",
    techStack: ["Java", "Spring Boot", "Spring Security", "Spring Data JPA", "JWT", "WebSocket (STOMP)", "MySQL", "AWS (EC2)"],
    troubleshooting: [
      {
        issue: "당일 운동 기록과 동일 운동 기록 관리에 대한 고민",
        cause: "운동 기록에는 실시간으로 관리해야 하는 당일 데이터와 운동 이력을 담당하는 과거 데이터라는 서로 다른 성격의 데이터가 존재하였습니다. 이를 동일한 Entity에서 관리할 지에 대해 유지보수성 및 성능적 측면에서 고민하였습니다.",
        solution: "ExerciseTime(실시간), ExerciseHistory(과거 데이터) Entity로 분리 후 스케줄러 기반 데이터 이동"
      },
      {
        issue: "인덱싱을 통한 성능 향상 시도",
        cause: "DB 조회에 있어서 성능을 향상 시킬 수 있는 인덱싱을 시도를 고민하였습니다.",
        solution: "주요 테이블에 대해 member_id, isDeprecated(논리 삭제 여부) 컬럼을 기준으로 인덱스를 적용하여 조회 성능을 최적화했습니다. 다만, 실제 대규모 트래픽 환경에서 부하 테스트는 진행하지 못했으며, 추후에는 JMeter와 같은 툴을 활용하여 성능 검증까지 해보고자 합니다."
},
    ],
    role: "백엔드 API 구성, DB설계 및 CRUD 구현",
    link: "https://github.com/kakao-tech-campus-2nd-step3/Team17_BE"
  },
  {
    id: 3,
    title: "AI 기반 날씨 및 옷차림 추천 서비스 (캡스톤 디자인)",
    image: capstoneImage,
    description: "Google Gemini API와 OpenWeather API를 연동한 맞춤형 옷차림 추천 웹 서비스",
    duration: "2025.03 ~ 2025.06",
    details: "캡스톤 디자인 과제로 백엔드 구현부터 프론트엔드를 학습하고 적용해보며 풀스택적 시야를 기를 수 있었던 프로젝트 입니다. 이 서비스는 사용자에게 날씨 정보를 제공하고, AI를 활용한 체감온도 기반 맞춤 옷차림 추천을 제공하는 웹 어플리케이션입니다.",
    techStack: ["Java", "Spring Boot", "Spring Security", "Spring Data JPA", "JWT", "MySQL", "React", "JavaScript", "Axios", "Google Gemini API", "OpenWeather API"],
    troubleshooting: [
        {
          issue: "외부 API 연동 시 발생하는 동기/비동기 데이터 처리 문제",
          cause: "OpenWeather API는 실시간 날씨 데이터를 가져오는 역할로 데이터의 정확성과 시점이 중요했습니다. 반면 Google Gemini API는 일별 체감온도 예측을 위한 연산으로 실시간 데이터가 요구 되지는 않았습니다.",
          solution: "OpenWeather API 연동은 동기 방식으로 구현하여 실시간 데이터의 무결성을 확보했습니다. Google Gemini API 연동은 모든 유저에 대해 비동기 방식으로 구현하여 프로그램 효율성을 높였습니다."
        },
    ],
    role: "백엔드 API 구성, DB설계 및 CRUD 구현, 미세먼지 + 자외선 페이지 개발",
    link: "https://github.com/orgs/JNU-SW-Capstone-Team11-CAPSROCK/repositories"
  },
  {
    id: 4,
    title: "수액 모니터링 데이터 분석 사이트",
    image: internImage,
    description: "수액 모니터링 기기에서 수신한 데이터를 분석하기 위한 웹사이트",
    duration: "2025.07",
    details: "인턴십에서 진행한 프로젝트로, 팀장을 맡아 프로젝트 전반을 주도하는 경험을 할 수 있었던 프로젝트입니다. 수액 모니터링 데이터 분석 사이트는 수액 모니터링 기기에서 수신한 데이터를 분석하여 모니터링 기기의 문제점을 찾아내기 위한 사이트입니다.",
    techStack: ["Java", "Spring Boot", "Spring Data JPA", "MySQL", "Docker"],
    troubleshooting: [
        {
          issue: "기기 데이터 수신 불능 문제",
          cause: "기기 수신용 라우터 IP 환경에서 컨테이너를 실행하지 않고 다른 라우터의 IP 환경에서 컨테이너를 실행하여 기기에서 송신한 데이터를 수신하지 못함",
          solution: "잘못된 컨테이너를 종료하고, Docker 네트워크 설정을 재구성한 뒤 올바른 공유기 IP에 맞게 컨테이너를 재배포함으로써 기기 데이터가 정상적으로 수신되도록 하였습니다."
        },
        {
          issue: "유속 불안정 문제",
          cause: "수액 속도 측정 센서(로드셀 센서)의 불안정성, 수액 밸브 풀림, 네트워크 잡음 등의 이유로 수액 속도가 일정하지 않음",
          solution: "수액 모니터링 사이트에서 불안정한 데이터 수신 문제를 해결하기 위해 기기 전송 주기를 조정하고, 틱카운터 기반으로 수액 속도를 측정하도록 구현했습니다. 이를 통해 기기 전송 주기는 15s, 30s, 45s, 60s 중 45s가 가장 안정적인 유속을 측정할 수 있었습니다."
        }
    ],
    role: "백엔드 API 구성, 백엔드-기기 연결",
    link: "https://github.com/SSTK-INTERN/new-web-BE"
  },
  {
    id: 5,
    title: "포트폴리오 웹사이트",
    image: portfolioImage,
    description: "경력과 프로젝트를 소개하기 위한 웹사이트",
    duration: "2025.09",
    details: "경력과 프로젝트를 소개하기 위한 웹사이트로 첫 프론트엔드 프로젝트입니다. React를 사용하여 프론트엔드를 구현한 웹사이트로, 컴포넌트 기반의 UI 설계와 재사용 가능한 코드를 작성하는 방법을 익혔으며, CSS 애니메이션 효과를 적용하여 동적이고 사용자 친화적인 페이지를 구현했습니다.",
    techStack: ["HTML", "CSS", "TypeScript", "React", "Vite", "Netlify"],
    troubleshooting: [
      {
        issue: "프로젝트 모달과 헤더 컴포넌트의 겹침",
        cause: "Header와 ProjectModal은 각각 absolute와 fixed 속성을 사용해 서로 다른 컨텍스트가 발생. 이로 인해 ProjectModal의 높은 z-index 값이 Header보다 위에 올 수 없게 되는 문제가 발생",
        solution: "두 요소의 position 속성이 다르기 때문에 스택 컨텍스트를 통일하는 것은 어렵다고 판단했습니다. 따라서 문제를 근본적으로 해결하기보다, 모달의 max-height를 조정해 헤더를 가리지 않게 하는 UI적인 접근을 선택했습니다."
      },
    ],
    role: "프론트엔드 개발",
    link: "https://github.com/cliant/myPortfolio"
  },
];

export default projectsData;