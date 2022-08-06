import { render, screen ,waitFor } from '@testing-library/react';
import Card from '../components/Card';

test('Render card component', async() => {
    const obj={
        backdrop: "https://wookie.codesubmit.io/static/backdrops/8de5e9be-ec40-4687-9b01-be1af3ace1d7.jpg",
        cast: [
            "Christian Bale",
            "Michael Caine",
            "Ken Watanabe"
        ],
        classification: "13+",
        director: "Christopher Nolan",
        genres: [
            "Action",
            "Adventure"
        ],
        id: "8de5e9be-ec40-4687-9b01-be1af3ace1d7",
        imdb_rating: 8.2,
        length: "2h 20min",
        overview: "Driven by tragedy, billionaire Bruce Wayne dedicates his life to uncovering and defeating the corruption that plagues his home, Gotham City.  Unable to work within the system, he instead creates a new identity, a symbol of fear for the criminal underworld - The Batman.",
        poster: "https://wookie.codesubmit.io/static/posters/8de5e9be-ec40-4687-9b01-be1af3ace1d7.jpg",
        released_on: "2005-06-10T00:00:00",
        slug: "batman-begins-2005",
        title: "Batman Begins"
    }
    render(<Card ele={obj} />);
    expect(screen.getByText('Show more...')).toBeInTheDocument();
});