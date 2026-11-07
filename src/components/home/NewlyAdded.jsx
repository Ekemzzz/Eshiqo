import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router'
import SectionHeading from './SectionHeading.jsx'
import ToolGrid from './ToolGrid.jsx'
import { getNewestTools } from '../../utils/catalog.js'

const NEWLY_ADDED_LIMIT = 7

function NewlyAdded({ tools }) {
  const recentTools = getNewestTools(tools, NEWLY_ADDED_LIMIT)
  if (recentTools.length === 0) return null

  return (
    <section className="home-section home-section--new" aria-labelledby="newly-added-title">
      <SectionHeading
        id="newly-added-title"
        title="Newly added"
        description="The most recent tools to join the directory — explore them or see where they fit by category."
        action={
          <Link className="text-link" to="/tools?sort=newest">
            See all new tools <ArrowUpRight aria-hidden="true" size={16} />
          </Link>
        }
      />
      <ToolGrid tools={recentTools} columns={3} showNewBadge />
    </section>
  )
}

export default NewlyAdded
