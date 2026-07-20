const projects = [
  {
    number: "01", title: "우리금융 기후포털", englishTitle: "Woori Climate Finance Portal",
    category: "금융 · 데이터 포털", accent: "green",
    period: "2024.10 — 2025.05", role: "UX/UI 기획", contribution: "기획 100%",
    summary: "복잡하고 낯선 정보를 사용자가 쉽게 찾고 이해할 수 있도록 검색과 탐색 흐름을 설계한 정보 포털입니다.",
    description: "메인 프리뷰와 검색 기능으로 사용자의 탐색을 도우며, 메인 중간에 환기형 콘텐츠를 배치함으로써 이탈률을 낮추고자 하였습니다.",
    roles: ["뉴스·리서치·마켓 등 콘텐츠 IA와 검색 플로우 설계", "화면별 와이어프레임·SB 작성 및 메인 프리뷰 기획", "디자인·개발 QA와 오픈 후 운영 이슈 개선"],
    outcomes: ["기후금융 종합정보포털 구축 및 서비스 오픈", "제목·출처·날짜 기반 상세 검색과 탐색 체계 구축", "ICT AWARD KOREA 2025 Grand Prize 부문 대상"],
    metric: "GRAND PRIZE", metricLabel: "ICT AWARD KOREA 2025",
    metricIcon: "https://minyoung-ux-portfolio.alalalsdud.chatgpt.site/awards/ict-awards.png",
    tags: ["UX FLOW", "WIREFRAME", "INTERACTION", "QA"],
    galleryCopy: "복잡한 기후금융 정보를 한눈에 이해하고, 필요한 데이터까지 자연스럽게 도달하도록 탐색 경험을 설계했습니다.",
    galleryImages: [
      { src: "https://minyoung-ux-portfolio.alalalsdud.chatgpt.site/projects/woori-climate/detail-1.jpg", alt: "우리금융 기후포털 검색 및 데이터 화면 구성", label: "SEARCH & DATA EXPERIENCE" },
      { src: "https://minyoung-ux-portfolio.alalalsdud.chatgpt.site/projects/woori-climate/detail-2.jpg", alt: "우리금융 기후포털 주요 화면 구성", label: "MAIN & CONTENT EXPERIENCE" },
    ],
    url: "https://www.climatefinance.co.kr/",
  },
  {
    number: "02", title: "바이오피던스", titleSecondLine: "대표 홈페이지 리뉴얼", englishTitle: "Biofidence Renewal",
    category: "B2B · 바이오 플랫폼", accent: "blue",
    period: "2025.08 — 2025.10", role: "UX/UI 기획 · PM", contribution: "기획 100%",
    summary: "AI 견적 문의부터 문진형 견적문의, 샘플과 방문 관리까지 이어지는 복잡한 B2B 업무를 하나의 흐름으로 재설계했습니다.",
    description: "사용자와 관리자 각각의 업무 맥락을 구분하고, 단계별 진행 상태와 다음 행동을 명확하게 보여주는 데 집중했습니다.",
    roles: ["요구사항 정의와 문진형 견적문의·방문·프로젝트 플로우 설계", "관리자 페이지·회원 권한·운영 정책 기획", "고객사 소통·일정 관리·디자인 및 개발 QA"],
    outcomes: ["문진형 견적문의·방문 신청·프로젝트 관리 기능 고도화", "계약 고객 전용 My Biofidence 서비스 구축", "관리자 운영 정책 수립 및 고객사 최종 발표 진행"],
    metric: "100%", metricLabel: "UX/UI 기획 기여도",
    tags: ["IA", "ADMIN", "POLICY", "PROJECT MANAGEMENT"],
    galleryCopy: "AI 견적 문의부터 문진형 견적문의·샘플·방문 관리까지, 사용자와 관리자의 복잡한 업무를 하나의 흐름으로 연결했습니다.",
    galleryImages: [
      { src: "https://minyoung-ux-portfolio.alalalsdud.chatgpt.site/projects/biofidence/detail-1.jpg", alt: "바이오피던스 서비스 주요 화면 구성", label: "MAIN INTERACTION" },
      { src: "https://minyoung-ux-portfolio.alalalsdud.chatgpt.site/projects/biofidence/detail-1b.jpg", alt: "바이오피던스 시설 안내 상세 화면", label: "MAIN INTERACTION" },
      { src: "https://minyoung-ux-portfolio.alalalsdud.chatgpt.site/projects/biofidence/detail-2.jpg", alt: "바이오피던스 프로젝트 진행 흐름", label: "INFORMATION ARCHITECTURE", wide: true },
      { src: "https://minyoung-ux-portfolio.alalalsdud.chatgpt.site/projects/biofidence/detail-3.jpg", alt: "바이오피던스 사용자 기능 상세", label: "ADMIN EXPERIENCE" },
      { src: "https://minyoung-ux-portfolio.alalalsdud.chatgpt.site/projects/biofidence/detail-4.jpg", alt: "바이오피던스 관리자 기능 상세", label: "ADMIN EXPERIENCE" },
    ],
    url: "https://www.biofidence.com/user/index.php",
  },
  {
    number: "03", title: "LG GEO 개선 프로젝트", englishTitle: "LG GEO Content Experience",
    category: "콘텐츠 · 커머스 UX", accent: "coral",
    period: "2026.04 — PRESENT", role: "PM · 콘텐츠 기획 · 운영", contribution: "기획·운영 100%",
    summary: "제품 탐색과 구매 결정을 돕는 콘텐츠 경험을 개선하고, 다양한 채널에서 일관되게 확장할 수 있는 구조를 만들었습니다.",
    description: "구매가이드, PDP·PLP, FAQ의 정보 구조를 고도화하고 외부 채널 리패키징까지 고려한 운영 기준을 정리했습니다.",
    roles: ["구매가이드·FAQ의 GEO 기반 콘텐츠 개선", "AI 활용 리패키징 양식과 HTML 자동화 프로세스 설계", "고객사·디자이너·퍼블리셔 조율 및 WCMS·QA 운영"],
    outcomes: ["약 1개월간 약 300건의 콘텐츠 발행 운영", "AI 활용으로 콘텐츠 제작 시간 약 60% 이상 단축", "티스토리·네이버 블로그용 리패키징 및 발행 체계 구축"],
    metric: "60%+", metricLabel: "콘텐츠 제작 시간 단축",
    tags: ["CONTENT UX", "GEO", "CMS", "OPERATIONS"],
    galleryCopy: "제품 탐색부터 구매 결정까지 필요한 정보를 더 빠르게 이해할 수 있도록, 콘텐츠 구조와 채널별 경험을 함께 개선했습니다.",
    galleryImages: [
      { src: "https://minyoung-ux-portfolio.alalalsdud.chatgpt.site/projects/lge/detail-0.jpg", alt: "LGE.COM 콘텐츠 개선 전체 화면", label: "CONTENT EXPERIENCE", wide: true },
      { src: "https://minyoung-ux-portfolio.alalalsdud.chatgpt.site/projects/lge/content-lifes-good.png", alt: "LGE.COM Life's Good 콘텐츠 상세 화면", label: "CONTENT EXPERIENCE", compact: true },
      { src: "https://minyoung-ux-portfolio.alalalsdud.chatgpt.site/projects/lge/content-stanbyme-guide.png", alt: "LGE.COM 스탠바이미 구매 가이드 상세 화면", label: "BUYING GUIDE EXPERIENCE", compact: true },
    ],
    url: "https://app.notion.com/p/3899b066f4358014b3fafc0460ba77bf?pvs=1",
  },
];

