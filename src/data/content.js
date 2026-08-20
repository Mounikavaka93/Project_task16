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

export const heroPhotos = {
  canopy: '/images/forest-sun.jpg',
  river: '/images/lake.jpg',
  moss: '/images/forest-pines.jpg',
}

export const liveSites = [
  {
    name: 'Kilombero',
    detail: 'Wetland · TZ',
    image: '/images/savanna.jpg',
  },
  {
    name: 'Douro',
    detail: 'Valley · PT',
    image: '/images/peaks.jpg',
  },
  {
    name: 'Cascadia',
    detail: 'Forest · US',
    image: '/images/trees-up.jpg',
  },
  {
    name: 'Sundarbans',
    detail: 'Delta · BD',
    image: '/images/forest-path.jpg',
  },
]

export const features = [
  {
    icon: Leaf,
    title: 'Live Carbon Ledger',
    description:
      'Track Scope 1–3 emissions in real time with automated data connectors across energy, travel, and operations.',
    image: '/images/forest-fog.jpg',
    alt: 'Mist moving through a dense pine forest',
  },
  {
    icon: Satellite,
    title: 'Habitat Mapping',
    description:
      'Satellite imagery and AI models score biodiversity, water stress, and land-use change around every site you operate.',
    image: '/images/lake.jpg',
    alt: 'Aerial view of a river winding through forested mountains',
  },
  {
    icon: Trees,
    title: 'Restoration Studio',
    description:
      'Fund verified reforestation and wetland projects, then watch canopy cover, soil health, and wildlife return over time.',
    image: '/images/planting.jpg',
    alt: 'Hands planting in dark soil',
  },
  {
    icon: FileCheck,
    title: 'ESG Autopilot',
    description:
      'Generate CSRD, GRI, and TNFD-ready disclosures in minutes instead of months of spreadsheet work.',
    image: '/images/canopy.jpg',
    alt: 'Sunlight through a tall forest canopy',
  },
  {
    icon: Network,
    title: 'Supply Chain Roots',
    description:
      'Trace materials back to landscapes and flag high-risk suppliers before they become a reputational issue.',
    image: '/images/fields.jpg',
    alt: 'Green fields stretching to a distant treeline',
  },
  {
    icon: Sparkles,
    title: 'Nature Forecasts',
    description:
      'Model climate and ecosystem risk to facilities, harvests, and logistics so you can plan with confidence.',
    image: '/images/mountains.jpg',
    alt: 'Fog moving over forested mountains',
  },
]

export const benefits = [
  'Replace fragmented carbon tools with one nature-positive system of record.',
  'Give finance, sustainability, and operations a shared source of truth.',
  'Prove restoration outcomes with satellite evidence, not marketing claims.',
  'Stay ahead of disclosure rules without growing a reporting army.',
]

export const aboutPhotos = {
  path: '/images/forest-sun.jpg',
  field: '/images/planting.jpg',
  water: '/images/water.jpg',
}

export const landscapes = [
  {
    name: 'Kilombero Wetlands',
    place: 'Tanzania',
    coords: '8.52°S  36.08°E',
    note: 'Plot 14 · canopy +12%',
    image: '/images/savanna.jpg',
  },
  {
    name: 'Douro Terraces',
    place: 'Portugal',
    coords: '41.16°N  7.79°W',
    note: 'Soil moisture stable',
    image: '/images/peaks.jpg',
  },
  {
    name: 'Cascadia Corridor',
    place: 'Oregon, USA',
    coords: '45.52°N  122.68°W',
    note: 'Old-growth buffer live',
    image: '/images/trees-up.jpg',
  },
  {
    name: 'Sundarbans Edge',
    place: 'Bangladesh',
    coords: '21.95°N  89.18°E',
    note: 'Mangrove recovery',
    image: '/images/forest-path.jpg',
  },
]

export const solutions = [
  {
    icon: Building2,
    title: 'For Enterprises',
    description:
      'Unify emissions, biodiversity, and supplier data across global operations with role-based dashboards.',
    points: ['Multi-site rollups', 'Board-ready reporting', 'API & SSO'],
    image: '/images/office.jpg',
    alt: 'Modern office workspace',
  },
  {
    icon: Landmark,
    title: 'For Cities & Regions',
    description:
      'Map urban canopies, heat islands, and green corridors to guide climate-resilient public investment.',
    points: ['Public dashboards', 'Grant tracking', 'Community impact'],
    image: '/images/city.jpg',
    alt: 'City streets with tree canopy from above',
  },
  {
    icon: HeartHandshake,
    title: 'For Conservation Teams',
    description:
      'Coordinate field data, funders, and restoration partners in one transparent workspace.',
    points: ['Project MRV', 'Donor portals', 'Field mobile capture'],
    image: '/images/conservation.jpg',
    alt: 'Open grassland used for conservation work',
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
    photo: '/images/portrait-1.jpg',
  },
  {
    quote:
      'We finally have restoration data our board trusts. Canopy growth, soil moisture, and biodiversity scores sit next to financial KPIs — that is the unlock.',
    name: 'Jonas Berg',
    role: 'Head of Impact',
    company: 'Alder & Pine Capital',
    photo: '/images/portrait-2.jpg',
  },
  {
    quote:
      'The reporting Autopilot saved our small team hundreds of hours. We spend that time with landowners instead of formatting GRI tables.',
    name: 'Priya Nair',
    role: 'Program Director',
    company: 'Riverbend Conservancy',
    photo: '/images/portrait-3.jpg',
  },
]

export const studios = [
  {
    city: 'Portland',
    detail: 'Field lab · Cascadia',
    image: '/images/forest-path.jpg',
  },
  {
    city: 'Lisbon',
    detail: 'Atlantic studio',
    image: '/images/lisbon.jpg',
  },
  {
    city: 'Nairobi',
    detail: 'East Africa desk',
    image: '/images/savanna.jpg',
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
