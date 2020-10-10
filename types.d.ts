export interface Evidence {
    name: String,
    key: String,
}

export interface Entity {
    name: String,
    key: String,
    evidence: String[],
    strengths: String[],
    weaknesses: String[],
    details: String[],
}
