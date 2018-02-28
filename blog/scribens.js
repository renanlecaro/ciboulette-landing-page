var Scribens = {
  Init: false,
  InitFinished: false,
  Body: null,
  TextPrec: "",
  WindowSc: null,
  TextChanged: false,
  FocusLock: false,
  Check: function (id) {
    var result = Scribens.Get_TextArea(id);
    if (result) {
      Scribens.Body = result[0];
      if (Scribens.Init == false) {
        Scribens.Init = true;
        var found = result[1];
        if (found) {
          found.addEventListener("focus", function () {
            Scribens.FocusLock = true
          }, false)
        }
        ;window.addEventListener("focus", function () {
          Scribens.FocusLock = true
        }, false)
      }
      ;
      if (Scribens.WindowSc == null || Scribens.WindowSc.closed) {
        Scribens.InitFinished = false;
        Scribens.CreateNewWindow("en")
      } else {
        Scribens.FocusLock = true;
        Scribens.WindowSc.focus();
        Scribens.WindowSc.postMessage("CHECK_TEXT:" + Scribens.GetText(Scribens.Body), "*")
      }
    }
  },
  Get_TextArea: function (id) {
    if (id != null) {
      var element = document.getElementById(id);
      if (element != null) {
        if (element.nodeName == "IFRAME") {
          var contentWindow = element.contentWindow;
          if (contentWindow) {
            var result = new Object();
            result[0] = element.contentDocument.body;
            result[1] = contentWindow;
            return result
          }
        } else {
          if (element.nodeName == "DIV") {
            var result = new Object();
            result[0] = element;
            result[1] = null;
            return result
          } else {
            if (element.nodeName == "TEXTAREA" || (element.nodeName == "INPUT" && element.getAttribute("type") && element.getAttribute("type") == "text")) {
              var result = new Object();
              result[0] = element;
              result[1] = null;
              return result
            }
          }
        }
      } else {
        alert("Text area not found. Please enter another Id.")
      }
    } else {
      var iframes = document.getElementsByTagName("IFRAME");
      for (var i = 0; i < iframes.length; i++) {
        var _0x3914x9 = iframes[i];
        var contentWindow = _0x3914x9.contentWindow;
        if (contentWindow) {
          var _0x3914xa = _0x3914x9.contentDocument.body;
          var _0x3914xb = _0x3914xa.getAttribute("contenteditable");
          if (_0x3914xb && _0x3914xb == "true") {
            var result = new Object();
            result[0] = _0x3914xa;
            result[1] = contentWindow;
            return result
          }
        }
      }
      ;var _0x3914xc = document.getElementsByTagName("DIV");
      for (var i = 0; i < _0x3914xc.length; i++) {
        var _0x3914xd = _0x3914xc[i];
        var _0x3914xb = _0x3914xd.getAttribute("contenteditable");
        if (_0x3914xb && _0x3914xb == "true") {
          var result = new Object();
          result[0] = _0x3914xd;
          result[1] = null;
          return result
        }
      }
      ;var _0x3914xe = document.getElementsByTagName("TEXTAREA");
      for (var i = 0; i < _0x3914xe.length; i++) {
        var _0x3914xf = _0x3914xe[i];
        var result = new Object();
        result[0] = _0x3914xf;
        result[1] = null;
        return result
      }
      ;var _0x3914x10 = document.getElementsByTagName("INPUT");
      for (var i = 0; i < _0x3914x10.length; i++) {
        var _0x3914x11 = _0x3914x10[i];
        var _0x3914x12 = _0x3914x11.getAttribute("type");
        if (_0x3914x12 && _0x3914x12 == "text") {
          var result = new Object();
          result[0] = _0x3914x11;
          result[1] = null;
          return result
        }
      }
    }
    ;
    return null
  },
  OnMessage: function (_0x3914x13) {
    var _0x3914x14 = _0x3914x13.data;
    var _0x3914x15 = _0x3914x14.indexOf("_");
    var _0x3914x16 = -1;
    if (_0x3914x15 > 0) {
      _0x3914x16 = parseInt(_0x3914x14.substr(0, _0x3914x15));
      _0x3914x14 = _0x3914x14.substr(_0x3914x15 + 1, _0x3914x14.length - (_0x3914x15 + 1))
    }
    ;
    if (_0x3914x14 == "INIT_FINISHED") {
      Scribens.InitFinished = true;
      Scribens.TextPrec = Scribens.GetTotalText(Scribens.Body);
      Scribens.WindowSc.postMessage("CHECK_TEXT:" + Scribens.GetText(Scribens.Body), "*")
    } else {
      if (_0x3914x14 == "FOCUS" && Scribens.InitFinished == true) {
        var _0x3914x17 = Scribens.GetTotalText(Scribens.Body);
        if ((_0x3914x17 != Scribens.TextPrec) || (Scribens.TextChanged == true)) {
          if (Scribens.FocusLock == true) {
            Scribens.TextChanged = false;
            Scribens.WindowSc.postMessage("CHECK_TEXT:" + Scribens.GetText(Scribens.Body), "*")
          }
        }
        ;Scribens.TextPrec = _0x3914x17;
        Scribens.FocusLock = false
      } else {
        if (_0x3914x14.indexOf("REP:") == 0 || _0x3914x14.indexOf("REM:") == 0) {
          var _0x3914x18 = _0x3914x14.substr(4, (_0x3914x14.length - 4));
          var _0x3914x19 = _0x3914x18.split(";");
          var _0x3914x1a = (_0x3914x14.indexOf("REM:") == 0);
          var _0x3914x1b = Scribens.ReplaceWord(parseInt(_0x3914x19[0]), parseInt(_0x3914x19[1]), parseInt(_0x3914x19[2]), parseInt(_0x3914x19[3]), _0x3914x19[4], _0x3914x19[5], _0x3914x1a, Scribens.Body, false);
          if (_0x3914x1b == true) {
            Scribens.TextChanged = true
          } else {
            Scribens.WindowSc.postMessage("CHECK_TEXT:" + Scribens.GetText(Scribens.Body), "*");
            Scribens.WindowSc.postMessage("PB_REMPLACEMENT", "*")
          }
          ;Scribens.TextPrec = Scribens.GetTotalText(Scribens.Body)
        }
      }
    }
  },
  CreateNewWindow: function (language) {
    var _0x3914x1d = 1200;
    var _0x3914x1e = 600;
    var _0x3914x1f = (screen.width / 2) - (_0x3914x1d / 2);
    var _0x3914x20 = (screen.height / 2) - (_0x3914x1e / 2);
    var _0x3914x21 = "";
    if (language == "fr") {
      _0x3914x21 = "https://www.scribens.fr"
    } else {
      if (language == "en") {
        _0x3914x21 = "https://www.scribens.com"
      }
    }
    ;Scribens.WindowSc = window.open(_0x3914x21 + "/plugin.html?plugin=Wysiwyg&&version=2&&idclient=1", "1", "width=" + _0x3914x1d + ",height=" + _0x3914x1e + ",left=" + _0x3914x1f + ",top=" + _0x3914x20 + ",titlebar=no");
    window.addEventListener("message", Scribens.OnMessage, false)
  },
  Text: "",
  CntP: 0,
  Range: null,
  CntChar: 0,
  LockRangeStart: false,
  LockRangeEnd: false,
  LockAdd: false,
  LockFirstTextNode: false,
  CntP: 0,
  GetText: function (_0x3914x22) {
    if (_0x3914x22.nodeName == "TEXTAREA" || (_0x3914x22.nodeName == "INPUT" && _0x3914x22.getAttribute("type") && _0x3914x22.getAttribute("type") == "text")) {
      var _0x3914x23 = "";
      var _0x3914x19 = _0x3914x22.value.split("↵");
      for (var i = 0; i < _0x3914x19.length; i++) {
        _0x3914x23 += "[[[p]]]";
        _0x3914x23 += _0x3914x19[i]
      }
      ;
      return _0x3914x23
    } else {
      Scribens.Text = "";
      Scribens.CntP = 0;
      Scribens.GetP(_0x3914x22, -1, -1, -1, null);
      return Scribens.Text
    }
  },
  GetTotalText: function (_0x3914x22) {
    if (_0x3914x22.nodeName == "TEXTAREA" || (_0x3914x22.nodeName == "INPUT" && _0x3914x22.getAttribute("type") && _0x3914x22.getAttribute("type") == "text")) {
      return _0x3914x22.value
    } else {
      return Scribens.GetText(_0x3914x22)
    }
  },
  HasText: function (_0x3914x22) {
    if (_0x3914x22.nodeName == "TEXTAREA" || (_0x3914x22.nodeName == "INPUT" && _0x3914x22.getAttribute("type") && _0x3914x22.getAttribute("type") == "text")) {
      return (_0x3914x22.value.length > 0)
    } else {
      return (_0x3914x22.textContent.length > 0)
    }
  },
  ReplaceWord: function (_0x3914x24, _0x3914x25, _0x3914x26, _0x3914x27, _0x3914x28, _0x3914x29, _0x3914x1a, _0x3914x22, _0x3914x2a) {
    if (_0x3914x28) {
      _0x3914x28 = _0x3914x28.replace("___pv___", ";")
    }
    ;
    if (_0x3914x29) {
      _0x3914x29 = _0x3914x29.replace("___pv___", ";")
    }
    ;var _0x3914x2b = (_0x3914x24 == _0x3914x26 && _0x3914x25 == _0x3914x27);
    if (_0x3914x22.nodeName == "TEXTAREA" || (_0x3914x22.nodeName == "INPUT" && _0x3914x22.getAttribute("type") && _0x3914x22.getAttribute("type") == "text")) {
      return Scribens.RepTextArea(_0x3914x24, _0x3914x25, _0x3914x26, _0x3914x27, _0x3914x28, _0x3914x29, _0x3914x1a, _0x3914x2b, _0x3914x22, _0x3914x2a)
    } else {
      document = _0x3914x22.ownerDocument;
      Scribens.Range = document.createRange();
      Scribens.CntChar = 0;
      Scribens.LockRangeStart = false;
      Scribens.LockRangeEnd = false;
      Scribens.LockAdd = false;
      Scribens.LockFirstTextNode = false;
      Scribens.CntP = 0;
      var textContentStr = null;
      if (_0x3914x2b) {
        textContentStr = _0x3914x28
      }
      ;Scribens.GetP(_0x3914x22, _0x3914x22, _0x3914x24, _0x3914x25, (_0x3914x27 - _0x3914x25), textContentStr);
      if (_0x3914x2b == false) {
        var _0x3914x2d = Scribens.Range.toString();
        if (_0x3914x1a == false) {
          if (_0x3914x2a) {
            _0x3914x2d = _0x3914x2d.replace(new RegExp(String.fromCharCode(32), "g"), String.fromCharCode(160));
            _0x3914x29 = _0x3914x29.replace(new RegExp(String.fromCharCode(32), "g"), String.fromCharCode(160))
          }
          ;
          if (_0x3914x2d == _0x3914x29 || (_0x3914x29 == "_")) {
            var textNode = Scribens.Range.endContainer;
            if (textNode && (textNode.nodeValue == _0x3914x2d)) {
              textNode.nodeValue = _0x3914x28
            } else {
              Scribens.Range.deleteContents();
              textNode = document.createTextNode(_0x3914x28);
              Scribens.Range.insertNode(textNode)
            }
          } else {
            return false
          }
        } else {
          Scribens.Range.deleteContents()
        }
      }
    }
    ;
    return true
  },
  RepTextArea: function (_0x3914x24, _0x3914x25, _0x3914x26, _0x3914x27, _0x3914x28, _0x3914x29, _0x3914x1a, _0x3914x2b, _0x3914x22, _0x3914x2a) {
    var _0x3914x19 = _0x3914x22.value.split("↵");
    var _0x3914x2f = _0x3914x19[_0x3914x24];
    if (_0x3914x1a == false) {
      if (_0x3914x2b == false) {
        var _0x3914x30 = _0x3914x2f.substr(_0x3914x25, _0x3914x27 - _0x3914x25);
        if (_0x3914x2a) {
          _0x3914x30 = _0x3914x30.replace(new RegExp(String.fromCharCode(32), "g"), String.fromCharCode(160));
          _0x3914x29 = _0x3914x29.replace(new RegExp(String.fromCharCode(32), "g"), String.fromCharCode(160))
        }
        ;
        if (_0x3914x30 == _0x3914x29 || (_0x3914x29 == "_")) {
          var _0x3914x31 = _0x3914x2f.substr(0, _0x3914x25) + _0x3914x28 + _0x3914x2f.substr(_0x3914x27, _0x3914x2f.length - _0x3914x27);
          _0x3914x19[_0x3914x24] = _0x3914x31
        } else {
          return false
        }
      } else {
        var _0x3914x31 = _0x3914x2f.substr(0, _0x3914x25) + _0x3914x28 + _0x3914x2f.substr(_0x3914x25, _0x3914x2f.length);
        _0x3914x19[_0x3914x24] = _0x3914x31
      }
    } else {
      var _0x3914x31 = _0x3914x2f.substr(0, _0x3914x25) + _0x3914x2f.substr(_0x3914x27, _0x3914x2f.length);
      _0x3914x19[_0x3914x24] = _0x3914x31
    }
    ;var _0x3914x23 = "";
    for (var i = 0; i < _0x3914x19.length; i++) {
      _0x3914x23 += _0x3914x19[i];
      if (i != (_0x3914x19.length - 1)) {
        _0x3914x23 += "↵"
      }
    }
    ;_0x3914x22.value = _0x3914x23;
    return true
  },
  GetP: function (divToCheck, _0x3914x22, _0x3914x33, _0x3914x34, _0x3914x35, textContentStr) {
    if (Scribens.EstDivVide(divToCheck)) {
      var _0x3914x36 = [];
      _0x3914x36.push(divToCheck);
      Scribens.Text = Scribens.Text + "[[[p]]]";
      if ((_0x3914x33 > -1) && (_0x3914x33 == Scribens.CntP)) {
        Scribens.Rep(_0x3914x36, _0x3914x34, _0x3914x35, textContentStr, true)
      }
      ;Scribens.CntP = Scribens.CntP + 1
    } else {
      for (var i = 0; i < divToCheck.childNodes.length; i++) {
        var _0x3914x37 = divToCheck.childNodes[i];
        var _0x3914x38 = _0x3914x37.nodeName;
        if (_0x3914x38 == "STYLE") {
          continue
        }
        ;var _0x3914x39;
        var _0x3914x2f = "";
        var _0x3914x36 = [];
        if (Scribens.AjoutP0(_0x3914x37, _0x3914x22, _0x3914x33, _0x3914x34, textContentStr)) {
          break
        }
        ;
        while ((_0x3914x38 != "DIV") && (_0x3914x38 != "P") && (_0x3914x38 != "UL") && (_0x3914x38 != "LI") && (_0x3914x38 != "BR")) {
          _0x3914x2f = _0x3914x2f + _0x3914x37.textContent;
          if (_0x3914x33 > -1) {
            _0x3914x36.push(_0x3914x37)
          }
          ;
          if (Scribens.TextNodeSautDeLigne(_0x3914x37)) {
            _0x3914x2f = ""
          }
          ;
          if (i < (divToCheck.childNodes.length - 1)) {
            _0x3914x37 = divToCheck.childNodes[i + 1];
            _0x3914x38 = _0x3914x37.nodeName;
            i++
          } else {
            _0x3914x37 = null;
            break
          }
        }
        ;
        if (_0x3914x2f.length > 0) {
          Scribens.Text = Scribens.Text + "[[[p]]]" + _0x3914x2f;
          if ((_0x3914x33 > -1) && (_0x3914x33 == Scribens.CntP)) {
            Scribens.Rep(_0x3914x36, _0x3914x34, _0x3914x35, textContentStr, false);
            Scribens.CntP = Scribens.CntP + 1;
            break
          }
          ;Scribens.CntP = Scribens.CntP + 1
        }
        ;
        if (_0x3914x37 != null) {
          Scribens.GetP(_0x3914x37, _0x3914x22, _0x3914x33, _0x3914x34, _0x3914x35, textContentStr)
        }
      }
    }
  },
  EstDivVide: function (divToCheck) {
    if (divToCheck) {
      if (divToCheck.textContent.length == 0) {
        if ((divToCheck.nodeName == "DIV") || (divToCheck.nodeName == "P") || (divToCheck.nodeName == "UL") || (divToCheck.nodeName == "LI")) {
          return true
        }
      }
      ;
      if (divToCheck.nodeName == "BR") {
        var _0x3914x3a = divToCheck.nextSibling;
        var _0x3914x3b = false;
        while (_0x3914x3a != null) {
          if (_0x3914x3a.nodeName == "BR") {
            return true
          }
          ;
          if (_0x3914x3a.nodeName == "#text" && _0x3914x3a.textContent.length == 0) {
            _0x3914x3a = _0x3914x3a.nextSibling
          } else {
            return false
          }
        }
      }
    }
    ;
    return false
  },
  TextNodeSautDeLigne: function (divToCheck) {
    var _0x3914x3c = 0;
    for (var _0x3914x3d = 0; _0x3914x3d < divToCheck.textContent.length; _0x3914x3d++) {
      if (divToCheck.textContent.charCodeAt(_0x3914x3d) == 10) {
        _0x3914x3c = _0x3914x3c + 1
      }
    }
    ;
    if (_0x3914x3c > 0 && (_0x3914x3c == divToCheck.textContent.length)) {
      return true
    } else {
      return false
    }
  },
  Rep: function (_0x3914x36, _0x3914x34, _0x3914x35, textContentStr, _0x3914x3e) {
    if (_0x3914x3e == false) {
      for (var i = 0; i < _0x3914x36.length; i++) {
        var divToCheck = _0x3914x36[i];
        if (divToCheck.nodeName == "#text") {
          Scribens.CntInTextNode(divToCheck, _0x3914x34, _0x3914x35, textContentStr)
        } else {
          for (var _0x3914x3f = 0; _0x3914x3f < divToCheck.childNodes.length; _0x3914x3f++) {
            var _0x3914x37 = divToCheck.childNodes[_0x3914x3f];
            if (_0x3914x37.nodeName == "#text") {
              Scribens.CntInTextNode(_0x3914x37, _0x3914x34, _0x3914x35, textContentStr)
            } else {
              var _0x3914x40 = [];
              _0x3914x40.push(_0x3914x37);
              Scribens.Rep(_0x3914x40, _0x3914x34, _0x3914x35, textContentStr, _0x3914x3e)
            }
          }
        }
      }
    } else {
      if (textContentStr) {
        var textNode = document.createTextNode(textContentStr);
        var divToCheck = _0x3914x36[0];
        if (divToCheck.nodeName != "BR") {
          divToCheck.insertBefore(textNode, divToCheck.childNodes[0])
        } else {
          divToCheck.parentNode.insertBefore(textNode, divToCheck.nextSibling)
        }
      }
    }
  },
  CntInTextNode: function (divToCheck, _0x3914x34, _0x3914x35, textContentStr) {
    var textLength = divToCheck.textContent.length;
    var _0x3914x42 = Scribens.CntChar;
    Scribens.CntChar = Scribens.CntChar + textLength;
    if (Scribens.CntChar >= _0x3914x34) {
      if (textContentStr == null) {
        if (Scribens.LockRangeStart == false) {
          Scribens.LockRangeStart = true;
          Scribens.Range.setStart(divToCheck, _0x3914x34 - (Scribens.CntChar - textLength))
        }
        ;
        if (Scribens.CntChar >= (_0x3914x34 + _0x3914x35)) {
          if (Scribens.LockRangeEnd == false) {
            Scribens.LockRangeEnd = true;
            Scribens.Range.setEnd(divToCheck, (_0x3914x34 + _0x3914x35) - _0x3914x42)
          }
        }
      } else {
        if (Scribens.LockAdd == false) {
          Scribens.LockAdd = true;
          var _0x3914x43 = divToCheck.nodeValue;
          divToCheck.nodeValue = _0x3914x43.substring(0, _0x3914x34 - (Scribens.CntChar - textLength)) + textContentStr + _0x3914x43.substring(_0x3914x34 - (Scribens.CntChar - textLength), _0x3914x43.length)
        }
      }
    }
  },
  AjoutP0: function (divToCheck, _0x3914x22, _0x3914x33, _0x3914x34, textContentStr) {
    if (_0x3914x33 == 0 && _0x3914x34 == 0) {
      if (divToCheck.nodeName == "#text" && divToCheck.textContent.length == 0) {
        if (Scribens.LockFirstTextNode == false) {
          Scribens.LockFirstTextNode = true;
          var _0x3914x44 = divToCheck.parentNode;
          if ((divToCheck == _0x3914x44.childNodes[0] && _0x3914x44.childNodes.length > 1 && (_0x3914x44.childNodes[1].nodeName == "DIV" || _0x3914x44.childNodes[1].nodeName == "BR")) || (_0x3914x22.textContent.length == 0)) {
            divToCheck.nodeValue = textContentStr;
            return true
          }
        }
      }
    }
    ;
    return false
  }
}