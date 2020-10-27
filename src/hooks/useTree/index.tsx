import { useLocation } from "@reach/router"
const { pathPrefix } = require("../../../gatsby-config")

const usTree = () => {
  const url = "/"
  const { pathname } = useLocation()

  const fragments = pathname
    .replace(pathPrefix, '')
    .split("/")
    .filter(f => f != "")
    .slice(1)
    .map(id => ({
      id,
      url: `${url}${id}/`
    }))
  
  fragments.unshift({
    id: 'index',
    url: "/"
  })
    
  return {
    fragments
  }
}

export default usTree
