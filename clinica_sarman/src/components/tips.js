import React, { useState } from 'react';
import "../css/tips.css";
import Dientes from "../images/banner2.jpg";
import Urgencia from "../videos/Video.mp4";

const dentalTipsData = [
  {
    category: 'Cuidado diario',
    tips: [
      'Cepíllate los dientes al menos dos veces al día.',
      'Utiliza hilo dental diariamente para limpiar entre los dientes.',
      'Enjuaga con enjuague bucal después del cepillado.',
    ],
    image: Dientes,
  },
  {
    category: 'Urgencias dentales',
    tips: [
      'En caso de dolor dental, enjuaga con agua tibia y sal.',
      'Si se te cae un diente, guárdalo en leche y visita al dentista de inmediato.',
      'No uses objetos afilados para tratar de quitar objetos atrapados entre tus dientes.',
    ],
    video: Urgencia,
  },
  // Agrega más categorías y consejos según sea necesario
];

function Consejos() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const selectCategory = (category) => {
    if (selectedCategory === category) {
        // Si la misma categoría se selecciona nuevamente, ocultar el contenido
        setSelectedCategory(null);
    } else {
        setSelectedCategory(category);
    }
  };

  return (
    <div className="tips-container">
      <div className="tips-content">
        <h3>Consejos dentales por categoría:</h3>
        <ul>
          {dentalTipsData.map((categoryData, index) => (
            <li key={index}>
              <button onClick={() => selectCategory(categoryData.category)}>
                {categoryData.category}
              </button>
            </li>
          ))}
        </ul>
        {selectedCategory && (
          <div className="selected-category">
            <h4>{selectedCategory}</h4>
            <ul>
              {dentalTipsData
                .find((data) => data.category === selectedCategory)
                .tips.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
            </ul>
            {selectedCategory === 'Cuidado diario' && (
              <img src={dentalTipsData.find((data) => data.category === 'Cuidado diario').image} alt="Imagen de cuidado diario" />
            )}
            {selectedCategory === 'Urgencias dentales' && (
              <video controls>
                <source src={dentalTipsData.find((data) => data.category === 'Urgencias dentales').video} type="video/mp4" />
                Tu navegador no admite la reproducción de video.
              </video>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export { Consejos };
