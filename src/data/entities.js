import { EMF_5, FINGERPRINTS, FREEZING_TEMPERATURES, GHOST_ORBS, GHOST_WRITING, SPIRIT_BOX } from '@/data/evidence';

/**
 * @type {Entity[]}
 */
export const entities = [
  {
    name: 'Banshee',
    key: 'banshee',
    evidence: [
      EMF_5,
      FINGERPRINTS,
      FREEZING_TEMPERATURES,
    ],
    strengths: [
      'Targets one player at a time.',
    ],
    weaknesses: [
      'Can be warded off with a Crucifix.',
    ],
    details: [
      'Will individually stalk players and pounce.',
    ],
  },
  {
    name: 'Demon',
    key: 'demon',
    evidence: [
      FREEZING_TEMPERATURES,
      GHOST_WRITING,
      SPIRIT_BOX,
    ],
    strengths: [
      'Demons attack more than any other ghost type.',
    ],
    weaknesses: [
      'Asking it a successful question on an Ouija board won\'t lower your sanity.',
    ],
    details: [
      'By far the most aggressive ghost that will attack you.',
      'Will attack you a lot more than any other type.',
      'Outsmart it via the Ouija board.',
    ],
  },
  {
    name: 'Jinn',
    key: 'jinn',
    evidence: [
      EMF_5,
      SPIRIT_BOX,
      GHOST_ORBS,
    ],
    strengths: [
      'When a player is farther away, the Jinn is faster.',
    ],
    weaknesses: [
      'Turning off a location’s power source will stop the Jinn from using its ability.',
    ],
    details: [
      'Fast-paced.',
      'Territorial.',
    ],
  },
  {
    name: 'Mare',
    key: 'mare',
    evidence: [
      FREEZING_TEMPERATURES,
      SPIRIT_BOX,
      GHOST_ORBS,
    ],
    strengths: [
      'The dark will increase its odds of attacking.',
    ],
    weaknesses: [
      'Any kind of light.',
    ],
    details: [
      'Stronger in the dark.',
      'Hates light.',
    ],
  },
  {
    name: 'Oni',
    key: 'oni',
    evidence: [
      EMF_5,
      GHOST_WRITING,
      SPIRIT_BOX,
    ],
    strengths: [
      'Active when players are nearby and can move objects very quickly.',
    ],
    weaknesses: [
      'If more people are present, it will be easier to find this entity.',
    ],
    details: [
      'This is a pretty strong entity that will become even more active and aggressive when a player is near it.',
    ],
  },
  {
    name: 'Phantom',
    key: 'phantom',
    evidence: [
      EMF_5,
      FREEZING_TEMPERATURES,
      GHOST_ORBS,
    ],
    strengths: [
      'Looking at it will dramatically lower your sanity.',
    ],
    weaknesses: [
      'Taking its picture will cause it to disappear.',
    ],
    details: [
      'It can possess the living and is commonly summoned by an Ouija board.',
    ],
  },
  {
    name: 'Poltergeist',
    key: 'poltergeist',
    evidence: [
      FINGERPRINTS,
      SPIRIT_BOX,
      GHOST_ORBS,
    ],
    strengths: [
      'Can throw many objects at once.',
    ],
    weaknesses: [
      'Empty rooms.',
    ],
    details: [
      'Will throw objects and really cause some chaos.',
    ],
  },
  {
    name: 'Revenant',
    key: 'revenant',
    evidence: [
      EMF_5,
      FINGERPRINTS,
      GHOST_WRITING,
    ],
    strengths: [
      'Faster when hunting a victim.',
    ],
    weaknesses: [
      'If you hide, it will move much slower.',
    ],
    details: [
      'Slow at first, but gets faster the longer it hunts you.',
    ],
  },
  {
    name: 'Shade',
    key: 'shade',
    evidence: [
      EMF_5,
      GHOST_WRITING,
      GHOST_ORBS,
    ],
    strengths: [
      'It is shy, which makes it hard to find.',
    ],
    weaknesses: [
      'With the presence of several players, a Shade won’t enter Hunting mode.',
    ],
    details: [
      'Shy and prefers to go after players who are alone.',
    ],
  },
  {
    name: 'Spirit',
    key: 'spirit',
    evidence: [
      FINGERPRINTS,
      GHOST_WRITING,
      SPIRIT_BOX,
    ],
    strengths: [
      'None.',
    ],
    weaknesses: [
      'Smudge Sticks.',
    ],
    details: [
      'The most "common" ghost, but don\'t underestimate it.',
    ],
  },
  {
    name: 'Wraith',
    key: 'wraith',
    evidence: [
      FINGERPRINTS,
      FREEZING_TEMPERATURES,
      SPIRIT_BOX,
    ],
    strengths: [
      'Cannot be tracked with footsteps.',
    ],
    weaknesses: [
      'The Wraith reacts badly to Salt.',
    ],
    details: [
      'Can fly and go through solid walls.',
    ],
  },
  {
    name: 'Yurei',
    key: 'yurei',
    evidence: [
      FREEZING_TEMPERATURES,
      GHOST_WRITING,
      GHOST_ORBS,
    ],
    strengths: [
      'Strong effect on your sanity.',
    ],
    weaknesses: [
      'Smudging a room a Yurei is in will stop it from roaming for a long time.',
    ],
    details: [
      'Has a big impact on your sanity.',
      'Can be trapped by smudges.',
    ],
  },
];
