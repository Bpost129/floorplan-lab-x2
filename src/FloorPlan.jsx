import Kitchen from "./Kitchen"
import LivingRoom from "./LivingRoom"
import Bedroom from "./Bedroom"
import Bath from "./Bath"

const FloorPlan = () => {
  return (
    <>
      <LivingRoom />
      <Bath />
      <Kitchen />
      <Bedroom />
      <Bedroom />
      <Bath />
      <Bedroom />
    </>
  )
}

export default FloorPlan