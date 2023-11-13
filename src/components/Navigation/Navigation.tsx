import NavSvg from './NavSvg'
import Scroll from './Scroll'

interface navProps {
  scroll: boolean,
  handleScroll: () => void,
}

const Navigation = ({scroll, handleScroll}: navProps) => {


  return (
    <div>
        <h2>Scroll to explore</h2>
        <div className="scrollButton">
          <div onClick={handleScroll}><NavSvg /></div>
          {scroll && <Scroll />}
        </div>
    </div>
  )
}

export default Navigation