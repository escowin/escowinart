function ArtNav({links, setDisplay, id}) {

  return (
    <nav>
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
