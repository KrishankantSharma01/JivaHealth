/**
 * Utility formatters used across the app.
 */

/**
 * Format an ISO date string to a readable format: "Jul 18, 2025"
 */
export function formatDate(isoString) {
  if (!isoString) return '—'
  const d = new Date(isoString)
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
}

/**
 * Return the badge variant based on user status.
 */
export function getStatusVariant(status) {
  switch (status?.toLowerCase()) {
    case 'active':   return 'active'
    case 'inactive': return 'inactive'
    default:         return 'default'
  }
}
