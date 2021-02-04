/**
 * This is just a mock endpoint for login purposes 
 * Correct validation should be done in a real world scenario
 * Whether if its using jwt as an strategy or something else (I'd go with jwt)
 * (And *absolutely* not store the token in a plain string, that should be a process.env.SECRET)
 */
exports.logIn = (req, res, next) => {
  const token = 'BearBeetsBattlestarGalactica';
  return res.json({ token });
};