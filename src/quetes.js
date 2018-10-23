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

$(document).ready(function() {
  let questLog = $('.quete')
  let currentQuest = new Quest()

  questLog.children('p').text(currentQuest.step.message)
});
