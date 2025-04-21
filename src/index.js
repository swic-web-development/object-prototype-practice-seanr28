import './data.js'
// import data from './data.js'
/**
 * Calculate the threat level (health × damage) for each monster
 * @param {Object} monsters - The monsters data object
 * @return {Array} - Array of objects with name and threatLevel properties
 */
export function calculateThreatLevels(monsters) {
  // TODO: Calculate the threat level (health × damage) for each monster
  // and return an array of monsters with their threat levels

  return Object.values(monsters).flatMap((level) =>
    level.map((monster) => ({
      name: monster.name,
      threatLevel: monster.health * monster.damage,
    })),
  )
}

/**
 * Extract all monster names into an array using Object methods
 * @param {Object} monsters - The monsters data object
 * @return {Array} - Array of all monster names
 */
export function extractMonsterNames(monsters) {
  // TODO: Extract all monster names into an array using Object methods

  return Object.values(monsters).flatMap((level) => level.map((monster) => monster.name))
}

/**
 * Transform the data structure to organize monsters by threat level
 * @param {Object} monsters - The monsters data object
 * @return {Object} - Object with lowThreat, mediumThreat, and highThreat arrays
 */
export function organizeByThreatLevel(monsters) {
  // TODO: Transform the data structure to organize monsters by threat level
  // instead of difficulty
  // lowThreat: < 10,000
  // mediumThreat: between 10,000 and 50,000
  // highThreat: > 50,000

  const threatCategories = {
    lowThreat: [],
    mediumThreat: [],
    highThreat: [],
  }

  Object.values(monsters).forEach((level) => {
    level.forEach((monster) => {
      const threatLevel = monster.health * monster.damage

      // Determine the correct category
      const category =
        threatLevel < 10000 ? 'lowThreat' : threatLevel <= 50000 ? 'mediumThreat' : 'highThreat'

      // Push the monster with its threat level into the appropriate category
      threatCategories[category].push({ ...monster, threatLevel })
    })
  })

  return threatCategories
}

export function sum(a, b) {
  return a + b
}
