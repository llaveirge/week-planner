/* global data */
var $addButton = document.getElementById('add-button');
var $modal = document.getElementById('entry-modal');
var $form = document.getElementById('entry-form');
var $timeSelection = document.getElementById('time-selection');
// var $tableEntries = document.getElementById('table-entries');
function goToAdd(event) {
  $modal.style.display = 'block';
}

function renderTime() {
  var timeIncrement = '';
  for (var i = 0; i < 24; i++) {
    var $timeOption = document.createElement('option');
    timeIncrement = i + ':00';
    $timeOption.setAttribute('value', timeIncrement);
    $timeOption.textContent = timeIncrement;
    $timeSelection.appendChild($timeOption);
  }
}

function saveEntry(event) {
  event.preventDefault();
  var formData = new FormData($form);
  var dayOfWeek = formData.get('day-selection');
  var timeOfDay = formData.get('time-selection');
  var description = formData.get('description');
  var entry = {
    dayOfWeek: dayOfWeek,
    timeOfDay: timeOfDay,
    description: description,
    id: data.id
  };
  // console.log(dayOfWeek);
  // console.log(timeOfDay);
  // console.log(description);
  data[dayOfWeek].unshift(entry);
  data.id++;
  // console.log(data);
}

// function updateTable(day) {
// console.log(data);
// var length = 8;
// if (data.day.length <= 7) {
//   length = data.day.length;
// }
// for (var i = 0; i < length; i++) {

// }
// }
$addButton.addEventListener('click', goToAdd);
renderTime();
$form.addEventListener('submit', saveEntry);
// updateTable();
// console.log(data.monday);
// console.log($tableEntries.rows.item(1).cells[1].textContent);
