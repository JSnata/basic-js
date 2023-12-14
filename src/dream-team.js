const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (Array.isArray(members)) {
    let firstLetters = "";

    members.forEach(function (item, index, array) {
      if (typeof item === "string") {
        firstLetters += item.trim().charAt(0);
      }
    });

    let result = firstLetters.toUpperCase().split("").sort().join("");
    return result;
  } else {
    return false;
  }
}

module.exports = {
  createDreamTeam,
};
