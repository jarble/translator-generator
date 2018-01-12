/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var rust_parser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,4],$V1=[1,11],$V2=[1,5],$V3=[1,7],$V4=[1,8],$V5=[1,9],$V6=[1,12],$V7=[1,13],$V8=[1,17],$V9=[1,16],$Va=[5,14,31],$Vb=[5,11,12,14,15,21,24,26,31,33,34,71,79],$Vc=[2,66],$Vd=[1,45],$Ve=[1,46],$Vf=[1,43],$Vg=[1,36],$Vh=[1,38],$Vi=[1,47],$Vj=[1,48],$Vk=[12,18,73],$Vl=[1,64],$Vm=[18,20],$Vn=[1,71],$Vo=[1,73],$Vp=[1,74],$Vq=[1,75],$Vr=[1,76],$Vs=[1,77],$Vt=[1,78],$Vu=[1,79],$Vv=[1,80],$Vw=[1,81],$Vx=[1,82],$Vy=[1,83],$Vz=[1,84],$VA=[1,85],$VB=[1,86],$VC=[13,14,18,20,30,46,47,48,49,50,51,52,53,54,55,56,57,58,59,66,73],$VD=[13,14,16,18,20,30,46,47,48,49,50,51,52,53,54,55,56,57,58,59,64,66,73],$VE=[1,92],$VF=[2,82],$VG=[1,97],$VH=[1,104],$VI=[2,70],$VJ=[14,18],$VK=[14,18,73],$VL=[1,141],$VM=[13,14,18,20,30,46,47,48,49,50,51,52,53,54,66,73],$VN=[13,14,18,20,30,46,47,48,49,50,51,52,53,54,55,56,66,73],$VO=[1,158],$VP=[1,162],$VQ=[18,73];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"expressions":3,"statements_":4,"EOF":5,"statement":6,"statements":7,"access_modifier":8,"public":9,"private":10,"struct":11,"IDENTIFIER":12,"{":13,"}":14,"fn":15,"(":16,"parameters":17,")":18,"statement_with_semicolon":19,";":20,"while":21,"e":22,"bracket_statements":23,"switch":24,"case_statements":25,"for":26,"if_statement":27,"case_statement":28,"case":29,":":30,"break":31,"exprs":32,"return":33,"let":34,"mut":35,"=":36,"type":37,"access_array":38,"identifiers":39,"++":40,"--":41,"+=":42,"-=":43,"*=":44,"/=":45,"?":46,"||":47,"&&":48,"<=":49,"<":50,">=":51,">":52,"==":53,"!=":54,"+":55,"-":56,"%":57,"*":58,"/":59,"not_expr":60,"!":61,"dot_expr":62,"parentheses_expr":63,".":64,"[":65,"]":66,"function_call":67,"parentheses_expr_":68,"NUMBER":69,"STRING_LITERAL":70,"void":71,"parameter":72,",":73,"expr":74,"&":75,"types":76,"elif":77,"else":78,"if":79,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",9:"public",10:"private",11:"struct",12:"IDENTIFIER",13:"{",14:"}",15:"fn",16:"(",18:")",20:";",21:"while",24:"switch",26:"for",29:"case",30:":",31:"break",33:"return",34:"let",35:"mut",36:"=",40:"++",41:"--",42:"+=",43:"-=",44:"*=",45:"/=",46:"?",47:"||",48:"&&",49:"<=",50:"<",51:">=",52:">",53:"==",54:"!=",55:"+",56:"-",57:"%",58:"*",59:"/",61:"!",64:".",65:"[",66:"]",69:"NUMBER",70:"STRING_LITERAL",71:"void",73:",",75:"&",78:"else",79:"if"},
productions_: [0,[3,2],[4,2],[4,1],[7,1],[8,1],[8,1],[6,5],[6,8],[6,2],[6,5],[6,7],[6,9],[6,1],[28,6],[25,2],[25,1],[19,3],[19,4],[19,2],[19,5],[19,4],[19,2],[19,2],[19,3],[19,3],[19,2],[19,2],[19,3],[19,3],[19,3],[19,3],[22,5],[22,3],[22,3],[22,3],[22,3],[22,3],[22,3],[22,3],[22,3],[22,3],[22,3],[22,3],[22,3],[22,3],[22,2],[22,1],[60,2],[60,1],[62,3],[62,1],[38,4],[63,1],[63,1],[63,3],[63,1],[68,2],[68,3],[68,1],[68,1],[68,1],[67,3],[67,4],[37,3],[37,1],[37,1],[72,3],[17,3],[17,1],[17,0],[32,3],[32,1],[74,2],[74,1],[76,3],[76,1],[77,7],[77,4],[27,6],[27,5],[39,3],[39,1],[23,3],[23,2]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
return ["top_level_statements",$$[$0-1]]
break;
case 2: case 15:
this.$ = [$$[$0-1]].concat($$[$0]);
break;
case 3: case 16: case 51: case 69:
this.$ =
 [$$[$0]];
break;
case 4:
this.$ = ["statements",$$[$0]]
break;
case 7:
this.$ = ["struct",$$[$0-3],$$[$0-1]]
break;
case 8:
this.$ = ["function","public","Object",$$[$0-6],$$[$0-4],$$[$0-1]];
break;
case 9: case 84:
this.$ = ["semicolon",$$[$0-1]];
break;
case 10:
this.$ = ["while",$$[$0-2],$$[$0]];
break;
case 11:
this.$ = ["switch",$$[$0-4],$$[$0-1]];
break;
case 12:
this.$ = ["for",$$[$0-6],$$[$0-4],$$[$0-2],$$[$0]];
break;
case 14:
this.$ = ["case",$$[$0-4],$$[$0-2]]
break;
case 17: case 62:
this.$ = ["function_call",$$[$0-2],[]];
break;
case 18: case 63:
this.$ = ["function_call",$$[$0-3],$$[$0-1]];
break;
case 19:
this.$ = ["return",$$[$0]];
break;
case 20:
this.$ = ["initialize_var","Object",$$[$0-2],$$[$0]];
break;
case 21:
this.$ = ["initialize_constant","Object",$$[$0-2],$$[$0]];
break;
case 22:
return ["set_array_size",$$[$0-1],$$[$0][1],$$[$0][2]];
break;
case 23:
this.$ = ["initialize_empty_vars",$$[$0-1],$$[$0]];
break;
case 24: case 25:
this.$ = ["set_var",$$[$0-2],$$[$0]];
break;
case 26: case 27:
this.$ = [$$[$0],$$[$0-1]];
break;
case 28: case 29: case 30: case 31: case 33: case 34: case 35: case 36: case 37: case 38: case 39: case 40: case 41: case 42: case 43: case 44: case 45:
this.$ = [$$[$0-1],$$[$0-2],$$[$0]];
break;
case 32:
this.$ = ["ternary_operator",$$[$0-4],$$[$0-2],$$[$0]]
break;
case 46:
this.$ = ["-",$$[$0]];
break;
case 48:
this.$ = ["!", [".",$$[$0]]];
break;
case 49:
this.$ = [".", $$[$0]];
break;
case 50: case 68: case 71: case 75: case 81:
this.$ = [$$[$0-2]].concat($$[$0]);
break;
case 52:
this.$ = ["access_array",$$[$0-3],[$$[$0-1]]];
break;
case 55:
this.$ = ["parentheses",$$[$0-1]];
break;
case 57:
this.$ = ["initializer_list","Object",[]];
break;
case 58:
this.$ = ["initializer_list","Object",$$[$0-1]];
break;
case 59: case 60: case 61:
this.$ = yytext;
break;
case 64:
this.$ = [$$[$0-2],"[]"];
break;
case 67:
this.$ = [$$[$0],$$[$0-2]];
break;
case 70:
this.$ = [];
break;
case 72: case 74: case 76: case 82:
this.$ = [$$[$0]];
break;
case 73:
this.$ = ["function_call_ref",$$[$0]];
break;
case 77:
this.$ = ["elif",$$[$0-4],$$[$0-2],$$[$0]]
break;
case 78:
this.$ = ["else",$$[$0-1]];
break;
case 79:
this.$ = ["if",$$[$0-4],$$[$0-2],$$[$0]];
break;
case 80:
this.$ = ["if",$$[$0-3],$$[$0-1]];
break;
case 83:
this.$= $$[$0-1];
break;
}
},
table: [{3:1,4:2,6:3,11:$V0,12:$V1,15:$V2,19:6,21:$V3,24:$V4,26:$V5,27:10,33:$V6,34:$V7,37:14,38:15,71:$V8,79:$V9},{1:[3]},{5:[1,18]},o($Va,[2,3],{6:3,19:6,27:10,37:14,38:15,4:19,11:$V0,12:$V1,15:$V2,21:$V3,24:$V4,26:$V5,33:$V6,34:$V7,71:$V8,79:$V9}),{12:[1,20]},{12:[1,21]},{20:[1,22]},{16:[1,23]},{16:[1,24]},{16:[1,25]},o($Vb,[2,13]),{12:$Vc,16:[1,26],36:[1,27],40:[1,28],41:[1,29],42:[1,30],43:[1,31],44:[1,32],45:[1,33],65:[1,34]},{12:$Vd,13:$Ve,16:$Vf,22:35,38:41,56:$Vg,60:37,61:$Vh,62:39,63:40,67:42,68:44,69:$Vi,70:$Vj},{12:[1,50],35:[1,49]},{12:[1,53],38:51,39:52},{36:[1,54]},{12:$Vd,13:$Ve,16:$Vf,22:55,38:41,56:$Vg,60:37,61:$Vh,62:39,63:40,67:42,68:44,69:$Vi,70:$Vj},o($Vk,[2,65]),{1:[2,1]},o($Va,[2,2]),{13:[1,56]},{16:[1,57]},o($Vb,[2,9]),{12:$Vd,13:$Ve,16:$Vf,22:58,38:41,56:$Vg,60:37,61:$Vh,62:39,63:40,67:42,68:44,69:$Vi,70:$Vj},{12:$Vd,13:$Ve,16:$Vf,22:59,38:41,56:$Vg,60:37,61:$Vh,62:39,63:40,67:42,68:44,69:$Vi,70:$Vj},{12:$V1,19:60,33:$V6,34:$V7,37:14,38:15,71:$V8},{12:$Vd,13:$Ve,16:$Vf,18:[1,61],22:65,32:62,38:41,56:$Vg,60:37,61:$Vh,62:39,63:40,67:42,68:44,69:$Vi,70:$Vj,74:63,75:$Vl},{12:$Vd,13:$Ve,16:$Vf,22:66,38:41,56:$Vg,60:37,61:$Vh,62:39,63:40,67:42,68:44,69:$Vi,70:$Vj},o($Vm,[2,26]),o($Vm,[2,27]),{12:$Vd,13:$Ve,16:$Vf,22:67,38:41,56:$Vg,60:37,61:$Vh,62:39,63:40,67:42,68:44,69:$Vi,70:$Vj},{12:$Vd,13:$Ve,16:$Vf,22:68,38:41,56:$Vg,60:37,61:$Vh,62:39,63:40,67:42,68:44,69:$Vi,70:$Vj},{12:$Vd,13:$Ve,16:$Vf,22:69,38:41,56:$Vg,60:37,61:$Vh,62:39,63:40,67:42,68:44,69:$Vi,70:$Vj},{12:$Vd,13:$Ve,16:$Vf,22:70,38:41,56:$Vg,60:37,61:$Vh,62:39,63:40,67:42,68:44,69:$Vi,70:$Vj},{12:$Vd,13:$Ve,16:$Vf,22:72,38:41,56:$Vg,60:37,61:$Vh,62:39,63:40,66:$Vn,67:42,68:44,69:$Vi,70:$Vj},o($Vm,[2,19],{46:$Vo,47:$Vp,48:$Vq,49:$Vr,50:$Vs,51:$Vt,52:$Vu,53:$Vv,54:$Vw,55:$Vx,56:$Vy,57:$Vz,58:$VA,59:$VB}),{12:$Vd,13:$Ve,16:$Vf,22:87,38:41,56:$Vg,60:37,61:$Vh,62:39,63:40,67:42,68:44,69:$Vi,70:$Vj},o($VC,[2,47]),{12:$Vd,13:$Ve,16:$Vf,38:41,62:88,63:40,67:42,68:44,69:$Vi,70:$Vj},o($VC,[2,49]),o($VC,[2,51],{16:[1,90],64:[1,89]}),o($VD,[2,53]),o($VD,[2,54]),{12:$Vd,13:$Ve,16:$Vf,22:91,38:41,56:$Vg,60:37,61:$Vh,62:39,63:40,67:42,68:44,69:$Vi,70:$Vj},o($VD,[2,56]),o($VD,[2,60],{65:$VE}),{12:$Vd,13:$Ve,14:[1,93],16:$Vf,22:65,32:94,38:41,56:$Vg,60:37,61:$Vh,62:39,63:40,67:42,68:44,69:$Vi,70:$Vj,74:63,75:$Vl},o($VD,[2,59]),o($VD,[2,61]),{12:[1,95]},{36:[1,96]},o($Vm,[2,22]),o($Vm,[2,23]),o($Vm,$VF,{65:$VE,73:$VG}),{12:$Vd,13:$Ve,16:$Vf,22:98,38:41,56:$Vg,60:37,61:$Vh,62:39,63:40,67:42,68:44,69:$Vi,70:$Vj},{13:[1,99],46:$Vo,47:$Vp,48:$Vq,49:$Vr,50:$Vs,51:$Vt,52:$Vu,53:$Vv,54:$Vw,55:$Vx,56:$Vy,57:$Vz,58:$VA,59:$VB},{4:101,6:3,7:100,11:$V0,12:$V1,15:$V2,19:6,21:$V3,24:$V4,26:$V5,27:10,33:$V6,34:$V7,37:14,38:15,71:$V8,79:$V9},{12:$VH,17:102,18:$VI,72:103},{18:[1,105],46:$Vo,47:$Vp,48:$Vq,49:$Vr,50:$Vs,51:$Vt,52:$Vu,53:$Vv,54:$Vw,55:$Vx,56:$Vy,57:$Vz,58:$VA,59:$VB},{18:[1,106],46:$Vo,47:$Vp,48:$Vq,49:$Vr,50:$Vs,51:$Vt,52:$Vu,53:$Vv,54:$Vw,55:$Vx,56:$Vy,57:$Vz,58:$VA,59:$VB},{20:[1,107]},o($Vm,[2,17]),{18:[1,108]},o($VJ,[2,72],{73:[1,109]}),{12:$Vd,13:$Ve,16:$Vf,22:110,38:41,56:$Vg,60:37,61:$Vh,62:39,63:40,67:42,68:44,69:$Vi,70:$Vj},o($VK,[2,74],{46:$Vo,47:$Vp,48:$Vq,49:$Vr,50:$Vs,51:$Vt,52:$Vu,53:$Vv,54:$Vw,55:$Vx,56:$Vy,57:$Vz,58:$VA,59:$VB}),o($Vm,[2,25],{46:$Vo,47:$Vp,48:$Vq,49:$Vr,50:$Vs,51:$Vt,52:$Vu,53:$Vv,54:$Vw,55:$Vx,56:$Vy,57:$Vz,58:$VA,59:$VB}),o($Vm,[2,28],{46:$Vo,47:$Vp,48:$Vq,49:$Vr,50:$Vs,51:$Vt,52:$Vu,53:$Vv,54:$Vw,55:$Vx,56:$Vy,57:$Vz,58:$VA,59:$VB}),o($Vm,[2,29],{46:$Vo,47:$Vp,48:$Vq,49:$Vr,50:$Vs,51:$Vt,52:$Vu,53:$Vv,54:$Vw,55:$Vx,56:$Vy,57:$Vz,58:$VA,59:$VB}),o($Vm,[2,30],{46:$Vo,47:$Vp,48:$Vq,49:$Vr,50:$Vs,51:$Vt,52:$Vu,53:$Vv,54:$Vw,55:$Vx,56:$Vy,57:$Vz,58:$VA,59:$VB}),o($Vm,[2,31],{46:$Vo,47:$Vp,48:$Vq,49:$Vr,50:$Vs,51:$Vt,52:$Vu,53:$Vv,54:$Vw,55:$Vx,56:$Vy,57:$Vz,58:$VA,59:$VB}),o($Vk,[2,64]),{46:$Vo,47:$Vp,48:$Vq,49:$Vr,50:$Vs,51:$Vt,52:$Vu,53:$Vv,54:$Vw,55:$Vx,56:$Vy,57:$Vz,58:$VA,59:$VB,66:[1,111]},{12:$Vd,13:$Ve,16:$Vf,22:112,38:41,56:$Vg,60:37,61:$Vh,62:39,63:40,67:42,68:44,69:$Vi,70:$Vj},{12:$Vd,13:$Ve,16:$Vf,22:113,38:41,56:$Vg,60:37,61:$Vh,62:39,63:40,67:42,68:44,69:$Vi,70:$Vj},{12:$Vd,13:$Ve,16:$Vf,22:114,38:41,56:$Vg,60:37,61:$Vh,62:39,63:40,67:42,68:44,69:$Vi,70:$Vj},{12:$Vd,13:$Ve,16:$Vf,22:115,38:41,56:$Vg,60:37,61:$Vh,62:39,63:40,67:42,68:44,69:$Vi,70:$Vj},{12:$Vd,13:$Ve,16:$Vf,22:116,38:41,56:$Vg,60:37,61:$Vh,62:39,63:40,67:42,68:44,69:$Vi,70:$Vj},{12:$Vd,13:$Ve,16:$Vf,22:117,38:41,56:$Vg,60:37,61:$Vh,62:39,63:40,67:42,68:44,69:$Vi,70:$Vj},{12:$Vd,13:$Ve,16:$Vf,22:118,38:41,56:$Vg,60:37,61:$Vh,62:39,63:40,67:42,68:44,69:$Vi,70:$Vj},{12:$Vd,13:$Ve,16:$Vf,22:119,38:41,56:$Vg,60:37,61:$Vh,62:39,63:40,67:42,68:44,69:$Vi,70:$Vj},{12:$Vd,13:$Ve,16:$Vf,22:120,38:41,56:$Vg,60:37,61:$Vh,62:39,63:40,67:42,68:44,69:$Vi,70:$Vj},{12:$Vd,13:$Ve,16:$Vf,22:121,38:41,56:$Vg,60:37,61:$Vh,62:39,63:40,67:42,68:44,69:$Vi,70:$Vj},{12:$Vd,13:$Ve,16:$Vf,22:122,38:41,56:$Vg,60:37,61:$Vh,62:39,63:40,67:42,68:44,69:$Vi,70:$Vj},{12:$Vd,13:$Ve,16:$Vf,22:123,38:41,56:$Vg,60:37,61:$Vh,62:39,63:40,67:42,68:44,69:$Vi,70:$Vj},{12:$Vd,13:$Ve,16:$Vf,22:124,38:41,56:$Vg,60:37,61:$Vh,62:39,63:40,67:42,68:44,69:$Vi,70:$Vj},{12:$Vd,13:$Ve,16:$Vf,22:125,38:41,56:$Vg,60:37,61:$Vh,62:39,63:40,67:42,68:44,69:$Vi,70:$Vj},o($VC,[2,46]),o($VC,[2,48]),{12:$Vd,13:$Ve,16:$Vf,38:41,62:126,63:40,67:42,68:44,69:$Vi,70:$Vj},{12:$Vd,13:$Ve,16:$Vf,18:[1,127],22:65,32:128,38:41,56:$Vg,60:37,61:$Vh,62:39,63:40,67:42,68:44,69:$Vi,70:$Vj,74:63,75:$Vl},{18:[1,129],46:$Vo,47:$Vp,48:$Vq,49:$Vr,50:$Vs,51:$Vt,52:$Vu,53:$Vv,54:$Vw,55:$Vx,56:$Vy,57:$Vz,58:$VA,59:$VB},{12:$Vd,13:$Ve,16:$Vf,22:72,38:41,56:$Vg,60:37,61:$Vh,62:39,63:40,67:42,68:44,69:$Vi,70:$Vj},o($VD,[2,57]),{14:[1,130]},{36:[1,131]},{12:$Vd,13:$Ve,16:$Vf,22:132,38:41,56:$Vg,60:37,61:$Vh,62:39,63:40,67:42,68:44,69:$Vi,70:$Vj},{12:[1,134],39:133},o($Vm,[2,24],{46:$Vo,47:$Vp,48:$Vq,49:$Vr,50:$Vs,51:$Vt,52:$Vu,53:$Vv,54:$Vw,55:$Vx,56:$Vy,57:$Vz,58:$VA,59:$VB}),{4:101,6:3,7:135,11:$V0,12:$V1,15:$V2,19:6,21:$V3,24:$V4,26:$V5,27:10,33:$V6,34:$V7,37:14,38:15,71:$V8,79:$V9},{14:[1,136]},o([14,31],[2,4]),{18:[1,137]},{18:[2,69],73:[1,138]},{30:[1,139]},{12:$V1,13:$VL,19:142,23:140,33:$V6,34:$V7,37:14,38:15,71:$V8},{13:[1,143]},{12:$Vd,13:$Ve,16:$Vf,22:144,38:41,56:$Vg,60:37,61:$Vh,62:39,63:40,67:42,68:44,69:$Vi,70:$Vj},o($Vm,[2,18]),{12:$Vd,13:$Ve,16:$Vf,22:65,32:145,38:41,56:$Vg,60:37,61:$Vh,62:39,63:40,67:42,68:44,69:$Vi,70:$Vj,74:63,75:$Vl},o($VK,[2,73],{46:$Vo,47:$Vp,48:$Vq,49:$Vr,50:$Vs,51:$Vt,52:$Vu,53:$Vv,54:$Vw,55:$Vx,56:$Vy,57:$Vz,58:$VA,59:$VB}),o([13,14,16,18,20,30,36,46,47,48,49,50,51,52,53,54,55,56,57,58,59,64,66,73],[2,52]),{30:[1,146],46:$Vo,47:$Vp,48:$Vq,49:$Vr,50:$Vs,51:$Vt,52:$Vu,53:$Vv,54:$Vw,55:$Vx,56:$Vy,57:$Vz,58:$VA,59:$VB},o([13,14,18,20,30,46,47,66,73],[2,33],{48:$Vq,49:$Vr,50:$Vs,51:$Vt,52:$Vu,53:$Vv,54:$Vw,55:$Vx,56:$Vy,57:$Vz,58:$VA,59:$VB}),o([13,14,18,20,30,46,47,48,66,73],[2,34],{49:$Vr,50:$Vs,51:$Vt,52:$Vu,53:$Vv,54:$Vw,55:$Vx,56:$Vy,57:$Vz,58:$VA,59:$VB}),o($VM,[2,35],{55:$Vx,56:$Vy,57:$Vz,58:$VA,59:$VB}),o($VM,[2,36],{55:$Vx,56:$Vy,57:$Vz,58:$VA,59:$VB}),o($VM,[2,37],{55:$Vx,56:$Vy,57:$Vz,58:$VA,59:$VB}),o($VM,[2,38],{55:$Vx,56:$Vy,57:$Vz,58:$VA,59:$VB}),o($VM,[2,39],{55:$Vx,56:$Vy,57:$Vz,58:$VA,59:$VB}),o($VM,[2,40],{55:$Vx,56:$Vy,57:$Vz,58:$VA,59:$VB}),o($VN,[2,41],{57:$Vz,58:$VA,59:$VB}),o($VN,[2,42],{57:$Vz,58:$VA,59:$VB}),o($VC,[2,43]),o($VC,[2,44]),o($VC,[2,45]),o($VC,[2,50]),o($VD,[2,62]),{18:[1,147]},o($VD,[2,55]),o($VD,[2,58]),{12:$Vd,13:$Ve,16:$Vf,22:148,38:41,56:$Vg,60:37,61:$Vh,62:39,63:40,67:42,68:44,69:$Vi,70:$Vj},o($Vm,[2,21],{46:$Vo,47:$Vp,48:$Vq,49:$Vr,50:$Vs,51:$Vt,52:$Vu,53:$Vv,54:$Vw,55:$Vx,56:$Vy,57:$Vz,58:$VA,59:$VB}),o($Vm,[2,81]),o($Vm,$VF,{73:$VG}),{14:[1,149]},o($Vb,[2,7]),{13:[1,150]},{12:$VH,17:151,18:$VI,72:103},{12:[1,153],37:152,71:$V8},o($Vb,[2,10]),{4:101,6:3,7:154,11:$V0,12:$V1,15:$V2,19:6,21:$V3,24:$V4,26:$V5,27:10,33:$V6,34:$V7,37:14,38:15,71:$V8,79:$V9},{20:[1,155]},{25:156,28:157,29:$VO},{20:[1,159],46:$Vo,47:$Vp,48:$Vq,49:$Vr,50:$Vs,51:$Vt,52:$Vu,53:$Vv,54:$Vw,55:$Vx,56:$Vy,57:$Vz,58:$VA,59:$VB},o($VJ,[2,71]),{12:$Vd,13:$Ve,16:$Vf,22:160,38:41,56:$Vg,60:37,61:$Vh,62:39,63:40,67:42,68:44,69:$Vi,70:$Vj},o($VD,[2,63]),o($Vm,[2,20],{46:$Vo,47:$Vp,48:$Vq,49:$Vr,50:$Vs,51:$Vt,52:$Vu,53:$Vv,54:$Vw,55:$Vx,56:$Vy,57:$Vz,58:$VA,59:$VB}),o($Vb,[2,80],{77:161,78:$VP}),{4:101,6:3,7:163,11:$V0,12:$V1,15:$V2,19:6,21:$V3,24:$V4,26:$V5,27:10,33:$V6,34:$V7,37:14,38:15,71:$V8,79:$V9},{18:[2,68]},o($VQ,[2,67]),o($VQ,$Vc,{65:[1,164]}),{14:[1,165]},o($Vb,[2,84]),{14:[1,166]},{14:[2,16],25:167,28:157,29:$VO},{12:$Vd,13:$Ve,16:$Vf,22:168,38:41,56:$Vg,60:37,61:$Vh,62:39,63:40,67:42,68:44,69:$Vi,70:$Vj},{12:$V1,19:169,33:$V6,34:$V7,37:14,38:15,71:$V8},o([13,14,18,20,30,66,73],[2,32],{46:$Vo,47:$Vp,48:$Vq,49:$Vr,50:$Vs,51:$Vt,52:$Vu,53:$Vv,54:$Vw,55:$Vx,56:$Vy,57:$Vz,58:$VA,59:$VB}),o($Vb,[2,79]),{13:[1,171],79:[1,170]},{14:[1,172]},{66:$Vn},o($Vb,[2,83]),o($Vb,[2,11]),{14:[2,15]},{30:[1,173],46:$Vo,47:$Vp,48:$Vq,49:$Vr,50:$Vs,51:$Vt,52:$Vu,53:$Vv,54:$Vw,55:$Vx,56:$Vy,57:$Vz,58:$VA,59:$VB},{18:[1,174]},{12:$Vd,13:$Ve,16:$Vf,22:175,38:41,56:$Vg,60:37,61:$Vh,62:39,63:40,67:42,68:44,69:$Vi,70:$Vj},{4:101,6:3,7:176,11:$V0,12:$V1,15:$V2,19:6,21:$V3,24:$V4,26:$V5,27:10,33:$V6,34:$V7,37:14,38:15,71:$V8,79:$V9},o($Vb,[2,8]),{4:101,6:3,7:177,11:$V0,12:$V1,15:$V2,19:6,21:$V3,24:$V4,26:$V5,27:10,33:$V6,34:$V7,37:14,38:15,71:$V8,79:$V9},{12:$V1,13:$VL,19:142,23:178,33:$V6,34:$V7,37:14,38:15,71:$V8},{13:[1,179],46:$Vo,47:$Vp,48:$Vq,49:$Vr,50:$Vs,51:$Vt,52:$Vu,53:$Vv,54:$Vw,55:$Vx,56:$Vy,57:$Vz,58:$VA,59:$VB},{14:[1,180]},{31:[1,181]},o($Vb,[2,12]),{4:101,6:3,7:182,11:$V0,12:$V1,15:$V2,19:6,21:$V3,24:$V4,26:$V5,27:10,33:$V6,34:$V7,37:14,38:15,71:$V8,79:$V9},o($Vb,[2,78]),{20:[1,183]},{14:[1,184]},o([14,29],[2,14]),{77:185,78:$VP},o($Vb,[2,77])],
defaultActions: {18:[2,1],151:[2,68],167:[2,15]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip whitespace and line comments */
break;
case 1:return 69
break;
case 2:return 70
break;
case 3:return 15
break;
case 4:return 34
break;
case 5:return 35
break;
case 6:return "if"
break;
case 7:return "else"
break;
case 8:return "return"
break;
case 9:return "void"
break;
case 10:return "case"
break;
case 11:return "printf"
break;
case 12:return "while"
break;
case 13:return "const"
break;
case 14:return "struct"
break;
case 15:return "switch"
break;
case 16:return "for"
break;
case 17:return 73
break;
case 18:return 20
break;
case 19:return 64
break;
case 20:return 30
break;
case 21:return 48
break;
case 22:return 75
break;
case 23:return 47
break;
case 24:return 54
break;
case 25:return 61
break;
case 26:return 51
break;
case 27:return '>>'
break;
case 28:return 52
break;
case 29:return 49
break;
case 30:return '<<'
break;
case 31:return 50
break;
case 32:return 53
break;
case 33:return 36
break;
case 34:return 44
break;
case 35:return 58
break;
case 36:return 57
break;
case 37:return 45
break;
case 38:return 59
break;
case 39:return 43
break;
case 40:return 41
break;
case 41:return 56
break;
case 42:return 40
break;
case 43:return 42
break;
case 44:return 55
break;
case 45:return '^'
break;
case 46:return 46
break;
case 47:return 13
break;
case 48:return 14
break;
case 49:return 65
break;
case 50:return 66
break;
case 51:return 16
break;
case 52:return 18
break;
case 53:return 12
break;
case 54:return 5
break;
case 55:return 'INVALID'
break;
}
},
rules: [/^(?:(\s+|\/\/+.*\n))/,/^(?:[0-9]+(\.[0-9]+)?\b)/,/^(?:"([^\\\"]|\\.)*")/,/^(?:fn\b)/,/^(?:let\b)/,/^(?:mut\b)/,/^(?:if\b)/,/^(?:else\b)/,/^(?:return\b)/,/^(?:void\b)/,/^(?:case\b)/,/^(?:printf\b)/,/^(?:while\b)/,/^(?:const\b)/,/^(?:struct\b)/,/^(?:switch\b)/,/^(?:for\b)/,/^(?:,)/,/^(?:;)/,/^(?:\.)/,/^(?::)/,/^(?:&&)/,/^(?:&)/,/^(?:\|\|)/,/^(?:!=)/,/^(?:!)/,/^(?:>=)/,/^(?:>>)/,/^(?:>)/,/^(?:<=)/,/^(?:<<)/,/^(?:<)/,/^(?:==)/,/^(?:=)/,/^(?:\*=)/,/^(?:\*)/,/^(?:%)/,/^(?:\/=)/,/^(?:\/)/,/^(?:-=)/,/^(?:--)/,/^(?:-)/,/^(?:\+\+)/,/^(?:\+=)/,/^(?:\+)/,/^(?:\^)/,/^(?:\?)/,/^(?:\{)/,/^(?:\})/,/^(?:\[)/,/^(?:\])/,/^(?:\()/,/^(?:\))/,/^(?:[a-zA-Z_][a-zA-Z0-9_]*)/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = rust_parser;
exports.Parser = rust_parser.Parser;
exports.parse = function () { return rust_parser.parse.apply(rust_parser, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}