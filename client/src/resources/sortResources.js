module.exports = resources => {

  let filteredResources = []

  resources.forEach(resource => {
    if (resource.rating > -3) {
      filteredResources.push(resource)
    }
  });

  return filteredResources.sort(
    (a, b) => (a.rating < b.rating) ? 1 : ((b.rating < a.rating) ? -1 : 0)
  );
}
