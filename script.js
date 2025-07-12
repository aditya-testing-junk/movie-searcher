const sites = [
  {
    name: "lookmovies",
    searchUrl: (query) => `https://www.lookmovie2.to/movies/search/?q=${encodeURIComponent(query)}`,
    api: false
  },
  {
    name: "flixbaba",
    searchUrl: (query) => `https://flixbaba.net/search?q=${encodeURIComponent(query)}`,
    api: false
  },
  {
    name: "olamovies",
    searchUrl: (query) => `https://olamovies.cam/?s=${encodeURIComponent(query)}`,
    api: false
  },
  {
  name: "filmyzilla",
  searchUrl: (query) => `https://www.google.com/search?q=${encodeURIComponent(query)}+site:filmyzilla13.com`,
  api: false
},
{
  name: "Internet archive",
  searchUrl: (query) => `https://www.google.com/search?q=${encodeURIComponent(query)}+site:archive.org`,
  api: false
}

  // Add more sites as needed

];

document.getElementById('searchBtn').onclick = function() {
  const query = document.getElementById('videoInput').value.trim();
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = '';

  if (!query) {
    resultsDiv.textContent = "Please enter a video name.";
    return;
  }

  const list = document.createElement('ul');
  sites.forEach(site => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${site.searchUrl(query)}" target="_blank">${site.name}</a>`;
    list.appendChild(li);
  });
  resultsDiv.appendChild(list);
};
