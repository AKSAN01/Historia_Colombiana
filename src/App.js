// Añadimos useRef a la importación
import React, { useState, useRef } from "react";
import Map from "./Map";
import { eventsData } from "./data/events";
import './App.css';

const normalizeText = (text) => {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
};

function App() {
  const [tooltipContent, setTooltipContent] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);

  // NUEVO: Creamos una referencia a la caja de información
  const sidebarRef = useRef(null);

  const handleSelectDepartment = (deptName) => {
    setSelectedDepartment(deptName);
    setSelectedEvent(null);
    
    // NUEVO LÓGICA MÓVIL: Si la pantalla es pequeña, hace scroll hacia la información
    if (window.innerWidth <= 900 && sidebarRef.current) {
      setTimeout(() => {
        sidebarRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 150); // Un pequeño retraso de 150ms para que React alcance a pintar los datos
    }
  };

  let currentEvents = [];
  if (selectedDepartment) {
    const normalizedSelected = normalizeText(selectedDepartment);
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
        <div className="map-section">
          <Map 
            setTooltipContent={setTooltipContent} 
            selectedDepartment={selectedDepartment}
            onSelectDepartment={handleSelectDepartment}
          />
        </div>

        {/* NUEVO: Le asignamos la referencia ref={sidebarRef} a esta caja */}
        <div className="events-sidebar" ref={sidebarRef}>
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