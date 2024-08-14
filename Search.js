// Toggle search bar visibility when clicking the search icon
document.getElementById('searchIcon').addEventListener('click', function () {
    var searchBarContainer = document.getElementById('searchBarContainer');
    
    if (searchBarContainer.style.display === 'none' || searchBarContainer.style.display === '') {
        searchBarContainer.style.display = 'block';
    } else {
        searchBarContainer.style.display = 'none';
    }
});

// Hide search bar when close button is clicked
document.getElementById('closeSearchBar').addEventListener('click', function () {
    document.getElementById('searchBarContainer').style.display = 'none';
});
