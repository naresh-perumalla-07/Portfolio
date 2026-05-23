/**
 * Skill groups displayed in the About section.
 * Add/remove/reorder groups and items here.
 */

export const skillGroups = [
  {
    label: 'Frontend',
    items: ['React', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    label: 'Backend',
    items: ['Node.js', 'Express', 'FastAPI', 'Python', 'Java'],
  },
  {
    label: 'AI / ML',
    items: ['NLP', 'Deep Learning', 'RAG', 'LangChain', 'LangGraph'],
  },
  {
    label: 'Data',
    items: ['MongoDB', 'SQL', 'Vector DB'],
  },
]

/**
 * Tech keywords used in the hero marquee.
 * These scroll infinitely at the bottom of the hero section.
 */
export const marqueeItems = [
  'React', 'Python', 'FastAPI', 'LangChain', 'RAG',
  'NLP', 'Deep Learning', 'Node.js', 'MongoDB', 'LangGraph',
]

/**
 * Navigation items.
 * `id` must match the section's HTML id attribute.
 */
export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]
