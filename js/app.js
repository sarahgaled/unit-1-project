/*-------------------------------- Constants --------------------------------*/

const colorScheme = {
    dark: "",
    change: function(){
        console.log(colorScheme.dark)
        colorScheme.dark = colorScheme.dark ? "" : "dark"
        document.querySelector("body").setAttribute("class", colorScheme.dark)
        console.log(colorScheme.dark)
    }
}

/*-------------------------------- Variables --------------------------------*/

let story

let selectedCategory = ""


let nounList = ['abandoned home', 'airfield', 'amusement park', 'antique shop', 'apple orchard', 'arena', 'auction house', 'Bangkok, Thailand', 'bathroom', 'bazaar', 'bridge', 'Cabo', 'cafeteria', 'cemetery', 'chamber', 'church', 'construction site', 'cornfield', 'courthouse', 'crack house', 'factory reset button', 'blood rage', 'idiot', 'toaster', 'legend', 'death wish', 'therapy', 'goal in life', 'marketing idea', 'psychic', 'knife', 'sandwich', 'hunting ground', 'lettuce', 'kitty', 'friendly grandma', 'french chef', 'antidepressant drug']


let adjectiveList = ['dead', 'hairless', 'sadistic', 'metal', 'wild', 'domesticated', 'abnormal', 'medicated', 'cocky', 'massive', 'disrespectful', 'impressive', 'out of control', 'internet worthy', 'hilarious', 'sexy', 'hot', 'very tactful', 'bearded', 'duck-like', 'violent', 'slimy', 'insanely creepy', 'embarrassed to the bone', 'self-centered', 'talking', 'naked', 'angry', 'shaky', 'deep', 'sick', 'zippy', 'sticky', 'fluffy', 'frozen', 'unholy', 'painfully honest', 'filthy', 'fighting', 'bonkers', 'harsh', 'frisky', 'greedy', 'crawly', 'insane', 'hideous', 'ungodly', 'abusive', 'drunken', 'hateful', 'idiotic', 'twisted', 'useless', 'yapping', 'magical', 'indecent', 'godawful', 'arrogant', 'confused', 'flirting', 'high-end', 'insecure', 'maniacal']


let verbList = ['surround', 'stab', 'return', 'medicate', 'blindside', 'boogie', 'flap', 'trip', 'swat', 'suck in', 'harass', 'trap', 'snoop', 'explode', 'sketch', 'scatter', 'challenge', 'fight', 'bury', 'splatter', 'smack', 'peddle', 'balance', 'trip up', 'boggle', 'poke', 'critique', 'fear', 'initiate', 'line up', 'run over', 'schedule', 'cook', 'imprison', 'underestimate', 'cajole', 'wheedle', 'soft soap', 'butter up', 'sweet-talk', 'prevail', 'shred', 'drink', 'dispute', 'echo', 'mimic', 'berate', 'castigate', 'underrate', 'taunt']


let adverbList = ['tightly', 'joyously', 'shyly', 'unaccountably', 'frantically', 'dreamily', 'evenly', 'enormously', 'loudly', 'joyfully', 'quaintly', 'afterwards', 'eventually', 'nervously', 'truthfully', 'fortunately', 'daily', 'poorly', 'frightfully', 'equally', 'less', 'annually', 'officially', 'acidly', 'wildly', 'dimly', 'readily', 'weakly', 'fiercely', 'quietly', 'perfectly', 'judgmentally', 'regularly', 'gently', 'madly', 'knowledgeably', 'scarily', 'helpfully', 'enormously', 'mostly', 'gladly', 'greatly', 'frightfully', 'woefully', 'irritably', 'fortunately', 'utterly', 'heavily', 'extremely', 'enthusiastically', 'reluctantly', 'patiently', 'kindly', 'faithfully', 'courageously', 'shakily', 'politely', 'daringly', 'powerfully', 'lazily', 'diligently', 'ingeniously', 'keenly', 'nearly', 'beautifully', 'cheerfully', 'physically', 'promptly', 'victoriously', 'unnecessarily', 'ferociously', 'stealthily', 'foolishly', 'valiantly', 'daintily', 'joyfully']


let pluralNounList = ['axes', 'heroes', 'crises', 'businesses', 'viruses', 'phenomena', 'mongooses', 'software', 'equipment', 'platypuses', 'dice', 'oxen', 'sheep']

/*------------------------ Cached Element References ------------------------*/

