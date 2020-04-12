function getZodiacSign() 
{
	var month = document.zodiacForm.month.value
	var day = document.zodiacForm.day.value

	if((month == 1 && day <= 20) || (month == 12 && day >=22)) 
	{
		document.zodiacForm.zodiac.value ="capricorn";
	}
	else if ((month == 1 && day >= 21) || (month == 2 && day <= 18))
	{
		document.zodiacForm.zodiac.value ="aquarius";
	}
	else if((month == 2 && day >= 19) || (month == 3 && day <= 20))
	{
		document.zodiacForm.zodiac.value="pisces";
	}
	else if((month == 3 && day >= 21) || (month == 4 && day <= 20))
	{
		document.zodiacForm.zodiac.value ="aries";
	}
	else if((month == 4 && day >= 21) || (month == 5 && day <= 20))
	{
		document.zodiacForm.zodiac.value ="taurus";
	}
	else if((month == 5 && day >= 21) || (month == 6 && day <= 20))
	{
		document.zodiacForm.zodiac.value ="gemini";
	}
	else if((month == 6 && day >= 22) || (month == 7 && day <= 22))
	{
		document.zodiacForm.zodiac.value ="cancer";
	}
	else if((month == 7 && day >= 23) || (month == 8 && day <= 23))
	{
		document.zodiacForm.zodiac.value ="leo";
	} 
	else if((month == 8 && day >= 24) || (month == 9 && day <= 23))
	{
		document.zodiacForm.zodiac.value ="virgo";
	}
	else if((month == 9 && day >= 24) || (month == 10 && day <= 23))
	{
		document.zodiacForm.zodiac.value ="libra";
	}
	else if((month == 10 && day >= 24) || (month == 11 && day <= 22))
	{
		document.zodiacForm.zodiac.value ="scorpio";
	}
	else if((month == 11 && day >= 23) || (month == 12 && day <= 21))
	{
		document.zodiacForm.zodiac.value ="sagittarius";
	}
}
