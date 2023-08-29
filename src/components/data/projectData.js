import DGPS from '../../assets/images/doggygps-screenshot.png'
import DailyPlanner from '../../assets/images/wds-SS.png'
import CQ from '../../assets/images/Screenshot.png'
import WDB from '../../assets/images/wdss.png'
import SVGSS from '../../assets/images/SVG.png'
import ecbe from '../../assets/images/ecbe-ss.png'

const projectData = [
    {
        title: 'Doggy-GPS',
        description: 'An app that utilizes a 3rd-party server API to search for a dog near you.',
        github: 'https://github.com/SoloSolaire/doggy-gps',
        deployed: 'https://solosolaire.github.io/doggy-gps/',
        image: DGPS
    },
    {
        title: 'Daily-Planner',
        description: 'An app to plan out your day. This app is reactive to the time of day to recolor the time blocks depending if they are in the past, present or future.',
        github: 'https://github.com/SoloSolaire/daily-planner/',
        deployed: 'https://solosolaire.github.io/daily-planner/',
        image: DailyPlanner
    },
    {
        title: 'Coding-Quiz',
        description: 'A quiz app to test your knowledge on coding.',
        github: 'https://github.com/SoloSolaire/coding-quiz',
        deployed: 'https://solosolaire.github.io/coding-quiz/index.html',
        image: CQ
    },
    {
        title: 'Weather-Dashboard',
        description: 'A weather app that provides information on the user inputted location. Utilizes the "OpenWeather Map" Api and "DayJS".',
        github: 'https://github.com/SoloSolaire/weather-dashboard',
        deployed: 'https://solosolaire.github.io/weather-dashboard/',
        image: WDB
    },
    {
        title: 'SVG-Logo-Maker',
        description: 'A SVG generator that creates logos through your inputs via inquirer.',
        github: 'https://github.com/SoloSolaire/SVG-Logo-Maker',
        deployed: 'https://drive.google.com/file/d/1hwWk0m_ldQEfT-wIMAP8h_db0QbmLWJd/view?usp=sharing',
        image: SVGSS
    },
    {
        title: 'E-Commerce-Backend',
        description: 'A test app to use express.js and configure it with Sequelize to interact with a MySQL database.',
        github: 'https://github.com/SoloSolaire/e-commerce-back-end',
        deployed: 'https://drive.google.com/file/d/1odM0o5YINM7NjcY6ArxBhRJ_OJyCLyiF/view',
        image: ecbe
    }
]

export default projectData