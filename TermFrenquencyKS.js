const fs = require("fs");

// Execute the program
const filePath = process.argv[2];
read_file(filePath, normalize);

function read_file(path_to_file, func) {
  const data = fs.readFileSync(path_to_file, 'utf8');
  func(data, replace_non_alphanumeric_with_space);
  //normalize(data, replace_non_alphanumeric_with_space);
}

function normalize(str_data, func) {
  const normalized = str_data.toLowerCase();
  func(normalized, split_text_into_word_list);
  //replace_non_alphanumeric_with_space(normalized, split_text_into_word_list);
}

function replace_non_alphanumeric_with_space(str_data, func) {
  const replaced = str_data.replace(/[^a-z0-9]+/g, ' ');
  func(replaced, filter_out_stop_words);
  //split_text_into_word_list(replaced, filter_out_stop_words);
}

function split_text_into_word_list(str_data, func) {
  const words = str_data.split(/\s+/);
  func(words, filter_out_single_letters);
  //filter_out_stop_words(words, filter_out_single_letters);
}

function filter_out_stop_words(word_list, func) {
  const stop_words = fs.readFileSync("./stop_words.txt", 'utf8').split(',');
  const filtered = word_list.filter(word => !stop_words.includes(word));
  func(filtered, frequencies);
  //filter_out_single_letters(filtered, frequencies)
}

function filter_out_single_letters(word_list, func) {
  const single_letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const filtered = word_list.filter(word => !single_letters.includes(word));
  func(filtered, sort_frequencies);
  //frequencies(filtered, sort_frequencies);
}

function frequencies(word_list, func) {
  const wf = {};
  for (const word of word_list) {
    if (wf[word]) {
      wf[word] += 1;
    } else {
      wf[word] = 1;
    }
  }
  func(wf, filter_first_n);
  //sort_frequencies(wf, print_text);
}

function sort_frequencies(wf, func) {
  const sorted = Object.entries(wf).sort((a, b) => b[1] - a[1]);
  func(sorted, print_text);
  // filter_fist_n(sorted, filter_first_n);
}

function filter_first_n(word_freqs, func) {
  const limit = process.argv[3] ? parseInt(process.argv[3]) : 25; // If no limit is provided, default to 25.
  const sliced = word_freqs.slice(0, limit);
  func(sliced, () => { });
  // print_text(sliced, () => { });

}

function print_text(word_freqs, func) {
  for (const [word, freq] of word_freqs) {
    console.log(`${word} - ${freq}`);
  }
  func(null);
}
