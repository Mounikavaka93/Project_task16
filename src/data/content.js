import {
  Leaf,
  Satellite,
  FileCheck,
  Network,
  Sparkles,
  Trees,
  Building2,
  Landmark,
  HeartHandshake,
} from 'lucide-react'

export const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'About', href: '#about' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Impact', href: '#impact' },
  { label: 'Stories', href: '#stories' },
  { label: 'Contact', href: '#contact' },
]

export const features = [
  {
    icon: Leaf,
    title: 'Live Carbon Ledger',
    description:
      'Track Scope 1–3 emissions in real time with automated data connectors across energy, travel, and operations.',
  },
  {
    icon: Satellite,
    title: 'Habitat Mapping',
    description:
      'Satellite imagery and AI models score biodiversity, water stress, and land-use change around every site you operate.',
  },
  {
    icon: Trees,
    title: 'Restoration Studio',
    description:
      'Fund verified reforestation and wetland projects, then watch canopy cover, soil health, and wildlife return over time.',
  },
  {
    icon: FileCheck,
    title: 'ESG Autopilot',
    description:
      'Generate CSRD, GRI, and TNFD-ready disclosures in minutes instead of months of spreadsheet work.',
  },
  {
    icon: Network,
    title: 'Supply Chain Roots',
    description:
      'Trace materials back to landscapes and flag high-risk suppliers before they become a reputational issue.',
  },
  {
    icon: Sparkles,
    title: 'Nature Forecasts',
    description:
      'Model climate and ecosystem risk to facilities, harvests, and logistics so you can plan with confidence.',
  },
]

export const benefits = [
  'Replace fragmented carbon tools with one nature-positive system of record.',
  'Give finance, sustainability, and operations a shared source of truth.',
  'Prove restoration outcomes with satellite evidence, not marketing claims.',
  'Stay ahead of disclosure rules without growing a reporting army.',
]

export const solutions = [
  {
    icon: Building2,
    title: 'For Enterprises',
    description:
      'Unify emissions, biodiversity, and supplier data across global operations with role-based dashboards.',
    points: ['Multi-site rollups', 'Board-ready reporting', 'API & SSO'],
  },
  {
    icon: Landmark,
    title: 'For Cities & Regions',
    description:
      'Map urban canopies, heat islands, and green corridors to guide climate-resilient public investment.',
    points: ['Public dashboards', 'Grant tracking', 'Community impact'],
  },
  {
    icon: HeartHandshake,
    title: 'For Conservation Teams',
    description:
      'Coordinate field data, funders, and restoration partners in one transparent workspace.',
    points: ['Project MRV', 'Donor portals', 'Field mobile capture'],
  },
]

export const stats = [
  { value: 2400, suffix: '+', label: 'Teams measuring nature impact' },
  { value: 18, suffix: 'M', label: 'Hectares monitored worldwide' },
  { value: 4.2, suffix: 'M', label: 'tCO₂e reduced with partners' },
  { value: 96, suffix: '', label: 'Countries on the platform' },
]

export const testimonials = [
  {
    quote:
      'Verdant turned our sustainability program from an annual report scramble into a weekly operating rhythm. The habitat maps changed how we site new facilities.',
    name: 'Amelia Chen',
    role: 'Chief Sustainability Officer',
    company: 'Northline Logistics',
    initials: 'AC',
    tone: 'bg-forest-800',
  },
  {
    quote:
      'We finally have restoration data our board trusts. Canopy growth, soil moisture, and biodiversity scores sit next to financial KPIs — that is the unlock.',
    name: 'Jonas Berg',
    role: 'Head of Impact',
    company: 'Alder & Pine Capital',
    initials: 'JB',
    tone: 'bg-forest-700',
  },
  {
    quote:
      'The reporting Autopilot saved our small team hundreds of hours. We spend that time with landowners instead of formatting GRI tables.',
    name: 'Priya Nair',
    role: 'Program Director',
    company: 'Riverbend Conservancy',
    initials: 'PN',
    tone: 'bg-gold-500',
  },
]

export const footerColumns = [
  {
    title: 'Product',
    links: ['Features', 'Solutions', 'Integrations', 'Pricing', 'Changelog'],
  },
  {
    title: 'Company',
    links: ['About', 'Careers', 'Press', 'Partners', 'Contact'],
  },
  {
    title: 'Resources',
    links: ['Nature Brief', 'CSRD Guide', 'API Docs', 'Help Center', 'Status'],
  },
]
