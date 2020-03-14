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
          mainPhoto: 'https://images.unsplash.com/photo-1517896470636-9242d3a38392?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1268&q=80',
          photos: JSON.stringify([
            'https://tramper.nz/imgcache/8/8763-feature.jpg',
            'https://www.nstc.org.nz/resources/Pictures/Te%20Henga1.jpg',
            'https://www.nstc.org.nz/resources/Pictures/Te%20Henga8.jpg',
            'https://tomhike.com/wp-content/gallery/goldie-bush/IMG_0178.jpg'
          ]),
          routeImage: 'http://i.imgur.com/tudbIvd.jpg',
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
          mainPhoto: 'https://2.bp.blogspot.com/-2egh_2WODWM/UUBHHx9mqiI/AAAAAAAAht4/vUyv-hZoa3w/s1600/march+pasifika+163.jpg',
          photos: JSON.stringify([
            'https://media2.trover.com/T/5aab8b8385f4f4ae1100603e/fixedw_large_4x.jpg',
            'https://www.healthykids.org.nz/sites/default/files/styles/scale_width_media/public/2018-06/Western%20Springs%20Lakeside%20Park%20Auckland-cropped.jpg?itok=1BuUknQm',
            'https://fastly.4sqi.net/img/general/558x200/582947_fjPVGAWcr82dXboTVM2PMURTsl4asGjAGGEFHQlrxNI.jpg',
            'https://www.aucklandcouncil.govt.nz/parks-recreation/get-outdoors/aklpaths/AKLPathImages/147_WesternSpringsLoopPath05.jpg?RenditionID=8'
          ]),
          routeImage: 'images/westernspringspath.png',
          distance: '1.80Kms',
          elevationGain: 9999,
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
          mainPhoto: 'https://www.doc.govt.nz/thumbs/hero/contentassets/70d774979b3440de8a37068e7a2a8d9e/te-henga-walkway-hero.jpg',
          photos: JSON.stringify([
            'https://www.newzealand.com/assets/Tourism-NZ/Auckland/141d0c557d/img-1536202424-2494-10947-p-18AB2FE5-AD39-F1FE-E87423DF59CE5681-2544003__FocalPointCropWzQ0MCwxMjgwLDYwLDM2LDc1LCJqcGciLDY1LDIuNV0.jpg',
            'https://i0.wp.com/thethingis.co.nz/wp-content/uploads/2017/03/p638_orig.png?fit=1024%2C707',
            'https://nztramper.com/wp-content/gallery/te-henga-walkway/te-henga-walkway-sign.jpg',
            'https://nzfrenzynorth.files.wordpress.com/2013/01/view-over-bethells-oneill-bay-from-raetahinga-point-viewpoint-on-the-te-henga-walkway.jpg'
          ]),
          routeImage: 'images/tehengawalkway.png',
          distance: '10.0Kms',
          elevationGain: 572,
          timeTaken: '3 Hours',
          difficulty: 'Intermediate',
          Surface: 'traverses coastal cliffs and is uneven and muddy in places',
          description: 'Te Henga Walkway is a 10.0 kilometer lightly trafficked point-to-point trail located near Henderson, Auckland, New Zealand that offers the chance to see wildlife and is rated as moderate. The trail is primarily used for hiking, walking, and nature trips and is accessible year-round.'

        }
      ])
    })
}
