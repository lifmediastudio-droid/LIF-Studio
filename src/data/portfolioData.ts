export interface CaseStudy {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: 'Paid Media' | 'Brand Strategy' | 'Creative & CRO';
  categoryLabel: string;
  summary: string;
  thumbnail: string;
  isFeatured?: boolean;
  isConcept: boolean;
  challenge: string;
  targetAudience: string;
  insight: string;
  strategy: string;
  creativeDirection: string;
  executionPlan: string[];
  measurementFramework: string[];
  projectedMetrics: { label: string; value: string; context: string }[];
  lessonsLearned: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  summary: string;
  deliverables: string[];
  methodology: string;
  idealFor: string;
}

export interface CapabilityItem {
  number: string;
  title: string;
  description: string;
  focus: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  summary: string;
  deliverables: string;
}

export const CAPABILITIES: CapabilityItem[] = [
  {
    number: '01',
    title: 'Performance',
    description: 'Campaigns designed around measurable outcomes, structured audience cohorts, and conversion velocity.',
    focus: 'Paid Acquisition & CAC Efficiency'
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'Clear market positioning, competitive whitespace research, and unified full-funnel growth planning.',
    focus: 'Market Positioning & Architecture'
  },
  {
    number: '03',
    title: 'Creativity',
    description: 'High-retention campaign concepts, compelling editorial copy, narrative hooks, and emotional hooks.',
    focus: 'Ad Concepts & Campaign Storytelling'
  },
  {
    number: '04',
    title: 'Growth',
    description: 'Continuous split-testing, behavioral analytics, conversion rate optimization, and feedback loops.',
    focus: 'Testing Systems & CRO Velocity'
  }
];

