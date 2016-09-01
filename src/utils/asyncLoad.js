export default function asyncLoad(loaderFactories) {
  const loaders = loaderFactories
  // build loaders
  .map(factory => factory())
  // remove falsy loaders
  .filter(loader => !!loader)
  // promisify loaders
  .map(loader => new Promise(loader));

  // resolve all loaders, return the promise
  return Promise.all(loaders);
};
