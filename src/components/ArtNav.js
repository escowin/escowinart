function ArtNav({links, setDisplay, id, navClass}) {

  return (
    <nav className={navClass}>
      <ul id={id}>
        {links.map((set, i) => (
          <li key={i} onClick={() => setDisplay(set)}>
            {set}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default ArtNav;
