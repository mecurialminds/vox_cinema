let express = require('express'),
    router  = express.Router();

router.use(function timeLog(req, res, next) {
    console.log('API HIT TIME ', Date.now());
    next()
});

router.get('/', function (req, res) {
    res.render('index', {title : 'Express'});
});

let moviesController     = require('./movies'),
    cinemaController     = require('./cinema');
    seatBookingController = require('./seatbooking');

router.get('/getmovies', moviesController.getMovies);
router.get('/getMovieByName', moviesController.getMovieByName);
router.get('/sendCarousel', moviesController.sendCarousel);
router.get('/showTimeCarousel', moviesController.showTimeCarousel);
router.get('/getCities', cinemaController.getCities);
router.get('/getCinemas', cinemaController.getCinemas);
router.get('/chooseSeats', seatBookingController.renderSeats);
router.post('/bookseats', seatBookingController.bookSeats);

module.exports = router;