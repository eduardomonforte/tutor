const Resource = require('../../models/resource');
const User = require('../../models/user')

const { transformResource} = require('./merge');
  
module.exports = {
    resources: async () => {
      try {
        const resources = await Resource.find();
        return resources.map(resource => {
          return transformResource(resource);
        });
      } catch (err) {
        throw err;
      }
    },
    contributeResource: async args => {
      const resource = new Resource({
        title: args.resourceInput.title,
        description: args.resourceInput.description,
        url: args.resourceInput.url,
        contributor: args.resourceInput.contributor,
        date: new Date(args.resourceInput.date)
      });
      let contributedResource;
      try {
        const result = await resource.save();
        contributedResource = transformResource(result);
        const contributor = await User.findById(args.resourceInput.contributor);
  
        if (!contributor) {
          throw new Error('User not found.');
        }
        contributor.contributedResources.push(resource);
        await contributor.save();
  
        return contributedResource;
      } catch (err) {
        console.log(err);
        throw err;
      }
    }
  };