import React, { useState } from 'react';
import { saveAs } from 'file-saver';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import style from './WordCounter.module.css'

const WordCounter = () => {
  const [data, setdata] = useState(null);
  const [wordFrequency, setWordFrequency] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('https://www.terriblytinytales.com/test.txt');
    const data = await response.text();
    setdata(data);

    const words = data.split(/\W+/);
    const frequency = {};
    for (let i = 0; i < words.length; i++) {
      const word = words[i].toLowerCase();
      if (frequency[word]) {
        frequency[word]++;
      } else {
        frequency[word] = 1;
      }
    }
    const sortedFrequency = Object.entries(frequency)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 20)
      .reduce((obj, [key, value]) => {
        obj[key] = value;
        return obj;
      }, {});
    setWordFrequency(sortedFrequency);
  };

  const handleExport = () => {
    const csvData = Object.entries(wordFrequency)
      .map(([word, frequency]) => `"${word}",${frequency}`)
      .join('\n');
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'Histogram_data.csv');
  };

  const chartData = wordFrequency && Object.entries(wordFrequency).map(([word, frequency]) => ({ word, frequency }));

  return (
    <div className={style.main}>
      <form onSubmit={handleSubmit}>
        <button className={style.button} type="submit">Submit</button>
      
      </form>
      {chartData && (
        <div>
         
          <BarChart width={1500} height={400} barSize={30} data={chartData}>
            <XAxis dataKey="word" />
            <YAxis />
            <Tooltip />
            <Legend  />
            <Bar dataKey="frequency" fill="#ea5545" />
          </BarChart>
          <button className={style.button1} onClick={handleExport}>Export</button>
        </div>
      )}
    </div>
  );
};

export default WordCounter;
