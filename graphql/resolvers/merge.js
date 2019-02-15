const Resource = require('../../models/resource');
const User = require('../../models/user');
const { dateToString } = require('../../helpers/date');

const resources = async resourceIds => {
  try {
    const resources = await Resource.find({ _id: { $in: resourceIds } });
    return resources.map(resource => {
      return transformResource(resource);
    });
  } catch (err) {
    throw err;
  }
};

const user = async userId => {
  try {
    const user = await User.findById(userId);
    return {
      ...user._doc,
      _id: user.id,
      contributedResources: resources.bind(
        this,
        user._doc.contributedResources
      )
    };
  } catch (err) {
    throw err;
  }
};

const transformResource = resource => {
  return {
    ...resource._doc,
    _id: resource.id,
    date: dateToString(resource._doc.date),
    contributor: user.bind(this, resource.contributor.username)
  };
};

exports.transformResource = transformResource;