export const PROJECTS: CaseStudy[] = [
  {
    id: 'kinetic-pulse',
    number: '01',
    title: 'Kinetic Pulse: Paid Media Scale Architecture',
    subtitle: 'Paid Media / Campaign Strategy',
    category: 'Paid Media',
    categoryLabel: 'Paid Media & Acquisition',
    summary: 'A multi-channel performance engine structured around modular creative variants, audience intent layering, and automated budget allocation.',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    isFeatured: true,
    isConcept: true,
    challenge: 'A modern fitness-tech brand suffered from high customer acquisition costs ($140+ CPA) driven by creative fatigue and broad audience dilution across Meta and Google Ads.',
    targetAudience: 'Urban performance athletes and high-income remote professionals (ages 26–42) valuing biometric precision over generic wellness hype.',
    insight: 'Audiences tune out generic product spec sheets. However, showing real-time biometric decision states ("How your recovery score decides your morning workout") triggered 3.4x longer thumb-stop time in pilot testing.',
    strategy: 'Shift from static demographic targeting to intent-based narrative funnels. Split ad variants into 3 thematic vectors: Proof (biometric validation), Identity (elite routine), and Friction-Removal (seamless trial guarantee).',
    creativeDirection: 'Dark-mode biometric dashboards paired with high-contrast macro cinematography of active training environments. Minimalist typography and bold data callouts.',
    executionPlan: [
      'Engineered 24 modular hook-body-CTA video variants for Meta Reels and TikTok.',
      'Restructured Google Search into high-intent competitor capture & exact-match problem solving.',
      'Implemented server-side Conversions API (CAPI) with offline value tracking for clean attribution.',
      'Instituted an iterative 7-day creative testing matrix to cut losing assets within 48 hours.'
    ],
    measurementFramework: [
      'Primary: Blended Customer Acquisition Cost (eCPA) & First-Order ROAS.',
      'Secondary: Hook Rate (3s video view %) and Click-to-Checkout conversion efficiency.',
      'Guardrail: 30-day refund rate and subscriber retention cohorts.'
    ],
    projectedMetrics: [
      { label: 'Target CAC Reduction', value: '-34%', context: 'Modeled based on creative fatigue mitigation' },
      { label: 'Hook-Stop Rate', value: '41.8%', context: 'First 3-second retention on short-form video' },
      { label: 'Variant Velocity', value: '18 / mo', context: 'Modular creative testing sprint capacity' }
    ],
    lessonsLearned: 'Audience targeting has become largely automated by algorithmic platforms; true performance leverage now lives almost entirely inside creative strategy and hook diversity.'
  },
  {
    id: 'vesper-atelier',
    number: '02',
    title: 'Vesper Atelier: Editorial Brand Repositioning',
    subtitle: 'Brand Strategy & Narrative Architecture',
    category: 'Brand Strategy',
    categoryLabel: 'Brand Strategy & Identity',
    summary: 'Positioning a direct-to-consumer sustainable luxury brand in a crowded market through quiet-luxury editorial storytelling and high-contrast design.',
    thumbnail: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1200&q=80',
    isFeatured: false,
    isConcept: true,
    challenge: 'The brand was viewed as another generic ethical apparel label with commodity pricing and zero emotional defensibility against fast-fashion competitors.',
    targetAudience: 'Conscious cultural consumers who reject loud greenwashed branding and seek understated architectural apparel with authentic provenance.',
    insight: 'Modern consumers do not buy sustainability as a guilt trip; they buy exceptional craftsmanship that happens to be responsibly made.',
    strategy: 'Reposition Vesper from "eco-friendly basics" to "architectural tailoring for the modern nomad". Introduce an editorial house manifesto and replace standard catalog photography with cinematic monographs.',
    creativeDirection: 'Brutalist typography meets quiet editorial warmth. Monochrome studio palettes, micro-textured paper packaging, and long-form thought-leadership pieces.',
    executionPlan: [
      'Developed comprehensive Brand Manifesto, Tone of Voice Guidelines, and Messaging Pillars.',
      'Constructed competitive whitespace matrix against 12 incumbent direct-to-consumer labels.',
      'Authored customer journey copywriting across homepage, product pages, unboxing cards, and email flows.',
      'Designed limited-edition drop strategy to establish scarcity and community anticipation.'
    ],
    measurementFramework: [
      'Primary: Average Order Value (AOV) and Organic Direct Brand Search Volume.',
      'Secondary: Customer Lifetime Value (LTV) at 90 days and full-price sell-through rate.',
      'Brand Health: Unsolicited press mentions and organic customer unboxing share rate.'
    ],
    projectedMetrics: [
      { label: 'Projected AOV Lift', value: '+42%', context: 'Premium price-tier acceptance via luxury positioning' },
      { label: 'Email Repeat Rate', value: '28%', context: 'Post-purchase editorial narrative engagement' },
      { label: 'Unboxing Share Rate', value: '14%', context: 'Social organic customer amplification' }
    ],
    lessonsLearned: 'Brand equity and performance marketing are not opposites: strong brand positioning drastically reduces customer price sensitivity and halves paid CAC.'
  },
  {
    id: 'zero-gravitas',
    number: '03',
    title: 'Zero Gravitas: High-Velocity Creative Ad Campaign',
    subtitle: 'Creative Strategy / Advertising',
    category: 'Creative & CRO',
    categoryLabel: 'Creative Strategy & Production',
    summary: 'An irreverent, high-contrast digital ad campaign turning complex functional beverage science into thumb-stopping 15-second cultural moments.',
    thumbnail: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80',
    isFeatured: false,
    isConcept: true,
    challenge: 'Functional beverages struggle with dry scientific claims (adaptogens, nootropics) that fail to spark visceral interest in fast-scrolling mobile feeds.',
    targetAudience: 'Knowledge workers, founders, and creators suffering from caffeine crashes and mid-afternoon cognitive slumps.',
    insight: 'People don’t want a lecture on neurochemistry; they want their 3:00 PM brain fog erased without jitters or palpitations.',
    strategy: 'Create a conceptual campaign contrasting the chaotic "Caffeine Death Spiral" with the serene "Zero Gravitas State". Use dry humor, striking audio design, and bold typography.',
    creativeDirection: 'Vibrant surrealism, retro-futuristic laboratory mockups, neon split-screens, and kinetic typography synced to punchy lo-fi soundscapes.',
    executionPlan: [
      'Scripted and storyboarded 8 unique concept tracks (Humor, Shock, Peer Comparison, Scientific Roast).',
      'Engineered rapid-iteration UGC remix packages combining creator testimonials with stylized animation.',
      'Built tailored post-click TikTok Instant Experiences and dedicated landing presells.',
      'Implemented daily creative decay tracking to swap hooks before fatigue impacted CPM.'
    ],
    measurementFramework: [
      'Primary: Outbound Click-Through Rate (CTR) and Add-to-Cart Conversion Rate.',
      'Secondary: Cost per Unique Link Click (CPC) and Thumbstop Ratio (3s view / impressions).',
      'Engagement: Comment sentiment ratio and share frequency.'
    ],
    projectedMetrics: [
      { label: 'Outbound CTR', value: '3.8%', context: 'Significantly above functional beverage benchmark' },
      { label: 'Thumbstop Rate', value: '47.2%', context: 'First 3-second hook efficacy' },
      { label: 'Add-to-Cart Velocity', value: '+58%', context: 'Presell landing page synergy' }
    ],
    lessonsLearned: 'Humor and tension are the highest-leverage attention magnets in short-form ads when tied immediately to a concrete product problem.'
  },
  {
    id: 'conversion-matrix',
    number: '04',
    title: 'Conversion Matrix: High-Intent Landing Page CRO',
    subtitle: 'Conversion Strategy / CRO',
    category: 'Creative & CRO',
    categoryLabel: 'Conversion Rate Optimization',
    summary: 'Re-engineering a SaaS evaluation funnel from a leaky 1.8% signup rate to a frictionless, social-proof-anchored 4.6% conversion flow.',
    thumbnail: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    isFeatured: true,
    isConcept: true,
    challenge: 'High cost per demonstration and 65% drop-off on the second step of the interactive demo onboarding funnel for a B2B collaboration platform.',
    targetAudience: 'Product managers and VP-level design leads evaluating workflow tooling under tight procurement timelines.',
    insight: 'Decision-makers abandoned the page because the demo required scheduling an SDR call before seeing actual interface capability.',
    strategy: 'Invert the funnel: embed an interactive 45-second sandbox preview directly on the hero above the fold. Remove gating for the primary aha moment.',
    creativeDirection: 'Clean monochrome canvas with surgical cyan highlights, high-resolution product micro-interactions, and real customer quote callouts.',
    executionPlan: [
      'Conducted Hotjar heatmap analysis and session recording audits across 15,000 unique visits.',
      'Formulated 4 core split-test hypotheses regarding pricing visibility, interactive preview, and trust badges.',
      'Redesigned the primary checkout/signup flow to single-step social authentication.',
      'Deployed an automated abandoned-intent exit sequence with non-intrusive value summaries.'
    ],
    measurementFramework: [
      'Primary: Visit-to-Active-Trial Conversion Rate (CVR).',
      'Secondary: Time to First Key Action in sandbox and Cost per Activated Lead.',
      'Funnel: Step-by-step drop-off gradient across signup steps.'
    ],
    projectedMetrics: [
      { label: 'Funnel Conversion', value: '4.6%', context: 'Lifted from 1.8% baseline in modeled testing' },
      { label: 'Time to Value', value: '< 60s', context: 'Interactive sandbox time to aha moment' },
      { label: 'Cost Per Trial', value: '-48%', context: 'Downstream paid media efficiency boost' }
    ],
    lessonsLearned: 'Friction kills conversion faster than price. Giving users instantaneous tactile proof before asking for credentials builds irresistible momentum.'
  },
  {
    id: 'signal-collective',
    number: '05',
    title: 'Signal Collective: Organic & Paid Social Engine',
    subtitle: 'Content Strategy / Social Media',
    category: 'Paid Media',
    categoryLabel: 'Content & Social Architecture',
    summary: 'A unified content flywheel merging organic cultural commentary with targeted paid amplification for an emerging fintech brand.',
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    isFeatured: false,
    isConcept: true,
    challenge: 'Fintech brands often sound sterile or patronizing, resulting in near-zero organic viral velocity and exorbitant customer acquisition fees.',
    targetAudience: 'First-time retail investors and freelance professionals seeking clear, no-nonsense financial autonomy.',
    insight: 'Financial anxiety is universal, but traditional financial advice feels condescending. Content framing money as "freedom engineering" ignited massive peer bookmarking.',
    strategy: 'Build an authoritative publication format: "The Sunday Ledger" infographic carousels on LinkedIn and Instagram, whitelisted creator perspectives on TikTok, and paid boost behind organic winners.',
    creativeDirection: 'Architectural typography, minimalist financial flowcharts, crisp editorial photography, and zero stock-photo handshakes.',
    executionPlan: [
      'Established 30-day recurring content calendar balancing education, contrarian opinion, and product utilities.',
      'Developed modular carousel design system with 5 recurring structural templates.',
      'Constructed paid amplification rules: any organic post exceeding 3x average engagement received automatic $500 boost.',
      'Engineered lead magnet flow turning viral post readers into high-intent email newsletter subscribers.'
    ],
    measurementFramework: [
      'Primary: Organic Saves, Shares, and Cost per Acquired Subscriber.',
      'Secondary: Follower growth velocity and post-click app installation rate.',
      'Downstream: 30-day customer deposit conversion rate.'
    ],
    projectedMetrics: [
      { label: 'Avg Save Rate', value: '11.4%', context: 'High bookmark intent on educational carousels' },
      { label: 'Whitelisted CTR', value: '2.9%', context: 'Creator-led paid social ad efficiency' },
      { label: 'Newsletter Growth', value: '1,200 / wk', context: 'Compound organic subscriber acquisition' }
    ],
    lessonsLearned: 'The highest-performing paid ads are almost always organic social posts that proved their resonance before having a single dollar spent on them.'
  },
  {
    id: 'omnichannel-architecture',
    number: '06',
    title: 'Omnichannel Lifecycle: Customer Journey Mapping',
    subtitle: 'Growth Strategy / Customer Journey',
    category: 'Brand Strategy',
    categoryLabel: 'Growth & Lifecycle Strategy',
    summary: 'Connecting top-of-funnel paid media acquisition directly into automated post-purchase retention, SMS re-engagement, and referral loops.',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    isFeatured: false,
    isConcept: true,
    challenge: 'An e-commerce brand was running a high-burn acquisition treadmill: 78% of customers never returned for a second purchase, leaving net margins razor-thin.',
    targetAudience: 'Repeat luxury skincare and grooming purchasers who expect personalized regimen recommendations.',
    insight: 'Customers do not repurchase because they forget when their bottle will run out, or they misuse the product in week one and perceive poor results.',
    strategy: 'Design a lifecycle orchestration system: day 3 "How to apply correctly" video, day 14 progress check-in, day 28 predictive replenishment nudge with 1-click SMS checkout.',
    creativeDirection: 'Hyper-personalized minimalist emails, elegant typography, concise SMS messages respecting user attention, and seamless mobile checkouts.',
    executionPlan: [
      'Segmented customer base into 4 behavioral cohorts based on initial order category and usage cadence.',
      'Constructed 7 automated Klaviyo lifecycle email & SMS flows with personalized dynamic product blocks.',
      'Built a VIP referral tier rewarding brand advocacy with exclusive unreleased product testing.',
      'Synced lifecycle segments back to Meta custom audiences for tailored retention exclusions.'
    ],
    measurementFramework: [
      'Primary: 60-day & 90-day Repeat Purchase Rate and Customer LTV.',
      'Secondary: Email Revenue Share (% of total store revenue) and Unsubscribe Rate.',
      'Efficiency: Acquisition payback period reduction.'
    ],
    projectedMetrics: [
      { label: 'Repeat Purchase Rate', value: '+39%', context: 'Automated predictive replenishment cycle' },
      { label: 'LTV Expansion', value: '+45%', context: '90-day customer value growth' },
      { label: 'Lifecycle Revenue', value: '32%', context: 'Share of total revenue driven by retention' }
    ],
    lessonsLearned: 'A great marketing strategy does not end at the checkout button; true profitability is won in the unboxing experience and the second purchase.'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'performance-marketing',
    number: '01',
    title: 'Performance Marketing',
    summary: 'Full-funnel paid acquisition architecture across Meta, Google, and emerging channels focused on profitable unit economics, creative testing velocity, and robust attribution.',
    deliverables: [
      'Full account audit & attribution setup (CAPI / GA4 / Offline Conversions)',
      'High-velocity creative testing frameworks (Hook-Body-CTA matrices)',
      'Paid social campaign restructuring (Meta Ads, TikTok Ads)',
      'High-intent search capture (Google Search, Performance Max)',
      'Custom weekly performance reporting & blended CAC/LTV dashboards'
    ],
    methodology: 'Iterative hypothesis sprints: we treat ad creatives as miniature software deployments, launching structured variants, killing underperformers within 48 hours, and scaling profitable vectors.',
    idealFor: 'Growth-stage D2C brands, funded SaaS startups, and high-growth services needing predictable, scalable customer acquisition.'
  },
  {
    id: 'brand-strategy',
    number: '02',
    title: 'Brand Strategy & Positioning',
    summary: 'Carving out undeniable market whitespace through rigorous competitive audits, customer psychology insights, messaging architectures, and brand differentiation.',
    deliverables: [
      'Competitive whitespace & category analysis',
      'Core Value Proposition & positioning manifesto',
      'Target customer ICP profiles & psychological trigger mapping',
      'Brand messaging guidelines & tone-of-voice manual',
      'Launch & repositioning rollout playbook'
    ],
    methodology: 'First-principles brand deconstruction: identifying the tension between what competitors over-promise and what customers actually crave, crafting an undeniable reason to choose you.',
    idealFor: 'Brands struggling with commoditization, entering new market segments, or looking to command premium pricing power.'
  },
  {
    id: 'creative-strategy',
    number: '03',
    title: 'Creative Strategy & Copywriting',
    summary: 'Translating strategic insights into high-converting advertising assets, memorable headlines, short-form scripts, and persuasive long-form editorial copy.',
    deliverables: [
      'Multi-angle ad concepts & scriptwriting for UGC & short-form video',
      'High-impact hooks, headlines, and thumb-stopping visual briefs',
      'Long-form editorial sales pages & presell advertorials',
      'Creative direction & modular production shot-lists',
      'Ongoing creative iteration sprints based on performance telemetry'
    ],
    methodology: 'Empathy-driven copywriting: we don’t write clever slogans that win design awards; we write sharp, resonant truths that dismantle buyer skepticism and spark action.',
    idealFor: 'Companies experiencing creative fatigue, high CPA on paid media, or needing fresh storytelling to unlock new customer segments.'
  },
  {
    id: 'growth-lifecycle',
    number: '04',
    title: 'Growth & Content Strategy',
    summary: 'Designing sustainable growth engines that connect organic brand affinity, landing page conversion rate optimization (CRO), and post-purchase customer retention.',
    deliverables: [
      'Conversion Rate Optimization (CRO) audits & landing page wireframes',
      'Full customer journey mapping from first touch to repeat advocate',
      'Automated email & SMS lifecycle flows (welcome, nurture, winback)',
      'Content flywheel architecture (organic social to paid amplification)',
      'Funnel drop-off analytics & friction-removal roadmaps'
    ],
    methodology: 'Full-journey compound engineering: maximizing the value of every single visitor you acquire by optimizing the pre-click, on-page, and post-purchase touchpoints.',
    idealFor: 'Businesses with healthy top-of-funnel traffic that want to maximize conversion rate, repeat purchase cadence, and customer lifetime value.'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Discover',
    summary: 'Deep immersion into your business unit economics, competitive landscape, consumer psychographics, and current marketing bottlenecks.',
    deliverables: 'Market Intelligence Brief · Creative Audit · Bottleneck Diagnosis'
  },
  {
    step: '02',
    title: 'Strategize',
    summary: 'Formulating clear positioning, messaging architecture, channel priorities, and concrete, hypothesis-driven campaign roadmaps.',
    deliverables: 'Strategic Growth Blueprint · Messaging Matrix · Channel Allocation'
  },
  {
    step: '03',
    title: 'Create & Execute',
    summary: 'Translating strategic pillars into living creative assets, ad variants, landing pages, tracking infrastructure, and targeted campaigns.',
    deliverables: 'Campaign Assets · Ad Scripts · Conversion Funnels · Tracking CAPI'
  },
  {
    step: '04',
    title: 'Measure & Improve',
    summary: 'Analyzing real performance telemetry, doubling down on winning angles, iterating creative variations, and continuously driving down CAC.',
    deliverables: 'Weekly Telemetry Dashboards · Creative Iteration Sprints · Scaling Playbook'
  }
];

export const PHILOSOPHY_PILLARS = [
  {
    title: 'Attention Without Resonance Is Wasted Capital',
    description: 'Anyone can generate cheap clicks with clickbait or spectacle. True growth happens when attention is paired with sharp positioning that turns passive scrollers into long-term brand advocates.'
  },
  {
    title: 'Hypothesis-Led Creative Engineering',
    description: 'We don’t guess what works or rely on aesthetic dogma. Every campaign, headline, and creative asset is a structured hypothesis designed to validate a specific buyer motive.'
  },
  {
    title: 'Immediate Conversion Meets Compounding Equity',
    description: 'Performance marketing and brand building are not enemies. The best campaigns drive measurable revenue today while cementing brand differentiation that lasts for years.'
  }
];
