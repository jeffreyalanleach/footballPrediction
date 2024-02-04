// Random number generator that takes in a value to determine the max possible number
function generateRandomNumber(num) {
    return Math.floor(Math.random() * num)
  }

  // Array of Possible Football Predictions 
  const footballPredictions = {
    superBowlWinner: ['San Francisco 49s', 'Green Bay Packers', 'Dallas Cowboys', 'Baltimore Ravens', 'Las Vegas Raiders', 'Tampa Bay Buccanneers', 'Cincinnati Bengals', 'Buffalo Bills', 'Kansas City Chiefs'],
    qbMvp: ['Patrick Mahomes', 'CJ Stroud', 'Daryll Hartley', 'Josh McDaniels', 'Baker Mayfield', 'Tua Tungoviolia', ],
    coachOfTheYear: ['Tom Ryan', 'John Harbaugh', 'John Madden', 'Andy Reid'],
    fantasyWinner: ['Marc Miller', 'Jeffrey Leach', 'Kevin Sauer', 'Alexa Cerra', 'Jennifer Leach', 'Seth Subert']
  }
  
  // An Array to store the predictions that are generated
  let finalPrediction = []
  
  // This for loop will iterate through each entry in the footballPredictions object
  // When it calls the random number generator it sends the length of the array as the input that is the highest possible number
  for(let pred in footballPredictions) {
    let i = generateRandomNumber(footballPredictions[pred].length)
  
    // use the object's properties to customize the message being added to personalWisdom  
    switch(pred) {
      case 'superBowlWinner':
        finalPrediction.push(`Next year's superbowl champion will be: "${footballPredictions[pred][i]}".`)
        break

      case 'qbMvp':
        finalPrediction.push(`The most valuable QB winner will be: "${footballPredictions[pred][i]}".`)
        break

      case 'coachOfTheYear':
        finalPrediction.push(`The Coach of the Year will be: "${footballPredictions[pred][i]}".`)
        break

      case 'fantasyWinner':
        finalPrediction.push(`The winner of the fantasy football league will be: "${footballPredictions[pred][i]}".`)
        break

  
      default:
        finalPredication.push('There is not enough info.')
    }
  }
  
  function formatPrediction(prediction) {
    // Add some ASCII here?
    // Add in more symbols to the array? like emojies or what not?
    const formatted = finalPrediction.join('\n')
    console.log(formatted)
  }
  
  formatPrediction(finalPrediction);