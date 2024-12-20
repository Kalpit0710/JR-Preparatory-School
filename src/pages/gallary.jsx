import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import image1 from '../assets/gallery/1.jpg'
import image2 from '../assets/gallery/2.jpg'
import image3 from '../assets/gallery/3.jpg'
import image4 from '../assets/gallery/4.jpg'
import image5 from '../assets/gallery/5.jpg'
import image6 from '../assets/gallery/6.jpg'
import image7 from '../assets/gallery/7.jpg'
import image8 from '../assets/gallery/8.jpg'
import image9 from '../assets/gallery/9.jpg'
import image10 from '../assets/gallery/10.jpg'
import image11 from '../assets/gallery/11.jpg'
import image12 from '../assets/gallery/12.jpg'
import image17 from '../assets/gallery/17.jpg'
import image18 from '../assets/gallery/18.jpg'
import image19 from '../assets/gallery/19.jpg'
import image20 from '../assets/gallery/20.jpg'
import image21 from '../assets/gallery/21.jpg'
import i1 from '../assets/gallery/Annual/0A6A6866.JPG'
import i2 from '../assets/gallery/Annual/0A6A6867.JPG'
import i3 from '../assets/gallery/Annual/0A6A6872.JPG'
import i4 from '../assets/gallery/Annual/0A6A6888.JPG'
import i5 from '../assets/gallery/Annual/0A6A6906.JPG'
import i6 from '../assets/gallery/Annual/0A6A6912.JPG'
import i7 from '../assets/gallery/Annual/0A6A6918.JPG'
import i8 from '../assets/gallery/Annual/0A6A6931.JPG'
import i9 from '../assets/gallery/Annual/0A6A6945.JPG'
import i10 from '../assets/gallery/Annual/0A6A6947.JPG'
import i11 from '../assets/gallery/Annual/0A6A6948.JPG'
import i12 from '../assets/gallery/Annual/0A6A6961.JPG'
import i13 from '../assets/gallery/Annual/0A6A6964.JPG'
import i14 from '../assets/gallery/Annual/0A6A6967.JPG'
import i15 from '../assets/gallery/Annual/0A6A6968.JPG'
import i16 from '../assets/gallery/Annual/0A6A7015.JPG'
import i17 from '../assets/gallery/Annual/0A6A7017.JPG'
import i18 from '../assets/gallery/Annual/0A6A7025.JPG'
import i19 from '../assets/gallery/Annual/0A6A7031.JPG'
import i20 from '../assets/gallery/Annual/0A6A7039.JPG'
import i21 from '../assets/gallery/Annual/0A6A7044.JPG'
import i22 from '../assets/gallery/Annual/0A6A7050.JPG'
import i23 from '../assets/gallery/Annual/0A6A7052.JPG'
import i24 from '../assets/gallery/Annual/0A6A7065.JPG'
import i25 from '../assets/gallery/Annual/0A6A7079.JPG'
import i26 from '../assets/gallery/Annual/0A6A7093.JPG'
import i27 from '../assets/gallery/Annual/0A6A7096.JPG'
import i28 from '../assets/gallery/Annual/0A6A7132.JPG'
import i29 from '../assets/gallery/Annual/0A6A7136.JPG'
import i30 from '../assets/gallery/Annual/0A6A7138.JPG'
import i31 from '../assets/gallery/Annual/0A6A7139.JPG'
import i32 from '../assets/gallery/Annual/0A6A7141.JPG'
import i33 from '../assets/gallery/Annual/0A6A7142.JPG'
import i34 from '../assets/gallery/Annual/0A6A7143.JPG'
import i35 from '../assets/gallery/Annual/0A6A7144.JPG'
import i36 from '../assets/gallery/Annual/0A6A7155.JPG'
import i37 from '../assets/gallery/Annual/0A6A7172.JPG'
import i38 from '../assets/gallery/Annual/0A6A7187.JPG'
import i39 from '../assets/gallery/Annual/0A6A7191.JPG'
import i40 from '../assets/gallery/Annual/0A6A7200.JPG'
import i41 from '../assets/gallery/Annual/0A6A7215.JPG'
import i42 from '../assets/gallery/Annual/0A6A7236.JPG'
import i43 from '../assets/gallery/Annual/0A6A7246.JPG'
import i44 from '../assets/gallery/Annual/0A6A7250.JPG'
import i45 from '../assets/gallery/Annual/0A6A7251.JPG'
import i46 from '../assets/gallery/Annual/0A6A7252.JPG'
import i47 from '../assets/gallery/Annual/0A6A7254.JPG'
import i48 from '../assets/gallery/Annual/0A6A7255.JPG'
import i49 from '../assets/gallery/Annual/0A6A7258.JPG'
import i50 from '../assets/gallery/Annual/0A6A7260.JPG'
import i51 from '../assets/gallery/Annual/0A6A7263.JPG'
import i52 from '../assets/gallery/Annual/0A6A7325.JPG'
import i53 from '../assets/gallery/Annual/0A6A7326.JPG'
import i54 from '../assets/gallery/Annual/0A6A7330.JPG'
import i55 from '../assets/gallery/Annual/0A6A7266.JPG'
import i56 from '../assets/gallery/Annual/0A6A7279.JPG'
import i57 from '../assets/gallery/Annual/0A6A7288.JPG'
import i58 from '../assets/gallery/Annual/0A6A7300.JPG'
import i59 from '../assets/gallery/Annual/0A6A7321.JPG'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = ['all', 'campus', 'events', 'activities', 'sports','Achievers','Annual Function'];
  
  const images = [
    {
      id: 1,
      category: 'campus',
      src: `${image6}`,
      title: 'Modern Campus Building',
      description: 'Our state-of-the-art main campus building'
    },
    {
      id: 2,
      category: 'events',
      src: `${image2}`,
      title: 'Annual Day Celebration',
      description: 'Students performing at the annual day function'
    },
    {
      id: 3,
      category: 'activities',
      src: `${image1}`,
      title: 'Science Exhibition',
      description: 'Students showcasing their science projects'
    },
    {
      id: 4,
      category: 'sports',
      src: `${image18}`,
      title: 'Sports Meet',
      description: 'Annual sports competition'
    },
    {
      id: 5,
      category: 'campus',
      src: `${image7}`,
      title: 'Library',
      description: 'Our well-stocked modern library'
    },
    {
      id: 6,
      category: 'events',
      src: `${image4}`,
      title: 'Graduation Day',
      description: 'Celebrating student achievements'
    },
    {
      id: 7,
      category: 'activities',
      src: `${image3}`,
      title: 'Art Workshop',
      description: 'Students exploring their creativity'
    },
    {
      id: 8,
      category: 'sports',
      src: `${image17}`,
      title: 'Basketball Court',
      description: 'Professional basketball court facility'
    },
    {
      id: 9,
      category: 'events',
      src: `${image5}`,
      title: 'Graduation Day',
      description: 'Celebrating student achievements'
    },
    {
      id: 10,
      category: 'events',
      src: `${image8}`,
      title: 'Poster Making',
      description: 'Students in poster making competrtion'
    },
    {
      id: 11,
      category: 'activities',
      src: `${image9}`,
      title: 'Ramleela competetion',
      description: 'Students in competrtion'
    },
    {
      id: 12,
      category: 'events',
      src: `${image10}`,
      title: 'Summer Camp',
      description: 'Students in summer camp'
    },
    {
      id: 13,
      category: 'campus',
      src: `${image11}`,
      title: 'Student of school',
      description: 'Students of school'
    },
    {
      id: 14,
      category: 'campus',
      src: `${image12}`,
      title: 'Student of school',
      description: 'Students of school'
    },
    {
      id: 15,
      category: 'Achievers',
      src: `${image19}`,
      title: 'Achievers of school',
      description: 'Acheviers of school'
    },
    {
      id: 16,
      category: 'Achievers',
      src: `${image20}`,
      title: 'Achievers of school',
      description: 'Acheviers of school'
    },
    {
      id: 17,
      category: 'Achievers',
      src: `${image21}`,
      title: 'Achievers of school',
      description: 'Acheviers of school'
    },
    {
      id: 72,
      category: 'Annual Function',
      src: `${i59}`,
      title: 'Staff and Students',
      description: 'Staff and Students of School'
    },
    {
      id: 18,
      category: 'Annual Function',
      src: `${i1}`,
      title: 'Lamp Lightening',
      description: 'Lamp Lightening of Annual Function'
    },
    {
      id: 19,
      category: 'Annual Function',
      src: `${i2}`,
      title: 'Lamp Lightening',
      description: 'Lamp Lightening of Annual Function'
    },
    {
      id: 20,
      category: 'Annual Function',
      src: `${i3}`,
      title: 'Ganesh Vandhana',
      description: 'Ganesh Vandhana at Annual Function'
    },
    {
      id: 21,
      category: 'Annual Function',
      src: `${i4}`,
      title: 'Welcome Dance',
      description: 'Welcome Dance at Annual Function'
    },
    {
      id: 22,
      category: 'Annual Function',
      src: `${i5}`,
      title: 'Joker Dance',
      description: 'Joker Dance at Annual Function'
    },
    {
      id: 23,
      category: 'Annual Function',
      src: `${i6}`,
      title: 'Joker Dance',
      description: 'Joker Dance at Annual Function'
    },
    {
      id: 24,
      category: 'Annual Function',
      src: `${i7}`,
      title: 'Chief Guest',
      description: 'Chief Guest at Annual Function'
    },
    {
      id: 25,
      category: 'Annual Function',
      src: `${i8}`,
      title: 'School Nahi Jana',
      description: 'Dance Performance at Annual Function'
    },
    {
      id: 26,
      category: 'Annual Function',
      src: `${i9}`,
      title: 'School Nahi Jana',
      description: 'Dance Performance at Annual Function'
    },
    {
      id: 27,
      category: 'Annual Function',
      src: `${i10}`,
      title: 'Tribute to Mothers',
      description: 'Dance Performance at Annual Function'
    },
    {
      id: 28,
      category: 'Annual Function',
      src: `${i11}`,
      title: 'Tribute to Mothers',
      description: 'Dance Performance at Annual Function'
    },
    {
      id: 29,
      category: 'Annual Function',
      src: `${i12}`,
      title: 'Tribute to Mothers',
      description: 'Dance Performance at Annual Function'
    },
    {
      id: 27,
      category: 'Annual Function',
      src: `${i13}`,
      title: 'Guests',
      description: 'Guests at Annual Function'
    },
    {
      id: 28,
      category: 'Annual Function',
      src: `${i14}`,
      title: 'Parents',
      description: 'Parents at Annual Function'
    },
    {
      id: 29,
      category: 'Annual Function',
      src: `${i15}`,
      title: 'Parents',
      description: 'Parents at Annual Function'
    },
    {
      id: 30,
      category: 'Annual Function',
      src: `${i16}`,
      title: 'No to Social Media',
      description: 'Dance Performance at Annual Function'
    },
    {
      id: 31,
      category: 'Annual Function',
      src: `${i17}`,
      title: 'Guests',
      description: 'Guests at Annual Function'
    },
    {
      id: 31,
      category: 'Annual Function',
      src: `${i18}`,
      title: 'Dance Performance',
      description: 'Dance Performance at Annual Function'
    },
    {
      id: 32,
      category: 'Annual Function',
      src: `${i19}`,
      title: 'Dance Performance',
      description: 'Dance Performance at Annual Function'
    },
    {
      id: 33,
      category: 'Annual Function',
      src: `${i20}`,
      title: 'Click with Guests',
      description: 'Dance Performance at Annual Function'
    },
    {
      id: 34,
      category: 'Annual Function',
      src: `${i21}`,
      title: 'Principal Speech',
      description: 'Speech by Principal at Annual Function'
    },
    {
      id: 35,
      category: 'Annual Function',
      src: `${i22}`,
      title: 'Anchor',
      description: 'Anchor at Annual Function'
    },
    {
      id: 36,
      category: 'Annual Function',
      src: `${i23}`,
      title: 'Award Ceremony',
      description: 'Award Ceremony at Annual Function'
    },
    {
      id: 37,
      category: 'Annual Function',
      src: `${i24}`,
      title: 'Save Girl Child',
      description: 'Dance Performance at Annual Function'
    },
    {
      id: 38,
      category: 'Annual Function',
      src: `${i25}`,
      title: 'Save Girl Child',
      description: 'Dance Performance at Annual Function'
    },
    {
      id: 39,
      category: 'Annual Function',
      src: `${i26}`,
      title: 'Save Girl Child',
      description: 'Dance Performance at Annual Function'
    },
    {
      id: 40,
      category: 'Annual Function',
      src: `${i27}`,
      title: 'Dance Performance',
      description: 'Dance Performance at Annual Function'
    },
    {
      id: 41,
      category: 'Annual Function',
      src: `${i28}`,
      title: 'Speech by Chief Guest',
      description: 'Speech by Chief Guest at Annual Function'
    },
    {
      id: 42,
      category: 'Annual Function',
      src: `${i29}`,
      title: 'Award Ceremony',
      description: 'Award Ceremony at Annual Function'
    },
    {
      id: 43,
      category: 'Annual Function',
      src: `${i30}`,
      title: 'Award Ceremony',
      description: 'Award Ceremony at Annual Function'
    },
    {
      id: 44,
      category: 'Annual Function',
      src: `${i31}`,
      title: 'Award Ceremony',
      description: 'Award Ceremony at Annual Function'
    },
    {
      id: 45,
      category: 'Annual Function',
      src: `${i32}`,
      title: 'Award Ceremony',
      description: 'Award Ceremony at Annual Function'
    },
    {
      id: 46,
      category: 'Annual Function',
      src: `${i33}`,
      title: 'Award Ceremony',
      description: 'Award Ceremony at Annual Function'
    },
    {
      id: 47,
      category: 'Annual Function',
      src: `${i34}`,
      title: 'Award Ceremony',
      description: 'Award Ceremony at Annual Function'
    },
    {
      id: 48,
      category: 'Annual Function',
      src: `${i35}`,
      title: 'Felicitation Ceremony',
      description: 'Felicitation of Chief Guest at Annual Function'
    },
    {
      id: 49,
      category: 'Annual Function',
      src: `${i36}`,
      title: 'Dance Performance',
      description: 'Dance Performance at Annual Function'
    },
    {
      id: 50,
      category: 'Annual Function',
      src: `${i37}`,
      title: 'Dance Performance',
      description: 'Dance Performance at Annual Function'
    },
    {
      id: 51,
      category: 'Annual Function',
      src: `${i38}`,
      title: 'Say No to Plastic',
      description: 'Dance Performance at Annual Function'
    },
    {
      id: 52,
      category: 'Annual Function',
      src: `${i39}`,
      title: 'Dance Performance',
      description: 'Dance Performance at Annual Function'
    },
    {
      id: 53,
      category: 'Annual Function',
      src: `${i40}`,
      title: 'Dance Performance',
      description: 'Dance Performance at Annual Function'
    },
    {
      id: 54,
      category: 'Annual Function',
      src: `${i41}`,
      title: 'Dance Performance',
      description: 'Dance Performance at Annual Function'
    },
    {
      id: 55,
      category: 'Annual Function',
      src: `${i42}`,
      title: 'Dance Performance',
      description: 'Dance Performance at Annual Function'
    },
    {
      id: 56,
      category: 'Annual Function',
      src: `${i43}`,
      title: 'Award Ceremony',
      description: 'Award Ceremony at Annual Function'
    },
    {
      id: 57,
      category: 'Annual Function',
      src: `${i44}`,
      title: 'Award Ceremony',
      description: 'Award Ceremony at Annual Function'
    },
    {
      id: 58,
      category: 'Annual Function',
      src: `${i45}`,
      title: 'Award Ceremony',
      description: 'Award Ceremony at Annual Function'
    },
    {
      id: 59,
      category: 'Annual Function',
      src: `${i46}`,
      title: 'Award Ceremony',
      description: 'Award Ceremony at Annual Function'
    },
    {
      id: 60,
      category: 'Annual Function',
      src: `${i47}`,
      title: 'Award Ceremony',
      description: 'Award Ceremony at Annual Function'
    },
    {
      id: 61,
      category: 'Annual Function',
      src: `${i48}`,
      title: 'Award Ceremony',
      description: 'Award Ceremony at Annual Function'
    },
    {
      id: 62,
      category: 'Annual Function',
      src: `${i49}`,
      title: 'Award Ceremony',
      description: 'Award Ceremony at Annual Function'
    },
    {
      id: 63,
      category: 'Annual Function',
      src: `${i50}`,
      title: 'Award Ceremony',
      description: 'Award Ceremony at Annual Function'
    },
    {
      id: 64,
      category: 'Annual Function',
      src: `${i51}`,
      title: 'Award Ceremony',
      description: 'Award Ceremony at Annual Function'
    },
    {
      id: 65,
      category: 'Annual Function',
      src: `${i52}`,
      title: 'Award Ceremony',
      description: 'Award Ceremony at Annual Function'
    },
    {
      id: 66,
      category: 'Annual Function',
      src: `${i53}`,
      title: 'Award Ceremony',
      description: 'Award Ceremony at Annual Function'
    },
    {
      id: 67,
      category: 'Annual Function',
      src: `${i54}`,
      title: 'Award Ceremony',
      description: 'Award Ceremony at Annual Function'
    },
    {
      id: 68,
      category: 'Annual Function',
      src: `${i55}`,
      title: 'Tribute to ISRO',
      description: 'Dance Performance at Annual Function'
    },
    {
      id: 69,
      category: 'Annual Function',
      src: `${i56}`,
      title: 'Tribute to ISRO',
      description: 'Dance Performance at Annual Function'
    },
    {
      id: 70,
      category: 'Annual Function',
      src: `${i57}`,
      title: 'Tribute to ISRO',
      description: 'Dance Performance at Annual Function'
    },
    {
      id: 71,
      category: 'Annual Function',
      src: `${i58}`,
      title: 'Tribute to ISRO',
      description: 'Dance Performance at Annual Function'
    },
  ];

  const filteredImages = activeCategory === 'all' 
  ? images 
  : images.filter(img => img.category === activeCategory);

