import React, { useState } from "react";
import Map from "./Map";
import { eventsData } from "./data/events"; // Tu archivo de datos
import './App.css';

// Función para quitar tildes y mayúsculas para comparar textos fácilmente
const normalizeText = (text) => {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
};

function App() {
  const [tooltipContent, setTooltipContent] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleSelectDepartment = (deptName) => {
    setSelectedDepartment(deptName);
    setSelectedEvent(null); // Ocultar el resumen anterior al cambiar de región
  };

  // Buscar los eventos del departamento seleccionado usando el texto normalizado
  let currentEvents = [];
  if (selectedDepartment) {
    const normalizedSelected = normalizeText(selectedDepartment);
    
    // Buscamos en el objeto eventsData la llave que coincida (ej. "Antioquia" === "antioquia")
    const foundKey = Object.keys(eventsData).find(
      key => normalizeText(key) === normalizedSelected
    );
    
    if (foundKey) {
      currentEvents = eventsData[foundKey];
    }
  }

  return (
    <div className="app-container">
      <header className="header">
        <h1>Nuestra Historia <span className="highlight">(2000 - 2026)</span></h1>
        <p>Selecciona un departamento en el mapa para explorar los sucesos históricos que marcaron la región.</p>
        
        <div className="hovered-department-banner">
          {tooltipContent ? tooltipContent : "Explora el mapa interactivo"}
        </div>
      </header>

      <div className="main-content">
        {/* COLUMNA IZQUIERDA: Mapa */}
        <div className="map-section">
          <Map 
            setTooltipContent={setTooltipContent} 
            selectedDepartment={selectedDepartment}
            onSelectDepartment={handleSelectDepartment}
          />
          
        </div>

        {/* COLUMNA DERECHA: Sucesos Históricos */}
        <div className="events-sidebar">
          {!selectedDepartment ? (
            <div className="empty-state">
              <h3>Selecciona un departamento</h3>
              <p>Haz clic en cualquier región del mapa para cargar su historia.</p>
            </div>
          ) : (
            <>
              <h2>Sucesos en {selectedDepartment}</h2>
              
              {currentEvents.length === 0 ? (
                <p className="no-events">No hay eventos registrados para este territorio en este lapso de tiempo.</p>
              ) : (
                <div className="events-list">
                  {currentEvents.map((event, index) => (
                    <div 
                      key={index} 
                      className={`event-card ${selectedEvent?.title === event.title ? 'active' : ''}`}
                      onClick={() => setSelectedEvent(event)}
                    >
                      <span className="event-year">{event.year}</span>
                      <h3 className="event-title">{event.title}</h3>
                    </div>
                  ))}
                </div>
              )}

              {/* Detalle del Evento */}
              {selectedEvent && (
                <div className="event-detail">
                  <h3>{selectedEvent.title} ({selectedEvent.year})</h3>
                  <p>{selectedEvent.summary}</p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;