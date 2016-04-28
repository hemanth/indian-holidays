'use strict';



let holidays = [
	{
		"date": "January 01",
		"holiday": "New Years day",
		"comments": "Arunachal pradesh, Manipur, Meghalaya, Miizoram, Nagaland, Sikkim, Tamil Nadu,Telangana"
	},
	{
		"date": "January 02",
		"holiday": "Mannam Jayanthi",
		"comments": "Kerala Only"
	},
	{
		"date": "January 12",
		"holiday": "Birthday of Swami Vivekananda",
		"comments": "West Bengal only."
	},
	{
		"date": "January 14",
		"holiday": "Bhogi",
		"comments": "Telangana"
	},
	{
		"date": "January 14",
		"holiday": "Pongal",
		"comments": "Also known as Makar Sankranti, Lohri, Bihu, Hadaga, Poki"
	},
	{
		"date": "January 15",
		"holiday": "Pongal",
		"comments": "Tamil Nadu"
	},
	{
		"date": "January 15",
		"holiday": "Sankranti",
		"comments": "Andhra Pradesh, Assam, Karnataka, Telangana"
	},
	{
		"date": "January 16",
		"holiday": "Guru Gobind Singh Jayanti",
		"comments": "Himachal Pradesh, Punjab, Rajasthan. Birthday of the final Sikh prophet-teacher"
	},
	{
		"date": "January 16",
		"holiday": "Thiruvalluvar day",
		"comments": "Tamil Nadu only"
	},
	{
		"date": "January 17",
		"holiday": "Uzhavar Tirunal",
		"comments": "Puducherry, Tamil Nadu only"
	},
	{
		"date": "January 23",
		"holiday": "Netaji Subhas Chandra Bose Jayanti",
		"comments": "Assam, Odisha, Tripura, West Bengal. Birthday of a prominent leader in the Indian freedom movement"
	},
	{
		"date": "January 25",
		"holiday": "Statehood day",
		"comments": "Himachal Pradesh only"
	},
	{
		"date": "January 26",
		"holiday": "Republic day",
		"comments": "Commemorates the establishment of the Constitution of India"
	},
	{
		"date": "January 28",
		"holiday": "Birthday of Lala Lajpat Rai",
		"comments": "150th year anniversary"
	},
	{
		"date": "January 31",
		"holiday": "Me-dam-me-phi",
		"comments": "Assam. Ancestor festival"
	},
	{
		"date": "February 02",
		"holiday": "Public holiday",
		"comments": "Voting in GHMC elections"
	},
	{
		"date": "February 09",
		"holiday": "Losar",
		"comments": "Sikkim only. Tibetan New Year"
	},
	{
		"date": "February 09",
		"holiday": "Sonam Lhochar",
		"comments": "Sikkim only. Tamang New Year"
	},
	{
		"date": "February 12",
		"holiday": "Vasant Panchami",
		"comments": "Haryana, Odisha, Punjab, Tripura"
	},
	{
		"date": "February 12",
		"holiday": "Sir Chhotu Ram Jayanti",
		"comments": "Haryana only"
	},
	{
		"date": "February 13",
		"holiday": "Sree Panchami",
		"comments": "West Bengal"
	},
	{
		"date": "February 19",
		"holiday": "Chhatrapati Shivaji Maharaj Jayanti",
		"comments": "Maharashtra only"
	},
	{
		"date": "February 22",
		"holiday": "Guru Ravidas Birthday",
		"comments": "Haryana, Himachal Pradesh, Punjab only"
	},
	{
		"date": "March 04",
		"holiday": "Maharshi dayanand Saraswati Jayanti",
		"comments": "Haryana only"
	},
	{
		"date": "March 05",
		"holiday": "Panchayati Raj Diwas",
		"comments": "Odisha"
	},
	{
		"date": "March 07",
		"holiday": "Maha Shivratri",
		"comments": "Celebrated on the 13th night/14th day in the Krishna Paksha"
	},
	{
		"date": "March 09",
		"holiday": "Solar Eclipse",
		"comments": "Odisha"
	},
	{
		"date": "March 22",
		"holiday": "Bihar Divas",
		"comments": "Bihar Only"
	},
	{
		"date": "March 23",
		"holiday": "Doljatra",
		"comments": "Holi Dahan"
	},
	{
		"date": "March 23",
		"holiday": "Shahidi Divas S. Bhagat Singh Ji",
		"comments": "Punjab, Rajasthan only"
	},
	{
		"date": "March 23",
		"holiday": "Shaheedi Diwas of Bhagat Singh, Rajguru & Sukhdev",
		"comments": "Haryana only"
	},
	{
		"date": "March 24",
		"holiday": "Holi",
		"comments": ""
	},
	{
		"date": "March 24",
		"holiday": "Maundy Thursday",
		"comments": "Kerala only"
	},
	{
		"date": "March 25",
		"holiday": "Good Friday",
		"comments": "Friday before Easter Sunday"
	},
	{
		"date": "April 01",
		"holiday": "Odisha day",
		"comments": "Odisha only. Utkal Divas"
	},
	{
		"date": "April 01",
		"holiday": "Bank holiday",
		"comments": "Banks only. Annual accounts closing"
	},
	{
		"date": "April 05",
		"holiday": "Babu Jagjivan Ram Birthday",
		"comments": "Telangana only"
	},
	{
		"date": "April 08",
		"holiday": "Ugadi",
		"comments": "Telugu and Kannada New Year. Karnataka, Maharashtra, Andhra Pradesh, Tamil Nadu, Uttar Pradesh"
	},
	{
		"date": "April 08",
		"holiday": "Cheti Chand",
		"comments": "Gujarat only."
	},
	{
		"date": "April 13",
		"holiday": "Vaisakhi",
		"comments": "Haryana, Punjab only"
	},
	{
		"date": "April 13",
		"holiday": "Bohag Bihu holiday",
		"comments": "Assam only"
	},
	{
		"date": "April 13",
		"holiday": "Biju Festival",
		"comments": "Tripura only"
	},
	{
		"date": "April 13",
		"holiday": "Maha Vishuba Sankranti",
		"comments": "Odisha"
	},
	{
		"date": "April 14",
		"holiday": "Tamil New Year",
		"comments": "Puthandu. Tamil Nadu only"
	},
	{
		"date": "April 14",
		"holiday": "Bengali New Year",
		"comments": "Tripura, West Bengal only"
	},
	{
		"date": "April 14",
		"holiday": "Dr Ambedkar Jayanti",
		"comments": "Birthday of Bhimrao Ramji Ambedekar"
	},
	{
		"date": "April 14",
		"holiday": "Vishu",
		"comments": "Kerala Only. First day of Tulu calendar"
	},
	{
		"date": "April 14",
		"holiday": "Bohag Bihu",
		"comments": "Assamese New Year. Arunachal Pradesh, Assam"
	},
	{
		"date": "April 14",
		"holiday": "Ashoka's Birth Anniversary",
		"comments": "Bihar only"
	},
	{
		"date": "April 15",
		"holiday": "Ram Navami",
		"comments": "Celebrates the birth of Lord Rama to King Dasharatha of Ayodhya"
	},
	{
		"date": "April 15",
		"holiday": "Himachal day",
		"comments": "Himachal Pradesh only. The province of Himachal Pradesh was created on 15 April 1948"
	},
	{
		"date": "April 15",
		"holiday": "Bohag Bihu holiday",
		"comments": "Assam only"
	},
	{
		"date": "April 19",
		"holiday": "Mahavir Jayanti",
		"comments": "The most important religious holiday in Jainism"
	},
	{
		"date": "April 20",
		"holiday": "Garia Puja",
		"comments": "Tripura only"
	},
	{
		"date": "April 21",
		"holiday": "Hazrat Alis Birthday",
		"comments": "Uttar Pradesh only. Son in law of Prophet Muhammad"
	},
	{
		"date": "May 01",
		"holiday": "Maharashtra day",
		"comments": "Maharashtra only. Commemorates the formation of the state of Maharashtra on 1 May 1960"
	},
	{
		"date": "May 01",
		"holiday": "May day",
		"comments": "Many states"
	},
	{
		"date": "May 08",
		"holiday": "Birthday of Rabindra Nath Tagore",
		"comments": "Tripura, West Bengal.  A Bengali polymath who reshaped literature and music."
	},
	{
		"date": "May 08",
		"holiday": "Parashurama Jayanti",
		"comments": "Himachal Pradesh only"
	},
	{
		"date": "May 09",
		"holiday": "Parashurama Jayanti",
		"comments": "Haryana, Punjab, Uttar Pradesh only"
	},
	{
		"date": "May 09",
		"holiday": "Basava Jayanthi",
		"comments": "Karnataka only. The most important festival of the Lingayats."
	},
	{
		"date": "May 16",
		"holiday": "State day",
		"comments": "Sikkim only"
	},
	{
		"date": "May 21",
		"holiday": "Buddha Purnima",
		"comments": "Birth of Buddha"
	},
	{
		"date": "May 25",
		"holiday": "Birthday of Kazi Nazrul Islam",
		"comments": "Tripura only."
	},
	{
		"date": "June 07",
		"holiday": "Maharana Pratap Jayanti",
		"comments": "Haryana, Himachal Pradesh only"
	},
	{
		"date": "June 08",
		"holiday": "Guru Arjun Dev Martyrdom day",
		"comments": "Punjab Only"
	},
	{
		"date": "June 14",
		"holiday": "Pahili Raja",
		"comments": "Odisha"
	},
	{
		"date": "June 15",
		"holiday": "Raja Sankranti",
		"comments": "Odisha only"
	},
	{
		"date": "June 20",
		"holiday": "Sant Guru Kabir Jayanti",
		"comments": "Gazetted holiday in Haryana, Himachal Pradesh, Punjab."
	},
	{
		"date": "July 01",
		"holiday": "Jumat-ul-Wida",
		"comments": "Last Friday of Ramadam"
	},
	{
		"date": "July 06",
		"holiday": "Idul Fitr",
		"comments": "Many states"
	},
	{
		"date": "July 06",
		"holiday": "Ratha Yatra",
		"comments": "Odisha"
	},
	{
		"date": "July 07",
		"holiday": "Ramzan",
		"comments": "Odisha, Tamil Nadu, Telangana"
	},
	{
		"date": "July 12",
		"holiday": "Kharchi Puja",
		"comments": "Tripura only"
	},
	{
		"date": "July 26",
		"holiday": "Ker Puja",
		"comments": "Tripura only"
	},
	{
		"date": "July 31",
		"holiday": "Martyrdom day of Shaheed Udham Singh",
		"comments": "Punjab only"
	},
	{
		"date": "August 01",
		"holiday": "Bonalu",
		"comments": ""
	},
	{
		"date": "August 02",
		"holiday": "Karkkadaka Vavu",
		"comments": "Kerala"
	},
	{
		"date": "August 15",
		"holiday": "Independence day",
		"comments": ""
	},
	{
		"date": "August 17",
		"holiday": "Parsi New Year",
		"comments": "Jamshed Navroz. Gujarat, Mumbai Only"
	},
	{
		"date": "August 18",
		"holiday": "Raksha Bandhan",
		"comments": "Gujarat, Madhya Pradesh, Rajasthan, Uttarakhand, Uttar Pradesh only."
	},
	{
		"date": "August 24",
		"holiday": "Sreekrishna Jayanthi",
		"comments": "Kerala, Odisha. Celebrates the birth of Lord Shri Krishna"
	},
	{
		"date": "August 25",
		"holiday": "Janmashtami",
		"comments": "Restricted holiday. Celebrates the birth of Lord Shri Krishna"
	},
	{
		"date": "September 02",
		"holiday": "Parkash Utsav Sri Guru Granth Sahib Ji",
		"comments": "Punjab only"
	},
	{
		"date": "September 03",
		"holiday": "Tithi of Shrimanta Shankar Dev",
		"comments": "Assam only"
	},
	{
		"date": "September 04",
		"holiday": "Teej",
		"comments": "Haryana only"
	},
	{
		"date": "September 05",
		"holiday": "Ganesh Chaturthi",
		"comments": "Varasiddhi Vinayaka Vrata"
	},
	{
		"date": "September 06",
		"holiday": "Nuakhai",
		"comments": "Odisha only. day after Ganesh Chaturthi"
	},
	{
		"date": "September 10",
		"holiday": "Birthday of Baba Sri Chand Ji",
		"comments": "Punjab only"
	},
	{
		"date": "September 12",
		"holiday": "Idul Juha",
		"comments": "Bakrid. Except Maharashtra, Tamil Nadu, Sikkim."
	},
	{
		"date": "September 13",
		"holiday": "First Onam",
		"comments": "Kerala only. Harvest Festival"
	},
	{
		"date": "September 13",
		"holiday": "Bakrid",
		"comments": "Maharashtra, Odisha, Tamil Nadu"
	},
	{
		"date": "September 14",
		"holiday": "Thiruvonam",
		"comments": "Kerala only. Harvest Festival"
	},
	{
		"date": "September 15",
		"holiday": "Third Onam",
		"comments": "Kerala only. Harvest Festival"
	},
	{
		"date": "September 16",
		"holiday": "Sree Narayana Guru Jayanti",
		"comments": "Kerala only. Marks the birth of a key social reformer"
	},
	{
		"date": "September 16",
		"holiday": "Fourth Onam",
		"comments": "Kerala only. Harvest Festival"
	},
	{
		"date": "September 21",
		"holiday": "Sree Narayana Guru Samadhi",
		"comments": "Kerala only. Marks the death of a key social reformer"
	},
	{
		"date": "September 23",
		"holiday": "Haryana's Heroes' Martyrdom day",
		"comments": "Haryana only"
	},
	{
		"date": "September 28",
		"holiday": "Birthday of S. Bhagat Singh Ji",
		"comments": "Punjab only"
	},
	{
		"date": "September 30",
		"holiday": "Mahalaya",
		"comments": "Karnataka, Odisha, Tripura, West Bengal only."
	},
	{
		"date": "October 01",
		"holiday": "Maharaja Agrasen Jayanati",
		"comments": "Haryana, Punjab, Rajasthan only"
	},
	{
		"date": "October 02",
		"holiday": "Mahatma Gandhi Birthday",
		"comments": "Gandhi Jayanti"
	},
	{
		"date": "October 02",
		"holiday": "Muharram",
		"comments": "Observed mainly by the Shia Muslim community"
	},
	{
		"date": "October 08",
		"holiday": "Maha Saptami",
		"comments": "Assam, Odisha, West Bengal"
	},
	{
		"date": "October 09",
		"holiday": "Durgastami",
		"comments": "Andhra Pradesh, Assam, Odisha, Telangana, West Bengal"
	},
	{
		"date": "October 10",
		"holiday": "Ayudha Puja",
		"comments": "Karnataka, Tamil Nadu"
	},
	{
		"date": "October 10",
		"holiday": "Navami of Durga Puja",
		"comments": "Assam, Tripura,West Bengal"
	},
	{
		"date": "October 10",
		"holiday": "Mahanavami",
		"comments": "Bihar, Kerala, Odisha only. Ninth day of Dussehra"
	},
	{
		"date": "October 11",
		"holiday": "Dussehra",
		"comments": "Dasara/Vijaya Dashami"
	},
	{
		"date": "October 11",
		"holiday": "Vijaya Dashami",
		"comments": "Assam, Bihar, Kerala, Odisha, Telangana, Tripura, Sikkim. Dussehra"
	},
	{
		"date": "October 12",
		"holiday": "Muharram (10th day)",
		"comments": "day of Ashurah"
	},
	{
		"date": "October 12",
		"holiday": "Durga Puja",
		"comments": "Mahastami. Odisha, Sikkim only"
	},
	{
		"date": "October 13",
		"holiday": "Durga Puja holiday",
		"comments": "Tripura only"
	},
	{
		"date": "October 14",
		"holiday": "Durga Puja holiday",
		"comments": "Tripura only"
	},
	{
		"date": "October 15",
		"holiday": "Maharishi Valmiki Birthday",
		"comments": "Delhi, Haryana, Karnataka"
	},
	{
		"date": "October 15",
		"holiday": "Lakshmi Puja",
		"comments": "Odisha, Tripura, West Bengal only."
	},
	{
		"date": "October 16",
		"holiday": "Maharishi Valmiki Birthday",
		"comments": "Himachal Pradesh, Punjab"
	},
	{
		"date": "October 17",
		"holiday": "Parkash Gurpurab of Sri Guru Ram Dass Ji",
		"comments": "Punjab only"
	},
	{
		"date": "October 29",
		"holiday": "Narak Chaturdashi",
		"comments": "Karnataka"
	},
	{
		"date": "October 29",
		"holiday": "Deepavali",
		"comments": "Assam, Kerala, Tamil Nadu, Tripura"
	},
	{
		"date": "October 29",
		"holiday": "Kali Puja",
		"comments": "Assam, Odisha, West Bengal. Festival dedicated to the Hindu goddess Kali"
	},
	{
		"date": "October 30",
		"holiday": "Deewali",
		"comments": "Deepawali. Except Assam, Kerala, Tamil Nadu, Tripura, West Bengal."
	},
	{
		"date": "October 31",
		"holiday": "Vikram Samvat New Year",
		"comments": "Gujarat only."
	},
	{
		"date": "October 31",
		"holiday": "Deepavali",
		"comments": "Karnataka, Maharashtra"
	},
	{
		"date": "October 31",
		"holiday": "Vishavkarma day",
		"comments": "Punjab, Rajasthan"
	},
	{
		"date": "November 01",
		"holiday": "Bhai Bij",
		"comments": "Gujarat only."
	},
	{
		"date": "November 01",
		"holiday": "Kannada Rajyothsava",
		"comments": "Bangalore Only. Karnataka Formation day"
	},
	{
		"date": "November 01",
		"holiday": "Haryana day",
		"comments": "Haryana only."
	},
	{
		"date": "November 01",
		"holiday": "Vishavkarma day",
		"comments": "Haryana only"
	},
	{
		"date": "November 06",
		"holiday": "Chhath Puja",
		"comments": "Assam, Bihar, Haryana, Uttar Pradesh"
	},
	{
		"date": "November 07",
		"holiday": "Chhath Puja",
		"comments": "Bihar only"
	},
	{
		"date": "November 14",
		"holiday": "Guru Nanak Birthday",
		"comments": "The Birthday of the founder of Sikhism, falls on full moon day of the month Kartik"
	},
	{
		"date": "November 14",
		"holiday": "Rasa Purnima",
		"comments": "Odisha only"
	},
	{
		"date": "November 17",
		"holiday": "Kanakadasa Jayanthi",
		"comments": "Karnataka only"
	},
	{
		"date": "December 03",
		"holiday": "World Disabled day",
		"comments": "Tripura only"
	},
	{
		"date": "December 04",
		"holiday": "Martyrdom day of Sri Guru Teg Bahadur Ji",
		"comments": "Punjab only"
	},
	{
		"date": "December 12",
		"holiday": "Id-e-Milad",
		"comments": ""
	},
	{
		"date": "December 13",
		"holiday": "Id-e-Milad",
		"comments": "Haryana, Madhya Pradesh, Tripura, Rajasthan, Uttar Pradesh"
	},
	{
		"date": "December 25",
		"holiday": "Christmas day",
		"comments": "Observed in all states"
	},
	{
		"date": "December 26",
		"holiday": "Shaheed Udham Singh's Birthday",
		"comments": "Haryana only"
	},
	{
		"date": "December 26",
		"holiday": "Boxing day",
		"comments": ""
	}
];

let days = 'Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday'.split(",");
let currentYear = (new Date()).getFullYear();

module.exports = holidays.map((holiday) => {
	let date = new Date(`${holiday.date} ${currentYear}`);
	holiday.day = days[date.getDay()];
	return holiday;
});
