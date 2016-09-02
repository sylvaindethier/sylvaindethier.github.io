/**
 * Promisify a resolver.
 * @param  {Function} resolver   A resolver.
 * @return {Promise}            The resolver Promise.
 */
const toPromise = resolver => (
  // only resolver Function to Promise
  resolver instanceof Function ? new Promise(resolver) : resolver
);

/**
 * Promise all resolvers.
 * @param  {Array} resolvers  An Array of resolvers.
 * @return {Promise}          The resolvers Promise.
 */
const promiseAll = resolvers => Promise.all(resolvers.map(toPromise));

/**
 * Get the first element of an Array if any.
 * @param  {Array} value  The value to get its first element.
 * @return {Any}          The first element or the value.
 */
const first = value => (value.length ? value[0] : value);

/**
 * Promise one resolver.
 * @param  {Any} resolver A resolver.
 * @return {Promise}      The resolver Promise.
 */
const promiseOne = resolver => promiseAll([resolver]).then(first);

/**
 * Promise all the loaders
 * @param  {Array} loaders  An array of, or unique loader (resolver)
 * @return {Promise}        The Promise from the loaders
 */
const load = loaders => (
  loaders instanceof Array ? promiseAll(loaders) : promiseOne(loaders)
);

export default load;
