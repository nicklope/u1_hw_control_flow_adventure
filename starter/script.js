let name
let blood
let fav
let secret
let doll = 0
let intYear
const callIntro = () => {
  alert(
    'After an unusually long day, you finally lay your head to rest. Before even a moment goes by, you can feel yourself slipping away.'
  )
  askName()
}

const askName = () => {
  name = prompt('What is your name?')
  if (name === null || name === '') {
    alert('Thats not a name!')
    askName()
  } else {
    alert(
      `Ah yes, ${name}.  A fine name... ${name}... I should have known someone like you would have such a fine name.`
    )
    askFav()
  }
}

const askFav = () => {
  fav = prompt("What's your favorite thing? (one word)")
  if (fav === null || fav.includes(' ') || fav === '') {
    alert('I asked for ONE WORD! No spaces...')
    askFav()
  } else {
    alert(`${fav}... I see you appreciate the finer things.`)
  }
  askBlood()
}
let bloodTypes = ['O-', 'O+', 'A-', 'A+', 'B-', 'B+', 'AB-', 'AB+']
const askBlood = () => {
  blood = prompt("What's your blood type?(A+, B-, etc...)")
  if (blood === null || blood === '' || !bloodTypes.includes(blood)) {
    alert('Thats not a blood type!')
    askBlood()
  } else {
    enterHouse()
  }
}
const enterHouse = () => {
  alert(
    "You open your eyes and find yourself sitting on the floor of the home you grew up in.  The faint smell of a beloved relative's perfume lingers through the air.  You can hear what sounds like oldies playing on a radio from another room."
  )
  enterStranger()
}
const enterStranger = () => {
  alert(
    'From behind you, you hear a door open and shut.  The sound of footsteps grows closer until it stops. You feel a tap on your shoulder.'
  )
  shoulderTap()
}
const shoulderTap = () => {
  let tapped = prompt('What do you do? ([t]urn around? [d]ont turn around?)')
  switch (tapped) {
    case 't':
      turnAround()
      break
    case 'd':
      dontTurnAround()
      break
    default:
      shoulderTap()
      break
  }
}
const turnAround = () => {
  alert(
    'A lanky man dressed in a slick gray suit stares down at you.  Hes sporting a blindfold and michevious grin.  "Hello there :)"'
  )
  let yesNoSecrets = prompt('"Do you like secrets? :)" [y/n]')
  switch (yesNoSecrets) {
    case 'y':
      tellMeASecret()
      break
    case 'n':
      childhoodEnding()
      break
    default:
      turnAround()
      break
  }
}

const dontTurnAround = () => {
  alert(
    'The tapping becomes rapid and aggressive.  You can feel impatience behind each tap.'
  )
  shoulderTap()
}
const childhoodEnding = () => {
  alert(
    `A look of displeasure forms on the mans face.  His head begins to twist unnaturally until the back of his head is facing you. He walks backwards and exits the room from the door which he entered.  Your gaze returns forward.  You look down at your hands and realize they are younger than you remember.  You hear the voice of a loved one who passed call out \"${name}!! I'm so happy to see you! It's been so long. \"`
  )
  alert(
    'Overwhelmed with emotions, the realization that your dreaming washes over you. Rather than being upset by this realization, you ignore it.  It does not matter that you are going to wake up tomorrow.  Because tonight you get to be young again. And you are with someone you love.'
  )
  tryAgain()
}
const tryAgain = () => {
  let ynTry = prompt('Try Again? [y/n]')
  switch (ynTry) {
    case 'y':
      callIntro()
      break
    case 'n':
      tryAgain()
      break
    default:
      tryAgain()
      break
  }
}

