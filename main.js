/* global data */
var $addButton = document.getElementById('add-button');
var $modal = document.getElementById('entry-modal');
var $form = document.getElementById('entry-form');
var $timeSelection = document.getElementById('time-selection');
var $tableEntries = document.getElementById('table-entries');
var $weekButtons = document.getElementById('week-buttons');
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
    timeOfDay: timeOfDay,
    description: description,
    id: data.id
  };
  // if (data[dayOfWeek].length > 0) {
  //   for (var i = 0; i < data[dayOfWeek].length; i++) {
  //     var newDate = +entry.timeOfDay.split(':')[0];
  //     var oldDate = +data.dayOfWeek[i].timeOfDay.split(':')[0];
  //     var temp = 0;
  //     if (newDate < oldDate) {
  //       temp = oldDate;
  //       data[dayOfWeek][i] = newDate;
  //     } else {
  //     }
  //   }
  // }
  data[dayOfWeek].unshift(entry);
  data.id++;
}

function updateTable(event) {
  var day = event.target.textContent.toLowerCase();
  var size = 8;
  if (data[day].length <= 7) {
    size = data[day].length;
  }
  // console.log(typeof +(data[day][0].timeOfDay.split(':')[0]));
  for (var i = 1; i <= size; i++) {
    // for (var j = 0; j < 24; j++) {
    //   for (var k = 0; k M)
    //   if (+(data[day][i - 1].timeOfDay.split(':')[0]) === j) {
    //     console.log(+(data[day][i - 1].timeOfDay.split(':')[0]));
    //     $tableEntries.rows.item(i).cells[0].textContent = data[day][i - 1].timeOfDay;
    //     $tableEntries.rows.item(i).cells[1].textContent = data[day][i - 1].description;
    //   }
    // }
    $tableEntries.rows.item(i).cells[0].textContent = data[day][i - 1].timeOfDay;
    $tableEntries.rows.item(i).cells[1].textContent = data[day][i - 1].description;
  }
}
$addButton.addEventListener('click', goToAdd);
renderTime();
$form.addEventListener('submit', saveEntry);
$weekButtons.addEventListener('click', updateTable);
