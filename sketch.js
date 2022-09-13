let input
let button
let result

//sound
let sound_pop

function preload() {
  sound_pop = loadSound('Pop1.mp3')
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  //input
  input = createInput('Insert your dumb text here.')
  input.size(200, 20)
  input.style('font-family', 'Comic Sans MS');
  input.position(width / 2 - input.width / 2, height / 2 - input.height / 2 - 50)

  //button
  button = createButton('Generate Ub')
  button.style('background-color', 'white')
  button.position(width / 2 - button.width / 2, height / 2 - button.height / 2 + 0)
  button.mouseClicked(genUb)
}

function draw() {
  background(15);

  fill(255)
  textFont('Comic Sans MS')
  textAlign(CENTER)
  textSize(20)
  text(result,width/2,height/2+50)
}

function genUb() {
  sound_pop.play()
  let inp = input.value()
  let types = /a|e|i|o|u/ig
  let thisresult = inp.replaceAll(types, 'ub')
  result = thisresult
  console.log(thisresult)
}
