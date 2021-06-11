/* eslint-disable max-len,vue/max-len */
import { EMF_5, FINGERPRINTS, FREEZING_TEMPERATURES, GHOST_ORBS, GHOST_WRITING, SPIRIT_BOX } from '@/data/evidence';

export const SPIRIT = 'spirit';
export const WRAITH = 'wraith';
export const PHANTOM = 'phantom';
export const POLTERGEIST = 'poltergeist';
export const BANSHEE = 'banshee';
export const JINN = 'jinn';
export const MARE = 'mare';
export const REVENANT = 'revenant';
export const SHADE = 'shade';
export const DEMON = 'demon';
export const YUREI = 'yurei';
export const ONI = 'oni';
export const HANTU = 'hantu';
export const YOKAI = 'yokai';

/**
 * @type {Entity[]}
 */
export const entities = [
  {
    name: 'Spirit',
    key: SPIRIT,
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
    key: WRAITH,
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
    name: 'Phantom',
    key: PHANTOM,
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
    key: POLTERGEIST,
    evidence: [
      FINGERPRINTS,
      GHOST_ORBS,
      SPIRIT_BOX,
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
    name: 'Banshee',
    key: BANSHEE,
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
    name: 'Jinn',
    key: JINN,
    evidence: [
      EMF_5,
      GHOST_ORBS,
      SPIRIT_BOX,
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
    key: MARE,
    evidence: [
      FREEZING_TEMPERATURES,
      GHOST_ORBS,
      SPIRIT_BOX,
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
    name: 'Revenant',
    key: REVENANT,
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
    key: SHADE,
    evidence: [
      EMF_5,
      GHOST_ORBS,
      GHOST_WRITING,
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
    name: 'Demon',
    key: DEMON,
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
    name: 'Yurei',
    key: YUREI,
    evidence: [
      FREEZING_TEMPERATURES,
      GHOST_ORBS,
      GHOST_WRITING,
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
  {
    name: 'Oni',
    key: ONI,
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
    name: 'Hantu',
    key: HANTU,
    evidence: [
      FINGERPRINTS,
      GHOST_ORBS,
      GHOST_WRITING,
    ],
    strengths: [
      'Lower temperatures can cause the Hantu to move at faster speeds.',
    ],
    weaknesses: [
      'A Hantu will move slower in warmer areas.',
    ],
    details: [
      'A Hantu is a rare ghost that can be found in hot climates. They are known to attack often during cold weather.',
    ],
  },
  {
    name: 'Yokai',
    key: YOKAI,
    evidence: [
      SPIRIT_BOX,
      GHOST_ORBS,
      GHOST_WRITING,
    ],
    strengths: [
      'Talking near a Yokai will anger it and increase its chance of attacking.',
    ],
    weaknesses: [
      'When hunting, a Yokai can only hear voices close to it.',
    ],
    details: [
      'A Yokai is a common type of ghost that is attracted to human voices. They can usually be found haunting family homes.',
    ],
  },
];
