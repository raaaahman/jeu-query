class Quest {
  constructor (id) {
    this.id = id | 1
    this.stepsNb = 1
    this.step = new QuestStep(1)
  }


  update() {
    this.id++
  }
}

class QuestStep {
  constructor (id) {
    this.id = id
    this.message = 'Faites apparaître la carte du royaume.'
    this.solution = '$(\'#royaume\').show()'
  }
}

class QuestLog {
  /**
  * @param Takes a JQuery element
  */
  constructor (element) {
    this.element = element
    this.currentQuest = new Quest(1)
  }

  render() {
    this.element.children('p').text(this.currentQuest.step.message)
  }
}

$(document).ready(function() {
  let questLog = new QuestLog($('.quete'))
  let currentQuest = new Quest()

  questLog.render()
});
