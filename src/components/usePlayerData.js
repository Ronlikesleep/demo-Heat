import { useState, useEffect } from 'react';
import oladipoData from '../backend/data/oladipo.json'; 

// a hook to filter the player's data
  export const usePlayerData = (seasonType, perMode) => {
    const [playerData, setPlayerData] = useState([]);
    const [seasonYear, setSeasonYear] = useState([]);
  
    useEffect(() => {
        
        let fetchedData;
        if (perMode) {
            if(perMode === 'Overview Per 75'){
                fetchedData = oladipoData.overviewPer75;
            }else if(perMode === 'Overview Per 100'){
                fetchedData = oladipoData.overviewPer100;
            }else if(perMode === 'Overview Per 36'){
                fetchedData = oladipoData.overviewPer36;
            }else if(perMode === 'Overview Total'){
                fetchedData = oladipoData.overviewTotals;
            }else{
                fetchedData = oladipoData.overviewPerGame;
            }
        }else{
            fetchedData = oladipoData.overviewPerGame;
        }
        
        let allSeasons = [...new Set(oladipoData.overviewPerGame.map(data => data.Season))];
        setSeasonYear(allSeasons);

        let filteredData;
        if (seasonType) {
            if(seasonType === "ALL"){
                filteredData = fetchedData;
            }else{
                filteredData = fetchedData.filter(data => data.Season === seasonType);
            }
        } else {
          filteredData = fetchedData;
        }
    
        setPlayerData(filteredData);
      }, [seasonType, perMode]);
    
      return { playerData, seasonYear };
    };