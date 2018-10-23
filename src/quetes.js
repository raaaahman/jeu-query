class Quest {
  constructor (id) {
    this.id = id | 1
    this.message = 'Faites apparaître la carte du royaume.'
    this.solution = '$(\'#royaume\').show()'
  }


  update() {
    this.id++
  }
}

$(document).ready(function() {
  let questLog = $('.quete')
  let currentQuest = new Quest()

  questLog.children('p').text(currentQuest.message)
});
