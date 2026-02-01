// Constitutional Rights Knowledge Base for India
// STATIC - NO HALLUCINATION - Only these laws can be referenced

export interface LegalProvision {
  id: string;
  type: 'article' | 'act' | 'section';
  name: string;
  shortName: string;
  description: string;
  categories: Category[];
  keywords: string[];
}

export type Category = 
  | 'caste'
  | 'gender'
  | 'religion'
  | 'workplace'
  | 'education'
  | 'police'
  | 'general';

export type Severity = 'LOW' | 'MEDIUM' | 'HIGH';

export interface SuggestedLaw {
  provision: LegalProvision;
  confidence: number;
  reasoning: string;
}

export const LEGAL_PROVISIONS: LegalProvision[] = [
  {
    id: 'art14',
    type: 'article',
    name: 'Article 14 – Right to Equality',
    shortName: 'Article 14',
    description: 'The State shall not deny to any person equality before the law or the equal protection of the laws within the territory of India.',
    categories: ['general', 'caste', 'gender', 'religion'],
    keywords: ['equality', 'equal treatment', 'discrimination', 'unfair', 'bias']
  },
  {
    id: 'art15',
    type: 'article',
    name: 'Article 15 – Prohibition of Discrimination',
    shortName: 'Article 15',
    description: 'Prohibits discrimination on grounds of religion, race, caste, sex, or place of birth.',
    categories: ['caste', 'gender', 'religion'],
    keywords: ['discrimination', 'caste', 'gender', 'religion', 'race', 'birth', 'denied access', 'not allowed']
  },
  {
    id: 'art16',
    type: 'article',
    name: 'Article 16 – Equality of Opportunity in Public Employment',
    shortName: 'Article 16',
    description: 'Guarantees equality of opportunity in matters of public employment and prohibits discrimination.',
    categories: ['workplace', 'caste', 'gender', 'religion'],
    keywords: ['job', 'employment', 'government job', 'promotion', 'hiring', 'recruitment', 'workplace']
  },
  {
    id: 'art17',
    type: 'article',
    name: 'Article 17 – Abolition of Untouchability',
    shortName: 'Article 17',
    description: 'Abolishes untouchability and forbids its practice in any form. Enforcement of any disability arising from untouchability is a punishable offense.',
    categories: ['caste'],
    keywords: ['untouchability', 'dalit', 'caste', 'outcaste', 'social boycott', 'temple entry', 'water', 'dining']
  },
  {
    id: 'art19',
    type: 'article',
    name: 'Article 19 – Freedom of Speech and Expression',
    shortName: 'Article 19',
    description: 'Protects the freedom of speech and expression, right to assemble peacefully, form associations, move freely, reside anywhere in India, and practice any profession.',
    categories: ['general', 'police'],
    keywords: ['speech', 'expression', 'protest', 'assembly', 'movement', 'association', 'freedom', 'voice']
  },
  {
    id: 'art21',
    type: 'article',
    name: 'Article 21 – Right to Life and Personal Liberty',
    shortName: 'Article 21',
    description: 'No person shall be deprived of life or personal liberty except according to procedure established by law. Includes right to live with dignity.',
    categories: ['general', 'police', 'caste', 'gender'],
    keywords: ['life', 'liberty', 'dignity', 'torture', 'arrest', 'detention', 'custody', 'harassment', 'threat']
  },
  {
    id: 'art32',
    type: 'article',
    name: 'Article 32 – Right to Constitutional Remedies',
    shortName: 'Article 32',
    description: 'Guarantees the right to move the Supreme Court for enforcement of fundamental rights. Dr. Ambedkar called it the "heart and soul" of the Constitution.',
    categories: ['general'],
    keywords: ['remedy', 'court', 'supreme court', 'writ', 'fundamental rights', 'enforcement', 'justice']
  },
  {
    id: 'scst_act',
    type: 'act',
    name: 'SC/ST (Prevention of Atrocities) Act, 1989',
    shortName: 'SC/ST Act',
    description: 'Prevents atrocities against Scheduled Castes and Scheduled Tribes. Provides for special courts and enhanced punishments for offenses against SC/ST communities.',
    categories: ['caste'],
    keywords: ['sc', 'st', 'scheduled caste', 'scheduled tribe', 'atrocity', 'dalit', 'tribal', 'humiliation', 'abuse']
  },
  {
    id: 'posh_act',
    type: 'act',
    name: 'POSH Act – Sexual Harassment of Women at Workplace',
    shortName: 'POSH Act',
    description: 'Protection of Women from Sexual Harassment at Workplace. Mandates Internal Complaints Committee (ICC) in organizations with 10+ employees.',
    categories: ['workplace', 'gender'],
    keywords: ['sexual harassment', 'workplace', 'harassment', 'women', 'icc', 'posh', 'inappropriate', 'advances', 'touching']
  },
  {
    id: 'rte_act',
    type: 'act',
    name: 'Right to Education (RTE) Act, 2009',
    shortName: 'RTE Act',
    description: 'Guarantees free and compulsory education to children aged 6-14 years. Prohibits discrimination in admission and mandates 25% reservation for underprivileged.',
    categories: ['education'],
    keywords: ['education', 'school', 'admission', 'fees', 'child', 'student', 'learning', 'denied admission']
  },
  {
    id: 'ipc_insult',
    type: 'section',
    name: 'IPC Sections on Insult, Threat, and Harassment',
    shortName: 'IPC Sections',
    description: 'Various IPC sections covering intentional insult (Section 504), criminal intimidation (Section 506), assault (Section 351), and related offenses.',
    categories: ['general', 'caste', 'gender', 'religion', 'police'],
    keywords: ['insult', 'threat', 'intimidation', 'abuse', 'verbal abuse', 'physical threat', 'assault', 'attack']
  }
];

