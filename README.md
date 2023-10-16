# Programming Styles 2023

This is the starter template for the labs
of the **Programming Styles 2023** course at USI.

Go to [the course on iCorsi](https://www.icorsi.ch/course/view.php?id=16948).

Note that all labs where you need to implement
the *term frequency* task use this exact same starter template.


## Submission Info

Property    | Value
----------- | -------------------------
First Name  | Luis
Last Name   | Loya Cabrera
Language    | Javascript

Provide information on
the specific language version used:

node v16.20.2


## Testing your program

You can test that your program produces the correct output
by running our simple testing infrastructure.

First, install the dependencies with:

```
npm install
```

Then, you can run the `test.js` script with Node.js.
You need to specify the input `size`, the target programming `lang`uage and the file/class name.

As an example, this command uses a small input for a JavaScript implementation written in `TermFrequency.js`.

```
node test --size small --lang javascript --main TermFrequency
```

The script will run your program (after compiling it `javac`, in case of Java)
and check its output.

To see all the options and their descriptions, run `node test --help`.


## Submission Checklist

Please complete this checklist (turn [ ] into [X]) before you submit:

- [x] I completed the above Submission Info
- [x] I implemented the Term Frequency task in the requested language and style
- [x] My program filters out the stop words (file stop_words.txt)
- [x] My program outputs the top N most frequent words
- [x] I wrote the source code myself and did not look at the source code of my class mates
- [x] My program compiles without any errors or warnings
- [x] I ran test.js on both small and large example and verified that it builds, runs, and passes the test
- [x] I committed my changes (at least one commit, but possibly many)
- [x] I pushed my commits to GitHub


## Feedback

The teaching team will assess the last commit on GitHub before the deadline.
We will provide general feedback about the lab during our class sessions.
Feedback that is specific to your submission will be provided as GitHub Issues.
