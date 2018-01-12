/* lexical grammar */
%lex
%%

(\s+|\/\/+.*\n)        /* skip whitespace and line comments */
[0-9]+("."[0-9]+)?\b  return 'NUMBER'
\"([^\\\"]|\\.)*\" return 'STRING_LITERAL'
"class"               return "class"
"public"              return "public"
"extends"             return "extends"
"operator"            return "operator"
"implements"          return "implements"
"Dictionary"          return "Dictionary"
"private"             return "private"
"static"              return "static"
"if"                  return "if"
"in"                  return "in"
"else"                return "else"
"return"              return "return"
"while"               return "while"
"foreach"             return "foreach"
"const"               return "const"
"for"                 return "for"
"new"                 return "new"
","                   return ','
";"                   return ';'
"."                   return '.'
":"                   return ':'
"&&"                  return '&&'
"&"                   return '&'
"||"                  return '||'
">="                  return '>='
">"                   return '>'
"<="                  return '<='
"<"                   return '<'
"=="                  return '=='
"="                   return '='
"*="                  return '*='
"*"                   return '*'
"/="                  return '/='
"/"                   return '/'
"%"                   return '%'
"-="                  return '-='
"--"                  return '--'
"-"                   return '-'
"++"                  return '++'
"+="                  return '+='
"+"                   return '+'
"^"                   return '^'
"?"                   return '?'
"{"                   return '{'
"}"                   return '}'
"["                   return '['
"]"                   return ']'
"("                   return '('
")"                   return ')'
[a-zA-Z_][a-zA-Z0-9_]* return 'IDENTIFIER'
<<EOF>>               return 'EOF'
.                     return 'INVALID'

/lex

/* operator associations and precedence */

%right '?'
%left '->'
%left '&&' '||'
%left '==' '!=' '<' '<=' '>' '>='
%left '+' '-'
%left '*' '/' '%'
%left UMINUS

%start expressions

%% /* language grammar */

expressions: statements_ EOF {return ["top_level_statements",$1]};

statements_: statement statements_ {$$ = [$1].concat($2);} | statement {$$ =
 [$1];};
 
class_statements: class_statements_ {$$ = ["class_statements",$1]};
statements: statements_ {$$ = ["statements",$1]};


class_statements_: class_statement class_statements_ {$$ = [$1].concat($2);} | class_statement {$$ =
 [$1];};

access_modifier: "public" | "private";

class_:
	"class" IDENTIFIER "{" class_statements "}" ";" {$$ = [$1,"public",$2,$4];}
	| access_modifier "abstract" "class" IDENTIFIER "{" class_statements "}" {$$ = ["abstract_class",$1,$4,$6];}
	| access_modifier "interface" IDENTIFIER "{" class_statements "}" {$$ = [$2,$1,$3,$5];}
	| access_modifier "enum" IDENTIFIER "{" identifiers "}" {$$ = ["enum",$2,$1,$3,$5];}
	| access_modifier "class" IDENTIFIER ":" "public" IDENTIFIER "{" class_statements "}" {$$ = ["class_extends",$1,$3,$6,$8];}
	| access_modifier "class" IDENTIFIER "implements" IDENTIFIER "{" class_statements "}" {$$ = ["class_implements",$1,$3,$5,$7];};

statement
    :
    statement_with_semicolon ";" {$$ = ["semicolon",$1];}
    | class_
    | "while" "(" e ")" bracket_statements {$$ = ["while",$3,$5];}
    | "for" "(" statement_with_semicolon ";" e ";" statement_with_semicolon ")" bracket_statements {$$ = ["for",$3,$5,$7,$9];}
    | "foreach" "(" type IDENTIFIER "in" IDENTIFIER ")" bracket_statements {$$ = ["foreach",$3,$4,$6,$8];}
    | if_statement
    | type IDENTIFIER "(" parameters ")" "{" statements "}" {$$ = ["function","public",$1,$2,$4,$7];}
    ;

class_statement:
	access_modifier type IDENTIFIER "=" e ";" {$$ = ["initialize_instance_var_with_value",$1,$2,$3,$5];}
	| access_modifier type IDENTIFIER ";" {$$ = ["initialize_instance_var",$1,$2,$3];}
	| access_modifier "static" type IDENTIFIER "=" e ";" {$$ = ["initialize_static_instance_var",$1,$3,$4,$6];}
	| access_modifier "static" type IDENTIFIER "(" parameters ")" ";" {$$ = ["interface_static_method",$1,$3,$4,$6];}
	| access_modifier type IDENTIFIER "(" parameters ")" ";" {$$ = ["interface_instance_method",$1,$2,$3,$5];}
	| "static" type IDENTIFIER "(" parameters ")" "{" statements "}" {$$ = ["static_method","public",$2,$3,$5,$8];}
	| type IDENTIFIER "(" parameters ")" "{" statements "}" {$$ = ["instance_method","public",$1,$2,$4,$7];}
	| type "operator" OPERATOR "(" parameters ")" "{" statements "}" {$$ = ["instance_overload_operator","public",$1,$3,$5,$8];};

OPERATOR: "+="|"-="|"*="|"/="|"++"|"--"|"<="|">="|"<"|">"|"&&"|"||"|"=="|"+"|"-"|"*"|"/";