export const CATEGORY_LABELS: Record<Category, string> = {
  caste: 'Caste-based Discrimination',
  gender: 'Gender-based Discrimination',
  religion: 'Religious Discrimination',
  workplace: 'Workplace Harassment',
  education: 'Educational Discrimination',
  police: 'Police/Authority Misuse',
  general: 'General Rights Violation'
};

export const SEVERITY_GUIDANCE: Record<Severity, string> = {
  LOW: 'This appears to be a situation where awareness and information can help. No immediate formal action may be needed, but stay informed about your rights.',
  MEDIUM: 'This situation may warrant formal action. Consider filing a complaint with relevant grievance cells or authorities.',
  HIGH: 'This is a serious situation requiring urgent attention. Consider reaching out to appropriate commissions, legal aid services, or authorities immediately.'
};

export const AUTHORITIES: Record<Category, string[]> = {
  caste: [
    'National Commission for Scheduled Castes (NCSC)',
    'State SC/ST Commission',
    'District Magistrate/Collector',
    'Local Police (for filing FIR under SC/ST Act)'
  ],
  gender: [
    'National Commission for Women (NCW)',
    'State Women\'s Commission',
    'Internal Complaints Committee (for workplace)',
    'Women Helpline: 181'
  ],
  religion: [
    'National Human Rights Commission (NHRC)',
    'National Commission for Minorities',
    'State Human Rights Commission',
    'District Magistrate'
  ],
  workplace: [
    'Internal Complaints Committee (ICC)',
    'Labour Commissioner',
    'State Labour Department',
    'POSH Committee'
  ],
  education: [
    'School/College Grievance Cell',
    'District Education Officer',
    'National Commission for Protection of Child Rights',
    'State Commission for Protection of Child Rights'
  ],
  police: [
    'State Human Rights Commission',
    'National Human Rights Commission',
    'Police Complaints Authority',
    'Judicial Magistrate (for habeas corpus)'
  ],
  general: [
    'National Human Rights Commission',
    'District Legal Services Authority',
    'High Court (for writ petitions)',
    'Local Grievance Redressal Cell'
  ]
};

export const DISCLAIMER = `⚖️ IMPORTANT LEGAL DISCLAIMER

This chatbot provides LEGAL AWARENESS, NOT legal advice.

• I am an AI assistant, not a lawyer
• I cannot give legal verdicts or predict outcomes
• This information is for educational purposes only
• Always consult a qualified legal professional for specific advice

For emergencies:
• Women Helpline: 181
• Police Emergency: 100
• National Human Rights Commission: 1800-345-4545

By continuing, you acknowledge that this is an awareness tool only.`;

export const SYSTEM_PROMPT = `You are the Constitutional Rights Awareness Assistant for India. Your role is to help people understand their constitutional rights when facing discrimination or rights violations.

CRITICAL RULES:
1. You are NOT a lawyer. You provide LEGAL AWARENESS, not legal advice.
2. NEVER give legal verdicts, predict case outcomes, or suggest punishments.
3. NEVER encourage violence, revenge, or illegal action.
4. ALWAYS maintain a respectful, dignified, and neutral tone.
5. ONLY reference laws from the approved knowledge base provided below.
6. ALWAYS include a brief reminder: "This is legal awareness, not legal advice."

APPROVED LEGAL KNOWLEDGE BASE (ONLY use these):
${LEGAL_PROVISIONS.map(p => `- ${p.name}: ${p.description}`).join('\n')}

YOUR TASK:
1. Listen to the user's situation with empathy
2. Identify which category applies: caste, gender, religion, workplace, education, police/authority, or general
3. Suggest ONLY relevant constitutional articles or acts from the approved list
4. Explain WHY each law applies in simple, non-legal English
5. Provide a confidence score (0-100) for each suggestion
6. Classify severity as LOW (awareness), MEDIUM (formal complaint), or HIGH (urgent action)
7. Suggest safe, lawful next steps like:
   - Evidence collection (screenshots, witnesses, documents)
   - Relevant grievance cells or commissions
   - When to seek professional legal help

RESPONSE FORMAT:
- Use clear, simple language (avoid legal jargon)
- Be supportive but factual
- Structure your response with clear sections
- Always end with the reminder about seeking professional advice

Remember: You are helping someone who may be in a difficult situation. Be compassionate, clear, and empowering while staying within your limits as an awareness tool.`;