const skills = [
  { name: "PowerPoint", level: 100, icon: "P", color: "#d35230" },
  { name: "Figma", level: 80, icon: "Fi", color: "#a259ff" },
  { name: "Premiere Pro", level: 80, icon: "Pr", color: "#6c5ce7" },
  { name: "Photoshop", level: 50, icon: "Ps", color: "#087ea4" },
  { name: "After Effects", level: 30, icon: "Ae", color: "#5b55c8" },
  { name: "Jira", level: 30, icon: "J", color: "#1d7afc" },
];

const participatedProjects = [
  { year: "2024—25", title: "코오롱 코스모스", role: "예약 플로우 · 관리자 · 전체 QA", url: "https://app.notion.com/p/b139b066f435839f9e1d81418ddedbd1?pvs=1" },
  { year: "2025", title: "SENSSE × CJ 슈퍼레이스", role: "이벤트 UX · 반응형 · 관리자", url: "https://app.notion.com/p/e7b9b066f4358348acd40108dd91d0c9?pvs=1" },
  { year: "2026", title: "LGE.COM 오픈마켓 PDP", role: "정보 구조 · Summary · 플랫폼 최적화", url: "https://app.notion.com/p/8c89b066f43583ba943c0126cd988e81?pvs=1" },
  { year: "2026", title: "LGE.COM 홈스타일", role: "콘텐츠 기획 · 제품 큐레이션 · 운영", url: "https://app.notion.com/p/3899b066f435802eb2b6ea766327479f?pvs=1" },
  { year: "2025", title: "한화생명 킵어스", role: "ESG 리서치 · 콘텐츠 제안 · 현장 운영", url: "https://app.notion.com/p/3899b066f4358044bbf1e2bf7e415531?pvs=1" },
  { year: "2025", title: "롯데손해보험 AI 교육 영상", role: "시스템 리서치 · AI 나레이션 제안", url: "https://app.notion.com/p/3899b066f43580168527ff1cb2284a0d?pvs=1" },
];

