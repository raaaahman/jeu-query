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
    self = this
    $.getJSON('assets/quetes/step' + id + '.json', function(data) {
      self.message = data.message
      self.solution = data.solution
    })
    /*
    this.id = newStep.id
    this.message = newStep.message
    this.solution = newStep.solution
    */
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

  questLog = new QuestLog($('.quete'))

  questLog.render()
});
