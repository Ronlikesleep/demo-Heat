import { useState, useEffect } from 'react';
import oladipoData from '../data/oladipo.json';

// a hook to automaticlly get the summary data for one player

function calculateAge(birthDateString) {
  const birthDate = new Date(birthDateString);
  const currentDate = new Date();

  let age = currentDate.getFullYear() - birthDate.getFullYear();

  const monthDifference = currentDate.getMonth() - birthDate.getMonth();
  if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
}

export const useSummaryPlayerStats = () => {
  const [playerSummaryStats, setSummaryPlayerStats] = useState({
    firstName: '',
    lastName: '',
    yearsPro: 0,
    height: '',
    jerseyNum: '',
    homeCountry: '',
    position: '',
    twitterHandle: '',
    photoUrl: '',
    highSchool: '',
    age:0,
    careerAverages: {
      PT: 0,
      REB: 0,
      AST: 0,
      STL: 0,
    }
  });

  useEffect(() => {
    const careerAverages = {
      PT: 0,
      REB: 0,
      AST: 0,
      STL: 0,
      GP: 0,
    };
    const ageYear = calculateAge(oladipoData.bio[0].birthDate);
    for (const season of oladipoData.overviewTotals) {
        careerAverages.PT += season.PTS;
        careerAverages.REB += season.REB;
        careerAverages.AST += season.AST;
        careerAverages.STL += season.STL;
        careerAverages.GP += season.gp;
    }

    careerAverages.PT /= careerAverages.GP;
    careerAverages.REB /= careerAverages.GP;
    careerAverages.AST /= careerAverages.GP;
    careerAverages.STL /= careerAverages.GP;
    
    
    setSummaryPlayerStats({
        age:ageYear,
        highSchool: oladipoData.bio[0].highSchool,
        firstName: oladipoData.bio[0].firstName,
        lastName: oladipoData.bio[0].lastName,
        yearsPro: oladipoData.bio[0].yearsPro,
        height: oladipoData.bio[0].height,
        jerseyNum: oladipoData.bio[0].jerseyNum,
        homeCountry: oladipoData.bio[0].homeCountry,
        position: oladipoData.bio[0].position,
        twitterHandle: oladipoData.bio[0].twitterHandle,
        photoUrl: oladipoData.bio[0].photoUrl,
        careerAverages,
    });

  }, []);
  
  return playerSummaryStats;
};
