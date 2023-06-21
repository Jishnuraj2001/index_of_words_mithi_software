# index_of_words_mithi_software


## Code Documentation

### Description
This code reads the contents of three text files (`Page1.txt`, `Page2.txt`, and `Page3.txt`) and extracts words from them. It creates an object that maps each unique word to the page number(s) where it appears. The code also takes an `exclude-words.txt` file containing a list of words to be excluded from the mapping. Finally, it sorts the word-page mappings alphabetically and writes them to an `index.txt` file.

### Code Flow
1. The required `fs` module is imported to enable file system operations.

2. The contents of `Page1.txt`, `Page2.txt`, `Page3.txt`, and `exclude-words.txt` are read synchronously using the `fs.readFileSync()` method and assigned to respective variables: `str1`, `str2`, `str3`, and `ex_str`.

3. The `match()` method with a regular expression is used to extract an array of words from each of the `str1`, `str2`, and `str3` variables, and they are assigned to `arr1`, `arr2`, and `arr3` respectively. The regular expression `[a-zA-Z]+` matches one or more alphabetic characters.

4. The `ex_arr` variable is created by splitting the `ex_str` string using the newline character (`\n`), resulting in an array of excluded words.

5. An empty object, `obj`, is created to store the word-page mappings.

6. The first loop iterates over the `arr1` array and checks if each word is present in the `obj` object. If it is not, a new key-value pair is added to the `obj` object, where the key is the lowercase version of the word, and the value is an array containing the page number `1`.

7. The second and third loops perform a similar operation for `arr2` and `arr3`, respectively. If a word is already present in the `obj` object, the corresponding page number is added to the existing array.

8. The `fin_arr` array is created to store the final word-page mappings, excluding the excluded words. Each mapping is represented as a string in the format "word: page numbers".

9. The final loop iterates over the `obj` object and checks if each key (word) is present in the `ex_arr` array. If it is not, the word-page mapping string is added to the `fin_arr` array.

10. The `fin_arr` array is sorted alphabetically using the `sort()` method.

11. The `output` variable is created by joining the elements of the `fin_arr` array using the newline character (`\n`).

12. The `fs.writeFileSync()` method is used to write the `output` string to the `index.txt` file.

### Usage
To use this code, follow these steps:

1. Place the code in a JavaScript file (e.g., `index.js`).

2. Ensure that the required files (`Page1.txt`, `Page2.txt`, `Page3.txt`, and `exclude-words.txt`) exist in the same directory as the JavaScript file.

3. Open a command prompt or terminal and navigate to the directory containing the JavaScript file.

4. Run the code using Node.js by typing `node index.js` in the command prompt or terminal.

5. After executing the code, an `index.txt` file will be created in the same directory, containing the word-page mappings in the desired format.

### Dependencies
This code requires the `fs` module, which is a built-in module in Node.js and does

 not require any external installation.

### File Structure
The code assumes the following file structure in the same directory as the JavaScript file:
- `Page1.txt`: Contains the text of page 1.
- `Page2.txt`: Contains the text of page 2.
- `Page3.txt`: Contains the text of page 3.
- `exclude-words.txt`: Contains a list of words to be excluded from the word-page mappings.
- `index.js` (or any other JavaScript file name): Contains the code provided.

### Output
The code generates an `index.txt` file in the same directory as the JavaScript file. The file contains the word-page mappings in alphabetical order, with each word and its corresponding page number(s) separated by a colon. Each word-page mapping is on a new line.

