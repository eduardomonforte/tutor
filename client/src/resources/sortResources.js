module.exports = resources => {

  let filteredResources = []

  resources.forEach(resource => {
    if (resource.karma > -3) {
      filteredResources.push(resource)
    }
  });

  return filteredResources.sort(
    (a,b) => (a.karma < b.karma) ? 1 : ((b.karma < a.karma) ? -1 : 0)
  );
}
