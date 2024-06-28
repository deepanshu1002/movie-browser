INTRODUCTION

The Movie Browser React App is designed to provide users with an engaging interface to explore various movie lists, search for movies, and manage their favorite movies. This documentation outlines the design approach, functionality, and steps to run the application.

---

DESIGN APPROACH

The application is structured into several key components:

    1. Header: A fixed header that remains consistent throughout the app. It includes navigation buttons for movie search and accessing favorite movies.
    2. Body Component: The main page is divided into two sections:
        - Trailer Section: Displays a YouTube trailer video using an iframe, along with movie details on the left.
        - Movie Lists Section: Contains four scrollable containers showcasing different movie categories (Popular, Top Rated, Now Playing, and Upcoming).
    3. Search Component: Provides a comprehensive movie search experience with filtering options and infinite scrolling.
    4. Favourite Movies Component: Displays the user's favorite movies, allowing them to manage their list.

---

COMPONENTS OVERVIEW

Header Component

    Description: The header is a fixed element at the top of the app that includes navigation buttons for movie search and accessing the favorite movies page.
    Functionalities:
        Navigation: Includes buttons to navigate between the main page, search component, and favorite movies component.

Body Component

    Description: The main content of the homepage is divided into two sections.
        Trailer Section: Embeds a YouTube video using an iframe and displays movie details.
        Movie Lists Section: Contains four scrollable containers with movie categories (Popular, Top Rated, Now Playing, and Upcoming).

Search Component

    Description: Allows users to search for movies with various filtering options and displays results.
    Functionalities:
        Search Bar: As users type, it shows movie suggestions with debouncing to reduce API calls.
        Filters: Options to filter movies by genre, ratings, and release date.
        Movie Container: Scrollable list of movies that changes based on search input and filters. Includes infinite scroll for continuous movie loading.
        Add to Favourites: Button to add movies to the favorite list.

Favourite Movies Component

    Description: Displays the user's favorite movies and allows them to manage their list.
    Functionalities:
        Remove from Favourites: Option to remove movies from the favorite list.
        Back Button: Navigation to return to the search page.

---

FEATURES

Main Page

- Trailer Video: Displays an embedded YouTube video with movie details.
- Movie Lists: Scrollable containers for various movie categories (Popular, Top Rated, Now Playing, Upcoming).

Search Functionality

- Search Bar: Provides real-time movie suggestions with debouncing (0.4 seconds).
- Filtering Options: Allows users to filter movies by genre, ratings, and release date.
- Infinite Scroll: Loads more movies as the user scrolls down.

Favourite Movies

- Add to Favourites: Allows users to add movies to their favorite list.
- View and Manage Favourites: Users can view and remove movies from their favorite list.
- Navigation: Buttons to switch between the search component and the favorite movies page.
