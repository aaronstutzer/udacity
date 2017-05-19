import fresh_tomatoes
import media

blow = media.Movie("Blow", " biographical crime film about the American cocaine smuggler George Jung","https://upload.wikimedia.org/wikipedia/en/b/bf/Blow_poster.jpg", "https://www.youtube.com/watch?v=scWkP1GdnuU")
entourage = media.Movie("Entourage","about a movie star and his posse","https://upload.wikimedia.org/wikipedia/en/d/df/Entourage_film_2015_poster.jpg","https://www.youtube.com/watch?v=SGSE_XPF4_g")
training_day = media.Movie("Training Day","1st day of an officer in south central LA","https://upload.wikimedia.org/wikipedia/en/b/b3/Training_Day_Poster.jpg","https://www.youtube.com/watch?v=DXPJqRtkDP0")
law_abiding_citizen = media.Movie("Law Abiding Citizen","A man seeks justice for his killed family","https://upload.wikimedia.org/wikipedia/en/9/95/Law_abiding_citizen_ver5.jpg","https://www.youtube.com/watch?v=p6hT_uY-jSM")
any_given_sunday = media.Movie("Any Given Sunday","Life is a contact sport","https://upload.wikimedia.org/wikipedia/en/8/80/Any_Given_Sunday.jpg","https://www.youtube.com/watch?v=a3nGztzo6Dk")
the_shwawshank_redemption = media.Movie("The Shawshank Redemption","fear can hold you prisoner. hope can set you free","https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg","https://www.youtube.com/watch?v=6hB3S9bIaco")

movies = [blow, entourage, training_day, law_abiding_citizen, any_given_sunday, the_shwawshank_redemption]
fresh_tomatoes.open_movies_page(movies)
#(media.Movie.VALID_RATINGS)
