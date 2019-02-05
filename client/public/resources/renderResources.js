import resources from './resourcesDB'

const renderResources = resources => {

  let filteredAndSortedResources = resources => {
    let filteredResources = filterResources(resources)
      .then (sortResources(filteredResources))
  }

}

const filterResources = requestedResourceCat => {

  let resourcesToRender = []

  sortedResources.forEach(resource => {  
    if (resource.cat === requestedResourceCat) {
      resourcesToRender.push(resource)
    }
  });

  let sortedResources = sortResources(resources)

}

const sortResources = resources => {

}

renderResources()