
export const options = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises?offset=10&limit=1000',
  headers: {
    'X-RapidAPI-Key': '2821733488msh5b388454ee637cep1e1d8ejsn0ccc3c3d3b5e',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '2821733488msh5b388454ee637cep1e1d8ejsn0ccc3c3d3b5e',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};


export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '2821733488msh5b388454ee637cep1e1d8ejsn0ccc3c3d3b5e',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};


export const fetchData = async (url, options) => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Fetch error: ${error}`);
  }
};



/*
export const options = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises?offset=10&limit=1000',
  headers: {
    'X-RapidAPI-Key': '387c6c21b7mshee1a94fcd8c4fc5p1a3d80jsn10f9de23800a',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};
*/