const Modal = ({ image, onClose }) => {
  if (!image) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center animate-fadeIn">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-amber-400 transition-colors"
      >
        <X size={32} />
      </button>
      <div className="max-w-4xl mx-4 relative">
        <img 
          src={image.src} 
          alt={image.title}
          className="w-full h-auto rounded-lg shadow-2xl"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
          <h3 className="text-white text-xl font-semibold mb-2">{image.title}</h3>
          <p className="text-gray-300">{image.description}</p>
        </div>
      </div>
    </div>
  );
};

return (
  <div id='gallery' className="min-h-screen bg-black text-white pt-28">
    <div className="py-12 text-center">
      <h1 className="text-4xl font-serif mb-4">Our Gallery</h1>
      <p className="text-gray-400 mb-8">Explore our campus life through images</p>
      
      <div className="flex flex-wrap justify-center gap-4 mb-8 px-24">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105
              ${activeCategory === category 
                ? 'bg-amber-500 text-white' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
    </div>

    <div className="container mx-auto px-24 pb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredImages.map(image => (
          <div
            key={image.id}
            className="group relative overflow-hidden rounded-lg cursor-pointer transform transition-all duration-300 hover:scale-105"
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
              <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300" size={32} />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-white font-semibold">{image.title}</h3>
              <p className="text-gray-300 text-sm">{image.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Modal */}
    <Modal image={selectedImage} onClose={() => setSelectedImage(null)} />
  </div>
);
};

export default Gallery;