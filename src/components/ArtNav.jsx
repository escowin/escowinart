function ArtNav({ links, setDisplay, id, navClass, activeLink }) {
  return (
    <nav className={navClass}>
      <ul id={id}>
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
