import Search from './Search'


const Sidebar = (props) => {
    return (
        <aside className="side-bar">
        <h1 className="logo">
          <span className="logo" role="img" aria-label="reel"> 🎞 </span>
         Rateflix
        </h1>
        <Search />
      </aside>
    )
  }


export default Sidebar

