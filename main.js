var $addButton = document.getElementById('add-button');
var $modal = document.getElementById('entry-modal');
// var $form = document.getElementById('entry-form');
$addButton.addEventListener('click', goToAdd);

function goToAdd() {
  $modal.style.display = 'block';
}

//  function renderTime() {
//   var $timeOption = document.createElement('option');
//   $timeOption.setAttribute('value', timeIncrement);
// }
