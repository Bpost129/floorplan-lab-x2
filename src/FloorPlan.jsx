import Kitchen from "./Kitchen"
import LivingRoom from "./LivingRoom"
import Bedroom from "./Bedroom"
import Bath from "./Bath"

const FloorPlan = () => {
  return (
    <div id="floorplan">
      <LivingRoom />
      <Bath size={'Half'} />
      <Kitchen />
      <Bedroom bedNum={1} />
      <Bedroom bedNum={2} />
      <Bath size={'Full'} />
      <Bedroom bedNum={3} />
    </div>
  )
}

export default FloorPlan