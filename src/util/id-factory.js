function* makeId () {
  let id = 0;
  while ( true ) {
    id++;
    yield(id);
  }
}

const idFactory = makeId();

export default idFactory;
