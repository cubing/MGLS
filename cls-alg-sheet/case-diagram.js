
function caseToTable(s) {
  var table = document.createElement("table");
  for (var j = 0; j < 3; j++) {
    var tr = document.createElement("tr");
    table.appendChild(tr)
    for (var k = 0; k < 3; k++) {
      var td = document.createElement("td");
      td.classList.add(s[j * 3 + k]);
      tr.appendChild(td)
    }
  }
  return table;
}

function makeDiagrams() {
  var cases = document.getElementsByClassName("case");
  for (var i = 0; i < cases.length; i++) {
    var c = cases[i];

    var shadowRoot = c.createShadowRoot();
    shadowRoot.appendChild(caseToTable(c.getAttribute("data-case")));
  }
}