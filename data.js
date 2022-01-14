/* exported data */
var data = {
  sunday: [],
  monday: [],
  tuesday: [],
  wednesday: [],
  thursday: [],
  friday: [],
  saturday: [],
  id: 1
};

var previousEntriesJSON = localStorage.getItem('data-local-storage');
if (previousEntriesJSON !== null) {
  data = JSON.parse(previousEntriesJSON);
}

function beforeunloadHandler(event) {

  var dataJSON = JSON.stringify(data);
  localStorage.setItem('data-local-storage', dataJSON);
}

window.addEventListener('beforeunload', beforeunloadHandler);
