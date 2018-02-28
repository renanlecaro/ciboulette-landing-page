var _0x16ce = ["", "Body", "Init", "focus", "FocusLock", "addEventListener", "WindowSc", "closed", "InitFinished", "en", "CHECK_TEXT:", "*", "postMessage", "getElementById", "nodeName", "IFRAME", "contentWindow", "body", "contentDocument", "DIV", "TEXTAREA", "INPUT", "type", "getAttribute", "text", "Text area not found. Please enter another Id.", "getElementsByTagName", "length", "contenteditable", "true", "data", "_", "indexOf", "substr", "INIT_FINISHED", "TextPrec", "FOCUS", "TextChanged", "REP:", "REM:", ";", "split", "PB_REMPLACEMENT", "width", "height", "fr", "https://www.scribens.fr", "https://www.scribens.com", "/plugin.html?plugin=Wysiwyg&&version=2&&idclient=1", "1", "width=", ",height=", ",left=", ",top=", ",titlebar=no", "open", "message", "↵", "value", "[[[p]]]", "Text", "CntP", "textContent", "___pv___", "replace", "ownerDocument", "Range", "createRange", "CntChar", "LockRangeStart", "LockRangeEnd", "LockAdd", "LockFirstTextNode", "fromCharCode", "g", "endContainer", "nodeValue", "deleteContents", "createTextNode", "insertNode", "push", "childNodes", "STYLE", "P", "UL", "LI", "BR", "nextSibling", "#text", "charCodeAt", "insertBefore", "parentNode", "setStart", "setEnd", "substring"]
var Scribens = {
  Init: false,
  InitFinished: false,
  Body: null,
  TextPrec: _0x16ce[0],
  WindowSc: null,
  TextChanged: false,
  FocusLock: false,
  Check: function (_0x3914x2) {
    var _0x3914x3 = Scribens.Get_TextArea(_0x3914x2);
    if (_0x3914x3) {
      Scribens[_0x16ce[1]] = _0x3914x3[0];
      if (Scribens[_0x16ce[2]] == false) {
        Scribens[_0x16ce[2]] = true;
        var _0x3914x4 = _0x3914x3[1];
        if (_0x3914x4) {
          _0x3914x4[_0x16ce[5]](_0x16ce[3], function () {
            Scribens[_0x16ce[4]] = true
          }, false)
        }
        ;window[_0x16ce[5]](_0x16ce[3], function () {
          Scribens[_0x16ce[4]] = true
        }, false)
      }
      ;
      if (Scribens[_0x16ce[6]] == null || Scribens[_0x16ce[6]][_0x16ce[7]]) {
        Scribens[_0x16ce[8]] = false;
        Scribens.CreateNewWindow(_0x16ce[9])
      } else {
        Scribens[_0x16ce[4]] = true;
        Scribens[_0x16ce[6]][_0x16ce[3]]();
        Scribens[_0x16ce[6]][_0x16ce[12]](_0x16ce[10] + Scribens.GetText(Scribens.Body), _0x16ce[11])
      }
    }
  },
  Get_TextArea: function (_0x3914x2) {
    if (_0x3914x2 != null) {
      var _0x3914x5 = document[_0x16ce[13]](_0x3914x2);
      if (_0x3914x5 != null) {
        if (_0x3914x5[_0x16ce[14]] == _0x16ce[15]) {
          var _0x3914x6 = _0x3914x5[_0x16ce[16]];
          if (_0x3914x6) {
            var _0x3914x3 = new Object();
            _0x3914x3[0] = _0x3914x5[_0x16ce[18]][_0x16ce[17]];
            _0x3914x3[1] = _0x3914x6;
            return _0x3914x3
          }
        } else {
          if (_0x3914x5[_0x16ce[14]] == _0x16ce[19]) {
            var _0x3914x3 = new Object();
            _0x3914x3[0] = _0x3914x5;
            _0x3914x3[1] = null;
            return _0x3914x3
          } else {
            if (_0x3914x5[_0x16ce[14]] == _0x16ce[20] || (_0x3914x5[_0x16ce[14]] == _0x16ce[21] && _0x3914x5[_0x16ce[23]](_0x16ce[22]) && _0x3914x5[_0x16ce[23]](_0x16ce[22]) == _0x16ce[24])) {
              var _0x3914x3 = new Object();
              _0x3914x3[0] = _0x3914x5;
              _0x3914x3[1] = null;
              return _0x3914x3
            }
          }
        }
      } else {
        alert(_0x16ce[25])
      }
    } else {
      var _0x3914x7 = document[_0x16ce[26]](_0x16ce[15]);
      for (var _0x3914x8 = 0; _0x3914x8 < _0x3914x7[_0x16ce[27]]; _0x3914x8++) {
        var _0x3914x9 = _0x3914x7[_0x3914x8];
        var _0x3914x6 = _0x3914x9[_0x16ce[16]];
        if (_0x3914x6) {
          var _0x3914xa = _0x3914x9[_0x16ce[18]][_0x16ce[17]];
          var _0x3914xb = _0x3914xa[_0x16ce[23]](_0x16ce[28]);
          if (_0x3914xb && _0x3914xb == _0x16ce[29]) {
            var _0x3914x3 = new Object();
            _0x3914x3[0] = _0x3914xa;
            _0x3914x3[1] = _0x3914x6;
            return _0x3914x3
          }
        }
      }
      ;var _0x3914xc = document[_0x16ce[26]](_0x16ce[19]);
      for (var _0x3914x8 = 0; _0x3914x8 < _0x3914xc[_0x16ce[27]]; _0x3914x8++) {
        var _0x3914xd = _0x3914xc[_0x3914x8];
        var _0x3914xb = _0x3914xd[_0x16ce[23]](_0x16ce[28]);
        if (_0x3914xb && _0x3914xb == _0x16ce[29]) {
          var _0x3914x3 = new Object();
          _0x3914x3[0] = _0x3914xd;
          _0x3914x3[1] = null;
          return _0x3914x3
        }
      }
      ;var _0x3914xe = document[_0x16ce[26]](_0x16ce[20]);
      for (var _0x3914x8 = 0; _0x3914x8 < _0x3914xe[_0x16ce[27]]; _0x3914x8++) {
        var _0x3914xf = _0x3914xe[_0x3914x8];
        var _0x3914x3 = new Object();
        _0x3914x3[0] = _0x3914xf;
        _0x3914x3[1] = null;
        return _0x3914x3
      }
      ;var _0x3914x10 = document[_0x16ce[26]](_0x16ce[21]);
      for (var _0x3914x8 = 0; _0x3914x8 < _0x3914x10[_0x16ce[27]]; _0x3914x8++) {
        var _0x3914x11 = _0x3914x10[_0x3914x8];
        var _0x3914x12 = _0x3914x11[_0x16ce[23]](_0x16ce[22]);
        if (_0x3914x12 && _0x3914x12 == _0x16ce[24]) {
          var _0x3914x3 = new Object();
          _0x3914x3[0] = _0x3914x11;
          _0x3914x3[1] = null;
          return _0x3914x3
        }
      }
    }
    ;
    return null
  },
  OnMessage: function (_0x3914x13) {
    var _0x3914x14 = _0x3914x13[_0x16ce[30]];
    var _0x3914x15 = _0x3914x14[_0x16ce[32]](_0x16ce[31]);
    var _0x3914x16 = -1;
    if (_0x3914x15 > 0) {
      _0x3914x16 = parseInt(_0x3914x14[_0x16ce[33]](0, _0x3914x15));
      _0x3914x14 = _0x3914x14[_0x16ce[33]](_0x3914x15 + 1, _0x3914x14[_0x16ce[27]] - (_0x3914x15 + 1))
    }
    ;
    if (_0x3914x14 == _0x16ce[34]) {
      Scribens[_0x16ce[8]] = true;
      Scribens[_0x16ce[35]] = Scribens.GetTotalText(Scribens.Body);
      Scribens[_0x16ce[6]][_0x16ce[12]](_0x16ce[10] + Scribens.GetText(Scribens.Body), _0x16ce[11])
    } else {
      if (_0x3914x14 == _0x16ce[36] && Scribens[_0x16ce[8]] == true) {
        var _0x3914x17 = Scribens.GetTotalText(Scribens.Body);
        if ((_0x3914x17 != Scribens[_0x16ce[35]]) || (Scribens[_0x16ce[37]] == true)) {
          if (Scribens[_0x16ce[4]] == true) {
            Scribens[_0x16ce[37]] = false;
            Scribens[_0x16ce[6]][_0x16ce[12]](_0x16ce[10] + Scribens.GetText(Scribens.Body), _0x16ce[11])
          }
        }
        ;Scribens[_0x16ce[35]] = _0x3914x17;
        Scribens[_0x16ce[4]] = false
      } else {
        if (_0x3914x14[_0x16ce[32]](_0x16ce[38]) == 0 || _0x3914x14[_0x16ce[32]](_0x16ce[39]) == 0) {
          var _0x3914x18 = _0x3914x14[_0x16ce[33]](4, (_0x3914x14[_0x16ce[27]] - 4));
          var _0x3914x19 = _0x3914x18[_0x16ce[41]](_0x16ce[40]);
          var _0x3914x1a = (_0x3914x14[_0x16ce[32]](_0x16ce[39]) == 0);
          var _0x3914x1b = Scribens.ReplaceWord(parseInt(_0x3914x19[0]), parseInt(_0x3914x19[1]), parseInt(_0x3914x19[2]), parseInt(_0x3914x19[3]), _0x3914x19[4], _0x3914x19[5], _0x3914x1a, Scribens.Body, false);
          if (_0x3914x1b == true) {
            Scribens[_0x16ce[37]] = true
          } else {
            Scribens[_0x16ce[6]][_0x16ce[12]](_0x16ce[10] + Scribens.GetText(Scribens.Body), _0x16ce[11]);
            Scribens[_0x16ce[6]][_0x16ce[12]](_0x16ce[42], _0x16ce[11])
          }
          ;Scribens[_0x16ce[35]] = Scribens.GetTotalText(Scribens.Body)
        }
      }
    }
  },
  CreateNewWindow: function (_0x3914x1c) {
    var _0x3914x1d = 1200;
    var _0x3914x1e = 600;
    var _0x3914x1f = (screen[_0x16ce[43]] / 2) - (_0x3914x1d / 2);
    var _0x3914x20 = (screen[_0x16ce[44]] / 2) - (_0x3914x1e / 2);
    var _0x3914x21 = _0x16ce[0];
    if (_0x3914x1c == _0x16ce[45]) {
      _0x3914x21 = _0x16ce[46]
    } else {
      if (_0x3914x1c == _0x16ce[9]) {
        _0x3914x21 = _0x16ce[47]
      }
    }
    ;Scribens[_0x16ce[6]] = window[_0x16ce[55]](_0x3914x21 + _0x16ce[48], _0x16ce[49], _0x16ce[50] + _0x3914x1d + _0x16ce[51] + _0x3914x1e + _0x16ce[52] + _0x3914x1f + _0x16ce[53] + _0x3914x20 + _0x16ce[54]);
    window[_0x16ce[5]](_0x16ce[56], Scribens.OnMessage, false)
  },
  Text: _0x16ce[0],
  CntP: 0,
  Range: null,
  CntChar: 0,
  LockRangeStart: false,
  LockRangeEnd: false,
  LockAdd: false,
  LockFirstTextNode: false,
  CntP: 0,
  GetText: function (_0x3914x22) {
    if (_0x3914x22[_0x16ce[14]] == _0x16ce[20] || (_0x3914x22[_0x16ce[14]] == _0x16ce[21] && _0x3914x22[_0x16ce[23]](_0x16ce[22]) && _0x3914x22[_0x16ce[23]](_0x16ce[22]) == _0x16ce[24])) {
      var _0x3914x23 = _0x16ce[0];
      var _0x3914x19 = _0x3914x22[_0x16ce[58]][_0x16ce[41]](_0x16ce[57]);
      for (var _0x3914x8 = 0; _0x3914x8 < _0x3914x19[_0x16ce[27]]; _0x3914x8++) {
        _0x3914x23 += _0x16ce[59];
        _0x3914x23 += _0x3914x19[_0x3914x8]
      }
      ;
      return _0x3914x23
    } else {
      Scribens[_0x16ce[60]] = _0x16ce[0];
      Scribens[_0x16ce[61]] = 0;
      Scribens.GetP(_0x3914x22, -1, -1, -1, null);
      return Scribens[_0x16ce[60]]
    }
  },
  GetTotalText: function (_0x3914x22) {
    if (_0x3914x22[_0x16ce[14]] == _0x16ce[20] || (_0x3914x22[_0x16ce[14]] == _0x16ce[21] && _0x3914x22[_0x16ce[23]](_0x16ce[22]) && _0x3914x22[_0x16ce[23]](_0x16ce[22]) == _0x16ce[24])) {
      return _0x3914x22[_0x16ce[58]]
    } else {
      return Scribens.GetText(_0x3914x22)
    }
  },
  HasText: function (_0x3914x22) {
    if (_0x3914x22[_0x16ce[14]] == _0x16ce[20] || (_0x3914x22[_0x16ce[14]] == _0x16ce[21] && _0x3914x22[_0x16ce[23]](_0x16ce[22]) && _0x3914x22[_0x16ce[23]](_0x16ce[22]) == _0x16ce[24])) {
      return (_0x3914x22[_0x16ce[58]][_0x16ce[27]] > 0)
    } else {
      return (_0x3914x22[_0x16ce[62]][_0x16ce[27]] > 0)
    }
  },
  ReplaceWord: function (_0x3914x24, _0x3914x25, _0x3914x26, _0x3914x27, _0x3914x28, _0x3914x29, _0x3914x1a, _0x3914x22, _0x3914x2a) {
    if (_0x3914x28) {
      _0x3914x28 = _0x3914x28[_0x16ce[64]](_0x16ce[63], _0x16ce[40])
    }
    ;
    if (_0x3914x29) {
      _0x3914x29 = _0x3914x29[_0x16ce[64]](_0x16ce[63], _0x16ce[40])
    }
    ;var _0x3914x2b = (_0x3914x24 == _0x3914x26 && _0x3914x25 == _0x3914x27);
    if (_0x3914x22[_0x16ce[14]] == _0x16ce[20] || (_0x3914x22[_0x16ce[14]] == _0x16ce[21] && _0x3914x22[_0x16ce[23]](_0x16ce[22]) && _0x3914x22[_0x16ce[23]](_0x16ce[22]) == _0x16ce[24])) {
      return Scribens.RepTextArea(_0x3914x24, _0x3914x25, _0x3914x26, _0x3914x27, _0x3914x28, _0x3914x29, _0x3914x1a, _0x3914x2b, _0x3914x22, _0x3914x2a)
    } else {
      document = _0x3914x22[_0x16ce[65]];
      Scribens[_0x16ce[66]] = document[_0x16ce[67]]();
      Scribens[_0x16ce[68]] = 0;
      Scribens[_0x16ce[69]] = false;
      Scribens[_0x16ce[70]] = false;
      Scribens[_0x16ce[71]] = false;
      Scribens[_0x16ce[72]] = false;
      Scribens[_0x16ce[61]] = 0;
      var _0x3914x2c = null;
      if (_0x3914x2b) {
        _0x3914x2c = _0x3914x28
      }
      ;Scribens.GetP(_0x3914x22, _0x3914x22, _0x3914x24, _0x3914x25, (_0x3914x27 - _0x3914x25), _0x3914x2c);
      if (_0x3914x2b == false) {
        var _0x3914x2d = Scribens[_0x16ce[66]].toString();
        if (_0x3914x1a == false) {
          if (_0x3914x2a) {
            _0x3914x2d = _0x3914x2d[_0x16ce[64]](new RegExp(String[_0x16ce[73]](32), _0x16ce[74]), String[_0x16ce[73]](160));
            _0x3914x29 = _0x3914x29[_0x16ce[64]](new RegExp(String[_0x16ce[73]](32), _0x16ce[74]), String[_0x16ce[73]](160))
          }
          ;
          if (_0x3914x2d == _0x3914x29 || (_0x3914x29 == _0x16ce[31])) {
            var _0x3914x2e = Scribens[_0x16ce[66]][_0x16ce[75]];
            if (_0x3914x2e && (_0x3914x2e[_0x16ce[76]] == _0x3914x2d)) {
              _0x3914x2e[_0x16ce[76]] = _0x3914x28
            } else {
              Scribens[_0x16ce[66]][_0x16ce[77]]();
              _0x3914x2e = document[_0x16ce[78]](_0x3914x28);
              Scribens[_0x16ce[66]][_0x16ce[79]](_0x3914x2e)
            }
          } else {
            return false
          }
        } else {
          Scribens[_0x16ce[66]][_0x16ce[77]]()
        }
      }
    }
    ;
    return true
  },
  RepTextArea: function (_0x3914x24, _0x3914x25, _0x3914x26, _0x3914x27, _0x3914x28, _0x3914x29, _0x3914x1a, _0x3914x2b, _0x3914x22, _0x3914x2a) {
    var _0x3914x19 = _0x3914x22[_0x16ce[58]][_0x16ce[41]](_0x16ce[57]);
    var _0x3914x2f = _0x3914x19[_0x3914x24];
    if (_0x3914x1a == false) {
      if (_0x3914x2b == false) {
        var _0x3914x30 = _0x3914x2f[_0x16ce[33]](_0x3914x25, _0x3914x27 - _0x3914x25);
        if (_0x3914x2a) {
          _0x3914x30 = _0x3914x30[_0x16ce[64]](new RegExp(String[_0x16ce[73]](32), _0x16ce[74]), String[_0x16ce[73]](160));
          _0x3914x29 = _0x3914x29[_0x16ce[64]](new RegExp(String[_0x16ce[73]](32), _0x16ce[74]), String[_0x16ce[73]](160))
        }
        ;
        if (_0x3914x30 == _0x3914x29 || (_0x3914x29 == _0x16ce[31])) {
          var _0x3914x31 = _0x3914x2f[_0x16ce[33]](0, _0x3914x25) + _0x3914x28 + _0x3914x2f[_0x16ce[33]](_0x3914x27, _0x3914x2f[_0x16ce[27]] - _0x3914x27);
          _0x3914x19[_0x3914x24] = _0x3914x31
        } else {
          return false
        }
      } else {
        var _0x3914x31 = _0x3914x2f[_0x16ce[33]](0, _0x3914x25) + _0x3914x28 + _0x3914x2f[_0x16ce[33]](_0x3914x25, _0x3914x2f[_0x16ce[27]]);
        _0x3914x19[_0x3914x24] = _0x3914x31
      }
    } else {
      var _0x3914x31 = _0x3914x2f[_0x16ce[33]](0, _0x3914x25) + _0x3914x2f[_0x16ce[33]](_0x3914x27, _0x3914x2f[_0x16ce[27]]);
      _0x3914x19[_0x3914x24] = _0x3914x31
    }
    ;var _0x3914x23 = _0x16ce[0];
    for (var _0x3914x8 = 0; _0x3914x8 < _0x3914x19[_0x16ce[27]]; _0x3914x8++) {
      _0x3914x23 += _0x3914x19[_0x3914x8];
      if (_0x3914x8 != (_0x3914x19[_0x16ce[27]] - 1)) {
        _0x3914x23 += _0x16ce[57]
      }
    }
    ;_0x3914x22[_0x16ce[58]] = _0x3914x23;
    return true
  },
  GetP: function (_0x3914x32, _0x3914x22, _0x3914x33, _0x3914x34, _0x3914x35, _0x3914x2c) {
    if (Scribens.EstDivVide(_0x3914x32)) {
      var _0x3914x36 = [];
      _0x3914x36[_0x16ce[80]](_0x3914x32);
      Scribens[_0x16ce[60]] = Scribens[_0x16ce[60]] + _0x16ce[59];
      if ((_0x3914x33 > -1) && (_0x3914x33 == Scribens[_0x16ce[61]])) {
        Scribens.Rep(_0x3914x36, _0x3914x34, _0x3914x35, _0x3914x2c, true)
      }
      ;Scribens[_0x16ce[61]] = Scribens[_0x16ce[61]] + 1
    } else {
      for (var _0x3914x8 = 0; _0x3914x8 < _0x3914x32[_0x16ce[81]][_0x16ce[27]]; _0x3914x8++) {
        var _0x3914x37 = _0x3914x32[_0x16ce[81]][_0x3914x8];
        var _0x3914x38 = _0x3914x37[_0x16ce[14]];
        if (_0x3914x38 == _0x16ce[82]) {
          continue
        }
        ;var _0x3914x39;
        var _0x3914x2f = _0x16ce[0];
        var _0x3914x36 = [];
        if (Scribens.AjoutP0(_0x3914x37, _0x3914x22, _0x3914x33, _0x3914x34, _0x3914x2c)) {
          break
        }
        ;
        while ((_0x3914x38 != _0x16ce[19]) && (_0x3914x38 != _0x16ce[83]) && (_0x3914x38 != _0x16ce[84]) && (_0x3914x38 != _0x16ce[85]) && (_0x3914x38 != _0x16ce[86])) {
          _0x3914x2f = _0x3914x2f + _0x3914x37[_0x16ce[62]];
          if (_0x3914x33 > -1) {
            _0x3914x36[_0x16ce[80]](_0x3914x37)
          }
          ;
          if (Scribens.TextNodeSautDeLigne(_0x3914x37)) {
            _0x3914x2f = _0x16ce[0]
          }
          ;
          if (_0x3914x8 < (_0x3914x32[_0x16ce[81]][_0x16ce[27]] - 1)) {
            _0x3914x37 = _0x3914x32[_0x16ce[81]][_0x3914x8 + 1];
            _0x3914x38 = _0x3914x37[_0x16ce[14]];
            _0x3914x8++
          } else {
            _0x3914x37 = null;
            break
          }
        }
        ;
        if (_0x3914x2f[_0x16ce[27]] > 0) {
          Scribens[_0x16ce[60]] = Scribens[_0x16ce[60]] + _0x16ce[59] + _0x3914x2f;
          if ((_0x3914x33 > -1) && (_0x3914x33 == Scribens[_0x16ce[61]])) {
            Scribens.Rep(_0x3914x36, _0x3914x34, _0x3914x35, _0x3914x2c, false);
            Scribens[_0x16ce[61]] = Scribens[_0x16ce[61]] + 1;
            break
          }
          ;Scribens[_0x16ce[61]] = Scribens[_0x16ce[61]] + 1
        }
        ;
        if (_0x3914x37 != null) {
          Scribens.GetP(_0x3914x37, _0x3914x22, _0x3914x33, _0x3914x34, _0x3914x35, _0x3914x2c)
        }
      }
    }
  },
  EstDivVide: function (_0x3914x32) {
    if (_0x3914x32) {
      if (_0x3914x32[_0x16ce[62]][_0x16ce[27]] == 0) {
        if ((_0x3914x32[_0x16ce[14]] == _0x16ce[19]) || (_0x3914x32[_0x16ce[14]] == _0x16ce[83]) || (_0x3914x32[_0x16ce[14]] == _0x16ce[84]) || (_0x3914x32[_0x16ce[14]] == _0x16ce[85])) {
          return true
        }
      }
      ;
      if (_0x3914x32[_0x16ce[14]] == _0x16ce[86]) {
        var _0x3914x3a = _0x3914x32[_0x16ce[87]];
        var _0x3914x3b = false;
        while (_0x3914x3a != null) {
          if (_0x3914x3a[_0x16ce[14]] == _0x16ce[86]) {
            return true
          }
          ;
          if (_0x3914x3a[_0x16ce[14]] == _0x16ce[88] && _0x3914x3a[_0x16ce[62]][_0x16ce[27]] == 0) {
            _0x3914x3a = _0x3914x3a[_0x16ce[87]]
          } else {
            return false
          }
        }
      }
    }
    ;
    return false
  },
  TextNodeSautDeLigne: function (_0x3914x32) {
    var _0x3914x3c = 0;
    for (var _0x3914x3d = 0; _0x3914x3d < _0x3914x32[_0x16ce[62]][_0x16ce[27]]; _0x3914x3d++) {
      if (_0x3914x32[_0x16ce[62]][_0x16ce[89]](_0x3914x3d) == 10) {
        _0x3914x3c = _0x3914x3c + 1
      }
    }
    ;
    if (_0x3914x3c > 0 && (_0x3914x3c == _0x3914x32[_0x16ce[62]][_0x16ce[27]])) {
      return true
    } else {
      return false
    }
  },
  Rep: function (_0x3914x36, _0x3914x34, _0x3914x35, _0x3914x2c, _0x3914x3e) {
    if (_0x3914x3e == false) {
      for (var _0x3914x8 = 0; _0x3914x8 < _0x3914x36[_0x16ce[27]]; _0x3914x8++) {
        var _0x3914x32 = _0x3914x36[_0x3914x8];
        if (_0x3914x32[_0x16ce[14]] == _0x16ce[88]) {
          Scribens.CntInTextNode(_0x3914x32, _0x3914x34, _0x3914x35, _0x3914x2c)
        } else {
          for (var _0x3914x3f = 0; _0x3914x3f < _0x3914x32[_0x16ce[81]][_0x16ce[27]]; _0x3914x3f++) {
            var _0x3914x37 = _0x3914x32[_0x16ce[81]][_0x3914x3f];
            if (_0x3914x37[_0x16ce[14]] == _0x16ce[88]) {
              Scribens.CntInTextNode(_0x3914x37, _0x3914x34, _0x3914x35, _0x3914x2c)
            } else {
              var _0x3914x40 = [];
              _0x3914x40[_0x16ce[80]](_0x3914x37);
              Scribens.Rep(_0x3914x40, _0x3914x34, _0x3914x35, _0x3914x2c, _0x3914x3e)
            }
          }
        }
      }
    } else {
      if (_0x3914x2c) {
        var _0x3914x2e = document[_0x16ce[78]](_0x3914x2c);
        var _0x3914x32 = _0x3914x36[0];
        if (_0x3914x32[_0x16ce[14]] != _0x16ce[86]) {
          _0x3914x32[_0x16ce[90]](_0x3914x2e, _0x3914x32[_0x16ce[81]][0])
        } else {
          _0x3914x32[_0x16ce[91]][_0x16ce[90]](_0x3914x2e, _0x3914x32[_0x16ce[87]])
        }
      }
    }
  },
  CntInTextNode: function (_0x3914x32, _0x3914x34, _0x3914x35, _0x3914x2c) {
    var _0x3914x41 = _0x3914x32[_0x16ce[62]][_0x16ce[27]];
    var _0x3914x42 = Scribens[_0x16ce[68]];
    Scribens[_0x16ce[68]] = Scribens[_0x16ce[68]] + _0x3914x41;
    if (Scribens[_0x16ce[68]] >= _0x3914x34) {
      if (_0x3914x2c == null) {
        if (Scribens[_0x16ce[69]] == false) {
          Scribens[_0x16ce[69]] = true;
          Scribens[_0x16ce[66]][_0x16ce[92]](_0x3914x32, _0x3914x34 - (Scribens[_0x16ce[68]] - _0x3914x41))
        }
        ;
        if (Scribens[_0x16ce[68]] >= (_0x3914x34 + _0x3914x35)) {
          if (Scribens[_0x16ce[70]] == false) {
            Scribens[_0x16ce[70]] = true;
            Scribens[_0x16ce[66]][_0x16ce[93]](_0x3914x32, (_0x3914x34 + _0x3914x35) - _0x3914x42)
          }
        }
      } else {
        if (Scribens[_0x16ce[71]] == false) {
          Scribens[_0x16ce[71]] = true;
          var _0x3914x43 = _0x3914x32[_0x16ce[76]];
          _0x3914x32[_0x16ce[76]] = _0x3914x43[_0x16ce[94]](0, _0x3914x34 - (Scribens[_0x16ce[68]] - _0x3914x41)) + _0x3914x2c + _0x3914x43[_0x16ce[94]](_0x3914x34 - (Scribens[_0x16ce[68]] - _0x3914x41), _0x3914x43[_0x16ce[27]])
        }
      }
    }
  },
  AjoutP0: function (_0x3914x32, _0x3914x22, _0x3914x33, _0x3914x34, _0x3914x2c) {
    if (_0x3914x33 == 0 && _0x3914x34 == 0) {
      if (_0x3914x32[_0x16ce[14]] == _0x16ce[88] && _0x3914x32[_0x16ce[62]][_0x16ce[27]] == 0) {
        if (Scribens[_0x16ce[72]] == false) {
          Scribens[_0x16ce[72]] = true;
          var _0x3914x44 = _0x3914x32[_0x16ce[91]];
          if ((_0x3914x32 == _0x3914x44[_0x16ce[81]][0] && _0x3914x44[_0x16ce[81]][_0x16ce[27]] > 1 && (_0x3914x44[_0x16ce[81]][1][_0x16ce[14]] == _0x16ce[19] || _0x3914x44[_0x16ce[81]][1][_0x16ce[14]] == _0x16ce[86])) || (_0x3914x22[_0x16ce[62]][_0x16ce[27]] == 0)) {
            _0x3914x32[_0x16ce[76]] = _0x3914x2c;
            return true
          }
        }
      }
    }
    ;
    return false
  }
}