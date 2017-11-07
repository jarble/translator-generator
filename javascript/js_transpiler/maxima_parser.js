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
var maxima_parser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,5],$V1=[1,6],$V2=[1,7],$V3=[9,10,14,26,54],$V4=[1,23],$V5=[1,20],$V6=[1,22],$V7=[1,13],$V8=[1,15],$V9=[1,16],$Va=[1,17],$Vb=[1,19],$Vc=[1,24],$Vd=[1,25],$Ve=[1,32],$Vf=[1,33],$Vg=[1,34],$Vh=[1,35],$Vi=[1,36],$Vj=[1,37],$Vk=[1,38],$Vl=[1,39],$Vm=[1,40],$Vn=[1,41],$Vo=[1,42],$Vp=[1,43],$Vq=[1,44],$Vr=[1,45],$Vs=[1,46],$Vt=[9,10,14,17,23,26,28,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,54],$Vu=[1,51],$Vv=[9,10,14,17,22,23,26,28,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,54,59],$Vw=[2,52],$Vx=[1,60],$Vy=[14,23],$Vz=[9,10,14,17,23,26,28,30,31,32,33,34,35,36,37,38,39,54],$VA=[9,10,14,17,23,26,28,30,31,32,33,34,35,36,37,38,39,40,41,54],$VB=[1,102],$VC=[14,54];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"expressions":3,"statements_":4,"EOF":5,"statements":6,"statements__":7,"statement":8,";":9,",":10,"statement_with_semicolon":11,"(":12,"if_statement":13,")":14,"while":15,"e":16,"do":17,"IDENTIFIER":18,"parameters":19,":=":20,"block":21,"[":22,"]":23,"bracket_statements":24,"elif":25,"else":26,"if":27,"then":28,":":29,"||":30,"&&":31,"!==":32,"===":33,"in":34,"instanceof":35,"<=":36,"<":37,">=":38,">":39,"+":40,"-":41,"*":42,"/":43,"%":44,"not_expr":45,"!":46,"parentheses_expr":47,"typeof":48,"await":49,"access_array":50,"access_arr":51,"function":52,"{":53,"}":54,"exprs":55,"NUMBER":56,"STRING_LITERAL":57,"parameter":58,"][":59,"types":60,"type":61,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",9:";",10:",",12:"(",14:")",15:"while",17:"do",18:"IDENTIFIER",20:":=",21:"block",22:"[",23:"]",26:"else",27:"if",28:"then",29:":",30:"||",31:"&&",32:"!==",33:"===",34:"in",35:"instanceof",36:"<=",37:"<",38:">=",39:">",40:"+",41:"-",42:"*",43:"/",44:"%",46:"!",48:"typeof",49:"await",52:"function",53:"{",54:"}",56:"NUMBER",57:"STRING_LITERAL",59:"][",61:"type"},
productions_: [0,[3,2],[6,1],[4,3],[4,2],[7,3],[7,1],[8,1],[8,3],[8,6],[8,12],[24,1],[25,6],[25,2],[13,5],[13,4],[11,3],[16,3],[16,3],[16,3],[16,3],[16,3],[16,3],[16,3],[16,3],[16,3],[16,3],[16,3],[16,3],[16,3],[16,3],[16,3],[16,2],[16,1],[45,2],[45,2],[45,2],[45,1],[50,4],[47,7],[47,3],[47,4],[47,1],[47,2],[47,3],[47,3],[47,1],[47,1],[47,1],[58,1],[19,3],[19,1],[19,0],[51,3],[51,1],[55,3],[55,1],[60,3],[60,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
return ["top_level_statements",$$[$0-1]];
break;
case 2:
this.$ = ["statements",$$[$0]];
break;
case 3: case 5: case 50: case 53: case 55: case 57:
this.$ = [$$[$0-2]].concat($$[$0]);
break;
case 4:
this.$ =
 [$$[$0-1]];
break;
case 6: case 51: case 54:
this.$ =
 [$$[$0]];
break;
case 7:
this.$ = ["semicolon",$$[$0]];
break;
case 8:
this.$ = $$[$0-1];
break;
case 9:
this.$ = ["while",$$[$0-4],$$[$0-1]];
break;
case 10:
this.$ = ["function","public","Object",$$[$0-11],$$[$0-9],$$[$0-1]];
break;
case 11:
this.$ = $$[$0]
break;
case 12:
this.$ = ["elif",$$[$0-3],$$[$0-1],$$[$0]]
break;
case 13:
this.$ = ["else",$$[$0]];
break;
case 14:
this.$ = ["if",$$[$0-3],$$[$0-1],$$[$0]];
break;
case 15:
this.$ = ["if",$$[$0-2],$$[$0]];
break;
case 16:
this.$ = ["set_var",$$[$0-2],$$[$0]];
break;
case 17: case 18: case 23: case 24: case 25: case 26: case 27:
this.$ = [$$[$0-1],$$[$0-2],$$[$0]];
break;
case 19:
this.$ = ['!=',$$[$0-2],$$[$0]];
break;
case 20:
this.$ = ['==',$$[$0-2],$$[$0]];
break;
case 21: case 22:
this.$ = ['in',$$[$0-2],$$[$0]];
break;
case 28:
this.$ = ["-",$$[$0-2],$$[$0]];
break;
case 29:
this.$ = ["*",$$[$0-2],$$[$0]];
break;
case 30: case 31:
this.$ = ["/",$$[$0-2],$$[$0]];
break;
case 32:
this.$ = ["-",$$[$0]];
break;
case 34:
this.$ = ["!", [".",$$[$0]]];
break;
case 35:
this.$ = [$$[$0-1], [".",$$[$0]]];
break;
case 36:
this.$ = ["await", [".",$$[$0]]]
break;
case 37:
this.$ = [".", $$[$0]];
break;
case 38:
this.$ = ["access_array",$$[$0-3],$$[$0-1]];
break;
case 39:
this.$ = ["anonymous_function","Object",$$[$0-4],$$[$0-1]]
break;
case 40:
this.$= ["function_call",$$[$0-2],[]];
break;
case 41:
this.$= ["function_call",$$[$0-3],$$[$0-1]];
break;
case 43:
this.$ = ["initializer_list","Object",[]];
break;
case 44:
this.$ = ["initializer_list","Object",$$[$0-1]];
break;
case 45:
this.$ = ["parentheses",$$[$0-1]];
break;
case 46: case 47: case 48:
this.$ = yytext;
break;
case 49:
this.$ = ["Object", $$[$0]];
break;
case 52:
this.$ = []
break;
case 56: case 58:
this.$ = [$$[$0]];
break;
}
},
table: [{3:1,4:2,8:3,11:4,12:$V0,15:$V1,18:$V2},{1:[3]},{5:[1,8]},{9:[1,9]},o($V3,[2,7]),{13:10,27:[1,11]},{12:$V4,16:12,18:$V5,22:$V6,41:$V7,45:14,46:$V8,47:18,48:$V9,49:$Va,50:21,52:$Vb,56:$Vc,57:$Vd},{12:[1,26],29:[1,27]},{1:[2,1]},{4:28,5:[2,4],8:3,11:4,12:$V0,15:$V1,18:$V2},{14:[1,29]},{12:$V4,16:30,18:$V5,22:$V6,41:$V7,45:14,46:$V8,47:18,48:$V9,49:$Va,50:21,52:$Vb,56:$Vc,57:$Vd},{17:[1,31],30:$Ve,31:$Vf,32:$Vg,33:$Vh,34:$Vi,35:$Vj,36:$Vk,37:$Vl,38:$Vm,39:$Vn,40:$Vo,41:$Vp,42:$Vq,43:$Vr,44:$Vs},{12:$V4,16:47,18:$V5,22:$V6,41:$V7,45:14,46:$V8,47:18,48:$V9,49:$Va,50:21,52:$Vb,56:$Vc,57:$Vd},o($Vt,[2,33]),{12:$V4,18:$V5,22:$V6,47:48,50:21,52:$Vb,56:$Vc,57:$Vd},{12:$V4,18:$V5,22:$V6,47:49,50:21,52:$Vb,56:$Vc,57:$Vd},{12:$V4,18:$V5,22:$V6,47:50,50:21,52:$Vb,56:$Vc,57:$Vd},o($Vt,[2,37],{22:$Vu}),{12:[1,52]},o($Vv,[2,47],{12:[1,53]}),o($Vv,[2,42]),{12:$V4,16:56,18:$V5,22:$V6,23:[1,54],41:$V7,45:14,46:$V8,47:18,48:$V9,49:$Va,50:21,52:$Vb,55:55,56:$Vc,57:$Vd},{12:$V4,16:57,18:$V5,22:$V6,41:$V7,45:14,46:$V8,47:18,48:$V9,49:$Va,50:21,52:$Vb,56:$Vc,57:$Vd},o($Vv,[2,46]),o($Vv,[2,48]),{14:$Vw,18:$Vx,19:58,58:59},{12:$V4,16:61,18:$V5,22:$V6,41:$V7,45:14,46:$V8,47:18,48:$V9,49:$Va,50:21,52:$Vb,56:$Vc,57:$Vd},{5:[2,3]},o($V3,[2,8]),{28:[1,62],30:$Ve,31:$Vf,32:$Vg,33:$Vh,34:$Vi,35:$Vj,36:$Vk,37:$Vl,38:$Vm,39:$Vn,40:$Vo,41:$Vp,42:$Vq,43:$Vr,44:$Vs},{12:[1,63]},{12:$V4,16:64,18:$V5,22:$V6,41:$V7,45:14,46:$V8,47:18,48:$V9,49:$Va,50:21,52:$Vb,56:$Vc,57:$Vd},{12:$V4,16:65,18:$V5,22:$V6,41:$V7,45:14,46:$V8,47:18,48:$V9,49:$Va,50:21,52:$Vb,56:$Vc,57:$Vd},{12:$V4,16:66,18:$V5,22:$V6,41:$V7,45:14,46:$V8,47:18,48:$V9,49:$Va,50:21,52:$Vb,56:$Vc,57:$Vd},{12:$V4,16:67,18:$V5,22:$V6,41:$V7,45:14,46:$V8,47:18,48:$V9,49:$Va,50:21,52:$Vb,56:$Vc,57:$Vd},{12:$V4,16:68,18:$V5,22:$V6,41:$V7,45:14,46:$V8,47:18,48:$V9,49:$Va,50:21,52:$Vb,56:$Vc,57:$Vd},{12:$V4,16:69,18:$V5,22:$V6,41:$V7,45:14,46:$V8,47:18,48:$V9,49:$Va,50:21,52:$Vb,56:$Vc,57:$Vd},{12:$V4,16:70,18:$V5,22:$V6,41:$V7,45:14,46:$V8,47:18,48:$V9,49:$Va,50:21,52:$Vb,56:$Vc,57:$Vd},{12:$V4,16:71,18:$V5,22:$V6,41:$V7,45:14,46:$V8,47:18,48:$V9,49:$Va,50:21,52:$Vb,56:$Vc,57:$Vd},{12:$V4,16:72,18:$V5,22:$V6,41:$V7,45:14,46:$V8,47:18,48:$V9,49:$Va,50:21,52:$Vb,56:$Vc,57:$Vd},{12:$V4,16:73,18:$V5,22:$V6,41:$V7,45:14,46:$V8,47:18,48:$V9,49:$Va,50:21,52:$Vb,56:$Vc,57:$Vd},{12:$V4,16:74,18:$V5,22:$V6,41:$V7,45:14,46:$V8,47:18,48:$V9,49:$Va,50:21,52:$Vb,56:$Vc,57:$Vd},{12:$V4,16:75,18:$V5,22:$V6,41:$V7,45:14,46:$V8,47:18,48:$V9,49:$Va,50:21,52:$Vb,56:$Vc,57:$Vd},{12:$V4,16:76,18:$V5,22:$V6,41:$V7,45:14,46:$V8,47:18,48:$V9,49:$Va,50:21,52:$Vb,56:$Vc,57:$Vd},{12:$V4,16:77,18:$V5,22:$V6,41:$V7,45:14,46:$V8,47:18,48:$V9,49:$Va,50:21,52:$Vb,56:$Vc,57:$Vd},{12:$V4,16:78,18:$V5,22:$V6,41:$V7,45:14,46:$V8,47:18,48:$V9,49:$Va,50:21,52:$Vb,56:$Vc,57:$Vd},o($Vt,[2,32]),o($Vt,[2,34],{22:$Vu}),o($Vt,[2,35],{22:$Vu}),o($Vt,[2,36],{22:$Vu}),{12:$V4,18:$V5,22:$V6,47:80,50:21,51:79,52:$Vb,56:$Vc,57:$Vd},{14:$Vw,18:$Vx,19:81,58:59},{12:$V4,14:[1,82],16:56,18:$V5,22:$V6,41:$V7,45:14,46:$V8,47:18,48:$V9,49:$Va,50:21,52:$Vb,55:83,56:$Vc,57:$Vd},o($Vv,[2,43]),{23:[1,84]},o($Vy,[2,56],{10:[1,85],30:$Ve,31:$Vf,32:$Vg,33:$Vh,34:$Vi,35:$Vj,36:$Vk,37:$Vl,38:$Vm,39:$Vn,40:$Vo,41:$Vp,42:$Vq,43:$Vr,44:$Vs}),{14:[1,86],30:$Ve,31:$Vf,32:$Vg,33:$Vh,34:$Vi,35:$Vj,36:$Vk,37:$Vl,38:$Vm,39:$Vn,40:$Vo,41:$Vp,42:$Vq,43:$Vr,44:$Vs},{14:[1,87]},{10:[1,88],14:[2,51]},o([10,14],[2,49]),o($V3,[2,16],{30:$Ve,31:$Vf,32:$Vg,33:$Vh,34:$Vi,35:$Vj,36:$Vk,37:$Vl,38:$Vm,39:$Vn,40:$Vo,41:$Vp,42:$Vq,43:$Vr,44:$Vs}),{8:90,11:4,12:$V0,15:$V1,18:$V2,24:89},{6:91,7:92,8:93,11:4,12:$V0,15:$V1,18:$V2},o([9,10,14,17,23,26,28,30,54],[2,17],{31:$Vf,32:$Vg,33:$Vh,34:$Vi,35:$Vj,36:$Vk,37:$Vl,38:$Vm,39:$Vn,40:$Vo,41:$Vp,42:$Vq,43:$Vr,44:$Vs}),o([9,10,14,17,23,26,28,30,31,54],[2,18],{32:$Vg,33:$Vh,34:$Vi,35:$Vj,36:$Vk,37:$Vl,38:$Vm,39:$Vn,40:$Vo,41:$Vp,42:$Vq,43:$Vr,44:$Vs}),o($Vz,[2,19],{40:$Vo,41:$Vp,42:$Vq,43:$Vr,44:$Vs}),o($Vz,[2,20],{40:$Vo,41:$Vp,42:$Vq,43:$Vr,44:$Vs}),o($Vz,[2,21],{40:$Vo,41:$Vp,42:$Vq,43:$Vr,44:$Vs}),o($Vz,[2,22],{40:$Vo,41:$Vp,42:$Vq,43:$Vr,44:$Vs}),o($Vz,[2,23],{40:$Vo,41:$Vp,42:$Vq,43:$Vr,44:$Vs}),o($Vz,[2,24],{40:$Vo,41:$Vp,42:$Vq,43:$Vr,44:$Vs}),o($Vz,[2,25],{40:$Vo,41:$Vp,42:$Vq,43:$Vr,44:$Vs}),o($Vz,[2,26],{40:$Vo,41:$Vp,42:$Vq,43:$Vr,44:$Vs}),o($VA,[2,27],{42:$Vq,43:$Vr,44:$Vs}),o($VA,[2,28],{42:$Vq,43:$Vr,44:$Vs}),o($Vt,[2,29]),o($Vt,[2,30]),o($Vt,[2,31]),{23:[1,94]},{22:$Vu,23:[2,54],59:[1,95]},{14:[1,96]},o($Vv,[2,40]),{14:[1,97]},o($Vv,[2,44]),{12:$V4,16:56,18:$V5,22:$V6,41:$V7,45:14,46:$V8,47:18,48:$V9,49:$Va,50:21,52:$Vb,55:98,56:$Vc,57:$Vd},o($Vv,[2,45]),{20:[1,99]},{14:$Vw,18:$Vx,19:100,58:59},{14:[2,15],25:101,26:$VB},o([14,26],[2,11]),{14:[1,103]},o($VC,[2,2]),o($VC,[2,6],{10:[1,104]}),o($Vv,[2,38]),{12:$V4,18:$V5,22:$V6,47:80,50:21,51:105,52:$Vb,56:$Vc,57:$Vd},{53:[1,106]},o($Vv,[2,41]),o($Vy,[2,55]),{21:[1,107]},{14:[2,50]},{14:[2,14]},{8:90,11:4,12:$V0,15:$V1,18:$V2,24:109,27:[1,108]},o($V3,[2,9]),{7:110,8:93,11:4,12:$V0,15:$V1,18:$V2},{23:[2,53]},{6:111,7:92,8:93,11:4,12:$V0,15:$V1,18:$V2},{12:[1,112]},{12:$V4,16:113,18:$V5,22:$V6,41:$V7,45:14,46:$V8,47:18,48:$V9,49:$Va,50:21,52:$Vb,56:$Vc,57:$Vd},{14:[2,13]},o($VC,[2,5]),{54:[1,114]},{22:[1,115]},{28:[1,116],30:$Ve,31:$Vf,32:$Vg,33:$Vh,34:$Vi,35:$Vj,36:$Vk,37:$Vl,38:$Vm,39:$Vn,40:$Vo,41:$Vp,42:$Vq,43:$Vr,44:$Vs},o($Vv,[2,39]),{23:[1,117]},{8:90,11:4,12:$V0,15:$V1,18:$V2,24:118},{10:[1,119]},{25:120,26:$VB},{6:121,7:92,8:93,11:4,12:$V0,15:$V1,18:$V2},{14:[2,12]},{14:[1,122]},o($V3,[2,10])],
defaultActions: {8:[2,1],28:[2,3],100:[2,50],101:[2,14],105:[2,53],109:[2,13],120:[2,12]},
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
case 1:return 56
break;
case 2:return 57
break;
case 3:return "$"
break;
case 4:return "block"
break;
case 5:return "typeof"
break;
case 6:return "do"
break;
case 7:return 27
break;
case 8:return 26
break;
case 9:return 28
break;
case 10:return "case"
break;
case 11:return 'default'
break;
case 12:return 'return'
break;
case 13:return 'yield'
break;
case 14:return 15
break;
case 15:return 'switch'
break;
case 16:return 'break'
break;
case 17:return 'for'
break;
case 18:return 'var'
break;
case 19:return 'of'
break;
case 20:return 10
break;
case 21:return 9
break;
case 22:return '.'
break;
case 23:return ":="
break;
case 24:return 29
break;
case 25:return 31
break;
case 26:return 30
break;
case 27:return 38
break;
case 28:return 39
break;
case 29:return 36
break;
case 30:return 37
break;
case 31:return 33
break;
case 32:return 32
break;
case 33:return "!"
break;
case 34:return '='
break;
case 35:return '*='
break;
case 36:return 42
break;
case 37:return '/='
break;
case 38:return 43
break;
case 39:return 44
break;
case 40:return '-='
break;
case 41:return '--'
break;
case 42:return 41
break;
case 43:return '++'
break;
case 44:return '+='
break;
case 45:return 40
break;
case 46:return '^'
break;
case 47:return 53
break;
case 48:return 54
break;
case 49:return 59
break;
case 50:return 22
break;
case 51:return 23
break;
case 52:return 12
break;
case 53:return 14
break;
case 54:return 35
break;
case 55:return 34
break;
case 56:return 18
break;
case 57:return 5
break;
case 58:return 'INVALID'
break;
}
},
rules: [/^(?:\s+)/,/^(?:[0-9]+(\.[0-9]+)?\b)/,/^(?:"([^\\\"]|\\.)*")/,/^(?:\$)/,/^(?:block\b)/,/^(?:typeof\b)/,/^(?:do\b)/,/^(?:if\b)/,/^(?:else\b)/,/^(?:then\b)/,/^(?:case\b)/,/^(?:default\b)/,/^(?:return\b)/,/^(?:yield\b)/,/^(?:while\b)/,/^(?:switch\b)/,/^(?:break\b)/,/^(?:for\b)/,/^(?:var\b)/,/^(?:of\b)/,/^(?:,)/,/^(?:;)/,/^(?:\.)/,/^(?::=)/,/^(?::)/,/^(?:&&)/,/^(?:\|\|)/,/^(?:>=)/,/^(?:>)/,/^(?:<=)/,/^(?:<)/,/^(?:===)/,/^(?:!==)/,/^(?:!)/,/^(?:=)/,/^(?:\*=)/,/^(?:\*)/,/^(?:\/=)/,/^(?:\/)/,/^(?:%)/,/^(?:-=)/,/^(?:--)/,/^(?:-)/,/^(?:\+\+)/,/^(?:\+=)/,/^(?:\+)/,/^(?:\^)/,/^(?:\{)/,/^(?:\})/,/^(?:\]\[)/,/^(?:\[)/,/^(?:\])/,/^(?:\()/,/^(?:\))/,/^(?:instanceof\b)/,/^(?:in\b)/,/^(?:[a-zA-Z_][a-zA-Z0-9_]*)/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58],"inclusive":true}}
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
exports.parser = maxima_parser;
exports.Parser = maxima_parser.Parser;
exports.parse = function () { return maxima_parser.parse.apply(maxima_parser, arguments); };
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