
## Deployment Link

https://tty-gamma.vercel.app/

## Libraries Used

This project uses the following libraries:

React

file-saver

recharts

## Main Components

### WordCounter.js
The component initializes two states using the useState hook: data and wordFrequency. The data state is used to store the raw text data fetched from the URL, and the wordFrequency state is used to store the frequency count of each word in the text.

The handleSubmit function that fetches the text data from the URL and updates the data state. It then calculates the frequency count of each word in the text by splitting the text into an array of words using a regular expression, and then looping through the array and incrementing a counter for each word.

It then sorts the frequency count in descending order, selects the top 20 most frequent words, and updates the wordFrequency state with an object that maps each word to its frequency count.

The handleExport function that exports the wordFrequency data as a CSV file using the file-saver library. It converts the object to a string of CSV data by mapping over its entries and joining them with newline characters, and then creates a Blob object with the data and a MIME type of text/csv;charset=utf-8. Finally, it calls the saveAs function from the file-saver library to prompt the user to save the file with a name of "word_frequency.csv".

The renders a form with a submit button, and a chart and export button if wordFrequency data is available. 

The chart is a BarChart from the recharts library that displays the frequency count of each word as a bar chart.

The export button calls the handleExport function when clicked. 

The component also applies some CSS styling using a module CSS file.

## Installation

Clone the repository.

Install the dependencies using `npm install`.

Run the application using `npm start`.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

