const tasks = (arr) => arr.join(' && ');

module.exports = {
  hooks: {
    'pre-commit': tasks([
      'nx format:write --uncommited',
      'nx affected:lint --uncommited --parallel --fix=true',
    ]),
    'pre-push': tasks(['nx affected:test', 'nx affected:e2e'])
  }
}