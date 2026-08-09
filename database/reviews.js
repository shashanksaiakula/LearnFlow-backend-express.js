const reviews = [
  {
    "courseCode": "course_001",
    "userId": "c8b90bcb5bffe22ad2747a08",
    "userName": "Pooja L.",
    "rating": 5,
    "comment": "The projects in this course made all the difference — I actually understand React Native now instead of just copying code.",
    "createdAt": "2026-01-24T10:00:00.000Z",
    "updatedAt": "2026-01-24T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=35"
  },
  {
    "courseCode": "course_001",
    "userId": "72e25c40f2af4a116cd672f9",
    "userName": "Vikram N.",
    "rating": 5,
    "comment": "This is hands down one of the best courses I've taken on React Native. The pacing was perfect and every concept in \"React Native Masterclass\" clicked immediately.",
    "createdAt": "2026-02-03T10:00:00.000Z",
    "updatedAt": "2026-02-03T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=40"
  },
  {
    "courseCode": "course_001",
    "userId": "cf7a4a93700764f15689317c",
    "userName": "Isha K.",
    "rating": 4,
    "comment": "Good structure and well-paced. The instructor explains React Native in a way that's easy to follow even for tricky topics.",
    "createdAt": "2026-04-12T10:00:00.000Z",
    "updatedAt": "2026-04-12T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=9"
  },
  {
    "courseCode": "course_001",
    "userId": "e0247c221d78ce97d84ae8d1",
    "userName": "Pooja S.",
    "rating": 4,
    "comment": "Great content and clear explanations. Would've liked a bit more depth in the later modules, but still highly recommend.",
    "createdAt": "2026-02-16T10:00:00.000Z",
    "updatedAt": "2026-02-16T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=18"
  },
  {
    "courseCode": "course_002",
    "userId": "8c7a51382ab1653dd07ae914",
    "userName": "Yash S.",
    "rating": 5,
    "comment": "Incredible depth for a course this length. I went from confused to confident with React Native in just a couple of weeks.",
    "createdAt": "2026-02-25T10:00:00.000Z",
    "updatedAt": "2026-02-25T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=32"
  },
  {
    "courseCode": "course_002",
    "userId": "39d91424748d63cfcd5a4e49",
    "userName": "Karan A.",
    "rating": 5,
    "comment": "This is hands down one of the best courses I've taken on React Native. The pacing was perfect and every concept in \"React Native New Architecture\" clicked immediately.",
    "createdAt": "2026-02-22T10:00:00.000Z",
    "updatedAt": "2026-02-22T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=36"
  },
  {
    "courseCode": "course_002",
    "userId": "779d34b5b926c3bcc1f6ec69",
    "userName": "Ananya G.",
    "rating": 4,
    "comment": "Great content and clear explanations. Would've liked a bit more depth in the later modules, but still highly recommend.",
    "createdAt": "2026-05-29T10:00:00.000Z",
    "updatedAt": "2026-05-29T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=6"
  },
  {
    "courseCode": "course_002",
    "userId": "6f145eb63197e518f650eccf",
    "userName": "Isha U.",
    "rating": 5,
    "comment": "The projects in this course made all the difference — I actually understand React Native now instead of just copying code.",
    "createdAt": "2026-05-31T10:00:00.000Z",
    "updatedAt": "2026-05-31T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=62"
  },
  {
    "courseCode": "course_003",
    "userId": "810d4162f922ec1b416397f0",
    "userName": "Isha Y.",
    "rating": 4,
    "comment": "Really solid course on React Native. A few sections felt a bit rushed but overall I learned a ton from \"Redux Toolkit Complete Guide\".",
    "createdAt": "2026-05-19T10:00:00.000Z",
    "updatedAt": "2026-05-19T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=42"
  },
  {
    "courseCode": "course_003",
    "userId": "7c2454a44119f19bccb976d2",
    "userName": "Sneha B.",
    "rating": 5,
    "comment": "This is hands down one of the best courses I've taken on React Native. The pacing was perfect and every concept in \"Redux Toolkit Complete Guide\" clicked immediately.",
    "createdAt": "2026-04-23T10:00:00.000Z",
    "updatedAt": "2026-04-23T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=29"
  },
  {
    "courseCode": "course_003",
    "userId": "1cd364ed4b64fab1df887b1a",
    "userName": "Aarav W.",
    "rating": 4,
    "comment": "Great content and clear explanations. Would've liked a bit more depth in the later modules, but still highly recommend.",
    "createdAt": "2026-04-11T10:00:00.000Z",
    "updatedAt": "2026-04-11T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=20"
  },
  {
    "courseCode": "course_003",
    "userId": "aaf5e15e3129ffd7e3f43d94",
    "userName": "Ananya E.",
    "rating": 5,
    "comment": "The projects in this course made all the difference — I actually understand React Native now instead of just copying code.",
    "createdAt": "2026-05-21T10:00:00.000Z",
    "updatedAt": "2026-05-21T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=55"
  },
  {
    "courseCode": "course_004",
    "userId": "13ebee02d6435b54fb75b84c",
    "userName": "Yash G.",
    "rating": 5,
    "comment": "Incredible depth for a course this length. I went from confused to confident with Node.js in just a couple of weeks.",
    "createdAt": "2026-05-01T10:00:00.000Z",
    "updatedAt": "2026-05-01T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=47"
  },
  {
    "courseCode": "course_004",
    "userId": "b6d7a4ec6739954b8e34d7f8",
    "userName": "Aarav A.",
    "rating": 4,
    "comment": "Great content and clear explanations. Would've liked a bit more depth in the later modules, but still highly recommend.",
    "createdAt": "2026-04-01T10:00:00.000Z",
    "updatedAt": "2026-04-01T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=6"
  },
  {
    "courseCode": "course_004",
    "userId": "c5d307192b63a024b6ef5135",
    "userName": "Sneha W.",
    "rating": 4,
    "comment": "Really solid course on Node.js. A few sections felt a bit rushed but overall I learned a ton from \"Node.js & Express API Development\".",
    "createdAt": "2026-02-14T10:00:00.000Z",
    "updatedAt": "2026-02-14T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=35"
  },
  {
    "courseCode": "course_004",
    "userId": "6bf303df8ad51219517bc3ca",
    "userName": "Karan X.",
    "rating": 5,
    "comment": "Incredible depth for a course this length. I went from confused to confident with Node.js in just a couple of weeks.",
    "createdAt": "2026-06-07T10:00:00.000Z",
    "updatedAt": "2026-06-07T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=17"
  },
  {
    "courseCode": "course_005",
    "userId": "6c122fc79816f8c72266f3a9",
    "userName": "Neha J.",
    "rating": 4,
    "comment": "Good structure and well-paced. The instructor explains MongoDB in a way that's easy to follow even for tricky topics.",
    "createdAt": "2026-04-14T10:00:00.000Z",
    "updatedAt": "2026-04-14T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=48"
  },
  {
    "courseCode": "course_005",
    "userId": "f3c9c4b4eb211e22ca75e4f5",
    "userName": "Rohan B.",
    "rating": 4,
    "comment": "Really solid course on MongoDB. A few sections felt a bit rushed but overall I learned a ton from \"MongoDB From Scratch\".",
    "createdAt": "2026-01-31T10:00:00.000Z",
    "updatedAt": "2026-01-31T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=12"
  },
  {
    "courseCode": "course_005",
    "userId": "675ed54d7ee248cb0dada96b",
    "userName": "Riya D.",
    "rating": 4,
    "comment": "Great content and clear explanations. Would've liked a bit more depth in the later modules, but still highly recommend.",
    "createdAt": "2026-07-25T10:00:00.000Z",
    "updatedAt": "2026-07-25T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=40"
  },
  {
    "courseCode": "course_005",
    "userId": "32c6f88d1f2e1555ce2eff2f",
    "userName": "Sneha Y.",
    "rating": 4,
    "comment": "Good structure and well-paced. The instructor explains MongoDB in a way that's easy to follow even for tricky topics.",
    "createdAt": "2026-05-03T10:00:00.000Z",
    "updatedAt": "2026-05-03T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=35"
  },
  {
    "courseCode": "course_006",
    "userId": "45b8394191744bf5409808e4",
    "userName": "Ananya X.",
    "rating": 4,
    "comment": "Really solid course on React. A few sections felt a bit rushed but overall I learned a ton from \"Modern JavaScript\".",
    "createdAt": "2026-03-26T10:00:00.000Z",
    "updatedAt": "2026-03-26T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=13"
  },
  {
    "courseCode": "course_006",
    "userId": "482d546d9489ecac023b8b33",
    "userName": "Sahil A.",
    "rating": 4,
    "comment": "Really solid course on React. A few sections felt a bit rushed but overall I learned a ton from \"Modern JavaScript\".",
    "createdAt": "2026-02-18T10:00:00.000Z",
    "updatedAt": "2026-02-18T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=4"
  },
  {
    "courseCode": "course_006",
    "userId": "27e43e51dc711c1873aefd9b",
    "userName": "Divya V.",
    "rating": 5,
    "comment": "Incredible depth for a course this length. I went from confused to confident with React in just a couple of weeks.",
    "createdAt": "2026-05-11T10:00:00.000Z",
    "updatedAt": "2026-05-11T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=66"
  },
  {
    "courseCode": "course_006",
    "userId": "ddd067f14e5d688c2b78df25",
    "userName": "Ananya K.",
    "rating": 5,
    "comment": "This is hands down one of the best courses I've taken on React. The pacing was perfect and every concept in \"Modern JavaScript\" clicked immediately.",
    "createdAt": "2026-07-09T10:00:00.000Z",
    "updatedAt": "2026-07-09T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=68"
  },
  {
    "courseCode": "course_007",
    "userId": "0082a2312ccd22ad90286a62",
    "userName": "Sahil P.",
    "rating": 5,
    "comment": "The projects in this course made all the difference — I actually understand React now instead of just copying code.",
    "createdAt": "2026-03-11T10:00:00.000Z",
    "updatedAt": "2026-03-11T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=9"
  },
  {
    "courseCode": "course_007",
    "userId": "6e9df443f311ff0152f80efe",
    "userName": "Arjun E.",
    "rating": 5,
    "comment": "Incredible depth for a course this length. I went from confused to confident with React in just a couple of weeks.",
    "createdAt": "2026-04-22T10:00:00.000Z",
    "updatedAt": "2026-04-22T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=32"
  },
  {
    "courseCode": "course_007",
    "userId": "ac357fb515ef77098b3769b8",
    "userName": "Karan S.",
    "rating": 5,
    "comment": "The projects in this course made all the difference — I actually understand React now instead of just copying code.",
    "createdAt": "2026-05-08T10:00:00.000Z",
    "updatedAt": "2026-05-08T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=67"
  },
  {
    "courseCode": "course_007",
    "userId": "de7cd1e917ce0affaaa458e9",
    "userName": "Tanvi Z.",
    "rating": 5,
    "comment": "Incredible depth for a course this length. I went from confused to confident with React in just a couple of weeks.",
    "createdAt": "2026-02-22T10:00:00.000Z",
    "updatedAt": "2026-02-22T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=14"
  },
  {
    "courseCode": "course_008",
    "userId": "07f24b65922ff0316d0c337b",
    "userName": "Priya Z.",
    "rating": 5,
    "comment": "Incredible depth for a course this length. I went from confused to confident with React in just a couple of weeks.",
    "createdAt": "2026-02-17T10:00:00.000Z",
    "updatedAt": "2026-02-17T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=30"
  },
  {
    "courseCode": "course_008",
    "userId": "e4f674c0053a9a8e91c7c8c0",
    "userName": "Ananya W.",
    "rating": 5,
    "comment": "The projects in this course made all the difference — I actually understand React now instead of just copying code.",
    "createdAt": "2026-03-25T10:00:00.000Z",
    "updatedAt": "2026-03-25T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=39"
  },
  {
    "courseCode": "course_008",
    "userId": "b62ff278998fb5a460a285e9",
    "userName": "Pooja G.",
    "rating": 4,
    "comment": "Great content and clear explanations. Would've liked a bit more depth in the later modules, but still highly recommend.",
    "createdAt": "2026-06-30T10:00:00.000Z",
    "updatedAt": "2026-06-30T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=48"
  },
  {
    "courseCode": "course_008",
    "userId": "140534c9cdac0fd9d42c9e21",
    "userName": "Divya J.",
    "rating": 5,
    "comment": "This is hands down one of the best courses I've taken on React. The pacing was perfect and every concept in \"React.js Complete Course\" clicked immediately.",
    "createdAt": "2026-05-04T10:00:00.000Z",
    "updatedAt": "2026-05-04T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=20"
  },
  {
    "courseCode": "course_009",
    "userId": "95168611317fd01c40481d4d",
    "userName": "Yash Y.",
    "rating": 4,
    "comment": "Really solid course on Android. A few sections felt a bit rushed but overall I learned a ton from \"Kotlin for Android\".",
    "createdAt": "2026-02-09T10:00:00.000Z",
    "updatedAt": "2026-02-09T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=12"
  },
  {
    "courseCode": "course_009",
    "userId": "b88b250eb02025bcd461f475",
    "userName": "Aarav M.",
    "rating": 5,
    "comment": "Incredible depth for a course this length. I went from confused to confident with Android in just a couple of weeks.",
    "createdAt": "2026-02-06T10:00:00.000Z",
    "updatedAt": "2026-02-06T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=69"
  },
  {
    "courseCode": "course_009",
    "userId": "a6d7f18f95cb4eecba394104",
    "userName": "Yash L.",
    "rating": 5,
    "comment": "The projects in this course made all the difference — I actually understand Android now instead of just copying code.",
    "createdAt": "2026-05-03T10:00:00.000Z",
    "updatedAt": "2026-05-03T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=32"
  },
  {
    "courseCode": "course_009",
    "userId": "d1b4a6caba915dd4c7ed6970",
    "userName": "Pooja B.",
    "rating": 5,
    "comment": "Incredible depth for a course this length. I went from confused to confident with Android in just a couple of weeks.",
    "createdAt": "2026-06-28T10:00:00.000Z",
    "updatedAt": "2026-06-28T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=17"
  },
  {
    "courseCode": "course_010",
    "userId": "f5d28dbe80c38b5a16d4c6ad",
    "userName": "Riya U.",
    "rating": 5,
    "comment": "The projects in this course made all the difference — I actually understand SwiftUI now instead of just copying code.",
    "createdAt": "2026-07-23T10:00:00.000Z",
    "updatedAt": "2026-07-23T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=39"
  },
  {
    "courseCode": "course_010",
    "userId": "d09982b91a9cce990f656b43",
    "userName": "Manish G.",
    "rating": 4,
    "comment": "Great content and clear explanations. Would've liked a bit more depth in the later modules, but still highly recommend.",
    "createdAt": "2026-01-28T10:00:00.000Z",
    "updatedAt": "2026-01-28T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=24"
  },
  {
    "courseCode": "course_010",
    "userId": "bae4f6fea1cf20d81aa6cf5b",
    "userName": "Aditya H.",
    "rating": 5,
    "comment": "Incredible depth for a course this length. I went from confused to confident with SwiftUI in just a couple of weeks.",
    "createdAt": "2026-03-27T10:00:00.000Z",
    "updatedAt": "2026-03-27T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=11"
  },
  {
    "courseCode": "course_010",
    "userId": "9f151b871979f99f3a1b0c93",
    "userName": "Neha F.",
    "rating": 5,
    "comment": "The projects in this course made all the difference — I actually understand SwiftUI now instead of just copying code.",
    "createdAt": "2026-03-08T10:00:00.000Z",
    "updatedAt": "2026-03-08T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=55"
  },
  {
    "courseCode": "course_011",
    "userId": "b15d0a686e10a1d2f5c1fff0",
    "userName": "Rohan X.",
    "rating": 5,
    "comment": "Incredible depth for a course this length. I went from confused to confident with Android in just a couple of weeks.",
    "createdAt": "2026-01-22T10:00:00.000Z",
    "updatedAt": "2026-01-22T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=25"
  },
  {
    "courseCode": "course_011",
    "userId": "50c698ac170d4c2868945ef0",
    "userName": "Riya S.",
    "rating": 4,
    "comment": "Good structure and well-paced. The instructor explains Android in a way that's easy to follow even for tricky topics.",
    "createdAt": "2026-05-23T10:00:00.000Z",
    "updatedAt": "2026-05-23T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=25"
  },
  {
    "courseCode": "course_011",
    "userId": "9755f09c7d53608c5e49c758",
    "userName": "Sahil W.",
    "rating": 5,
    "comment": "The projects in this course made all the difference — I actually understand Android now instead of just copying code.",
    "createdAt": "2026-07-27T10:00:00.000Z",
    "updatedAt": "2026-07-27T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=6"
  },
  {
    "courseCode": "course_011",
    "userId": "6b1479cea27908da9d7f0f1d",
    "userName": "Divya L.",
    "rating": 5,
    "comment": "This is hands down one of the best courses I've taken on Android. The pacing was perfect and every concept in \"Android Jetpack Compose\" clicked immediately.",
    "createdAt": "2026-03-30T10:00:00.000Z",
    "updatedAt": "2026-03-30T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=65"
  },
  {
    "courseCode": "course_012",
    "userId": "c66c9c071f8af2e7b4da296f",
    "userName": "Priya K.",
    "rating": 5,
    "comment": "Incredible depth for a course this length. I went from confused to confident with Node.js in just a couple of weeks.",
    "createdAt": "2026-05-14T10:00:00.000Z",
    "updatedAt": "2026-05-14T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=17"
  },
  {
    "courseCode": "course_012",
    "userId": "1fb43d0ddd530142777f28ee",
    "userName": "Yash U.",
    "rating": 4,
    "comment": "Good structure and well-paced. The instructor explains Node.js in a way that's easy to follow even for tricky topics.",
    "createdAt": "2026-07-29T10:00:00.000Z",
    "updatedAt": "2026-07-29T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=62"
  },
  {
    "courseCode": "course_012",
    "userId": "e0f001ccd9b8d5a0e97fcbda",
    "userName": "Aarav A.",
    "rating": 5,
    "comment": "Incredible depth for a course this length. I went from confused to confident with Node.js in just a couple of weeks.",
    "createdAt": "2026-07-31T10:00:00.000Z",
    "updatedAt": "2026-07-31T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=33"
  },
  {
    "courseCode": "course_012",
    "userId": "0bd6f510c84922252e8841da",
    "userName": "Rahul M.",
    "rating": 5,
    "comment": "The projects in this course made all the difference — I actually understand Node.js now instead of just copying code.",
    "createdAt": "2026-02-12T10:00:00.000Z",
    "updatedAt": "2026-02-12T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=17"
  },
  {
    "courseCode": "course_013",
    "userId": "3842f4dd49baedd2c3cd4275",
    "userName": "Yash D.",
    "rating": 4,
    "comment": "Really solid course on Git. A few sections felt a bit rushed but overall I learned a ton from \"Git & GitHub Masterclass\".",
    "createdAt": "2026-02-26T10:00:00.000Z",
    "updatedAt": "2026-02-26T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=43"
  },
  {
    "courseCode": "course_013",
    "userId": "5111b383020f57571af2443a",
    "userName": "Aditya Q.",
    "rating": 5,
    "comment": "The projects in this course made all the difference — I actually understand Git now instead of just copying code.",
    "createdAt": "2026-06-23T10:00:00.000Z",
    "updatedAt": "2026-06-23T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=29"
  },
  {
    "courseCode": "course_013",
    "userId": "5337e2f8356afff4b890c743",
    "userName": "Isha Y.",
    "rating": 4,
    "comment": "Good structure and well-paced. The instructor explains Git in a way that's easy to follow even for tricky topics.",
    "createdAt": "2026-02-20T10:00:00.000Z",
    "updatedAt": "2026-02-20T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=54"
  },
  {
    "courseCode": "course_013",
    "userId": "f312362dc569265f4535151f",
    "userName": "Yash Y.",
    "rating": 4,
    "comment": "Great content and clear explanations. Would've liked a bit more depth in the later modules, but still highly recommend.",
    "createdAt": "2026-05-13T10:00:00.000Z",
    "updatedAt": "2026-05-13T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=46"
  },
  {
    "courseCode": "course_014",
    "userId": "df89b135606e72ff20fc8d6d",
    "userName": "Tanvi L.",
    "rating": 5,
    "comment": "The projects in this course made all the difference — I actually understand Node.js now instead of just copying code.",
    "createdAt": "2026-06-08T10:00:00.000Z",
    "updatedAt": "2026-06-08T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=10"
  },
  {
    "courseCode": "course_014",
    "userId": "ae8f77c077ff8a65a443ddda",
    "userName": "Neha Z.",
    "rating": 5,
    "comment": "The projects in this course made all the difference — I actually understand Node.js now instead of just copying code.",
    "createdAt": "2026-05-24T10:00:00.000Z",
    "updatedAt": "2026-05-24T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=16"
  },
  {
    "courseCode": "course_014",
    "userId": "7145241d7192ced91ee9c2ee",
    "userName": "Pooja I.",
    "rating": 4,
    "comment": "Really solid course on Node.js. A few sections felt a bit rushed but overall I learned a ton from \"REST API Design\".",
    "createdAt": "2026-01-20T10:00:00.000Z",
    "updatedAt": "2026-01-20T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=32"
  },
  {
    "courseCode": "course_014",
    "userId": "6c5afcc303e866bb3f8bb655",
    "userName": "Ananya M.",
    "rating": 5,
    "comment": "This is hands down one of the best courses I've taken on Node.js. The pacing was perfect and every concept in \"REST API Design\" clicked immediately.",
    "createdAt": "2026-05-30T10:00:00.000Z",
    "updatedAt": "2026-05-30T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=7"
  },
  {
    "courseCode": "course_015",
    "userId": "1df0b37a9f09e4a9e2927391",
    "userName": "Tanvi P.",
    "rating": 4,
    "comment": "Great content and clear explanations. Would've liked a bit more depth in the later modules, but still highly recommend.",
    "createdAt": "2026-04-13T10:00:00.000Z",
    "updatedAt": "2026-04-13T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=4"
  },
  {
    "courseCode": "course_015",
    "userId": "c4ebc1af7d57e58140ea7cd2",
    "userName": "Aarav I.",
    "rating": 4,
    "comment": "Really solid course on Docker. A few sections felt a bit rushed but overall I learned a ton from \"Docker Fundamentals\".",
    "createdAt": "2026-04-12T10:00:00.000Z",
    "updatedAt": "2026-04-12T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=29"
  },
  {
    "courseCode": "course_015",
    "userId": "3995b56eeead358b66d3d034",
    "userName": "Yash W.",
    "rating": 4,
    "comment": "Really solid course on Docker. A few sections felt a bit rushed but overall I learned a ton from \"Docker Fundamentals\".",
    "createdAt": "2026-05-10T10:00:00.000Z",
    "updatedAt": "2026-05-10T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=48"
  },
  {
    "courseCode": "course_015",
    "userId": "c29bb846cfbb1fb3949fcca9",
    "userName": "Priya Y.",
    "rating": 4,
    "comment": "Really solid course on Docker. A few sections felt a bit rushed but overall I learned a ton from \"Docker Fundamentals\".",
    "createdAt": "2026-04-23T10:00:00.000Z",
    "updatedAt": "2026-04-23T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=46"
  },
  {
    "courseCode": "course_016",
    "userId": "0e173cf5cdc79d59fb59222e",
    "userName": "Rahul A.",
    "rating": 4,
    "comment": "Good structure and well-paced. The instructor explains Figma in a way that's easy to follow even for tricky topics.",
    "createdAt": "2026-06-11T10:00:00.000Z",
    "updatedAt": "2026-06-11T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=67"
  },
  {
    "courseCode": "course_016",
    "userId": "377aed2831cfe091b7e40e2a",
    "userName": "Divya R.",
    "rating": 4,
    "comment": "Good structure and well-paced. The instructor explains Figma in a way that's easy to follow even for tricky topics.",
    "createdAt": "2026-03-24T10:00:00.000Z",
    "updatedAt": "2026-03-24T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=23"
  },
  {
    "courseCode": "course_016",
    "userId": "ce71983807145bb2cb7cc804",
    "userName": "Riya A.",
    "rating": 5,
    "comment": "The projects in this course made all the difference — I actually understand Figma now instead of just copying code.",
    "createdAt": "2026-06-06T10:00:00.000Z",
    "updatedAt": "2026-06-06T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=31"
  },
  {
    "courseCode": "course_016",
    "userId": "4fda871080d6f7732248e8d2",
    "userName": "Vikram O.",
    "rating": 5,
    "comment": "The projects in this course made all the difference — I actually understand Figma now instead of just copying code.",
    "createdAt": "2026-07-03T10:00:00.000Z",
    "updatedAt": "2026-07-03T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=35"
  },
  {
    "courseCode": "course_017",
    "userId": "a8ecb612fe40a8fd44d05018",
    "userName": "Riya Y.",
    "rating": 5,
    "comment": "This is hands down one of the best courses I've taken on AI. The pacing was perfect and every concept in \"AI for Developers\" clicked immediately.",
    "createdAt": "2026-07-11T10:00:00.000Z",
    "updatedAt": "2026-07-11T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=31"
  },
  {
    "courseCode": "course_017",
    "userId": "22a5655f6a369aaa9928a9d3",
    "userName": "Neha Z.",
    "rating": 5,
    "comment": "The projects in this course made all the difference — I actually understand AI now instead of just copying code.",
    "createdAt": "2026-01-18T10:00:00.000Z",
    "updatedAt": "2026-01-18T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=59"
  },
  {
    "courseCode": "course_017",
    "userId": "a944d521d9c314ef05c7edff",
    "userName": "Ananya Z.",
    "rating": 5,
    "comment": "The projects in this course made all the difference — I actually understand AI now instead of just copying code.",
    "createdAt": "2026-05-30T10:00:00.000Z",
    "updatedAt": "2026-05-30T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=32"
  },
  {
    "courseCode": "course_017",
    "userId": "8d1c214d46408fb33eb8d831",
    "userName": "Rohan V.",
    "rating": 4,
    "comment": "Great content and clear explanations. Would've liked a bit more depth in the later modules, but still highly recommend.",
    "createdAt": "2026-02-09T10:00:00.000Z",
    "updatedAt": "2026-02-09T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=31"
  },
  {
    "courseCode": "course_018",
    "userId": "f0363edd18330dba1fd66038",
    "userName": "Meera W.",
    "rating": 5,
    "comment": "The projects in this course made all the difference — I actually understand AI now instead of just copying code.",
    "createdAt": "2026-03-21T10:00:00.000Z",
    "updatedAt": "2026-03-21T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=19"
  },
  {
    "courseCode": "course_018",
    "userId": "2d88253ab89106d095f823a8",
    "userName": "Vikram I.",
    "rating": 5,
    "comment": "This is hands down one of the best courses I've taken on AI. The pacing was perfect and every concept in \"Machine Learning Basics\" clicked immediately.",
    "createdAt": "2026-02-14T10:00:00.000Z",
    "updatedAt": "2026-02-14T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=17"
  },
  {
    "courseCode": "course_018",
    "userId": "e71b50db3ae095f2869cb795",
    "userName": "Sneha J.",
    "rating": 5,
    "comment": "Incredible depth for a course this length. I went from confused to confident with AI in just a couple of weeks.",
    "createdAt": "2026-07-30T10:00:00.000Z",
    "updatedAt": "2026-07-30T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=53"
  },
  {
    "courseCode": "course_018",
    "userId": "595836a4133c97e46e983f22",
    "userName": "Riya U.",
    "rating": 5,
    "comment": "This is hands down one of the best courses I've taken on AI. The pacing was perfect and every concept in \"Machine Learning Basics\" clicked immediately.",
    "createdAt": "2026-05-05T10:00:00.000Z",
    "updatedAt": "2026-05-05T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=10"
  },
  {
    "courseCode": "course_019",
    "userId": "dca6aa5b5051ef4505debdfd",
    "userName": "Sahil U.",
    "rating": 5,
    "comment": "Incredible depth for a course this length. I went from confused to confident with Python in just a couple of weeks.",
    "createdAt": "2026-02-21T10:00:00.000Z",
    "updatedAt": "2026-02-21T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=19"
  },
  {
    "courseCode": "course_019",
    "userId": "e7fa64ccec23fdbc5d90ff57",
    "userName": "Sneha Q.",
    "rating": 4,
    "comment": "Good structure and well-paced. The instructor explains Python in a way that's easy to follow even for tricky topics.",
    "createdAt": "2026-03-29T10:00:00.000Z",
    "updatedAt": "2026-03-29T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=54"
  },
  {
    "courseCode": "course_019",
    "userId": "6f0a5ef47c22876a987e17d5",
    "userName": "Aarav V.",
    "rating": 5,
    "comment": "The projects in this course made all the difference — I actually understand Python now instead of just copying code.",
    "createdAt": "2026-05-17T10:00:00.000Z",
    "updatedAt": "2026-05-17T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=61"
  },
  {
    "courseCode": "course_019",
    "userId": "f9a06597b023bf5245a7ca00",
    "userName": "Sahil I.",
    "rating": 5,
    "comment": "Incredible depth for a course this length. I went from confused to confident with Python in just a couple of weeks.",
    "createdAt": "2026-06-02T10:00:00.000Z",
    "updatedAt": "2026-06-02T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=68"
  },
  {
    "courseCode": "course_020",
    "userId": "90db5e535d2aa822c5d4a076",
    "userName": "Karan T.",
    "rating": 5,
    "comment": "The projects in this course made all the difference — I actually understand Clean Architecture now instead of just copying code.",
    "createdAt": "2026-02-24T10:00:00.000Z",
    "updatedAt": "2026-02-24T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=65"
  },
  {
    "courseCode": "course_020",
    "userId": "225ec7df6547d02cae891841",
    "userName": "Karan B.",
    "rating": 4,
    "comment": "Good structure and well-paced. The instructor explains Clean Architecture in a way that's easy to follow even for tricky topics.",
    "createdAt": "2026-04-10T10:00:00.000Z",
    "updatedAt": "2026-04-10T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=61"
  },
  {
    "courseCode": "course_020",
    "userId": "63b8672efb1ba80687485ce2",
    "userName": "Vikram D.",
    "rating": 5,
    "comment": "The projects in this course made all the difference — I actually understand Clean Architecture now instead of just copying code.",
    "createdAt": "2026-05-13T10:00:00.000Z",
    "updatedAt": "2026-05-13T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=53"
  },
  {
    "courseCode": "course_020",
    "userId": "02cf4f71bef5c646d048ec15",
    "userName": "Neha U.",
    "rating": 4,
    "comment": "Really solid course on Clean Architecture. A few sections felt a bit rushed but overall I learned a ton from \"Clean Architecture\".",
    "createdAt": "2026-04-04T10:00:00.000Z",
    "updatedAt": "2026-04-04T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=45"
  },
  {
    "courseCode": "course_021",
    "userId": "a4668357df8ca26dc1fc5688",
    "userName": "Ananya O.",
    "rating": 5,
    "comment": "Incredible depth for a course this length. I went from confused to confident with Node.js in just a couple of weeks.",
    "createdAt": "2026-07-16T10:00:00.000Z",
    "updatedAt": "2026-07-16T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=39"
  },
  {
    "courseCode": "course_021",
    "userId": "6deec1012347cb93ccff86a4",
    "userName": "Manish F.",
    "rating": 4,
    "comment": "Good structure and well-paced. The instructor explains Node.js in a way that's easy to follow even for tricky topics.",
    "createdAt": "2026-06-23T10:00:00.000Z",
    "updatedAt": "2026-06-23T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=2"
  },
  {
    "courseCode": "course_021",
    "userId": "5fc7494601b66a399e10c545",
    "userName": "Meera U.",
    "rating": 4,
    "comment": "Good structure and well-paced. The instructor explains Node.js in a way that's easy to follow even for tricky topics.",
    "createdAt": "2026-07-08T10:00:00.000Z",
    "updatedAt": "2026-07-08T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=23"
  },
  {
    "courseCode": "course_021",
    "userId": "1752b38c0a12f01d03b7f0cb",
    "userName": "Rohan K.",
    "rating": 5,
    "comment": "Incredible depth for a course this length. I went from confused to confident with Node.js in just a couple of weeks.",
    "createdAt": "2026-07-29T10:00:00.000Z",
    "updatedAt": "2026-07-29T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=26"
  },
  {
    "courseCode": "course_022",
    "userId": "f845a55457cb2afb35b06758",
    "userName": "Neha S.",
    "rating": 5,
    "comment": "Incredible depth for a course this length. I went from confused to confident with React in just a couple of weeks.",
    "createdAt": "2026-03-01T10:00:00.000Z",
    "updatedAt": "2026-03-01T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=16"
  },
  {
    "courseCode": "course_022",
    "userId": "97067ee5687fb50d406b6b27",
    "userName": "Vikram X.",
    "rating": 4,
    "comment": "Good structure and well-paced. The instructor explains React in a way that's easy to follow even for tricky topics.",
    "createdAt": "2026-05-03T10:00:00.000Z",
    "updatedAt": "2026-05-03T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=28"
  },
  {
    "courseCode": "course_022",
    "userId": "8c357891ea0bfa6e65fbf80b",
    "userName": "Aarav S.",
    "rating": 5,
    "comment": "Incredible depth for a course this length. I went from confused to confident with React in just a couple of weeks.",
    "createdAt": "2026-05-05T10:00:00.000Z",
    "updatedAt": "2026-05-05T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=49"
  },
  {
    "courseCode": "course_022",
    "userId": "35ec1325aaa8d54fe49a111f",
    "userName": "Aditya Q.",
    "rating": 5,
    "comment": "The projects in this course made all the difference — I actually understand React now instead of just copying code.",
    "createdAt": "2026-06-24T10:00:00.000Z",
    "updatedAt": "2026-06-24T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=52"
  },
  {
    "courseCode": "course_023",
    "userId": "ed9bee5fe251a7d3d93cc1cc",
    "userName": "Isha E.",
    "rating": 5,
    "comment": "This is hands down one of the best courses I've taken on AWS. The pacing was perfect and every concept in \"AWS for Beginners\" clicked immediately.",
    "createdAt": "2026-03-21T10:00:00.000Z",
    "updatedAt": "2026-03-21T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=19"
  },
  {
    "courseCode": "course_023",
    "userId": "f30fd476ae58a25218cb706a",
    "userName": "Isha O.",
    "rating": 4,
    "comment": "Really solid course on AWS. A few sections felt a bit rushed but overall I learned a ton from \"AWS for Beginners\".",
    "createdAt": "2026-05-03T10:00:00.000Z",
    "updatedAt": "2026-05-03T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=67"
  },
  {
    "courseCode": "course_023",
    "userId": "26e61f882dfeef91dbc0960b",
    "userName": "Neha D.",
    "rating": 5,
    "comment": "The projects in this course made all the difference — I actually understand AWS now instead of just copying code.",
    "createdAt": "2026-04-11T10:00:00.000Z",
    "updatedAt": "2026-04-11T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=1"
  },
  {
    "courseCode": "course_023",
    "userId": "4199bbb4a35d63bb6a931737",
    "userName": "Meera S.",
    "rating": 5,
    "comment": "This is hands down one of the best courses I've taken on AWS. The pacing was perfect and every concept in \"AWS for Beginners\" clicked immediately.",
    "createdAt": "2026-02-13T10:00:00.000Z",
    "updatedAt": "2026-02-13T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=26"
  },
  {
    "courseCode": "course_024",
    "userId": "9fe2e85d484a28082e3799f8",
    "userName": "Tanvi Z.",
    "rating": 4,
    "comment": "Good structure and well-paced. The instructor explains Docker in a way that's easy to follow even for tricky topics.",
    "createdAt": "2026-07-07T10:00:00.000Z",
    "updatedAt": "2026-07-07T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=42"
  },
  {
    "courseCode": "course_024",
    "userId": "fb54e88ce2df88012943072c",
    "userName": "Rohan H.",
    "rating": 4,
    "comment": "Good structure and well-paced. The instructor explains Docker in a way that's easy to follow even for tricky topics.",
    "createdAt": "2026-01-21T10:00:00.000Z",
    "updatedAt": "2026-01-21T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=31"
  },
  {
    "courseCode": "course_024",
    "userId": "d6f0d627aa84f9b803b35e97",
    "userName": "Sahil O.",
    "rating": 4,
    "comment": "Great content and clear explanations. Would've liked a bit more depth in the later modules, but still highly recommend.",
    "createdAt": "2026-07-15T10:00:00.000Z",
    "updatedAt": "2026-07-15T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=7"
  },
  {
    "courseCode": "course_024",
    "userId": "6100b547eab28094a76153c8",
    "userName": "Isha C.",
    "rating": 4,
    "comment": "Really solid course on Docker. A few sections felt a bit rushed but overall I learned a ton from \"CI/CD with GitHub Actions\".",
    "createdAt": "2026-04-13T10:00:00.000Z",
    "updatedAt": "2026-04-13T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=70"
  },
  {
    "courseCode": "course_025",
    "userId": "b7487054096cb2b1f1258595",
    "userName": "Priya D.",
    "rating": 5,
    "comment": "The projects in this course made all the difference — I actually understand React Native now instead of just copying code.",
    "createdAt": "2026-05-01T10:00:00.000Z",
    "updatedAt": "2026-05-01T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=32"
  },
  {
    "courseCode": "course_025",
    "userId": "bcf280b81a298bebc79ba9ef",
    "userName": "Sneha V.",
    "rating": 5,
    "comment": "The projects in this course made all the difference — I actually understand React Native now instead of just copying code.",
    "createdAt": "2026-05-01T10:00:00.000Z",
    "updatedAt": "2026-05-01T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=62"
  },
  {
    "courseCode": "course_025",
    "userId": "8a596c55a5e3d906a65ad2fb",
    "userName": "Sneha A.",
    "rating": 5,
    "comment": "The projects in this course made all the difference — I actually understand React Native now instead of just copying code.",
    "createdAt": "2026-02-22T10:00:00.000Z",
    "updatedAt": "2026-02-22T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=42"
  },
  {
    "courseCode": "course_025",
    "userId": "7ae2e9e2a4a88e9255951265",
    "userName": "Neha U.",
    "rating": 5,
    "comment": "The projects in this course made all the difference — I actually understand React Native now instead of just copying code.",
    "createdAt": "2026-06-30T10:00:00.000Z",
    "updatedAt": "2026-06-30T10:00:00.000Z",
    "userImage": "https://i.pravatar.cc/150?img=33"
  }
];

module.exports = reviews;