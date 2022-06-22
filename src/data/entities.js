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
export const ONRYO = 'onryo';
export const THE_TWINS = 'the_twins';
export const RAIJU = 'raiju';
export const OBAKE = 'obake';
export const THE_MIMIC = 'the_mimic';
export const MOROI = 'moroi';
export const DEOGEN = 'deogen';
export const THAYE = 'thaye';

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
    details: [
      'Spirits are very common ghosts. They are very powerful, but passive, only attacking when they need to. They defend their place of death to the utmost degree, killing anyone that is caught overstaying their welcome.',
    ],
    strengths: [
      'None.',
    ],
    weaknesses: [
      'A Spirit can be temporarily stopped by burning Smudge Sticks near them.',
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
    details: [
      'A Wraith is one of the most dangerous ghosts you will find. They are also the only known ghost that has the ability of flight and has sometimes been known to travel through walls.',
    ],
    strengths: [
      'Wraiths almost never touch the ground, meaning they can\'t be tracked with footsteps.',
    ],
    weaknesses: [
      'The Wraith reacts badly to Salt.',
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
    details: [
      'A Phantom is a ghost that can possess the living, inducing fear in those around them. They are most commonly summoned by Ouija Boards.',
    ],
    strengths: [
      'Looking at a Phantom will drop your sanity considerably faster.',
    ],
    weaknesses: [
      'Taking a photo of the Phantom will make them temporarily disappear.',
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
    details: [
      'One of the most famous ghosts, the Poltergeist. Known to manipulate objects around them to spread fear into their victims.',
    ],
    strengths: [
      'Poltergeists can throw multiple objects at once.',
    ],
    weaknesses: [
      'With nothing to throw, Poltergeists become powerless.',
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
    details: [
      'The singing siren, known for attracting their victims through song. They have been known to single out their prey before making a killing blow.',
    ],
    strengths: [
      'Banshees will weaken their target before striking.',
    ],
    weaknesses: [
      'Banshees can sometimes be heard screaming with a parabolic microphone.',
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
    details: [
      'A Jinn is a territorial ghost that will attack when threatened. They have also been known to be able to travel at significant speed.',
    ],
    strengths: [
      'A Jinn will travel at a faster speed if their victim is far away.',
    ],
    weaknesses: [
      'Turning off the location\'s power source will prevent the Jinn from using their ability.',
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
    details: [
      'A Mare is the source of all nightmares, making them most powerful in the dark.',
    ],
    strengths: [
      'A Mare will have an increased chance to attack in the dark.',
    ],
    weaknesses: [
      'Turning the lights on around the Mare will lower their chance to attack.',
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
    details: [
      'A Revenant is a violent ghost that will attack indiscriminately. Their speed can be deceiving, as they are slow while dormant; however, as soon as they hunt they can move incredibly fast.',
    ],
    strengths: [
      'A Revenant will travel at a significantly faster speed when hunting their prey.',
    ],
    weaknesses: [
      'Hiding from the Revenant will cause it to move very slowly.',
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
    details: [
      'A Shade is known to be very shy. There is evidence to suggest that a Shade will stop all paranormal activity if there are multiple people nearby.',
    ],
    strengths: [
      'Shades are much harder to find.',
    ],
    weaknesses: [
      'A Shade will not enter a hunt if there are multiple people nearby.',
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
    details: [
      'Demons are the most aggressive ghosts we\'ve ever encountered. Known to attack without reason, they seem to enjoy the thrill of the hunt.',
    ],
    strengths: [
      'Demons will initiate hunts more often than other ghosts.',
    ],
    weaknesses: [
      'Demons fear the Crucifix and will be less aggressive near one.',
    ],
  },
  {
    name: 'Yūrei',
    key: YUREI,
    evidence: [
      GHOST_ORBS,
      FREEZING_TEMPERATURES,
      DOTS_PROJECTOR,
    ],
    details: [
      'A Yūrei is a ghost that has returned to the physical world, usually for the purpose of revenge or hatred.',
    ],
    strengths: [
      'Yūreis have been known to have a stronger effect on people\'s sanity.',
    ],
    weaknesses: [
      'Smudging the Yūrei\'s place of death will trap it temporarily, reducing how much it wanders.',
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
    details: [
      'Onis love to scare their victims as much as possible before attacking. They are often seen in their physical form, guarding their place of death.',
    ],
    strengths: [
      'Onis are more active when people are nearby, and have been seen moving objects at great speed.',
    ],
    weaknesses: [
      'Onis are very active, making them easier to find.',
    ],
  },
  {
    name: 'Yōkai',
    key: YOKAI,
    evidence: [
      SPIRIT_BOX,
      GHOST_ORBS,
      DOTS_PROJECTOR,
    ],
    details: [
      'Yōkai are common ghosts that are attracted to human voices. They can usually be found haunting family homes.',
    ],
    strengths: [
      'Talking near a Yōkai will anger them, increasing the chance of an attack.',
    ],
    weaknesses: [
      'When hunting, a Yōkai can only hear voices close to them.',
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
    details: [
      'A Hantu is a rare ghost that thrives in the coldest climates. The cold seems to make them more aggressive and empowered.',
    ],
    strengths: [
      'Lower temperatures allow the Hantu to move at faster speeds.',
    ],
    weaknesses: [
      'Hantus move move slower in warmer areas.',
    ],
  },
  {
    name: 'Goryō',
    key: GORYO,
    evidence: [EMF_5, FINGERPRINTS, DOTS_PROJECTOR],
    details: [
      'When a Goryō ([ɡoɾʲoː]) passes through a D.O.T.S. projector, using a video camera is the only way to them.',
    ],
    strengths: [
      'A Goryō will usually only show themselves on camera if there are no people nearby.',
    ],
    weaknesses: [
      'They are rarely seen far from their place of death.',
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
      'A Myling ("mew-leeng") is a very vocal and active ghost. They are rumoured to be quiet when hunting their prey.',
    ],
  },
  {
    name: 'Onryō',
    key: ONRYO,
    evidence: [
      SPIRIT_BOX,
      GHOST_ORBS,
      FREEZING_TEMPERATURES,
    ],
    details: [
      'The Onryō is often referred to as "The Wrathful Spirit". It steals souls from dying victims\' bodies to seek revenge. This ghost has been known to fear any form of fire, and will do anything to be far from it.',
    ],
    strengths: [
      'Extinguishing a flame can cause an Onryō to attack.',
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
      'These ghosts have been reported to mimic each other\'s actions. They alternate their attacks to confuse their prey.',
    ],
    strengths: [
      'Either Twin can be angered and initiate an attack on their prey.',
    ],
    weaknesses: [
      'The Twins will often interact with the environment at the same time.',
    ],
  },
  {
    name: 'Raijū',
    key: RAIJU,
    evidence: [
      EMF_5,
      GHOST_ORBS,
      DOTS_PROJECTOR,
    ],
    details: [
      'A Raijū is a demon that thrives on electrical current. While generally calm, they can become agitated when overwhelmed with power.',
    ],
    strengths: [
      'A Raijū can siphon power from nearby electrical devices, making it move faster.',
    ],
    weaknesses: [
      'Raijū are constantly disrupting electronic equipment when attacking, making it easier to track.',
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
      'Obake are terrifying shape-shifters, capable of taking of many forms. They have been seen taking on humanoid shapes to attract their prey.',
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
    inconclusiveEvidence: [
      GHOST_ORBS,
    ],
    details: [
      'The Mimic is an elusive, mysterious, copycat ghost that mirrors traits and behaviours from others, including other ghost types.',
    ],
    strengths: [
      'We\'re unsure what this ghost is capable of. Be careful.',
    ],
    weaknesses: [
      'Several reports have noted ghost orb sightings near mimics.',
    ],
  },
  {
    name: 'Moroi',
    key: MOROI,
    details: [
      'Moroi have risen from the grave to drain energy from the living. They have been known to place curses on their victims, curable only by antidotes or moving very far away.',
    ],
    evidence: [
      SPIRIT_BOX,
      GHOST_WRITING,
      FREEZING_TEMPERATURES,
    ],
    strengths: [
      'The weaker their victims, the stronger the Moroi becomes.',
    ],
    weaknesses: [
      'Moroi suffer from hyperosmia (overwhelming sensitivity to smells), weakening them for longer periods.',
    ],
  },
  {
    name: 'Deogen',
    key: DEOGEN,
    details: [
      'Sometimes surrounded by an endless fog. Deogen (De Ogen) have been eluding ghost hunters for years.',
      'These ghosts have been reported to find even the most hidden prey, before stalking them into exhaustion.',
    ],
    strengths: [
      'Deogen constantly sense the living. You can run but you can\'t hide.',
    ],
    weaknesses: ['Deogen require a lot of energy to form and will move very slowly.'],
    evidence: [
      SPIRIT_BOX,
      GHOST_WRITING,
      DOTS_PROJECTOR,
    ],
  },
  {
    name: 'Thayé',
    key: THAYE,
    details: ['Thayé have been known to rapidly age over time, even in the afterlife. From what we\'ve learned, they seem to deteriorate faster while within the presence of the living.'],
    strengths: ['Upon entering the location, Thayé will become active, defensive and agile.'],
    weaknesses: ['Thayé will weaken over time, making them weaker, slower and less aggressive.'],
    evidence: [
      GHOST_ORBS,
      GHOST_WRITING,
      DOTS_PROJECTOR,
    ],
  },
];
