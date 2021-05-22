export default function sort(heroes) {
  const list = heroes.sort((a, b) => b.health - a.health);
  return list;
}
