import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  getRandomQuote(): string {
  	const officeQuotes = require('./data/office_quotes.json');
	const officeQuotesArray = JSON.parse(JSON.stringify(officeQuotes));
	const randomId = Math.floor(Math.random() * officeQuotesArray.length);
	const randomQuote = officeQuotesArray[randomId];
	return randomQuote.quote;
  }
}