const personalWorks = [
  { no: "01", title: "데일리샷 UX 리뉴얼", type: "UX RESEARCH · 60%", text: "휴리스틱 평가와 사용자 인터뷰를 기반으로 개인화 추천과 입문자 탐색 경험을 개선했습니다.", note: "학술대회 우수상 · 논문 게재", image: "https://minyoung-ux-portfolio.alalalsdud.chatgpt.site/personal/dailyshot.png", url: "https://app.notion.com/p/1e19b066f435824d8c4e812fda530756?pvs=1" },
  { no: "02", title: "트립비토즈 UX 리뉴얼", type: "UX STUDY · 60%", text: "VOC와 사용자 여정을 분석해 여행 상품 탐색부터 예약까지의 흐름을 재설계했습니다.", note: "IA · USER FLOW · PROTOTYPE", image: "https://minyoung-ux-portfolio.alalalsdud.chatgpt.site/personal/tripbtoz.png", url: "https://app.notion.com/p/2b49b066f43583949e6a0175e70c16e4?pvs=1" },
  { no: "03", title: "유미의 세포들 오프닝", type: "MOTION · 100%", text: "작품의 핵심 메시지를 중심으로 영상 흐름과 타이포그래피, 화면 전환을 설계했습니다.", note: "AFTER EFFECTS · PREMIERE", image: "https://minyoung-ux-portfolio.alalalsdud.chatgpt.site/personal/yumi-cells.png", url: "https://app.notion.com/p/0249b066f43583e398618162a17a240a?pvs=1" },
  { no: "04", title: "환경 캠페인 숏폼", type: "CONTEST · 70%", text: "미세섬유 문제를 선택형 게임 구조로 풀어 복잡한 정보를 쉽게 이해하도록 구성했습니다.", note: "CONCEPT · STORYBOARD · EDIT", image: "https://minyoung-ux-portfolio.alalalsdud.chatgpt.site/personal/environment-campaign.png", url: "https://app.notion.com/p/3bc9b066f4358264908b812147923cc6?pvs=1" },
  { no: "05", title: "간접흡연 예방 숏폼", type: "CONTEST · 70%", text: "무거운 공익 메시지의 진입 장벽을 낮추면서도 문제의 심각성을 놓치지 않도록 기획했습니다.", note: "CONTENT FLOW · STORYBOARD", image: "https://minyoung-ux-portfolio.alalalsdud.chatgpt.site/personal/smoking-campaign.png", url: "https://app.notion.com/p/e4b9b066f435829b89c7815d624f22aa?pvs=1" },
  { no: "06", title: "아동 미술 전시 영상", type: "CLIENT WORK · 100%", text: "아이들의 작품 제작 과정과 생각이 전달되도록 기획·촬영·편집 전 과정을 담당했습니다.", note: "PLAN · SHOOT · EDIT", image: "https://minyoung-ux-portfolio.alalalsdud.chatgpt.site/personal/art-exhibition.png", url: "https://app.notion.com/p/e299b066f4358335b78101b27b37ba2d?pvs=1" },
  { no: "07", title: "2024 한국감성과학회 하계학술 대회 및 논문 개제", type: "UX RESEARCH · 70%", text: "데일리샷의 사용성 이슈를 분석하고 인터뷰·여정맵을 통해 개인화 추천과 입문자 가이드를 제안했습니다.", note: "우수 포스터상 · 논문 게재", image: "https://minyoung-ux-portfolio.alalalsdud.chatgpt.site/personal/dailyshot-paper.png", url: "https://app.notion.com/p/e629b066f43583038f1d81ace1cc6b0f?pvs=1" },
  { no: "08", title: "숏폼 유형 분류 연구 논문_대학 졸업 논문", type: "RESEARCH · 100%", text: "숏폼 콘텐츠 유형에 따른 사용자 반응과 경험 차이를 조사하고 데이터를 분석해 시사점을 도출했습니다.", note: "RESEARCH DESIGN · DATA ANALYSIS", image: "https://minyoung-ux-portfolio.alalalsdud.chatgpt.site/personal/shortform-study.png", url: "https://app.notion.com/p/f9c9b066f43583b58002019e9a3558f8?pvs=1" },
];

