import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
// Excelente práctica: Importación local para mejor rendimiento
import colombiaGeoJson from './data/colombia.json';

const Map = ({ setTooltipContent, selectedDepartment, onSelectDepartment }) => {
  return (
    <div className="map-wrapper">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ scale: 7000, center: [-73.5, 4.5] }}
        width={1900} 
        height={2200}
        className="colombia-svg" 
      >
        <Geographies geography={colombiaGeoJson}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const departmentName = geo.properties.NOMBRE_DPT || "Desconocido";
              const isSelected = selectedDepartment === departmentName;

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => setTooltipContent(departmentName)}
                  onMouseLeave={() => setTooltipContent("")}
                  onClick={() => onSelectDepartment(departmentName)}
                  onTouchStart={() => onSelectDepartment(departmentName)}
                  style={{
                    default: {
                      fill: isSelected ? "#FCD116" : "#0F172A", 
                      stroke: "#a8a8a870", // Borde sutil
                      strokeWidth: 6,
                      outline: "none",
                      transition: "all 250ms",
                    },
                    hover: {
                      fill: isSelected ? "#FCD116" : "#003893", // Azul Colombia al pasar el mouse
                      stroke: "#FFFFFF",
                      strokeWidth: 6, // Borde blanco grueso al resaltar
                      outline: "none",
                      transition: "all 250ms",
                      cursor: "pointer"
                    },
                    pressed: {
                      fill: "#CE1126", // Rojo Colombia al dar clic
                      outline: "none",
                    },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default Map;