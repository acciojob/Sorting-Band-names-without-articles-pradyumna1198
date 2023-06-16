//your code here
 let bandNames = ['The Rolling Stones', 'The Beatles', 'Led Zeppelin', 'Pink Floyd', 'AC/DC'];

    // Function to sort band names in lexicographic order excluding articles
    function sortBandNames(names) {
      // Regular expression to match articles
      const articleRegex = /^(a|an|the)\s/i;

      // Remove articles and sort the names
      names.sort((a, b) => {
        const nameA = a.replace(articleRegex, '').toLowerCase();
        const nameB = b.replace(articleRegex, '').toLowerCase();
        return nameA.localeCompare(nameB);
      });

      return names;
    }

    // Get the band list element
    const bandList = document.getElementById('band');

    // Sort the band names and populate the list
    const sortedBandNames = sortBandNames(bandNames);
    sortedBandNames.forEach(name => {
      const listItem = document.createElement('li');
      listItem.textContent = name;
      bandList.appendChild(listItem);
    });
