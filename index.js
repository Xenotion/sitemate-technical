// expecting time to be a string in the format like '8:15' or '12:30'

function splitTimeToHourMinute(time) {
  hour = time.split(':')[0]
  minute = time.split(':')[1]
  
  return [hour, minute]
}

const numToWords = { 
  '1': 'one', 
  '2': 'two', 
  '3': 'three', 
  '4': 'four', 
  '5': 'five', '6': 'six', '7': 'seven', '8': 'eight', '9': 'nine', '10': 'ten', '11': 'eleven', '12': 'twelve', '13': 'thirteen', '14': 'fourteen', '15': 'fifteen', '16': 'sixteen', '17': 'seventeen', '18': 'eighteen', '19': 'nineteen', '20': 'twenty', '21': 'twenty-one', '22': 'twenty-two', '23': 'twenty-three', '24': 'twenty-four', '25': 'twenty-five', '26': 'twenty-six', '27': 'twenty-seven', '28': 'twenty-eight', '29': 'twenty-nine'
}

function convertTimeToWords(time) {
  
  // TODO: cover edge cases (e.g. valid input)

  // TODO: real code goes here!
  if (time === '0:00') {
    return 'midnight';
  }

  if (time === '12:00') {
    return 'midday'
  }

  if (splitTimeToHourMinute(time)[1] == '00') {
    return numToWords[splitTimeToHourMinute(time)[0]] + " o'clock"
  }

  if (splitTimeToHourMinute(time)[1] == '30') {
    return "half past " + numToWords[splitTimeToHourMinute(time)[0]]
  }

  if (splitTimeToHourMinute(time)[1] == '15') {
    return "quarter past " + numToWords[splitTimeToHourMinute(time)[0]]
  }

  if (Number(splitTimeToHourMinute(time)[1]) < 30) {
    return splitTimeToHourMinute(time)[1] + " past " + numToWords[splitTimeToHourMinute(time)[0]]
  }

  if (Number(splitTimeToHourMinute(time)[1]) > 30) {
    return numToWords[60 - Number(splitTimeToHourMinute(time)[1])] + " to " + numToWords[1 + Number(splitTimeToHourMinute(time)[0])]
  }
}

module.exports = { convertTimeToWords };
