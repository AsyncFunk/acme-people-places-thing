function homePage(people, places, things) {
  return `
  
  <html>
  <head>
  
    <title>Acme People Places Things</title>
  </head>
  <body>
    <h1>Acme People, Places, Things</h1>
    <h2>People</h2>
    <ul>
      ${people
        .map(person => {
          return `<li>${person.name}</li>`;
        })
        .join('')}
    </ul>
  
    <h2>Places</h2>
    <ul>
    ${places
      .map(place => {
        return `<li>${place.name}</li>`;
      })
      .join('')}
    </ul>
  
    <h2>Things</h2>
    <ul>
    ${things
      .map(thing => {
        return `<li>${thing.name}</li>`;
      })
      .join('')}
    </ul>
    
  </body>
  </html>`;
}

module.exports = homePage;
