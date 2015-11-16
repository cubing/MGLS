
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

        if (line[8] && (line[8].match("learn") || line[8].match("LEARN") || line[8].match("switch"))){
          caseName.classList.add("learn");
        }

        var alg = document.createElement("a");
        alg.textContent += line[2];
        alg.href = "https://alg.cubing.net?stage=CLS&type=alg&title=CLS Case " + line[0] + "&alg=" + line[3];
        cell.appendChild(alg);
      }
    }
  }
}
