import React from 'react';
import Masonry from 'react-native-masonry-list';

const MasonryImage = ()=>{
  return (
  <Masonry
  sorted // optional - Default: false
  columns={3} // optional - Default: 2
  images={[
    {source: require("../../auth/assets/masonryImages/image1.png"), dimensions: { width: 400, height: 300 }},
    {source: require("../../auth/assets/masonryImages/image2.png"), dimensions: { width: 400, height: 400 }},
    {source: require("../../auth/assets/masonryImages/image3.png"), dimensions: { width: 400, height: 500 }},
    {source: require("../../auth/assets/masonryImages/image4.png"), dimensions: { width: 400, height: 600 }},
    {source: require("../../auth/assets/masonryImages/image5.png"), dimensions: { width: 400, height: 700 }},
    {source: require("../../auth/assets/masonryImages/image6.png"), dimensions: { width: 400, height: 300 }},
    {source: require("../../auth/assets/masonryImages/image7.png"), dimensions: { width: 400, height: 100 }},
    {source: require("../../auth/assets/masonryImages/image8.png"), dimensions: { width: 400, height: 500 }},
    {source: require("../../auth/assets/masonryImages/image9.png"), dimensions: { width: 400, height: 700 }},
    { uri: 'https://stmedia.stimg.co/ctyp-nordic-state-fair-new.jpg?w=800', dimensions: { width: 400, height: 300 } }, 
    { uri: 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/41257483/1/?bust=1521999528&width=720' ,  dimensions: { width: 600, height: 200 } },
    { uri: 'https://drop.ndtv.com/albums/COOKS/pasta-vegetarian/pastaveg_640x480.jpg',  dimensions: { width: 200, height: 300 }  },
    { uri: 'https://drop.ndtv.com/albums/COOKS/pasta-vegetarian/pastaveg_640x480.jpg',  dimensions: { width: 400, height: 200 } },
    { uri: 'https://www.medicalnewstoday.com/content/images/articles/314/314819/delicious-buffet-foods.jpg',  dimensions: { width: 500, height: 400 } },
    { uri: 'https://drop.ndtv.com/albums/COOKS/pasta-vegetarian/pastaveg_640x480.jpg', dimensions: { width: 400, height: 400 } }, 
    { uri: 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/41257483/1/?bust=1521999528&width=720' ,  dimensions: { width: 600, height: 200 } },
    { uri: 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/41257483/1/?bust=1521999528&width=720',  dimensions: { width: 200, height: 100 }  },
    { uri: 'https://drop.ndtv.com/albums/COOKS/pasta-vegetarian/pastaveg_640x480.jpg',  dimensions: { width: 400, height: 200 } },
    { uri: 'https://www.medicalnewstoday.com/content/images/articles/314/314819/delicious-buffet-foods.jpg',  dimensions: { width: 500, height: 100 } },
    { uri: 'https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg', dimensions: { width: 400, height: 300 } }, 
    { uri: 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/41257483/1/?bust=1521999528&width=720' ,  dimensions: { width: 600, height: 200 } },
    { uri: 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/41257483/1/?bust=1521999528&width=720',  dimensions: { width: 200, height: 300 }  },
    { uri: 'https://drop.ndtv.com/albums/COOKS/pasta-vegetarian/pastaveg_640x480.jpg',  dimensions: { width: 400, height: 200 } },
    { uri: 'https://www.medicalnewstoday.com/content/images/articles/314/314819/delicious-buffet-foods.jpg',  dimensions: { width: 500, height: 400 } },
    { uri: 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg', dimensions: { width: 400, height: 400 } }, 
    { uri: 'https://assets.wordpress.envato-static.com/uploads/2017/08/tropical-PS53BSA.jpg' ,  dimensions: { width: 600, height: 200 } },
    { uri: 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/41257483/1/?bust=1521999528&width=720',  dimensions: { width: 200, height: 100 }  }
     ]
    }
    />
  );
  }

export default MasonryImage;