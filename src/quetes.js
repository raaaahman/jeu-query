class Quest {
  constructor () {
    this.message = 'Faites apparaître la carte du royaume.'
    this.solution = '$(\'#royaume\').show()'
  }

}

$(document).ready(function() {
  let questLog = $('.quete')
  let currentQuest = new Quest()

  questLog.children('p').text(currentQuest.message)
});
