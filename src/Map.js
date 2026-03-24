import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import colombiaGeoJson from './data/colombia.json';

const Map = ({ setTooltipContent, selectedDepartment, onSelectDepartment }) => {
  return (
    <div className="map-wrapper">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ scale: 3000, center: [-73.5, 4.5] }}
        width={800} height={800}
        style={{ width: "100%", height: "auto" }}
      >
        <Geographies geography={colombiaGeoJson}>
          {({ geographies }) =>
            geographies.map((geo) => {
              // El GeoJSON trae los nombres en mayúsculas (ej. "ANTIOQUIA")
              const departmentName = geo.properties.NOMBRE_DPT || "Desconocido";
              
              // Verificamos si este es el departamento al que le hicimos clic
              const isSelected = selectedDepartment === departmentName;

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => setTooltipContent(departmentName)}
                  onMouseLeave={() => setTooltipContent("")}
                  onClick={() => onSelectDepartment(departmentName)}
                  style={{
                    default: {
                      fill: isSelected ? "#FBBF24" : "#172A6E", // Dorado si está seleccionado, Azul oscuro si no
                      stroke: "#3B52A0", // Borde sutil
                      strokeWidth: 0.75,
                      outline: "none",
                    },
                    hover: {
                      fill: isSelected ? "#FBBF24" : "#2B449A", // Brillo al pasar el mouse
                      stroke: "#FFFFFF",
                      strokeWidth: 1.5,
                      outline: "none",
                      transition: "all 250ms",
                      cursor: "pointer"
                    },
                    pressed: {
                      fill: "#FBBF24",
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