const tellMeASecret = () => {
  secret = prompt('"Tell me a personal secret :)"')
  if (secret == 'no') {
    childhoodEnding()
  } else {
    alert('"Ahhhh...:)! What a wonderful secret! I wont te-"')
    enterCreature()
  }
}
const enterCreature = () => {
  alert(
    'The man is interrupted by what can best be described as some kind of vibration that is starting to fill the room. A look of displeasure forms on the mans face.  His head begins to twist unnaturally until the back of his head is facing you. He walks backwards and exits the room from the door which he entered.  Your gaze returns forward.'
  )
  alert(
    'In front of you, there is clearly somekind of disturbance in reality.  The air seems to be moving rapidly.  From the distortion you begin to see the form of an entity.  This entity seems to have a dark hole where its face should be and too many appendages to count.'
  )
  whatDo()
}
const whatDo = () => {
  let creaturePrompt = prompt('What do you do? ([r]un/[s]tay)')
  switch (creaturePrompt) {
    case 'r':
      runAway()
      break
    case 's':
      stayHome()
    default:
      whatDo()
  }
}
const runAway = () => {
  alert(
    'You quickly turn around and run out the door from which the grinning man entered'
  )
  enterBlizzard()
}
const stayHome = () => {
  alert(
    'The being begins to take shape.  Aside from a vacuous face, the beings appendages seem to be made up of unnatural geometry.  Weirdly, you do not feel that it harbours any malicious intent. (Though you do feel that staring long may not be healthy for your sanity)'
  )
  alert(
    `"${name}, C' ah like dreamer ahf' fhtagn ng ng ph'nglui ah'lw'nafh fhtagn.  Mgng ahf' ah dreamer?"`
  )
  alert(
    'An appendages extends from the being and pushes a small doll made up of twigs and human hair against your chest.  You have no choice but to accept.'
  )
  doll++
  alert('Obtained Ragged Doll!')
  alert(
    'The appendage raises over your shoulder and points to the door behind you.'
  )
  enterBlizzard()
}
const enterBlizzard = () => {
  alert(
    'You exit the room and are instantly greeted by howling wind and intense snowfall.  Visibility is nearly non-existant.  You turn around and the door is gone.'
  )
  blizzardWhatdo()
}
const blizzardWhatdo = () => {
  let blizzPrompt = prompt(
    'Realizing theres no where to go, you panic as you realize your options are limited to screaming for help, running through the storm, or curling up on the ground into a ball. What do you do? ([s]cream for help / [r]un away / [c]url into ball)'
  )
  switch (blizzPrompt) {
    case 's':
      alert('You scream for help...')
      alert('A voice far in the distance responds:')
      alert(
        `"KEEP IT DOWN! SOME OF US HAVE WORK IN THE MORNING!" (...hang on a second, that sounded like that guy who said ${secret}... what a creep...)`
      )
      blizzardWhatdo()
      break
    case 'r':
      blizzardRun()
      break
    case 'c':
      ballCurl()
      break
    default:
      blizzardWhatdo()
  }
}
const blizzardRun = () => {
  alert(
    'You sprint with all your strength into the white unknown.  After 5 seconds of running, you burst through the horizon and the cardboard bricks it was made up of.'
  )
  enterLiminalSpace()
}
const ballCurl = () => {
  alert(
    'You lie down on the ground, bring your knees to your chest and curl up like some kind of human armadillo.  Snow quickly begins to cover your body. You feel warm.  As your consciousness fades, something sticky suddenly slap into your side and pulls you out of the snow (and into the air!).'
  )
  enterMeatBall()
}
const enterMeatBall = () => {
  alert(
    'You look around and see the ground beneath you.  You look up and see that a tentacle is pulling you up into a giant oblong of twisted flesh and meat.'
  )
  alert('The tentacle pulls you into an orifice')
  alert(
    'Through the orifice, you are disposed of into a small hospital waiting room'
  )
  waitingRoomCall()
}
const waitingRoomCall = () => {
  alert(
    'After waiting for what felt like hours, a voice rings out over a PA system'
  )
  alert(`${name}, the doctor will see you now!`)
  alert('...')
  alert('It seems you have no choice but to get up and see the doctor...')
  alert(
    'You walk through a door and through a hallway to an examining room.  Everything seems normal...'
  )
  alert('You sit on the examining table and wait for the doctor to enter.')
  alert('...')
  alert(
    'After a few minutes, you hear a knock at the door.  A small balding man in a white lab coat enters the room.  He is smoking a cigarette.'
  )
  enterDoctor()
}
const enterDoctor = () => {
  alert(
    `Ah yes, Mr (Mrs?) ${name}... Bloodtype ${blood}... How old did you say you were?`
  )
  let birthYear = prompt('What year were you born?')
  let intYear = parseInt(birthYear, 10)
  if (intYear >= 1990) {
    alert(`"Woah ${intYear}?, your a baby! Kids today are so picky..."`)
    gainMedicine()
  } else {
    alert(
      `"Woah, ${intYear}? You are a boomer!  Boomers today are so picky..."`
    )
    gainMedicine()
  }
}
const gainMedicine = () => {
  if (intYear >= 1990) {
    alert('Obtained Green Pill! (Medicine for younguns)')
  } else {
    alert('Obtained Polka Dot Pill! (Medicine for olduns)')
  }
  alert(
    `"Oh, and by the way:  It isn't a good idea to go around telling strangers secrets. I heard that you are that person going around saying ${secret}.  Messed up stuff dude.`
  )
  takeMedicine()
}
const takeMedicine = () => {
  let pillPrompt = prompt(
    'Would you like to take the pill the doctor gave you? (y/n)'
  )
  switch (pillPrompt) {
    case 'y':
      deadEnding()
      break
    case 'n':
      payDoctor()
      break
    default:
      takeMedicine()
      break
  }
}

