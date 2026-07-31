
const courses = require("../services/coursesService")
const homeDate = {
    "continueLearning": {
        "courseId": 1,
        "lessonId": 5,
        "title": "React Native Masterclass",
        "progress": 45
    },

    "categories": [
        {
            "id": 1,
            "name": "React Native"
        },
        {
            "id": 2,
            "name": "Android"
        },
        {
            "id": 3,
            "name": "iOS"
        },
        {
            "id": 4,
            "name": "Backend"
        },{
            "id": 5,
            "name": "Jectpack compose"
        },
        {
            "id": 6,
            "name": "kotlin"
        },
        {
            "id": 7,
            "name": "java script"
        },
    ],

    "recommendedCourses": courses.getRecommendedCourses()
}

module.exports = homeDate

