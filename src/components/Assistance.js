// App.js
import React, { useState } from 'react';
import Tooltip from './Tooltip';
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg"
import image3 from "../assets/image3.jpg"


function Assistance() {
    const categories = [
        {
          cat: "Fashion",
          datafunction: "function1",
          datadescription: "Button for Fashion",
        },
        {
          cat: "Event",
          datafunction: "function2",
          datadescription: "Button for Event",
        },
        {
          cat: "Sports",
          datafunction: "function3",
          datadescription: "Button for Sports",
        },
        {
          cat: "Language",
          datafunction: "function4",
          datadescription: "Button for Language",
        },
        {
          cat: "Technology",
          datafunction: "function5",
          datadescription: "Button for Technology",
        },
      ];

      const Images = [
        {
         src : image1, 
         datafunction: "function6",
        datadescription: "The Shawshunk", 
        },
        {
            src : image2, 
            datafunction: "function6",
           datadescription: "The Parasite", 
           },
           {
            src : image3, 
            datafunction: "function6",
           datadescription: "The Darknight", 
           },
      ]

      
    const [position, setPosition] = useState({ top: 'auto', left: 'auto', right: '10px', bottom: '10PX' });
  const [content, setContent] = useState('Welcome to my page');
  const [isDefaultPosition, setIsDefaultPosition] = useState(true);

  const handleElementClick = (event) => {
    const functionValue = event.target.getAttribute('data-function');
    const descriptionValue = event.target.getAttribute('data-description');

    if (functionValue) {
      // Update the tooltip's position near the clicked element
      const { top, left, width } = event.target.getBoundingClientRect();
      const newPosition = { top, left: left + width + 10, right: 'auto', bottom: 'auto' }; 

      setPosition(newPosition);
      setContent(descriptionValue);
      setIsDefaultPosition(false);
    }
  };

  const handleGoBack = () => {
    setPosition({ top: 'auto', left: 'auto', right: '10px', bottom: '10px' });
    setContent('Welcome to my page');
    setIsDefaultPosition(true);
  };

  const handleContainerClick = (event) => {
    const target = event.target;
    const functionValue = target.getAttribute('data-function');
    const descriptionValue = target.getAttribute('data-description');

    if (functionValue) {
      // Update the tooltip's position and content
      const { top, left, width } = target.getBoundingClientRect();
      const newPosition = { top, left: left + width + 10, right: 'auto', bottom: 'auto' };
      setPosition(newPosition);
      setContent(descriptionValue);
      setIsDefaultPosition(false);
    }
  };

  return (
    <div onClick={handleContainerClick}>
        <div className='w-full py-10 flex flex-wrap justify-center gap-x-[150px] items-center'>
        {categories.map((category, index) => (
          <button
            key={index}
            type="button"
            data-function={category.datafunction}
             data-description={category.datadescription}
            className="text-white border focus:bg-gray-900 bg-red-500 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3"
          >
            {category.cat}
          </button>
        ))}
        <div>
        </div>
               </div>     
                {/* Tooltip */}
      {isDefaultPosition ? (
        <Tooltip content={content} position={position}>
          <button onClick={handleGoBack} className='text-black font-extrabold w-[5px]'>Go Back</button>
        </Tooltip>
      ) : (
        <Tooltip content={content} position={position} />
      )}
<div className='w-full flex flex-wrap justify-center mt-10 gap-10'>
    {
        Images.map((image, index) => (
            <img key={index} src={image.src} 
            data-function={image.datafunction} 
            data-description={image.datadescription}
             alt={image.datadescription}
             className='w-[200px] h-[300px] cursor-pointer'/>
        ))
    }
</div>
    </div>
  );
}

export default Assistance;
