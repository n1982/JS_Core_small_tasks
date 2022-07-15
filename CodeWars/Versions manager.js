/*Versions manager
 You have to implement a vm function returning an object.

It should accept an optional parameter that represents the initial version. The input will be in one of the following formats: "{MAJOR}", "{MAJOR}.{MINOR}", or "{MAJOR}.{MINOR}.{PATCH}". More values may be provided after PATCH but they should be ignored. If these 3 parts are not decimal values, an exception with the message "Error occured while parsing version!" should be thrown. If the initial version is not provided or is an empty string, use "0.0.1" by default.

This class should support the following methods, all of which should be chainable (except release):

major() - increase MAJOR by 1, set MINOR and PATCH to 0
minor() - increase MINOR by 1, set PATCH to 0
patch() - increase PATCH by 1
rollback() - return the MAJOR, MINOR, and PATCH to their values before the previous major/minor/patch call, or throw an exception with the message "Cannot rollback!" if there's no version to roll back to
release() - return a string in the format "{MAJOR}.{MINOR}.{PATCH}"
May the binary force be with you! */

const vm = function (version = '') {
  version = (version || '0.0.1').match(/(\w+)?\.?(\w+)?\.?(\w+)?/).slice(1, 4);
  if (version.some(x => x && x.search(/[^0-9]/) != -1))
    throw new Error('Error occured while parsing version!');
  let v = version.map(x => +x || 0),
    prev = [];
  return {
    major: function () {
      prev.push(v.slice());
      v = [v[0] + 1, 0, 0];
      return this;
    },
    minor: function () {
      prev.push(v.slice());
      v = [v[0], v[1] + 1, 0];
      return this;
    },
    patch: function () {
      prev.push(v.slice());
      v[2] += 1;
      return this;
    },
    release: () => v.join`.`,
    rollback: function () {
      v = prev.pop();
      if (!v) throw new Error('Cannot rollback!');
      return this;
    },
  };
};
