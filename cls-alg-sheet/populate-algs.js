
function populateAlgs(csvString) {
  data = csvString.csvToArray({rSep: "\n"});

  var done = {};

  for (var i in data) {
    var line = data[i];
    if (line[0].match(/^([-\+OIC]|(Im))\d\d?/)) {
      var select = line[0].replace("-", "m").replace("+", "p").replace("O", "o");
      if (!(select in done)) {
        done[select] = line[2];

        var cell = document.querySelector("td[data-case=" + select + "]")
        var caseName = document.createElement("span");
        caseName.classList.add("case-name");
        caseName.textContent = line[0];
        cell.appendChild(caseName);

        if (line[7] && (line[7].match("learn") || line[7].match("LEARN"))){
          caseName.classList.add("learn");
        }

        var alg = document.createElement("a");
        alg.textContent += line[2];
        alg.href = "https://alg.cubing.net?stage=CLS&type=alg&alg=" + line[3];
        cell.appendChild(alg);
      }
    }
  }
}