Example `index.txt` file:
```
about : 2
access : 2,3
across : 1
add : 2,3
admin : 1
administration : 1
administrative : 2,3
administrators : 3
all : 3
allowing : 3
an : 1
any : 2
apple : 1,3
applications : 1
appropriate : 3
architecture : 1
as : 1,3
attaining : 1
authenticated : 1,3
authentication : 3
availability : 3
available : 3
backup : 1
based : 2,3
be : 2,3
become : 1
bedework : 1,2,3
been : 1,2
belong : 3
below : 2
between : 1,3
both : 1
built : 1
but : 2
by : 1,2,3
caching : 3
caldav : 1,2,3
calendar : 1,2,3
calendaring : 1,2,3
calendars : 1,2,3
called : 1
can : 2,3
capable : 1,2
carddav : 1
carried : 3
central : 1
changed : 2
chapter : 1
chapters : 2
choose : 1
client : 1,2,3
clients : 1,2,3
clustered : 3
comes : 3
command : 1
commercial : 1
community : 1,2,3
compile : 2
completely : 2
compliance : 2
components : 1
configuring : 1
conform : 1
consists : 1
contacts : 1
contents : 1,3
control : 3
core : 1,2,3
current : 1
currently : 2
custom : 3
customizable : 3
customization : 3
customized : 3
database : 1,3
degree : 3
deploy : 1
deployed : 1
design : 2
designed : 1
desktop : 1,3
devices : 3
display : 1
displayed : 3
displays : 3
divided : 2
draft : 2
dump : 1
easily : 3
edit : 3
education : 1
embedding : 1
emphasis : 1
engine : 1
entering : 1
enterprise : 1,3
enterprises : 1
entities : 3
entry : 3
environments : 1
event : 2,3
events : 1,2,3
evolution : 3
example : 3
extensible : 1
external : 1
feature : 2
features : 2
feeds : 1,3
feel : 3
folder : 2
following : 1,2
for : 1,2,3
from : 1
full : 2,3
fully : 3
fundamental : 2
further : 3
future : 1
giving : 3
global : 3
go : 1,3
goal : 1,2
group : 1,2,3
groups : 3
guest : 3
handheld : 3
has : 1,2
have : 3
heavily : 1
hibernate : 3
hidden : 2
high : 3
higher : 1
highly : 3
how : 3
html : 3
ical : 1,3
icalendar : 2
identity : 3
implemented : 3
improving : 3
including : 3
independence : 3
independent : 2
information : 1,2
initialization : 1
installation : 3
integration : 1
interoperability : 1,2
interoperable : 2
into : 2
introducing : 1
it : 1,2
itip : 2
java : 2
javascript : 3
kept : 2
later : 2
level : 3
lightning : 1,2
line : 1
locations : 1
look : 3
main : 2
maintain : 3
maintenance : 3
many : 1,3
mar : 1,3
may : 1,2,3
members : 1,3
mode : 3
model : 1
models : 2
moderating : 1
modify : 3
modular : 1
more : 1,2
mozilla : 1,2
multiple : 3
not : 3
number : 3
on : 1,3
one : 3
only : 2
open : 1
options : 3
organizations : 3
other : 1,2
others : 3
out : 3
over : 3
overview : 1
own : 3
owners : 3
p : 1,3
pending : 1
performance : 3
personal : 1,2,3
portals : 1
private : 2
producing : 3
production : 3
provide : 3
provides : 3
public : 1,2,3
publicly : 2
queue : 3
quickstart : 3
range : 1
reliability : 3
resources : 1
restore : 1
rfc : 2
roles : 3
root : 2
rss : 3
run : 2
s : 1,2,3
scheduling : 1,2,3
schemes : 3
see : 2,3
separate : 2
server : 1,2
settings : 3
setup : 3
shared : 2
sharing : 3
shown : 2
skinned : 3
skins : 3
source : 1
space : 2
spaces : 2
standards : 1,2
status : 3
stored : 2
strong : 1
submission : 1,3
submissions : 1,2
submitting : 3
subscribe : 2
subscribed : 3
subscription : 1
such : 1
suggest : 1,3
suitable : 1,3
suite : 1,3
suites : 1,3
super : 3
support : 1,2,3
supported : 2
supporting : 1
supports : 1,3
synchronized : 3
system : 1,2,3
systems : 1,2,3
table : 1,3
tagged : 3
that : 1
their : 3
theming : 3
these : 1
they : 3
this : 1
though : 1
three : 3
through : 3
timezone : 1
transactions : 3
two : 2
unless : 2
used : 1,2
user : 1,2,3
users : 2,3
uses : 3
using : 2,3
utilities : 1
versions : 1
video : 3
view : 3
viewable : 2
views : 3
visibility : 3
vvenue : 2
way : 2
web : 1,2,3
well : 3
whatever : 3
which : 2,3
who : 3
wide : 1
will : 1,2
with : 1,2,3
work : 2
written : 2
xml : 3
xslt : 3
you : 1
your : 1,3

```
