import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { IconDefinition } from "@fortawesome/free-solid-svg-icons"

function MediaControl({ icon, handleClick, active = false }: MediaControlProps) {
  const classes = ["media-control"]
  if (active) classes.push("active")
  return (
    <button className={classes.join(" ")} onClick={handleClick}><FontAwesomeIcon icon={icon} /></button>
  )
}

interface MediaControlProps {
  icon: IconDefinition;
  handleClick: () => void;
  active?: boolean;
}

export default MediaControl