const payDoctor = () => {
  alert(
    `You know, ${name}, you're pretty smart for not taking that. You still have to pay for it though...`
  )
  let payPrompt = prompt(`What do you do? ([p]ay / [d]on't pay)`)
  if (payPrompt === 'p' && doll > 0) {
    trueEnding()
  } else if (payPrompt === 'p' && doll <= 0) {
    alert('You dont have any money to pay...')
  }
  alert(
    '"What?! you wont pay?? You are aware that money makes the world go round, right?!"'
  )
  alert(
    'The doctor quickly pulls a syringe from his pocket and injects a clear liquid into your neck'
  )
  alert(`"Goodbye, ${name}..."`)
  deadEnding()
}
const trueEnding = () => {
  alert('You hand the doctor the Ragged Doll.')
  alert('...')
  alert('"Oh.."')
  alert('"My..."')
  alert('"LORD!!!"')
  alert(
    '"I have wanted one of these since I was a child! Where did you find it?!"'
  )
  let wherePrompt = prompt('Where did you find it?')
  alert(
    `"${wherePrompt}...? That's crazy!! Regardless, allow me to thank you..."`
  )
  alert(
    'The eccentric doctor pulls a syringe with clear liquid from his labcoat and injects it into your neck.'
  )
  alert(
    '"You are lucid.  You have control over this world now.  Come and go as you please... You can be whoever / whatever you want here...'
  )
  alert('The End...')
  alert('...')
  tryAgain()
}

const enterLiminalSpace = () => {
  alert(
    'Surrounded by cardboard bricks, you find yourself in a large, artificially lit, carpeted room (Any room is better than the blizzard). The only things in the large room are support pillars.'
  )
  alert('From behind a pillar, a tortoise crawls out and towards you')
  tortChat()
}
const tortChat = () => {
  alert('The turtle speaks: "Emotions? Spare an emotion?"')
  let tortPrompt = prompt(
    'How do you respond? ([h]appiness / [s]adness / [a]nger)'
  )
  switch (tortPrompt) {
    case 'h':
      alert(
        'You laugh and smile at the upsurdity of the situation. The tortoise seems pleased and begins to laugh and smile with you.'
      )
      happyEnding()
      break
    case 's':
      alert(
        'You remember your childhood home and begin to tear up.  The tortoise joins in and begins to weep loudly'
      )
      sadEnding()
      break
    case 'a':
      alert(
        'You lash out at the tortoise for assuming you would give it YOUR precious emotions (Where does this guy get off?!)  The tortoise recipricates your feelings and grows angry as well.'
      )
      alert(
        'The tortoise begins to snap and wave its head around erraticly. Foam is coming from the tortoises mouth and flames from its eyes.  Its growing larger and larger'
      )
      tortFight()
      break
    default:
      tortChat()
      break
  }
}
const tortFight = () => {
  alert(
    'Now the size of a small SUV, the tortoise comes barreling towards you:'
  )
  alert(
    `As the turtle charges toward you, it is shouting: "I KNOW YOU'RE SECRET, I KNOW YOU SAID ${secret.toUpperCase()}, YOU FILTHY CREATURE!`
  )
  let fightPrompt = prompt(
    'Quick! What do you do?!([s]tand your ground / [j]ump out of the way / [f]all to your knees and cry)'
  )
  switch (fightPrompt) {
    case 's':
      alert(
        'You stand your ground.  The rampaging tortoise tramples you and starts ripping you to pieces.  Who knew you could feel pain in a dream?'
      )
      deadEnding()
      break
    case 'j':
      alert(
        'You jump out of the way and the tortoise smashes into one of the support pillars.'
      )
      alert(
        'The room begins to come crumbling down, burying the tortoise. You look up and see debris falling toward your face.'
      )
      neutralEnding()
      break
    case 'f':
      alert(
        'You fall to your knees and begin to cry.  The turtle stops in its tracks and begins to weep with you.'
      )
      sadEnding()
      break
    default:
      tortFight()
      break
  }
}
const happyEnding = () => {
  alert(
    'Suddenly, you find yourself in your bedroom.  You realize you woke up with a massive grin on your face'
  )
  alert(
    'Youre up for work with time to spare! You shower, get dressed, then look in the mirror.  Strange: You realize you have not stopped grinning since you woke up.'
  )
  tryAgain()
}
const sadEnding = () => {
  alert(
    'You feel tears welling up in your eyes.  The tears start streaming down your face and soak the pillow beneath your head.'
  )
  alert(
    'You are awake and safe in your bed!  You wipe away your tears and reflect on your childhood before getting ready to go to work.'
  )
  tryAgain()
}
const neutralEnding = () => {
  alert(
    'You jolt up out of bed and realize you were just having a strange dream'
  )
  alert(
    'You glance at the clock and realize you dont have to get ready for work for another few hours.'
  )
  tryAgain()
}
const deadEnding = () => {
  alert(
    'You suddenly wake up in your bed with extreme chest pain and numbness.  You realize something is not right.  Your last thoughts are of your childhood home and the grinning man...'
  )
  tryAgain()
}
callIntro()
// askName()
// askFav()
// askBlood()
// enterHouse()
// enterStranger()