statement_with_semicolon
   : 
   "return" e  {$$ = ["return",$2];}
   | "const" type IDENTIFIER "=" e {$$ = ["initialize_constant",$2,$3,$5];}
   | "const" type identifiers {$$ = ["initialize_empty_constants",$2,$3];}
   | type IDENTIFIER "=" "{" exprs "}" {$$ = ["initialize_var",$1,$2,["initializer_list",$1,$5]]}
   | type IDENTIFIER "=" e {$$ = ["initialize_var",$1,$2,$4];}
   | type identifiers {$$ = ["initialize_empty_vars",$1,$2];}
   | access_array "=" e {$$ = ["set_var",$1,$3];}
   | IDENTIFIER "=" e {$$ = ["set_var",$1,$3];}
   | IDENTIFIER "++" {$$ = [$2,$1];}
   | IDENTIFIER "--" {$$ = [$2,$1];}
   | IDENTIFIER "+=" e {$$ = [$2,$1,$3];}
   | IDENTIFIER "-=" e {$$ = [$2,$1,$3];}
   | IDENTIFIER "*=" e {$$ = [$2,$1,$3];}
   | IDENTIFIER "/=" e {$$ = [$2,$1,$3];}
   | IDENTIFIER "." dot_expr {$$ = [".",[$1].concat($3)]}
   ;

key_values: key_values "," key_value {$$ = $1.concat([$3]);} | key_value {$$ = [$1];};
key_value: "{" STRING_LITERAL "," e "}" {$$ = [$2,$4]};

e:
    e "?" e ":" e {$$ = ["ternary_operator",$1,$3,$5]}
    |e '||' e
        {$$ = [$2,$1,$3];}
    |e '&&' e
        {$$ = [$2,$1,$3];}
    |e '==' e
        {$$ = [$2,$1,$3];}
    |e '!=' e
        {$$ = [$2,$1,$3];}
    |e '<=' e
        {$$ = [$2,$1,$3];}
    |e '<' e
        {$$ = [$2,$1,$3];}
    | e '>=' e
        {$$ = [$2,$1,$3];}
    |e '>' e
        {$$ = [$2,$1,$3];}
    | e '+' e
        {$$ = [$2,$1,$3];}
    | e '-' e
        {$$ = [$2,$1,$3];}
    | e '*' e
        {$$ = [$2,$1,$3];}
    | e '/' e
        {$$ = [$2,$1,$3];}
    | e '%' e
        {$$ = [$2,$1,$3];}
    | initializer_list
    | '-' e %prec UMINUS
        {$$ = ["-",$2];}
    | dot_expr {$$ = [".", $1];}
    ;



dot_expr: initializer_list  "." dot_expr {$$ = [$1].concat($3);} | parentheses_expr  "." dot_expr {$$ = [$1].concat($3);} | parentheses_expr {$$ =
 [$1];};

access_array: IDENTIFIER "[" access_arr "]" {$$ = ["access_array",$1,$3];};

initializer_list:
"new" type "{" "}" {$$ = ["initializer_list",$2,[]];} | "new" type "{" exprs "}" {$$ = ["initializer_list",$2,$4];} | "new" type "(" ")" {$$ = [$1,$2,[]];} | "new" type "(" exprs ")" {$$ = [$1,$2,$4];};

parentheses_expr:
    "(" e ")" {$$= $2;}
    |"new" "Dictionary" "<" type "," type ">" "{" key_values "}" {$$ = ["associative_array",$4,$6,$9]}
    |access_array
    |parentheses_expr "(" ")" {$$ = ["function_call",$1,[]];}
    | parentheses_expr "(" exprs ")" {$$ = ["function_call",$1,$3];}
    | NUMBER
        {$$ = yytext;}
    | IDENTIFIER
        {$$ = yytext;}
    | STRING_LITERAL
        {$$ = yytext;};

type: IDENTIFIER "[" "]" {$$ = [$1,"[]"];} | IDENTIFIER "<" types ">" {$$ = [$1,$3]} | "Object" | "Dictionary" | IDENTIFIER;
parameter: type "&" IDENTIFIER {$$ = ["ref_parameter",$1,$3]} | type "..." IDENTIFIER {$$ = ["varargs",$1,$3]} | type IDENTIFIER "=" e {$$ = ["optional_arg",$1,$2,$4];} | type IDENTIFIER {$$ = [$1,$2];};
parameters: parameter "," parameters {$$ = [$1].concat($3);} | parameter {$$ =
 [$1];} | {$$= []};
access_arr: parentheses_expr "," access_arr {$$ = [$1].concat($3);} | parentheses_expr {$$ =
 [$1];};
exprs: expr "," exprs {$$ = [$1].concat($3);} | expr {$$ = [$1];};
expr: "&" e {$$ = ["function_call_ref",$2];} | e {$$ = [$1];};
types: type "," types {$$ = [$1].concat($3);} | type {$$ = [$1];};
elif:
	"else" "if" "(" e ")" "{" statements "}" elif {$$ = ["elif",$4,$7,$9]}
	| "else" "{" statements "}" {$$ = ["else",$3];};
if_statement:
	"if" "(" e ")" "{" statements "}" elif {$$ = ["if",$3,$6,$8];};
identifiers: IDENTIFIER "," identifiers {$$ = [$1].concat($3);} | IDENTIFIER {$$ = [$1];};
add: e "+" add {$$ = [$1].concat($3);} | e {$$ = [$1];};
bracket_statements: "{" statements "}" {$$= $2;} | statement_with_semicolon ";" {$$ = ["semicolon",$1];};
