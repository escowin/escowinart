function ArtNav({
  links,
  setDisplay,
  navClass,
  activeLink,
  collapseSingleTab = false,
}) {
  if (collapseSingleTab && (!links?.length || links.length < 2)) {
    return null;
  }

  return (
    <nav className={`${navClass} art-nav`}>
      <ul className="art-nav-tabs">
        {links.map((set, i) => (
          <li
            key={i}
            onClick={() => setDisplay(set)}
            className={`tab${set === activeLink ? ' active' : ''}`}
          >
            {set}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default ArtNav;
