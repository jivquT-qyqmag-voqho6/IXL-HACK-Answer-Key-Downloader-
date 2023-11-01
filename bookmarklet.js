javascript:(function() {
  var answers = {};
  var questions = document.querySelectorAll('.question-container');
  for (var i = 0; i < questions.length; i++) {
    var question = questions[i].querySelector('.question-text').textContent.trim();
    var answer = questions[i].querySelector('.answer').textContent.trim();
    answers[question] = answer;
  }
  var data = JSON.stringify(answers);
  var file = new Blob([data], {type: 'text/plain'});
  var a = document.createElement('a');
  a.href = URL.createObjectURL(file);
  a.download = 'IXL_Answers.txt';
  a.click();
})();