function ProjectVisual({ accent, number }: { accent: string; number: string }) {
  if (number === "01" || number === "02" || number === "03") {
    const projectName = number === "01" ? "우리금융 기후포털" : number === "02" ? "바이오피던스" : "LGE.COM";
    const imagePath = number === "01" ? "https://minyoung-ux-portfolio.alalalsdud.chatgpt.site/projects/woori-climate/cover.jpg" : number === "02" ? "https://minyoung-ux-portfolio.alalalsdud.chatgpt.site/projects/biofidence/cover.jpg" : "https://minyoung-ux-portfolio.alalalsdud.chatgpt.site/projects/lge/cover.png";
    return (
      <figure className={`project-visual project-image-visual ${number === "03" ? "project-image-lge" : ""}`}>
        <img src={imagePath} alt={`${projectName} 대표 화면`} />
      </figure>
    );
  }

  return (
    <div className={`project-visual visual-${accent}`} aria-hidden="true">
      <div className="visual-topbar"><span /><span /><span /><b>{number}</b></div>
      {number === "01" && <div className="climate-ui"><div className="climate-copy"><i /><strong>Climate<br />Finance</strong><em /></div><div className="globe"><span className="orbit orbit-one" /><span className="orbit orbit-two" /><span className="dot dot-one" /><span className="dot dot-two" /></div></div>}
      {number === "02" && <div className="bio-ui"><div className="bio-sidebar"><i /><i /><i /><i /></div><div className="bio-main"><span className="bio-label" /><strong>Project flow</strong><div className="flow-row"><i>1</i><b /><i>2</i><b /><i>3</i></div><div className="bio-cards"><span /><span /><span /></div></div></div>}
      {number === "03" && <div className="geo-ui"><div className="geo-heading"><i /><strong>Better content,<br />better decisions.</strong></div><div className="geo-grid"><span className="geo-card large"><i /></span><span className="geo-card"><i /></span><span className="geo-card"><i /></span></div></div>}
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="페이지 맨 위로 이동">KIM MIN YOUNG PORTFOLIO<span>®</span></a>
        <nav aria-label="주요 메뉴"><a href="#projects">PROJECTS</a><a href="#experience">EXPERIENCE</a><a href="#about">ABOUT</a></nav>
        <span className="header-note">UX PLANNER · PM</span>
      </header>

      <section className="hero" id="top">
        <div className="hero-kicker"><span>SELECTED WORK</span><span>2024—2026</span></div>
        <h1><span>STABLE FLOWS,</span><span className="outline-text">BETTER EXPERIENCES.</span></h1>
        <div className="hero-bottom">
          <p>사용자 흐름부터 운영 정책까지 설계하며<br /><strong>일정 안에서 안정적인 서비스를 완성하는 기획자, 김민영입니다.</strong></p>
          <a className="round-link" href="#projects" aria-label="프로젝트 목록으로 이동"><span>VIEW<br />PROJECTS</span><b>↘</b></a>
        </div>
        <div className="hero-marquee" aria-hidden="true"><span>USER FLOW</span><i>◆</i><span>POLICY</span><i>◆</i><span>WIREFRAME</span><i>◆</i><span>QA</span></div>
      </section>

      <section className="projects-section" id="projects">
        <div className="section-heading"><p>01 — SELECTED PROJECTS</p><h2>정보 구조 설계, 스토리보드부터<br />구현까지 참여한 프로젝트</h2><span>대표 프로젝트 3개를 소개·역할·성과 기준으로 정리했습니다.</span></div>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project" key={project.number}>
              <div className="project-meta"><span>{project.number}</span><p>{project.category}</p><dl><div><dt>PERIOD</dt><dd>{project.period}</dd></div><div><dt>ROLE</dt><dd>{project.role}</dd></div><div><dt>CONTRIBUTION</dt><dd>{project.contribution}</dd></div></dl></div>
              <div className="project-intro"><p>{project.englishTitle}</p><h3>{project.title}{project.titleSecondLine && <><br />{project.titleSecondLine}</>}</h3><strong>{project.summary}</strong><p className="project-description">{project.description}</p><a className="project-link" href={project.url} target="_blank" rel="noreferrer">VIEW PROJECT ↗</a><div className="tag-list" aria-label="프로젝트 핵심 역량">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="project-metric">{project.metricIcon && <img src={project.metricIcon} alt="ICT AWARD KOREA 아이콘" />}<strong>{project.metric}</strong><span>{project.metricLabel}</span></div></div>
              <ProjectVisual accent={project.accent} number={project.number} />
              <div className="project-details"><div><h4>ROLE</h4><ul>{project.roles.map((role) => <li key={role}>{role}</li>)}</ul></div><div><h4>OUTCOME</h4><ul>{project.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}</ul></div></div>
              {project.galleryImages ? (
                <div className="artifact-area project-gallery">
                  <div className="gallery-intro"><span>PROJECT DETAILS</span><h4>{project.number === "01" ? <>복잡한 기후금융 정보를 한눈에 이해하고,<br />필요한 데이터까지 자연스럽게 도달하도록 탐색 경험을 설계했습니다.</> : project.galleryCopy}</h4><p>주요 화면을 통해 문제를 구조화하고 실제 서비스로 구현한 과정을 확인할 수 있습니다.</p></div>
                  <div className={`project-detail-images gallery-count-${project.galleryImages.length}`}>
                    {project.galleryImages.map((image, index) => (
                      <figure className={[image.wide ? "wide" : "", image.compact ? "compact" : ""].filter(Boolean).join(" ")} key={image.src}>
                        <a href={image.src} target="_blank" rel="noreferrer" aria-label={`${image.alt} 원본으로 보기`}><img src={image.src} alt={image.alt} /></a>
                        <figcaption><span>{String(index + 1).padStart(2, "0")}</span><strong>{image.label}</strong><em>VIEW ORIGINAL ↗</em></figcaption>
                      </figure>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="artifact-area">
                  <div className="artifact-heading"><h4>PLANNING DOCUMENTS</h4><p>실제 산출물 이미지가 들어갈 영역입니다.</p></div>
                  <div className="artifact-placeholders">
                    <div><span>01</span><strong>WBS / SCHEDULE</strong><em>이미지 추가 영역</em></div>
                    <div><span>02</span><strong>STORYBOARD / FLOW</strong><em>이미지 추가 영역</em></div>
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="experience-section" id="experience">
        <div className="page-title"><p>02 — SKILLS & EXPERIENCE</p><h2>도구를 다루는 것보다<br />일을 연결하는 방식</h2><span>서비스 구조를 문서로 구체화하고, 협업과 QA를 거쳐 실제 화면까지 완성합니다.</span></div>
        <div className="experience-grid">
          <div className="skill-panel">
            <div className="panel-heading"><h3>SKILLS</h3><span>NOTION PORTFOLIO DATA</span></div>
            <div className="skill-bars">{skills.map((skill) => <div className="skill-row" key={skill.name}><div><strong><i className="skill-icon" style={{ background: skill.color }}>{skill.icon}</i>{skill.name}</strong><span>{skill.level}%</span></div><i><b style={{ width: `${skill.level}%` }} /></i></div>)}</div>
            <div className="knowledge-list"><span>IA</span><span>USER FLOW</span><span>STORYBOARD</span><span>ADMIN</span><span>SERVICE POLICY</span><span>QA</span><span>DEVTOOLS</span><span>AI PROCESS</span></div>
          </div>
          <div className="participation-panel">
            <div className="panel-heading"><h3>PARTICIPATED PROJECTS</h3><span>SELECTED 06</span></div>
            <div className="compact-projects">{participatedProjects.map((item, index) => <a href={item.url} target="_blank" rel="noreferrer" key={item.title}><article><span>{String(index + 1).padStart(2, "0")}</span><div><h4>{item.title}</h4><p>{item.role}</p></div><time>{item.year}</time></article></a>)}</div>
          </div>
        </div>
      </section>

      <section className="personal-section" id="personal">
        <div className="page-title light-title"><p>03 — PERSONAL WORKS</p><h2>관찰하고 구조화해<br />경험으로 만드는 과정</h2><span>리서치부터 영상까지, 매체가 달라도 사용자가 이해하는 흐름을 먼저 고민했습니다.</span></div>
        <div className="personal-grid">{personalWorks.map((work) => <article key={work.no}><div className="work-top"><span>{work.no}</span><em>{work.type}</em></div><figure className="work-image"><img src={work.image} alt={`${work.title} 대표 이미지`} /></figure><h3>{work.title}</h3><p>{work.text}</p><a className="work-link" href={work.url} target="_blank" rel="noreferrer">VIEW PROJECT ↗</a><strong>{work.note}</strong></article>)}</div>
      </section>

      <section className="profile-section">
        <div className="page-title"><p>04 — MORE ABOUT ME</p><h2>함께 일할 때<br />기대할 수 있는 것</h2><span>SBSi 서비스 기획 직무와 연결되는 경험과 일하는 태도를 한 장에 모았습니다.</span></div>
        <div className="profile-grid">
          <div className="award-block"><h3>AWARDS</h3><ol><li><span>2025</span><strong>ICT AWARD KOREA<br />GRAND PRIZE</strong></li><li><span>2024</span><strong>한국감성과학회<br />논문 우수상</strong></li><li><span>2021</span><strong>기후시민 3.5 캠페인<br />홍보 영상 채택</strong></li></ol></div>
          <div className="promise-block"><h3>WORK PRINCIPLES</h3><ul><li><span>01</span><div><strong>안정적인 일정 관리</strong><p>지연 가능성을 먼저 파악하고 필요한 커뮤니케이션을 선제적으로 진행합니다.</p></div></li><li><span>02</span><div><strong>다양한 경우의 수</strong><p>사용자 흐름과 예외 상황을 함께 검토해 안정적인 서비스를 설계합니다.</p></div></li><li><span>03</span><div><strong>원활한 협업</strong><p>고객사·디자이너·개발자와 지속적으로 소통하며 요구사항을 구체화합니다.</p></div></li><li><span>04</span><div><strong>끝까지 책임지는 태도</strong><p>기획에서 끝내지 않고 QA와 운영 과정까지 확인해 완성도를 높입니다.</p></div></li></ul></div>
          <div className="future-block"><h3>NEXT</h3><p>앞으로 만들고 싶은 서비스</p><ul><li>사용자가 자연스럽게 이해하는 서비스</li><li>예상하지 못한 상황까지 고려한 서비스</li><li>운영하는 사람도 관리하기 편한 서비스</li><li>시간이 지나도 안정적으로 유지되는 서비스</li></ul><blockquote>기본기를 바탕으로<br /><strong>완성도를 만들어가는 기획자</strong></blockquote></div>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="section-label">05 — HOW I WORK</div>
        <div className="about-copy"><p>화려한 한 번의 아이디어보다</p><h2>모든 경우의 수를 살피고,<br />흔들리지 않는 흐름을 설계합니다.</h2></div>
        <div className="principles">
          <article><span>01</span><h3>STRUCTURE</h3><p>복잡한 요구사항을 정보 구조와 사용자 흐름으로 명확하게 정리합니다.</p></article>
          <article><span>02</span><h3>ALIGNMENT</h3><p>디자인·개발·운영의 관점을 연결해 같은 목표를 바라보게 합니다.</p></article>
          <article><span>03</span><h3>DETAIL</h3><p>예외 케이스와 구현 결과까지 꼼꼼하게 확인해 서비스의 안정성을 높입니다.</p></article>
        </div>
        <footer><div><p>UX PLANNER · PM</p><strong>KIM MIN YOUNG</strong></div><a href="#top">BACK TO TOP ↑</a><span>PORTFOLIO DRAFT © 2026</span></footer>
      </section>
    </main>
  );
}
