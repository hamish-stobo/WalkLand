exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('walks').del()
    .then(function () {
      // Inserts seed entries
      return knex('walks').insert([
        {
          id: 1,
          title: 'Goldie\'s Bushwalk',
          latitude: -36.845928,
          longitude: 174.474207,
          location: 'Muriwai',
          mainPhoto: 'https://cdn-assets.alltrails.com/uploads/photo/image/18238463/extra_large_402813450dbfc0f7a66096692f0f543c.jpg',
          photos: JSON.stringify([
            'https://cdn-assets.alltrails.com/uploads/photo/image/18238463/extra_large_402813450dbfc0f7a66096692f0f543c.jpg',
            'https://cdn-assets.alltrails.com/uploads/photo/image/22578955/extra_large_074a071686927417546e8646bff479ed.jpg',
            'https://cdn-assets.alltrails.com/uploads/photo/image/21824864/extra_large_f1eb12e2bbed6d49dff05753dcf6d83c.jpg',
            'https://cdn-assets.alltrails.com/uploads/photo/image/25533958/extra_large_ef609dc231603d2ecdfac3e4a30beefe.jpg'
          ]),
          routeImage: 'images/GOLDIES BUSH.png',
          distance: '4.5Kms',
          elevationGain: 200,
          timeTaken: '2 Hours',
          difficulty: 'Intermediate',
          Surface: 'There are numerous stream crossings',
          description: 'Goldies Bush and Mokoroa Falls Loop is a 6.0 kilometer lightly trafficked loop trail located near Auckland, Auckland, New Zealand that features a waterfall and is rated as moderate. The trail is primarily used for hiking, walking, and nature trips.'
        },
        { id: 2,
          title: 'Western Springs',
          latitude: -36.866598,
          longitude: 174.729742,
          location: 'Western Springs',
          mainPhoto: 'https://www.freewalks.nz/sites/www.freewalks.nz/files/styles/full__desktop/public/images/tracks/western_spring_1.jpg?itok=T8GWhSxC',
          photos: JSON.stringify([
            'https://media-cdn.tripadvisor.com/media/photo-o/0d/31/33/2f/20161004-134443-largejpg.jpg',
            'https://media-cdn.tripadvisor.com/media/photo-o/12/15/de/65/the-japanese-garden.jpg',
            'https://media-cdn.tripadvisor.com/media/photo-o/10/b1/0e/a4/the-park.jpg',
            'https://media-cdn.tripadvisor.com/media/photo-o/0f/ae/cf/34/park.jpg'
          ]),
          routeImage: 'images/WESTERN SPRINGS.png',
          distance: '1.80Kms',
          elevationGain: 345,
          timeTaken: '30 Minutes',
          difficulty: 'beginner',
          Surface: 'Concrete foot path and large grass lawns to walk around on',
          description: 'Western Springs Park Walk is a very easy 1.8k walk that will take you around 30 mins to complete. Highlights of the Western Springs Park Walk are the eels and the free tram ride around Western Spring Park. It surrounds a natural spring-fed lake, one of Auckland\'s early water supplies.'
        },
        {
          id: 3,
          title: 'Te Henga Walkway',
          latitude: -36.884323,
          longitude: 174.450309,
          location: 'Muriwai',
          mainPhoto: 'https://cdn-assets.alltrails.com/uploads/photo/image/25384768/extra_large_84b5c992579e8631d589e687afa57e79.jpg',
          photos: JSON.stringify([
            'https://cdn-assets.alltrails.com/uploads/photo/image/25384768/extra_large_84b5c992579e8631d589e687afa57e79.jpg',
            'https://cdn-assets.alltrails.com/uploads/photo/image/24822144/extra_large_9a8f240397d49ba5dcafca4c67de0475.jpg',
            'https://cdn-assets.alltrails.com/uploads/photo/image/24822146/extra_large_34d946fc5cfbf5867f596498ef429f64.jpg',
            'https://cdn-assets.alltrails.com/uploads/photo/image/23301390/extra_large_91ce39551d95384765984d9e03a99ef2.jpg'
          ]),
          routeImage: 'images/the-nga-walkway.png',
          distance: '10.0Kms',
          elevationGain: 572,
          timeTaken: '3 Hours',
          difficulty: 'Intermediate',
          Surface: 'traverses coastal cliffs and is uneven and muddy in places',
          description: 'Te Henga Walkway is a 10.0 kilometer lightly trafficked point-to-point trail located near Henderson, Auckland, New Zealand that offers the chance to see wildlife and is rated as moderate. The trail is primarily used for hiking, walking, and nature trips and is accessible year-round.'

        },
        {
          id: 4,
          title: 'Rangitoto Summit Track',
          latitude: -36.806138,
          longitude: 174.861599,
          location: 'Rangitoto',
          mainPhoto: 'https://cdn-assets.alltrails.com/uploads/photo/image/21926900/extra_large_e64b9e52d441fddf9b98856a5c16fbaa.jpg',
          photos: JSON.stringify([
            'https://cdn-assets.alltrails.com/uploads/photo/image/21926900/extra_large_e64b9e52d441fddf9b98856a5c16fbaa.jpg',
            'https://cdn-assets.alltrails.com/uploads/photo/image/22796037/extra_large_523a4220d73cbdd686a3cbc42c32f2d0.jpg',
            'https://cdn-assets.alltrails.com/uploads/photo/image/25474412/extra_large_8cef49974c57ecdbda84e280f8053073.jpg',
            'https://media-cdn.tripadvisor.com/media/photo-m/1280/16/1b/93/d7/photo0jpg.jpg'
          ]),
          routeImage: 'images/rangitoto.png',
          distance: '3.10Kms',
          elevationGain: 1442,
          timeTaken: '1 Hour',
          difficulty: 'Easy',
          Surface: 'Formed track – lots of loose, fine scoria',
          description: 'One of Auckland’s iconic landmarks, Rangitoto Island is an amazing day out. Arrive by ferry or private boat and explore, The 360-degree views of Auckland and the Hauraki Gulf from the summit are spectacular. There are plenty of other walking tracks if you are keen to explore further and short lava caves that are worth investigating.'
        },
        {
          id: 5,
          title: 'Maungauika/North Head Historic Walk',
          latitude: -36.829496,
          longitude: 174.8128587,
          location: 'Devonport',
          mainPhoto: 'https://www.freewalks.nz/sites/www.freewalks.nz/files/styles/full__desktop/public/images/tracks/8_devon-2.jpg?itok=qZxFMw1W',
          photos: JSON.stringify([
            'https://www.freewalks.nz/sites/www.freewalks.nz/files/styles/full__desktop/public/images/tracks/8_devon-2.jpg?itok=qZxFMw1W',
            'https://nzplaces.nz/media/17640/maungauika-panorama-1.jpg',
            'https://www.freewalks.nz/sites/www.freewalks.nz/files/styles/full__desktop/public/images/tracks/7_devon-2.jpg?itok=Q7GBYsC9'
          ]),
          routeImage: 'images/MAUNGAYIKA.png',
          distance: '3.0Kms',
          elevationGain: 675,
          timeTaken: '1 Hour',
          difficulty: 'Easy',
          Surface: 'Paths guide you along the walk',
          description: 'The North Head Historical Reserve is considered to be the most significant historical coastal defence site in New Zealand and receives a significant number of visitors each year. The location has commanding views over the Hauraki Gulf and inner harbour. First used by Maori for defence purposes the site was one of three cone pa in the Devonport area.'
        },
        {
          id: 6,
          title: 'Motutapu Walkway',
          latitude: -36.7538775,
          longitude: 174.9138084,
          location: 'Auckland',
          mainPhoto: 'https://tramper.nz/imgcache/10/10638-feature@2x.jpg',
          photos: JSON.stringify([
            'https://tramper.nz/imgcache/10/10638-feature@2x.jpg',
            'https://1.bp.blogspot.com/-XkYic0laqAg/Uok_2nUTN9I/AAAAAAAABlE/-gCiFgDjBWE/s1600/IMAG0205.jpg',
            'https://1.bp.blogspot.com/-mWucUwZfdag/UolLGuO2NoI/AAAAAAAABl4/t86IXSy1tnI/s1600/IMAG0218.jpg',
            'https://2.bp.blogspot.com/-8wcIxnB1E94/UolHkKLVP2I/AAAAAAAABlY/PH5PJdxJ5rY/s1600/IMAG0215.jpg'
          ]),
          routeImage: 'images/Motutapu Walkway.png',
          distance: '4.50Kms',
          elevationGain: 346,
          timeTaken: '1.50 Hours',
          difficulty: 'Intermediate',
          Surface: 'Three quarters of the walk is on volcanic rock road and tracks',
          description: 'The Motutapu Walkway starts at the southern end of Home Bay. Poles mark the track across farmland, climbing to the island’s 120 m trig station and giving panoramic views of the Hauraki Gulf. The track passes an area of native bush planted by volunteers in 2002 and 2003. '
        },
        {
          id: 7,
          title: 'One Tree Hill Walk',
          latitude: -36.899982,
          longitude: 174.7745785,
          location: 'Auckland',
          mainPhoto: 'https://cdn-assets.alltrails.com/uploads/photo/image/24376250/extra_large_a242781d88efc4bf8935228bd44da3be.jpg',
          photos: JSON.stringify([
            'https://cdn-assets.alltrails.com/uploads/photo/image/24376255/extra_large_3fc2dc7ee44ce18cdf1f59d8b58ff2f3.jpg',
            'https://cdn-assets.alltrails.com/uploads/photo/image/24376250/extra_large_a242781d88efc4bf8935228bd44da3be.jpg',
            'https://cdn-assets.alltrails.com/uploads/photo/image/24376264/extra_large_f0244cbfe36b3061e1b26745118a59ba.jpg',
            'https://cdn-assets.alltrails.com/uploads/photo/image/24376262/extra_large_e2b1ca5437ff999f711d46b043337912.jpg'
          ]),
          routeImage: 'images/ONE TREEHILL.png',
          distance: '3.50Kms',
          elevationGain: 231,
          timeTaken: '2.0 Hours',
          difficulty: 'Easy',
          Surface: 'Grass surface that has surrounding paths',
          description: 'Easy 2 hour round trip walk to One Tree Hill in Auckland. Excellent 360 views over Auckland from the top of One Tree Hill. Unfortunately the \'one tree\' is now no longer and is only a stump. No car access to the top of One Tree Hill anymore.'
        },
        {
          id: 8,
          title: 'Kitekite Falls',
          latitude: -36.96216,
          longitude: 174.48242,
          location: 'Auckland',
          mainPhoto: 'https://cdn-assets.alltrails.com/uploads/photo/image/22828781/extra_large_28431b706fa28a1162c958488bf2eccb.jpg',
          photos: JSON.stringify([
            'https://cdn-assets.alltrails.com/uploads/photo/image/22539648/extra_large_884ee0a36c380c637d1befde2bb40803.jpg',
            'https://cdn-assets.alltrails.com/uploads/photo/image/22609975/extra_large_571cf3cd3949d05863b7a16d0acc371c.jpg',
            'https://cdn-assets.alltrails.com/uploads/photo/image/23337800/extra_large_6fcc17deebdc4063b442f52d99e5da1f.jpg',
            'https://cdn-assets.alltrails.com/uploads/photo/image/22539647/extra_large_26608da7a5ec3f2cd4be27c1178fa9e2.jpg'
          ]),
          routeImage: 'images/PIHA WALKWAY.png',
          distance: '3.5Kms',
          elevationGain: 89,
          timeTaken: '1.5 Hours',
          difficulty: 'Easy',
          Surface: 'bush track that can become slippery',
          description: 'Kitekite Falls Hike is a 3.5 kilometer moderately trafficked out and back trail located near Auckland, Auckland, New Zealand that features a waterfall and is good for all skill levels. The trail is primarily used for hiking, walking, and nature trips and is accessible year-round.'
        },
        {
          id: 9,
          title: 'Orakei Basin Walkway',
          latitude: -36.8677131,
          longitude: 174.8167634,
          location: 'Orakei',
          mainPhoto: 'https://cdn-assets.alltrails.com/uploads/photo/image/20660748/extra_large_66be6172df679b4a88f6f4f8f993268c.jpg',
          photos: JSON.stringify([
            'https://cdn-assets.alltrails.com/uploads/photo/image/24388360/extra_large_4b7eee044b27f08ecd7073f517941305.jpg',
            'https://cdn-assets.alltrails.com/uploads/photo/image/22442056/extra_large_2703eb4194548f7d5ec4fd1a86cccc8e.jpg',
            'https://cdn-assets.alltrails.com/uploads/photo/image/22442045/extra_large_512b1bff9fffb8bb3b910b0f7420fc7d.jpg',
            'https://cdn-assets.alltrails.com/uploads/photo/image/21988151/extra_large_d14889b522a65d7c4eeb4860467f03a6.jpg'
          ]),
          routeImage: 'images/ORAKEI WALKWAY.png',
          distance: '3.1Kms',
          elevationGain: 24,
          timeTaken: '1 Hour',
          difficulty: 'Easy',
          Surface: 'wooden path',
          description: 'Orakei Basin Walkway is a 3.1 kilometer moderately trafficked loop trail located near Auckland, Auckland, New Zealand that features a lake and is good for all skill levels. The trail is primarily used for walking, running, nature trips, and bird watching and is accessible year-round.'
        },
        {
          id: 10,
          title: 'Regional Park Coastal Walk',
          latitude: -36.6889338,
          longitude: 174.7493937,
          location: 'Long Bay',
          mainPhoto: 'https://www.freewalks.nz/sites/www.freewalks.nz/files/styles/full__desktop/public/images/tracks/nature_walk_at_long_bay_regional_park_in_auckland_2.jpg?itok=r_mqx9HZ',
          photos: JSON.stringify([
            'https://www.freewalks.nz/sites/www.freewalks.nz/files/styles/full__desktop/public/images/tracks/nature_walk_at_long_bay_regional_park_in_auckland_3.jpg?itok=PCpF3KGS',
            'https://www.freewalks.nz/sites/www.freewalks.nz/files/styles/full__desktop/public/images/tracks/start_of_the_long_bay_regional_park_coastal_walk_1_0.jpg?itok=AR4_A1Ti',
            'https://www.freewalks.nz/sites/www.freewalks.nz/files/styles/full__desktop/public/images/tracks/grannys_bay_beach_on_the_long_bay_regional_park_coastal_track_in_auckland_3.jpg?itok=c95OICx4',
            'https://www.freewalks.nz/sites/www.freewalks.nz/files/styles/full__desktop/public/images/tracks/pohutukawa_bay_beach_on_the_long_bay_regional_park_coastal_track_walk_in_auckland_3.jpg?itok=Yn9UJw5w'
        ]),
          routeImage: 'images/Regional Park Coastal Walk.png',
          distance: '3.1Kms',
          elevationGain: 24,
          timeTaken: '1 Hour',
          difficulty: 'Easy',
          Surface: 'wooden path',
          description: 'Orakei Basin Walkway is a 3.1 kilometer moderately trafficked loop trail located near Auckland, Auckland, New Zealand that features a lake and is good for all skill levels. The trail is primarily used for walking, running, nature trips, and bird watching and is accessible year-round.'
        }
      ])
    })
}

