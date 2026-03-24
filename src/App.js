import React, { useState, useRef, useEffect } from 'react';
import departmentPaths from './data/departmentPaths';
import eventsData from './data/events';
import './App.css';

function App() {
  const [selectedDept, setSelectedDept] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [hoveredDept, setHoveredDept] = useState(null);
  const [animating, setAnimating] = useState(false);
  const panelRef = useRef(null);

  useEffect(() => {
    if (selectedDept && panelRef.current) {
      panelRef.current.scrollTop = 0;
    }
  }, [selectedDept]);

  const handleDeptClick = (deptName) => {
    if (animating) return;
    if (selectedDept === deptName) {
      setAnimating(true);
      setSelectedEvent(null);
      setTimeout(() => {
        setSelectedDept(null);
        setAnimating(false);
      }, 300);
    } else {
      setAnimating(true);
      setSelectedEvent(null);
      setSelectedDept(deptName);
      setTimeout(() => setAnimating(false), 400);
    }
  };

  const handleEventClick = (evt) => {
    setSelectedEvent(selectedEvent === evt ? null : evt);
  };

  const handleBack = () => {
    setSelectedEvent(null);
    setSelectedDept(null);
  };

  const deptEvents = selectedDept ? eventsData[selectedDept] : null;
  const hasEvents = deptEvents && deptEvents.events && deptEvents.events.length > 0;

  return (
    <div className="app">
      <div className="bg-grain"></div>
      <div className="bg-circle bg-circle-1"></div>
      <div className="bg-circle bg-circle-2"></div>
      <div className="bg-circle bg-circle-3"></div>

      <header className="header">
        <div className="header-inner">
          <div className="flag-accent">
            <span className="flag-yellow"></span>
            <span className="flag-blue"></span>
            <span className="flag-red"></span>
          </div>
          <h1 className="title">Colombia</h1>
          <h2 className="subtitle">Historia & Cultura · 2000–2026</h2>
          <p className="description">
            Explora los hechos que marcaron la historia colombiana en el siglo XXI. 
            Haz clic en un departamento para descubrir sus eventos más significativos.
          </p>
        </div>
      </header>

      <main className="main-content">
        <div className={`map-container ${selectedDept ? 'map-shifted' : ''}`}>
          <svg
            viewBox="30 25 470 520"
            className="colombia-map"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              <linearGradient id="selectedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F5C518" />
                <stop offset="100%" stopColor="#E8A317" />
              </linearGradient>
              <linearGradient id="hoverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3D7B3F" />
                <stop offset="100%" stopColor="#5DA160" />
              </linearGradient>
            </defs>

            {Object.entries(departmentPaths).map(([name, data]) => {
              const isSelected = selectedDept === name;
              const isHovered = hoveredDept === name;
              const hasData = eventsData[name] && eventsData[name].events.length > 0;
              const dimmed = selectedDept && !isSelected;

              return (
                <g key={name} className="dept-group">
                  <path
                    d={data.path}
                    className={`dept-path ${isSelected ? 'selected' : ''} ${isHovered ? 'hovered' : ''} ${dimmed ? 'dimmed' : ''} ${hasData ? 'has-data' : 'no-data'}`}
                    onClick={() => hasData && handleDeptClick(name)}
                    onMouseEnter={() => setHoveredDept(name)}
                    onMouseLeave={() => setHoveredDept(null)}
                    fill={isSelected ? 'url(#selectedGrad)' : isHovered && hasData ? 'url(#hoverGrad)' : undefined}
                    filter={isSelected ? 'url(#glow)' : undefined}
                  />
                  <text
                    x={data.labelX}
                    y={data.labelY}
                    className={`dept-label ${isSelected ? 'label-selected' : ''} ${dimmed ? 'label-dimmed' : ''} ${!hasData ? 'label-nodata' : ''}`}
                    onClick={() => hasData && handleDeptClick(name)}
                    onMouseEnter={() => setHoveredDept(name)}
                    onMouseLeave={() => setHoveredDept(null)}
                  >
                    {name.length > 15 ? name.split(' ').slice(0, 2).join(' ') : name}
                  </text>
                  {hasData && isHovered && !selectedDept && (
                    <text
                      x={data.labelX}
                      y={data.labelY + 10}
                      className="dept-event-count"
                    >
                      {eventsData[name].events.length} evento{eventsData[name].events.length > 1 ? 's' : ''}
                    </text>
                  )}
                </g>
              );
            })}
          </svg>
        </div>

        <div className={`side-panel ${selectedDept ? 'panel-open' : ''}`} ref={panelRef}>
          {selectedDept && (
            <div className="panel-content">
              <button className="back-btn" onClick={handleBack}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
                Volver al mapa
              </button>
              
              <div className="panel-header">
                <h2 className="panel-title">{selectedDept}</h2>
                <p className="panel-subtitle">
                  {hasEvents ? `${deptEvents.events.length} hechos históricos registrados` : 'Sin eventos registrados'}
                </p>
              </div>

              {hasEvents && (
                <div className="timeline">
                  {deptEvents.events.map((evt, idx) => (
                    <div 
                      key={idx} 
                      className={`timeline-item ${selectedEvent === evt ? 'event-expanded' : ''}`}
                      style={{ animationDelay: `${idx * 0.08}s` }}
                    >
                      <div className="timeline-line">
                        <div className="timeline-dot"></div>
                        {idx < deptEvents.events.length - 1 && <div className="timeline-connector"></div>}
                      </div>
                      <div className="timeline-content" onClick={() => handleEventClick(evt)}>
                        <span className="event-year">{evt.year}</span>
                        <h3 className="event-title">{evt.title}</h3>
                        {selectedEvent === evt && (
                          <div className="event-detail">
                            <p>{evt.summary}</p>
                          </div>
                        )}
                        <div className="event-toggle">
                          {selectedEvent === evt ? 'Cerrar ▲' : 'Leer más ▼'}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </main>

      <footer className="footer">
        <p>Actividad de Historia y Cultura · Colombia 2000–2026</p>
        <p className="footer-note">Haz clic en los departamentos coloreados para explorar</p>
      </footer>
    </div>
  );
}

export default App;
