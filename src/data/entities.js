/* eslint-disable max-len,vue/max-len */
import {
  DOTS_PROJECTOR,
  EMF_5,
  FINGERPRINTS,
  FREEZING_TEMPERATURES,
  GHOST_ORBS,
  GHOST_WRITING,
  SPIRIT_BOX,
} from '@/data/evidence';

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
export const GORYO = 'goryo';
export const MYLING = 'myling';
export const ONYRO = 'onyro';
export const THE_TWINS = 'the_twins';
export const RAIJU = 'raiju';
export const OBAKE = 'obake';
export const THE_MIMIC = 'the_mimic';

/**
 * @type {Entity[]}
 */
export const entities = [
  {
    name: 'Spirit',
    key: SPIRIT,
    evidence: [
      EMF_5,
      SPIRIT_BOX,
      GHOST_WRITING,
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
      EMF_5,
      SPIRIT_BOX,
      DOTS_PROJECTOR,
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
      SPIRIT_BOX,
      FINGERPRINTS,
      DOTS_PROJECTOR,
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
      SPIRIT_BOX,
      FINGERPRINTS,
      GHOST_WRITING,
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
      FINGERPRINTS,
      GHOST_ORBS,
      DOTS_PROJECTOR,
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
      FINGERPRINTS,
      FREEZING_TEMPERATURES,
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
      SPIRIT_BOX,
      GHOST_ORBS,
      GHOST_WRITING,
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
      GHOST_ORBS,
      GHOST_WRITING,
      FREEZING_TEMPERATURES,
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
      GHOST_WRITING,
      FREEZING_TEMPERATURES,
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
      FINGERPRINTS,
      GHOST_WRITING,
      FREEZING_TEMPERATURES,
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
      GHOST_ORBS,
      FREEZING_TEMPERATURES,
      DOTS_PROJECTOR,
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
      FREEZING_TEMPERATURES,
      DOTS_PROJECTOR,
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
      FREEZING_TEMPERATURES,
    ],
    strengths: [
      'Lower temperatures can cause the Hantu to move at faster speeds.',
    ],
    weaknesses: [
      'A Hantu will move slower in warmer areas.',
    ],
    details: [
      'A Hantu is a rare ghost that can be found in hot climates.',
      'They are known to attack often during cold weather.',
    ],
  },
  {
    name: 'Yokai',
    key: YOKAI,
    evidence: [
      SPIRIT_BOX,
      GHOST_ORBS,
      DOTS_PROJECTOR,
    ],
    strengths: [
      'Talking near a Yokai will anger it and increase its chance of attacking.',
    ],
    weaknesses: [
      'When hunting, a Yokai can only hear voices close to it.',
    ],
    details: [
      'A Yokai is a common type of ghost that is attracted to human voices.',
      'They can usually be found haunting family homes.',
    ],
  },
  {
    name: 'Goryo',
    key: GORYO,
    evidence: [EMF_5, FINGERPRINTS, DOTS_PROJECTOR],
    strengths: [
      'A Goryo will usually only show itself on camera if there are no people nearby.',
    ],
    weaknesses: [
      'They are rarely seen far from their place of death.',
    ],
    details: [
      'Using a video camera is the only way to view a Goryo, when it passes through a D.O.T.S. Projector',
    ],
  },
  {
    name: 'Myling',
    key: MYLING,
    evidence: [
      EMF_5,
      FINGERPRINTS,
      GHOST_WRITING,
    ],
    strengths: [
      'A Myling is known to be quieter when hunting.',
    ],
    weaknesses: [
      'Mylings more frequently make paranormal sounds.',
    ],
    details: [
      'A Myling is a very vocal and active ghost.',
      'They are rumoured to be quiet when hunting their prey.',
    ],
  },
  {
    name: 'Onyro',
    key: ONYRO,
    evidence: [
      SPIRIT_BOX,
      GHOST_ORBS,
      FREEZING_TEMPERATURES,
    ],
    details: [
      'The Onryo is often referred to as "The Wrathful Spirit".',
      'It steals souls from dying victims\'s bodies to seek revenge.',
      'This ghost has been known to fear any form of file, and will do anything to be far away from it.',
    ],
    strengths: [
      'Extinguishing a flame can cause an Onyro to attack.',
    ],
    weaknesses: [
      'When threatened, this ghost will be less likely to hunt.',
    ],
  },
  {
    name: 'The Twins',
    key: THE_TWINS,
    evidence: [
      EMF_5,
      SPIRIT_BOX,
      FREEZING_TEMPERATURES,
    ],
    details: [
      'These ghosts have been reported to mimic each other\'s actions.',
      'They alternate their attacks to confuse their prey.',
    ],
    strengths: [
      'Either Twin can be angered and initiate an attack on their prey.',
    ],
    weaknesses: [
      'The Twins will often interact with the environment at the same time.',
    ],
  },
  {
    name: 'Raiju',
    key: RAIJU,
    evidence: [
      EMF_5,
      GHOST_ORBS,
      DOTS_PROJECTOR,
    ],
    details: [
      'A Raiju is a demon that thrives on electrical current.',
      'While generally calm, they can become agitated when overwhelmed with power.',
    ],
    strengths: [
      'A Raiju can siphon power from nearby electrical devices, making it move faster.',
    ],
    weaknesses: [
      'Raiju are constantly disrupting electronic equipment, making it easier to track when attacking.',
    ],
  },
  {
    name: 'Obake',
    key: OBAKE,
    evidence: [
      EMF_5,
      FINGERPRINTS,
      GHOST_ORBS,
    ],
    details: [
      'Obake are terrifying shape-shifters, capable of taking of many forms.',
      'They have been seen taking on humanoid shapes to attract their prey.',
    ],
    strengths: [
      'When interacting with the environment, an Obake will rarely leave a trace.',
    ],
    weaknesses: [
      'Sometimes, this ghost will shape-shift, leaving behind unique evidence.',
    ],
  },
  {
    name: 'The Mimic',
    key: THE_MIMIC,
    evidence: [
      SPIRIT_BOX,
      FINGERPRINTS,
      FREEZING_TEMPERATURES,
    ],
    details: [
      'The Mimic is an elusive, mysterious, copycat ghost that mirrors traits and behaviours from others, including other ghost types.',
    ],
    strengths: [
      'We\'re unsure what this ghost is capable of',
      'Be careful.',
    ],
    weaknesses: [
      'Several reports have noted ghost orb sightings near mimics.',
    ],
  },
];
