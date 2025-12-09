# Data Model (MVP)

ToolConfig:
- id: string
- name: string
- role: string

CommandState:
- goal: string
- context: string
- agent: string // 'auto' or tool id
