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

  sortTable();
}

$addButton.addEventListener('click', goToAdd);
renderTime();
$form.addEventListener('submit', saveEntry);
$weekButtons.addEventListener('click', updateTable);

// Lindsey's sort:
function sortTable() {
  var rows, switching, i, x, y, shouldSwitch;

  switching = true;
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // start by saying: no switching is done:
    switching = false;
    rows = $tableEntries.rows;
    /* Loop through all table rows (except the
    first, which contains table headers): */
    for (i = 1; i < (rows.length - 1); i++) {
      // start by saying there should be no switching:
      shouldSwitch = false;

      /* Get the two elements you want to compare,
      one from current row and one from the next: */
      x = $tableEntries.rows.item(i).cells[0].textContent;
      y = $tableEntries.rows.item(i + 1).cells[0].textContent.split(':')[0];
      // check if the two rows should switch place:
      if (y !== '') {
        if (+x.split(':')[0] > +y.split(':')[0]) {
        // if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
      // end of entry if
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}
