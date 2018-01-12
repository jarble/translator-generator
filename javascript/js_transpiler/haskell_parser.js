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
var haskell_parser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,4],$V1=[1,13],$V2=[1,12],$V3=[1,17],$V4=[1,27],$V5=[1,23],$V6=[1,21],$V7=[1,25],$V8=[1,26],$V9=[1,28],$Va=[5,7],$Vb=[12,14,42],$Vc=[1,31],$Vd=[5,7,38,42,51],$Ve=[1,39],$Vf=[1,36],$Vg=[1,40],$Vh=[1,41],$Vi=[1,42],$Vj=[1,43],$Vk=[1,44],$Vl=[1,45],$Vm=[1,46],$Vn=[1,47],$Vo=[1,48],$Vp=[1,49],$Vq=[1,50],$Vr=[1,51],$Vs=[1,52],$Vt=[1,53],$Vu=[5,7,12,18,19,20,21,22,23,24,25,26,27,28,29,30,31,38,41,42,43,44,51,53],$Vv=[5,7,12,18,19,20,21,22,23,24,25,26,27,28,29,30,31,34,36,38,39,41,42,43,44,45,47,51,53],$Vw=[2,37],$Vx=[2,48],$Vy=[1,83],$Vz=[5,7,12,18,19,20,21,22,23,24,38,41,42,43,44,51,53],$VA=[5,7,12,18,19,20,21,22,23,24,25,26,27,38,41,42,43,44,51,53],$VB=[5,7,12,18,19,20,21,22,23,24,25,26,27,28,29,30,38,41,42,43,44,51,53],$VC=[1,96],$VD=[1,107];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"expressions":3,"statements_":4,"EOF":5,"statement_":6,"IDENTIFIER":7,"parameters":8,"guard_if_statement":9,"::":10,"types":11,"=":12,"statement":13,"->":14,"if_statement":15,"statement_with_semicolon":16,"e":17,"||":18,"&&":19,"==":20,"<=":21,"<":22,">=":23,">":24,"++":25,"+":26,"-":27,"*":28,"/":29,"mod":30,"**":31,"parentheses_expr":32,"access_array":33,"!!":34,"access_arr":35,"(":36,"\\\\":37,")":38,"[":39,"exprs":40,"]":41,"|":42,"<-":43,",":44,"NUMBER":45,"args":46,"STRING_LITERAL":47,"type":48,"parameter":49,"elif":50,"else":51,"if":52,"then":53,"identifiers":54,"guard_elif":55,"guard_otherwise":56,"otherwise":57,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",7:"IDENTIFIER",10:"::",12:"=",14:"->",18:"||",19:"&&",20:"==",21:"<=",22:"<",23:">=",24:">",25:"++",26:"+",27:"-",28:"*",29:"/",30:"mod",31:"**",34:"!!",36:"(",37:"\\\\",38:")",39:"[",41:"]",42:"|",43:"<-",44:",",45:"NUMBER",47:"STRING_LITERAL",51:"else",52:"if",53:"then",57:"otherwise"},
productions_: [0,[3,2],[4,2],[4,1],[6,3],[6,7],[6,4],[6,3],[6,2],[11,3],[11,1],[13,1],[13,1],[16,1],[17,3],[17,3],[17,3],[17,3],[17,3],[17,3],[17,3],[17,3],[17,3],[17,3],[17,3],[17,3],[17,3],[17,3],[17,2],[17,1],[33,3],[32,6],[32,3],[32,3],[32,7],[32,9],[32,1],[32,1],[32,3],[32,4],[32,1],[48,1],[49,1],[8,2],[8,1],[35,3],[35,1],[40,3],[40,1],[46,2],[46,1],[50,6],[50,2],[15,7],[15,6],[54,3],[54,1],[9,5],[55,5],[55,1],[56,4]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
return ["top_level_statements",$$[$0-1]]
break;
case 2: case 43: case 49:
this.$ = [$$[$0-1]].concat($$[$0]);
break;
case 3: case 10: case 44: case 46:
this.$ =
 [$$[$0]];
break;
case 4:
this.$ = ["function","public","Object",$$[$0-2],$$[$0-1],$$[$0]];
break;
case 5:

		var types = $$[$0-4];
		var parameter_names = $$[$0-2];
		var parameters = [];
		for(var i = 0; i < parameter_names.length; i++){
			parameters.push([types[i],parameter_names[i][1]]);
		}
		this.$ = ["function","public",types[types.length-1],$$[$0-6],parameters,$$[$0]];
	
break;
case 6:
this.$ = ["function","public","Object",$$[$0-3],$$[$0-2],$$[$0]];
break;
case 7:
this.$ = ["function","public","Object",$$[$0-2],[],$$[$0]];
break;
case 8:
this.$ = ["function","public","Object",$$[$0-1],[],$$[$0]];
break;
case 9: case 45: case 47: case 55:
this.$ = [$$[$0-2]].concat($$[$0]);
break;
case 12:
this.$ = ["semicolon",$$[$0]];
break;
case 13:
this.$ = ["return",$$[$0]];
break;
case 14: case 15: case 16: case 17: case 18: case 19: case 20: case 21: case 22: case 23: case 24: case 25: case 27:
this.$ = [$$[$0-1],$$[$0-2],$$[$0]];
break;
case 26:
this.$ = ["%",$$[$0-2],$$[$0]];
break;
case 28:
this.$ = ["-",$$[$0]];
break;
case 29:
this.$ = $$[$0];
break;
case 30:
this.$ = ["access_array",$$[$0-2],[$$[$0]]];
break;
case 31:
this.$ = ["anonymous_function","Object",$$[$0-3],["statements",[["semicolon",["return",$$[$0-1]]]]]];
break;
case 32: case 38:
this.$ = $$[$0-1]
break;
case 33:
this.$ = ["initializer_list","Object",$$[$0-1]];
break;
case 34:
this.$ = ["list_comprehension",$$[$0-5],$$[$0-3],$$[$0-1]];
break;
case 35:
this.$ = ["list_comprehension",$$[$0-7],$$[$0-5],$$[$0-3],$$[$0-1]];
break;
case 36: case 40:
this.$ = yytext;
break;
case 39:

			if($$[$0-2] === "not"){
				this.$ = ["!",$$[$0-1]];
			}
			else{
				this.$ = ["function_call",$$[$0-2],$$[$0-1]];
			}
		
break;
case 42:
this.$ = ["Object",$$[$0]];
break;
case 48: case 50: case 56:
this.$ = [$$[$0]];
break;
case 51:
this.$ = ["elif",$$[$0-3],$$[$0-1],$$[$0]]
break;
case 52: case 60:
this.$ = ["else",$$[$0]];
break;
case 53:
this.$ = ["if",$$[$0-4],$$[$0-2],$$[$0-1]];
break;
case 54:
this.$ = ["if",$$[$0-3],$$[$0-1]];
break;
case 57:
this.$ = ["if",$$[$0-3],$$[$0-1],$$[$0]];
break;
case 58:
this.$ = ["elif",$$[$0-3],$$[$0-1],$$[$0]];
break;
}
},
table: [{3:1,4:2,6:3,7:$V0},{1:[3]},{5:[1,5]},{4:6,5:[2,3],6:3,7:$V0},{7:$V1,8:7,9:10,10:[1,8],12:[1,9],42:$V2,49:11},{1:[2,1]},{5:[2,2]},{9:14,12:[1,15],42:$V2},{7:$V3,11:16},{7:$V4,13:18,15:19,16:20,17:22,27:$V5,32:24,36:$V6,39:$V7,45:$V8,47:$V9},o($Va,[2,8]),o($Vb,[2,44],{49:11,8:29,7:$V1}),{7:$V4,17:30,27:$V5,32:24,36:$Vc,39:$V7,45:$V8,47:$V9},o([7,12,14,42],[2,42]),o($Va,[2,4]),{7:$V4,13:32,15:19,16:20,17:22,27:$V5,32:24,36:$V6,39:$V7,45:$V8,47:$V9},{7:[1,33]},{7:[2,10],14:[1,34]},o($Va,[2,7]),o($Vd,[2,11]),o($Vd,[2,12]),{7:$Ve,17:38,27:$V5,32:24,33:37,36:$Vc,37:$Vf,39:$V7,45:$V8,47:$V9,52:[1,35]},o($Vd,[2,13],{18:$Vg,19:$Vh,20:$Vi,21:$Vj,22:$Vk,23:$Vl,24:$Vm,25:$Vn,26:$Vo,27:$Vp,28:$Vq,29:$Vr,30:$Vs,31:$Vt}),{7:$V4,17:54,27:$V5,32:24,36:$Vc,39:$V7,45:$V8,47:$V9},o($Vu,[2,29]),{7:$V4,17:56,27:$V5,32:24,36:$Vc,39:$V7,40:55,45:$V8,47:$V9},o($Vv,[2,36]),o($Vv,$Vw),o($Vv,[2,40]),o($Vb,[2,43]),{12:[1,57],18:$Vg,19:$Vh,20:$Vi,21:$Vj,22:$Vk,23:$Vl,24:$Vm,25:$Vn,26:$Vo,27:$Vp,28:$Vq,29:$Vr,30:$Vs,31:$Vt},{7:$Ve,17:38,27:$V5,32:24,33:37,36:$Vc,37:$Vf,39:$V7,45:$V8,47:$V9},o($Va,[2,6]),{7:$V1,8:58,49:11},{7:$V3,11:59},{7:$V4,17:60,27:$V5,32:24,36:$Vc,39:$V7,45:$V8,47:$V9},{7:$V1,8:61,49:11},{38:[1,62]},{18:$Vg,19:$Vh,20:$Vi,21:$Vj,22:$Vk,23:$Vl,24:$Vm,25:$Vn,26:$Vo,27:$Vp,28:$Vq,29:$Vr,30:$Vs,31:$Vt,38:[1,63]},o([18,19,20,21,22,23,24,25,26,27,28,29,30,31,38],$Vw,{46:64,32:66,7:$V4,34:[1,65],36:$Vc,39:$V7,45:$V8,47:$V9}),{7:$V4,17:67,27:$V5,32:24,36:$Vc,39:$V7,45:$V8,47:$V9},{7:$V4,17:68,27:$V5,32:24,36:$Vc,39:$V7,45:$V8,47:$V9},{7:$V4,17:69,27:$V5,32:24,36:$Vc,39:$V7,45:$V8,47:$V9},{7:$V4,17:70,27:$V5,32:24,36:$Vc,39:$V7,45:$V8,47:$V9},{7:$V4,17:71,27:$V5,32:24,36:$Vc,39:$V7,45:$V8,47:$V9},{7:$V4,17:72,27:$V5,32:24,36:$Vc,39:$V7,45:$V8,47:$V9},{7:$V4,17:73,27:$V5,32:24,36:$Vc,39:$V7,45:$V8,47:$V9},{7:$V4,17:74,27:$V5,32:24,36:$Vc,39:$V7,45:$V8,47:$V9},{7:$V4,17:75,27:$V5,32:24,36:$Vc,39:$V7,45:$V8,47:$V9},{7:$V4,17:76,27:$V5,32:24,36:$Vc,39:$V7,45:$V8,47:$V9},{7:$V4,17:77,27:$V5,32:24,36:$Vc,39:$V7,45:$V8,47:$V9},{7:$V4,17:78,27:$V5,32:24,36:$Vc,39:$V7,45:$V8,47:$V9},{7:$V4,17:79,27:$V5,32:24,36:$Vc,39:$V7,45:$V8,47:$V9},{7:$V4,17:80,27:$V5,32:24,36:$Vc,39:$V7,45:$V8,47:$V9},o($Vu,[2,28]),{41:[1,81]},{18:$Vg,19:$Vh,20:$Vi,21:$Vj,22:$Vk,23:$Vl,24:$Vm,25:$Vn,26:$Vo,27:$Vp,28:$Vq,29:$Vr,30:$Vs,31:$Vt,41:$Vx,42:[1,82],44:$Vy},{7:$V4,13:84,15:19,16:20,17:22,27:$V5,32:24,36:$V6,39:$V7,45:$V8,47:$V9},{12:[1,85]},{7:[2,9]},{18:$Vg,19:$Vh,20:$Vi,21:$Vj,22:$Vk,23:$Vl,24:$Vm,25:$Vn,26:$Vo,27:$Vp,28:$Vq,29:$Vr,30:$Vs,31:$Vt,53:[1,86]},{14:[1,87]},o($Vv,[2,32]),o($Vv,[2,38]),{38:[1,88]},{7:$V4,32:90,35:89,36:$Vc,39:$V7,45:$V8,47:$V9},{7:$V4,32:66,36:$Vc,38:[2,50],39:$V7,45:$V8,46:91,47:$V9},o([5,7,12,18,38,41,42,43,44,51,53],[2,14],{19:$Vh,20:$Vi,21:$Vj,22:$Vk,23:$Vl,24:$Vm,25:$Vn,26:$Vo,27:$Vp,28:$Vq,29:$Vr,30:$Vs,31:$Vt}),o([5,7,12,18,19,38,41,42,43,44,51,53],[2,15],{20:$Vi,21:$Vj,22:$Vk,23:$Vl,24:$Vm,25:$Vn,26:$Vo,27:$Vp,28:$Vq,29:$Vr,30:$Vs,31:$Vt}),o($Vz,[2,16],{25:$Vn,26:$Vo,27:$Vp,28:$Vq,29:$Vr,30:$Vs,31:$Vt}),o($Vz,[2,17],{25:$Vn,26:$Vo,27:$Vp,28:$Vq,29:$Vr,30:$Vs,31:$Vt}),o($Vz,[2,18],{25:$Vn,26:$Vo,27:$Vp,28:$Vq,29:$Vr,30:$Vs,31:$Vt}),o($Vz,[2,19],{25:$Vn,26:$Vo,27:$Vp,28:$Vq,29:$Vr,30:$Vs,31:$Vt}),o($Vz,[2,20],{25:$Vn,26:$Vo,27:$Vp,28:$Vq,29:$Vr,30:$Vs,31:$Vt}),o($VA,[2,21],{28:$Vq,29:$Vr,30:$Vs,31:$Vt}),o($VA,[2,22],{28:$Vq,29:$Vr,30:$Vs,31:$Vt}),o($VA,[2,23],{28:$Vq,29:$Vr,30:$Vs,31:$Vt}),o($VB,[2,24],{31:$Vt}),o($VB,[2,25],{31:$Vt}),o($VB,[2,26],{31:$Vt}),o($Vu,[2,27]),o($Vv,[2,33]),{7:$V4,17:92,27:$V5,32:24,36:$Vc,39:$V7,45:$V8,47:$V9},{7:$V4,17:94,27:$V5,32:24,36:$Vc,39:$V7,40:93,45:$V8,47:$V9},{42:$VC,55:95,56:97},{7:$V4,13:98,15:19,16:20,17:22,27:$V5,32:24,36:$V6,39:$V7,45:$V8,47:$V9},{7:$V4,13:99,15:19,16:20,17:22,27:$V5,32:24,36:$V6,39:$V7,45:$V8,47:$V9},{7:$V4,17:100,27:$V5,32:24,36:$Vc,39:$V7,45:$V8,47:$V9},o($Vv,[2,39]),{38:[2,30]},{34:[1,101],38:[2,46]},{38:[2,49]},{18:$Vg,19:$Vh,20:$Vi,21:$Vj,22:$Vk,23:$Vl,24:$Vm,25:$Vn,26:$Vo,27:$Vp,28:$Vq,29:$Vr,30:$Vs,31:$Vt,43:[1,102]},{41:[2,47]},{18:$Vg,19:$Vh,20:$Vi,21:$Vj,22:$Vk,23:$Vl,24:$Vm,25:$Vn,26:$Vo,27:$Vp,28:$Vq,29:$Vr,30:$Vs,31:$Vt,41:$Vx,44:$Vy},o($Va,[2,57]),{7:$V4,17:103,27:$V5,32:24,36:$Vc,39:$V7,45:$V8,47:$V9,57:[1,104]},o($Va,[2,59]),o($Va,[2,5]),{38:[1,106],50:105,51:$VD},{18:$Vg,19:$Vh,20:$Vi,21:$Vj,22:$Vk,23:$Vl,24:$Vm,25:$Vn,26:$Vo,27:$Vp,28:$Vq,29:$Vr,30:$Vs,31:$Vt,38:[1,108]},{7:$V4,32:90,35:109,36:$Vc,39:$V7,45:$V8,47:$V9},{7:$V4,17:110,27:$V5,32:24,36:$Vc,39:$V7,45:$V8,47:$V9},{12:[1,111],18:$Vg,19:$Vh,20:$Vi,21:$Vj,22:$Vk,23:$Vl,24:$Vm,25:$Vn,26:$Vo,27:$Vp,28:$Vq,29:$Vr,30:$Vs,31:$Vt},{12:[1,112]},{38:[1,113]},o($Vd,[2,54]),{7:$V4,13:115,15:19,16:20,17:22,27:$V5,32:24,36:$V6,39:$V7,45:$V8,47:$V9,52:[1,114]},o($Vv,[2,31]),{38:[2,45]},{18:$Vg,19:$Vh,20:$Vi,21:$Vj,22:$Vk,23:$Vl,24:$Vm,25:$Vn,26:$Vo,27:$Vp,28:$Vq,29:$Vr,30:$Vs,31:$Vt,41:[1,116],44:[1,117]},{7:$V4,13:118,15:19,16:20,17:22,27:$V5,32:24,36:$V6,39:$V7,45:$V8,47:$V9},{7:$V4,13:119,15:19,16:20,17:22,27:$V5,32:24,36:$V6,39:$V7,45:$V8,47:$V9},o($Vd,[2,53]),{7:$V4,17:120,27:$V5,32:24,36:$Vc,39:$V7,45:$V8,47:$V9},{38:[2,52]},o($Vv,[2,34]),{7:$V4,17:121,27:$V5,32:24,36:$Vc,39:$V7,45:$V8,47:$V9},{42:$VC,55:122,56:97},o($Va,[2,60]),{18:$Vg,19:$Vh,20:$Vi,21:$Vj,22:$Vk,23:$Vl,24:$Vm,25:$Vn,26:$Vo,27:$Vp,28:$Vq,29:$Vr,30:$Vs,31:$Vt,53:[1,123]},{18:$Vg,19:$Vh,20:$Vi,21:$Vj,22:$Vk,23:$Vl,24:$Vm,25:$Vn,26:$Vo,27:$Vp,28:$Vq,29:$Vr,30:$Vs,31:$Vt,41:[1,124]},o($Va,[2,58]),{7:$V4,13:125,15:19,16:20,17:22,27:$V5,32:24,36:$V6,39:$V7,45:$V8,47:$V9},o($Vv,[2,35]),{50:126,51:$VD},{38:[2,51]}],
defaultActions: {5:[2,1],6:[2,2],59:[2,9],89:[2,30],91:[2,49],93:[2,47],109:[2,45],115:[2,52],126:[2,51]},
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
case 0:/* skip whitespace */
break;
case 1:return 45
break;
case 2:return 47
break;
case 3:return "otherwise"
break;
case 4:return "if"
break;
case 5:return "else"
break;
case 6:return "then"
break;
case 7:return "return"
break;
case 8:return 30
break;
case 9:return 44
break;
case 10:return ';'
break;
case 11:return '.'
break;
case 12:return 10
break;
case 13:return ':'
break;
case 14:return 19
break;
case 15:return 18
break;
case 16:return 42
break;
case 17:return 37
break;
case 18:return 23
break;
case 19:return 24
break;
case 20:return 21
break;
case 21:return 43
break;
case 22:return 14
break;
case 23:return 22
break;
case 24:return 20
break;
case 25:return 12
break;
case 26:return '*='
break;
case 27:return 31
break;
case 28:return 28
break;
case 29:return '/='
break;
case 30:return 29
break;
case 31:return '-='
break;
case 32:return '--'
break;
case 33:return 27
break;
case 34:return 25
break;
case 35:return '+='
break;
case 36:return 26
break;
case 37:return '^'
break;
case 38:return '{'
break;
case 39:return '}'
break;
case 40:return 34
break;
case 41:return 39
break;
case 42:return 41
break;
case 43:return 36
break;
case 44:return 38
break;
case 45:return 7
break;
case 46:return 5
break;
case 47:return 'INVALID'
break;
}
},
rules: [/^(?:\s+)/,/^(?:[0-9]+(\.[0-9]+)?\b)/,/^(?:"([^\\\"]|\\.)*")/,/^(?:otherwise\b)/,/^(?:if\b)/,/^(?:else\b)/,/^(?:then\b)/,/^(?:return\b)/,/^(?:mod\b)/,/^(?:,)/,/^(?:;)/,/^(?:\.)/,/^(?:::)/,/^(?::)/,/^(?:&&)/,/^(?:\|\|)/,/^(?:\|)/,/^(?:\\)/,/^(?:>=)/,/^(?:>)/,/^(?:<=)/,/^(?:<-)/,/^(?:->)/,/^(?:<)/,/^(?:==)/,/^(?:=)/,/^(?:\*=)/,/^(?:\*\*)/,/^(?:\*)/,/^(?:\/=)/,/^(?:\/)/,/^(?:-=)/,/^(?:--)/,/^(?:-)/,/^(?:\+\+)/,/^(?:\+=)/,/^(?:\+)/,/^(?:\^)/,/^(?:\{)/,/^(?:\})/,/^(?:!!)/,/^(?:\[)/,/^(?:\])/,/^(?:\()/,/^(?:\))/,/^(?:[a-zA-Z_][a-zA-Z0-9_]*)/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47],"inclusive":true}}
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
exports.parser = haskell_parser;
exports.Parser = haskell_parser.Parser;
exports.parse = function () { return haskell_parser.parse.apply(haskell_parser, arguments); };
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