const madlibContent = document.getElementById("madlib-content")
const libIt = document.querySelector(".generate-madlib")
const reset = document.querySelector(".reset")
const form = document.querySelector("#form")
const noun = document.querySelector("#noun")
const verb = document.querySelector("#verb")
const adjective = document.querySelector("#adjective")
const adverb = document.querySelector("#adverb")
const pluralNoun = document.querySelector("#plural-noun")
const messageElement = document.querySelector("#message")
const randomNoun = document.querySelector("#random-noun")
const randomVerb = document.querySelector("#random-verb")
const randomAdjective = document.querySelector("#random-adjective")
const randomAdverb = document.querySelector("#random-adverb")
const randomPluralNoun = document.querySelector("#random-plural-noun")
const totallyRandom = document.querySelector("#totally-random-button")
const categoryContainer = document.querySelector('.category-container')
const specialButton = document.getElementById('magic')
const friends = document.querySelector(".friends")
const corporateAmerica = document.querySelector(".ca")
const groceries = document.querySelector(".groceries")
const parties = document.querySelector(".parties")
const lightDarkBtn = document.querySelector("#light-dark-button")
categoryContainer.style.display = 'visible'

/*----------------------------- Event Listeners -----------------------------*/

// lightDarkBtn.addEventListener("click", colorScheme.change)

randomNoun.addEventListener('click', autoFillNoun)
randomVerb.addEventListener('click', autoFillVerb)
randomAdjective.addEventListener('click', autoFillAdjective)
randomAdverb.addEventListener('click', autoFillAdverb)
randomPluralNoun.addEventListener('click', autoFillPluralNoun)
friends.addEventListener('click', setCategory)
corporateAmerica.addEventListener('click', setCategory)
groceries.addEventListener('click', setCategory)
parties.addEventListener('click', setCategory)
totallyRandom.addEventListener('click', totalAutoFill)
libIt.addEventListener('click', generateStory)
reset.addEventListener("click", resetStory)
form.addEventListener("submit", generateStory)
lightDarkBtn.addEventListener("click", colorScheme.change)
/*-------------------------------- Functions --------------------------------*/

checkUserColorSchemePreference()

function checkUserColorSchemePreference(){
    if(
        window.matchMedia("(prefers-color-scheme:dark").matches && !colorScheme.dark
    ){
        colorScheme.change()
    }
}

function generateStory(event) { //grab the input values to generate the story
    event.preventDefault()
    console.log('running')
    let noun = document.getElementById('noun').value
    let verb = document.getElementById('verb').value
    let adjective = document.getElementById('adjective').value
    let adverb = document.getElementById('adverb').value
    let pluralNoun = document.getElementById('plural-noun').value


    if (noun && verb && adjective && adverb && pluralNoun) {

        if (selectedCategory === 'groceries'){
            madlibContent.innerText = `Oh, the ${noun} outside is ${adjective}, But the ${noun} is so ${adjective}, and since we've no place to ${verb}, Let it snow, let it snow, let it snow`
        }
        if (selectedCategory === 'parties'){
            madlibContent.innerText = `Parties are ${noun} and I can't ${adjective} them ${verb} enough`
        }
    
        if (selectedCategory === 'friends'){
            madlibContent.innerText = `Friends are ${noun} and I can't ${adjective} them ${verb} enough`
        }
    
        if (selectedCategory === 'ca'){
            madlibContent.innerText = `Corporate America are ${noun} and I can't ${adjective} them ${verb} enough`

        } if (selectedCategory === "") {
            madlibContent.innerText = `There are too many ${pluralNoun} on this ${noun} that are ${verb} too loud. Someone please ${verb} what your ${verb}  ah this sun is too ${adjective}, please someone do something about it ${adverb}`
        }
        
    }

}

function resetStory() { //reseting all the inputs to strings which essentially resets the story
    noun.value = ""
    verb.value = ""
    adjective.value = ""
    adverb.value = ""
    pluralNoun.value = ""

    madlibContent.innerHTML = ""

    toggleVisibility()
}

function generateRandom(choicesArr) {

    let randomItem
    randomItem = choicesArr[Math.floor(Math.random() * choicesArr.length)]
    return randomItem
}

function autoFillNoun() {
    noun.value = generateRandom(nounList)
}

function autoFillVerb() {
    verb.value = generateRandom(verbList)
}

function autoFillAdjective() {
    adjective.value = generateRandom(adjectiveList)
}

function autoFillAdverb() {
    adverb.value = generateRandom(adverbList)
}

function autoFillPluralNoun() {
    pluralNoun.value = generateRandom(pluralNounList)
}

function totalAutoFill() {
    noun.value = generateRandom(nounList)
    verb.value = generateRandom(verbList)
    adjective.value = generateRandom(adjectiveList)
    adverb.value = generateRandom(adverbList)
    pluralNoun.value = generateRandom(pluralNounList)
}



function toggleVisibility(){
  
    // if (categoryContainer.style.visibility === 'visible') {
    // } else {
        categoryContainer.style.visibility = 'visible'
    // }
    console.log(`visibility is ${categoryContainer.style.visibility}`)
    
}

function setCategory(evt){   
    
    selectedCategory = evt.target.id
    console.log(selectedCategory)
    categoryContainer.style.visibility = 'hidden'
    
}




  //categoryContainer.style.display= 'none'