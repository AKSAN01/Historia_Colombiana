const eventsData = {
  "Bogotá D.C.": {
    id: "bogota",
    events: [
      {
        year: 2002,
        title: "Álvaro Uribe asume la presidencia",
        summary: "El 7 de agosto de 2002, Álvaro Uribe Vélez se posesionó como presidente de Colombia tras ganar en primera vuelta con más del 53% de los votos. Su gobierno implementó la Política de Seguridad Democrática, un plan centrado en la lucha contra las guerrillas y el fortalecimiento de las fuerzas militares. Durante su mandato se recrudeció el conflicto armado, pero también se lograron avances significativos en materia de seguridad en las principales ciudades del país."
      },
      {
        year: 2004,
        title: "Inicio de la desmovilización de las AUC",
        summary: "El gobierno de Álvaro Uribe inició el proceso de desmovilización de las Autodefensas Unidas de Colombia (AUC). Entre 2003 y 2006 se desmovilizaron más de 31.000 combatientes paramilitares en el marco de la Ley de Justicia y Paz. Este proceso fue controversial por las críticas sobre impunidad y por el hecho de que algunos desmovilizados continuaron actividades delictivas bajo nuevas estructuras criminales."
      },
      {
        year: 2006,
        title: "Despenalización parcial del aborto",
        summary: "La Corte Constitucional de Colombia dictaminó que el aborto es legal en tres circunstancias: cuando el embarazo es producto de violación, cuando existe malformación grave del feto y cuando hay riesgo inminente de muerte para la madre. Esta sentencia marcó un hito en los derechos reproductivos del país."
      },
      {
        year: 2007,
        title: "Derechos patrimoniales para parejas del mismo sexo",
        summary: "La Corte Constitucional aprobó los derechos patrimoniales de las parejas homosexuales, reconociendo que pueden construir patrimonio común y heredar entre sí. Este fallo fue un paso importante en el reconocimiento de derechos de la comunidad LGBTIQ+ en Colombia."
      },
      {
        year: 2010,
        title: "Elección de Juan Manuel Santos",
        summary: "Juan Manuel Santos, exministro de Defensa del gobierno de Uribe, fue elegido presidente de Colombia. Aunque inicialmente fue percibido como un candidato de continuidad, Santos sorprendería al país al emprender negociaciones de paz con las FARC-EP, marcando un giro histórico en la política colombiana."
      },
      {
        year: 2012,
        title: "Inicio de los diálogos de paz con las FARC",
        summary: "El 4 de septiembre de 2012, el presidente Juan Manuel Santos confirmó públicamente que su gobierno había iniciado conversaciones exploratorias con las FARC-EP en Cuba. Las negociaciones formales se instalaron en La Habana el 18 de octubre de 2012, con Cuba y Noruega como países garantes. Este proceso buscaba poner fin a más de 50 años de conflicto armado."
      },
      {
        year: 2016,
        title: "Firma del Acuerdo de Paz y Plebiscito",
        summary: "El 26 de septiembre de 2016 se firmó el primer acuerdo de paz en Cartagena. El 2 de octubre, el plebiscito resultó en victoria del 'No' con 50.2% de los votos. Tras renegociar con los promotores del 'No', un nuevo acuerdo fue firmado el 24 de noviembre en el Teatro Colón de Bogotá y ratificado por el Congreso. Santos recibió el Premio Nobel de la Paz por sus esfuerzos."
      },
      {
        year: 2016,
        title: "Premio Nobel de Paz para Juan Manuel Santos",
        summary: "El presidente Juan Manuel Santos fue galardonado con el Premio Nobel de la Paz el 7 de octubre de 2016 por sus esfuerzos para llevar a buen término las negociaciones de paz con las FARC-EP. El comité noruego destacó sus persistentes esfuerzos para poner fin a más de medio siglo de conflicto armado en Colombia."
      },
      {
        year: 2018,
        title: "Iván Duque elegido presidente",
        summary: "Iván Duque, candidato del Centro Democrático (partido fundado por Álvaro Uribe), ganó las elecciones presidenciales en segunda vuelta contra Gustavo Petro con más de 10,3 millones de votos, convirtiéndose en el presidente más votado en la historia de Colombia hasta ese momento. Llegó con la promesa de modificar aspectos del acuerdo de paz."
      },
      {
        year: 2019,
        title: "Paro Nacional del 21 de noviembre",
        summary: "El 21 de noviembre de 2019 se desató un masivo paro nacional con movilizaciones en todo el país contra las políticas del gobierno de Iván Duque. Las protestas fueron motivadas por reformas laborales, pensionales, tributarias y por el asesinato de líderes sociales. Las manifestaciones continuaron durante semanas y marcaron un precedente de movilización social."
      },
      {
        year: 2020,
        title: "Pandemia de COVID-19: Cuarentena nacional",
        summary: "El 25 de marzo de 2020, Colombia inició una cuarentena nacional obligatoria como respuesta a la pandemia del COVID-19. Las medidas de confinamiento duraron varios meses, afectando profundamente la economía, el empleo y la vida social del país. La pandemia también ralentizó la implementación del acuerdo de paz."
      },
      {
        year: 2021,
        title: "Estallido Social de abril-junio",
        summary: "A partir del 28 de abril de 2021, Colombia vivió un estallido social sin precedentes. Iniciado por una reforma tributaria del gobierno Duque, las protestas se extendieron durante meses. Hubo denuncias de brutalidad policial, muertes de manifestantes y bloqueos de vías. Las movilizaciones evidenciaron profundas desigualdades sociales y descontento generalizado."
      },
      {
        year: 2022,
        title: "Gustavo Petro: primer presidente de izquierda",
        summary: "El 19 de junio de 2022, Gustavo Petro fue elegido presidente de Colombia con 11,2 millones de votos (50,44%), convirtiéndose en el primer mandatario de izquierda en la historia del país. Su vicepresidenta, Francia Márquez, se convirtió en la primera mujer afrocolombiana en ocupar ese cargo. Su gobierno propuso reformas sociales, ambientales y la 'Paz Total'."
      },
      {
        year: 2022,
        title: "Francia Márquez: primera vicepresidenta afro",
        summary: "Francia Márquez hizo historia al convertirse en la primera mujer afrocolombiana en ser elegida vicepresidenta de Colombia. Activista ambiental y de derechos humanos del Cauca, Márquez ganó el Premio Goldman de Medio Ambiente en 2018 por su lucha contra la minería ilegal. Su elección representó un hito para la representación étnica y de género en el poder ejecutivo."
      }
    ]
  },

  "Antioquia": {
    id: "antioquia",
    events: [
      {
        year: 2002,
        title: "Operación Orión en la Comuna 13 de Medellín",
        summary: "Entre el 16 y 17 de octubre de 2002, la Operación Orión se convirtió en la mayor incursión militar urbana en la historia del conflicto armado colombiano. Cerca de 1.500 hombres entre militares, policías y agentes de inteligencia intervinieron la Comuna 13 de Medellín para combatir milicias guerrilleras. El operativo dejó un saldo de más de 80 civiles heridos, decenas de muertos, 92 desapariciones y centenares de detenciones. Fue cuestionada por la presunta participación de paramilitares del Bloque Cacique Nutibara junto a la fuerza pública."
      },
      {
        year: 2003,
        title: "Desmovilización del Bloque Cacique Nutibara",
        summary: "En noviembre de 2003, el Bloque Cacique Nutibara de las Autodefensas Unidas de Colombia se desmovilizó en Medellín como parte del proceso de negociación entre el gobierno Uribe y las AUC. Fue una de las primeras desmovilizaciones colectivas del proceso. Sin embargo, se denunció que muchos de los desmovilizados formaron parte de nuevas estructuras criminales conocidas como BACRIM."
      },
      {
        year: 2008,
        title: "Escándalo de los falsos positivos en Antioquia",
        summary: "Se reveló que la Brigada IV del Ejército, con sede en Medellín, había ejecutado sistemáticamente ejecuciones extrajudiciales conocidas como 'falsos positivos'. La Jurisdicción Especial para la Paz determinó que al menos 130 personas fueron asesinadas y presentadas como bajas en combate entre 2002 y 2003 en esta jurisdicción, bajo la presión por resultados del entonces comandante de brigada, el general Mario Montoya."
      },
      {
        year: 2013,
        title: "Medellín: ciudad más innovadora del mundo",
        summary: "En 2013, Medellín fue reconocida como la ciudad más innovadora del mundo por el Urban Land Institute, superando a Nueva York y Tel Aviv. El reconocimiento destacó la transformación urbana de la ciudad, con proyectos como las escaleras eléctricas de la Comuna 13, el Metrocable, los parques biblioteca y la renovación del centro de la ciudad. Este galardón representó un cambio radical de imagen para una ciudad que décadas atrás era considerada una de las más violentas del mundo."
      },
      {
        year: 2017,
        title: "Huelga de pilotos de Avianca",
        summary: "Avianca, aerolínea emblemática con sede operativa en Medellín y Bogotá, enfrentó la huelga más larga de una aerolínea comercial cuando 700 pilotos afiliados a ACDAC pararon labores durante 51 días. La huelga generó pérdidas estimadas de 2,5 millones de dólares diarios y afectó a miles de pasajeros en todo el país."
      }
    ]
  },

  "Chocó": {
    id: "choco",
    events: [
      {
        year: 2002,
        title: "Masacre de Bojayá",
        summary: "El 2 de mayo de 2002, durante combates entre las FARC-EP y paramilitares de las AUC, un cilindro bomba lanzado por el Frente 58 de las FARC cayó sobre la iglesia de Bellavista (Bojayá), donde se refugiaban civiles. 119 personas murieron y 53 resultaron heridas. Este hecho se convirtió en uno de los episodios más dolorosos del conflicto armado colombiano, evidenciando el sufrimiento de las comunidades afrocolombianas e indígenas del Atrato."
      },
      {
        year: 2016,
        title: "Perdón de las FARC a víctimas de Bojayá",
        summary: "En septiembre de 2016, en el marco del proceso de paz, líderes de las FARC-EP viajaron a Bojayá para pedir perdón a las víctimas de la masacre de 2002. Las comunidades afrocolombianas realizaron una ceremonia de sanación y reconciliación con cantos tradicionales de alabao. Este acto fue uno de los momentos más emotivos del proceso de paz."
      }
    ]
  },

  "Caquetá": {
    id: "caqueta",
    events: [
      {
        year: 2002,
        title: "Fin de la zona de distensión del Caguán",
        summary: "En febrero de 2002, el presidente Andrés Pastrana dio por terminados los diálogos de paz con las FARC-EP y ordenó la recuperación militar de la zona de distensión de 42.000 km² centrada en San Vicente del Caguán. El fracaso de estas negociaciones, que habían durado desde 1998, impulsó el discurso de mano dura que llevó a Álvaro Uribe a la presidencia."
      },
      {
        year: 2002,
        title: "Secuestro de Íngrid Betancourt",
        summary: "El 23 de febrero de 2002, la candidata presidencial Íngrid Betancourt fue secuestrada por las FARC-EP cerca de San Vicente del Caguán cuando viajaba a la zona de distensión. Su cautiverio duró más de seis años y se convirtió en un caso emblemático a nivel internacional, especialmente en Francia, donde Betancourt también tiene ciudadanía."
      },
      {
        year: 2009,
        title: "Asesinato del gobernador Luis Francisco Cuéllar",
        summary: "El 22 de diciembre de 2009, guerrilleros de las FARC-EP secuestraron y asesinaron al gobernador del Caquetá, Luis Francisco Cuéllar. El crimen provocó indignación nacional e internacional y fue reconocido por las FARC como uno de sus actos."
      }
    ]
  },

  "Guaviare": {
    id: "guaviare",
    events: [
      {
        year: 2008,
        title: "Operación Jaque: Rescate de Íngrid Betancourt",
        summary: "El 2 de julio de 2008, las Fuerzas Militares de Colombia ejecutaron la Operación Jaque, una misión de inteligencia que liberó a 15 secuestrados de las FARC-EP en las selvas del Guaviare, sin disparar un solo tiro. Entre los rescatados estaban Íngrid Betancourt, tres contratistas estadounidenses y 11 militares colombianos. La operación, basada en un engaño electrónico e infiltración, es considerada una de las más exitosas en la historia militar mundial."
      }
    ]
  },

  "Bolívar": {
    id: "bolivar",
    events: [
      {
        year: 2000,
        title: "Masacre de El Salado",
        summary: "Entre el 16 y el 21 de febrero de 2000, paramilitares de las AUC irrumpieron en El Salado, corregimiento de El Carmen de Bolívar. Durante varios días asesinaron a más de 60 personas mediante métodos de extrema crueldad, convirtiendo el evento en una de las masacres más atroces del conflicto armado colombiano. Los paramilitares actuaron con total impunidad a pesar de la presencia militar en la zona."
      },
      {
        year: 2000,
        title: "Masacre de Macayepo",
        summary: "El 14 de octubre de 2000, paramilitares de las AUC perpetraron la masacre de Macayepo en El Carmen de Bolívar. Fueron asesinados 15 campesinos y cerca de 200 familias fueron desplazadas de su territorio en los Montes de María, una región que sufrió intensamente el conflicto entre guerrillas y paramilitares."
      },
      {
        year: 2016,
        title: "Firma del Acuerdo de Paz en Cartagena",
        summary: "El 26 de septiembre de 2016, el presidente Juan Manuel Santos y Rodrigo Londoño ('Timochenko'), comandante de las FARC-EP, firmaron el primer Acuerdo Final de Paz en una ceremonia solemne en Cartagena de Indias, ante la presencia de líderes internacionales. Aunque este primer acuerdo fue rechazado en el plebiscito del 2 de octubre, simbolizó el anhelo de paz de millones de colombianos."
      }
    ]
  },

  "Meta": {
    id: "meta",
    events: [
      {
        year: 2002,
        title: "Ofensiva militar en el Meta",
        summary: "Con el fin de la zona de distensión, el departamento del Meta se convirtió en escenario de intensas operaciones militares contra las FARC-EP. La Fuerza Aérea inició bombardeos que debilitaron significativamente las estructuras guerrilleras en la región. El Meta fue uno de los departamentos más afectados por el Plan Patriota lanzado en 2003."
      },
      {
        year: 2010,
        title: "Operación Camaleón",
        summary: "El 13 y 14 de junio de 2010, el Ejército Nacional llevó a cabo la Operación Camaleón en la selva del Meta, rescatando a cuatro altos oficiales de la Policía y el Ejército que habían sido secuestrados por las FARC-EP durante más de una década. La operación fue considerada un éxito militar y estratégico."
      }
    ]
  },

  "Norte de Santander": {
    id: "norte_santander",
    events: [
      {
        year: 2000,
        title: "Carro bomba en la cárcel de Cúcuta",
        summary: "El 3 de abril de 2000, miembros del ELN, las FARC-EP y el EPL activaron un carro bomba junto a la cárcel Modelo de Cúcuta, liberando 74 prisioneros. El ataque dejó muertos y heridos, y evidenció la capacidad operativa conjunta de los grupos guerrilleros en la frontera con Venezuela."
      },
      {
        year: 2008,
        title: "Falsos positivos de Soacha en Ocaña",
        summary: "En 2008 estalló el escándalo de los falsos positivos cuando 19 jóvenes de Soacha (Cundinamarca) fueron engañados con promesas de empleo, trasladados a Norte de Santander y asesinados por militares que los presentaron como guerrilleros muertos en combate. Este caso destapó la sistematicidad de las ejecuciones extrajudiciales, que según la JEP alcanzaron al menos 6.402 víctimas entre 2002 y 2008."
      },
      {
        year: 2015,
        title: "Crisis fronteriza con Venezuela",
        summary: "En agosto de 2015, el presidente venezolano Nicolás Maduro ordenó el cierre de la frontera con Colombia en Norte de Santander y la deportación masiva de colombianos residentes en Venezuela. Miles de personas fueron expulsadas y sus casas marcadas para demolición, generando una crisis humanitaria y diplomática entre ambos países."
      },
      {
        year: 2021,
        title: "Cúcuta epicentro de la crisis migratoria venezolana",
        summary: "Norte de Santander se consolidó como el principal corredor migratorio de venezolanos hacia Colombia. Se estima que más de 2 millones de venezolanos ingresaron por esta frontera. Cúcuta enfrentó enormes desafíos humanitarios, con miles de personas cruzando a diario en busca de alimento, medicinas y oportunidades."
      }
    ]
  },

  "Valle del Cauca": {
    id: "valle",
    events: [
      {
        year: 2000,
        title: "María Isabel Urrutia: primer oro olímpico colombiano",
        summary: "En los Juegos Olímpicos de Sídney 2000, la pesista caleña María Isabel Urrutia se convirtió en la primera colombiana en ganar una medalla de oro olímpica, en la categoría de 75 kg de halterofilia. Este logro marcó un hito en la historia deportiva de Colombia y abrió el camino para futuras generaciones de atletas."
      },
      {
        year: 2021,
        title: "Cali epicentro del Estallido Social",
        summary: "Cali se convirtió en el epicentro del estallido social de 2021. Las protestas fueron especialmente intensas en barrios populares como Siloé y en el sector de Puerto Resistencia. Se reportaron graves enfrentamientos entre manifestantes y la fuerza pública, con denuncias de uso excesivo de la fuerza, muertes y desapariciones. Los bloqueos de vías afectaron el suministro de alimentos y medicinas durante semanas."
      },
      {
        year: 2021,
        title: "Masacre de jóvenes en Llano Verde",
        summary: "El 11 de agosto de 2020, cinco jóvenes afrodescendientes del barrio Llano Verde en Cali fueron asesinados en una zona cañera. El crimen generó indignación nacional y visibilizó la violencia sistemática contra jóvenes afrocolombianos en el Valle del Cauca, así como la persistencia de grupos armados en la región."
      }
    ]
  },

  "Caldas": {
    id: "caldas",
    events: [
      {
        year: 2004,
        title: "Once Caldas campeón de la Copa Libertadores",
        summary: "En 2004, el Once Caldas de Manizales logró un hito deportivo al ganar la Copa Libertadores de América, venciendo en la final al poderoso Boca Juniors de Argentina en una definición por penales. Dirigido por Luis Fernando Montoya, se convirtió en el segundo equipo colombiano en ganar este torneo tras Atlético Nacional en 1989."
      }
    ]
  },

  "Quindío": {
    id: "quindio",
    events: [
      {
        year: 2000,
        title: "Reconstrucción tras el terremoto del Eje Cafetero",
        summary: "Tras el devastador terremoto del 25 de enero de 1999 que destruyó el 75% de Armenia y afectó gravemente al Eje Cafetero, durante los años 2000 se desarrolló uno de los procesos de reconstrucción más grandes en la historia del país. El sismo de magnitud 6.2 dejó más de 1.100 muertos y 250.000 damnificados, y transformó profundamente la infraestructura de la región."
      },
      {
        year: 2011,
        title: "Paisaje Cultural Cafetero: Patrimonio de la UNESCO",
        summary: "En 2011, la UNESCO declaró el Paisaje Cultural Cafetero como Patrimonio Mundial de la Humanidad. Esta declaración incluyó zonas de Quindío, Caldas, Risaralda y Valle del Cauca, reconociendo la tradición cafetera centenaria, el paisaje único de montaña y las prácticas culturales asociadas al cultivo del café en Colombia."
      }
    ]
  },

  "San Andrés y Providencia": {
    id: "san_andres",
    events: [
      {
        year: 2012,
        title: "Fallo de la CIJ sobre límites con Nicaragua",
        summary: "En noviembre de 2012, la Corte Internacional de Justicia ratificó la soberanía colombiana sobre todas las islas del archipiélago de San Andrés, Providencia y Santa Catalina, pero otorgó a Nicaragua más de 75.000 km² de mar al oriente del Meridiano 82. Este fallo generó profundo descontento en Colombia y llevó al país a denunciar el Pacto de Bogotá."
      },
      {
        year: 2020,
        title: "Huracán Iota devastó Providencia",
        summary: "El 16 de noviembre de 2020, el huracán Iota, categoría 5, impactó directamente la isla de Providencia, destruyendo el 98% de su infraestructura. Fue el primer huracán de categoría 5 en golpear territorio colombiano en su historia. La isla quedó devastada, con casas destruidas, vegetación arrasada y la comunidad raizal gravemente afectada. El proceso de reconstrucción se llevó a cabo durante el gobierno de Duque."
      }
    ]
  },

  "Cauca": {
    id: "cauca",
    events: [
      {
        year: 2001,
        title: "Masacre del Naya",
        summary: "En abril de 2001, paramilitares del Bloque Calima de las AUC incursionaron en la región del Alto Naya, asesinando a más de 40 personas, mayoritariamente indígenas Nasa y afrocolombianos. La masacre fue una de las más graves del conflicto en el suroccidente colombiano y provocó el desplazamiento de miles de personas."
      },
      {
        year: 2012,
        title: "Liberación de periodistas secuestrados por las FARC",
        summary: "En 2012, las FARC-EP liberaron a varios secuestrados como gesto previo al inicio formal de las negociaciones de paz. El Cauca fue escenario de varias de estas liberaciones, lo que generó esperanza en una región profundamente afectada por el conflicto."
      },
      {
        year: 2019,
        title: "Asesinato masivo de líderes sociales e indígenas",
        summary: "El Cauca se convirtió en el departamento con mayor número de asesinatos de líderes sociales e indígenas tras la firma del acuerdo de paz. La Guardia Indígena del pueblo Nasa denunció repetidamente las amenazas y ataques de disidencias de las FARC, narcotraficantes y otros grupos armados ilegales que disputaban el control territorial en la zona."
      }
    ]
  },

  "Nariño": {
    id: "narino",
    events: [
      {
        year: 2010,
        title: "Erupción del Volcán Galeras",
        summary: "El 2 de enero de 2010, el Volcán Galeras hizo erupción nuevamente, obligando a la evacuación de miles de habitantes de Pasto y municipios aledaños. El Galeras es uno de los volcanes más activos de Colombia y ha generado múltiples alertas y evacuaciones a lo largo de las dos primeras décadas del siglo XXI."
      },
      {
        year: 2017,
        title: "Avalancha de Mocoa",
        summary: "Aunque Mocoa se encuentra en Putumayo, la tragedia del 1 de abril de 2017 afectó profundamente a todo el suroccidente incluyendo Nariño. Una avalancha causada por lluvias torrenciales destruyó barrios enteros de Mocoa dejando más de 330 muertos. Nariño envió ayuda humanitaria y recibió a familias desplazadas por la tragedia."
      }
    ]
  },

  "Putumayo": {
    id: "putumayo",
    events: [
      {
        year: 2001,
        title: "Implementación del Plan Colombia",
        summary: "Putumayo fue el principal escenario del Plan Colombia, un programa de cooperación entre Colombia y Estados Unidos enfocado en la lucha contra el narcotráfico. Las fumigaciones aéreas con glifosato afectaron miles de hectáreas de cultivos ilícitos pero también cultivos legales, generando desplazamiento y daños ambientales. El plan fue altamente controvertido por sus impactos en la salud y el medio ambiente."
      },
      {
        year: 2017,
        title: "Avalancha de Mocoa",
        summary: "El 1 de abril de 2017, una avalancha de lodo y agua provocada por lluvias torrenciales arrasó varios barrios de Mocoa, capital del Putumayo. Más de 330 personas murieron, centenares resultaron heridas y miles quedaron sin hogar. Fue una de las peores tragedias naturales del siglo XXI en Colombia, agravada por la falta de planificación urbana en zonas de riesgo."
      }
    ]
  },

  "Tolima": {
    id: "tolima",
    events: [
      {
        year: 2000,
        title: "Toma de Puerto Saldaña por las FARC",
        summary: "En abril de 2000, las FARC-EP atacaron Puerto Saldaña en el municipio de Rioblanco, Tolima. El asedio dejó 27 personas muertas (incluyendo siete niños), cerca de 400 desplazados y alrededor de 200 casas destruidas. Este ataque evidenció la brutalidad del conflicto armado en las zonas rurales del país."
      },
      {
        year: 2008,
        title: "Rescate del exsenador Óscar Tulio Lizcano",
        summary: "El 26 de octubre de 2008, el excongresista Óscar Tulio Lizcano fue rescatado en operación militar tras más de 8 años de secuestro por las FARC-EP. Su guerrillero custodio desertó y facilitó la liberación, lo que se sumó a las múltiples liberaciones y rescates que marcaron ese período."
      }
    ]
  },

  "Cundinamarca": {
    id: "cundinamarca",
    events: [
      {
        year: 2008,
        title: "Jóvenes de Soacha: origen del escándalo de falsos positivos",
        summary: "En septiembre de 2008, madres de Soacha comenzaron a denunciar la desaparición de sus hijos, quienes fueron engañados con falsas ofertas de trabajo. Posteriormente, los cuerpos de 19 jóvenes aparecieron en Norte de Santander, presentados por el Ejército como guerrilleros muertos en combate. Este caso destapó la sistemática práctica de ejecuciones extrajudiciales que sacudió al país entero."
      },
      {
        year: 2023,
        title: "Gobierno pide perdón por falsos positivos de Soacha",
        summary: "En octubre de 2023, el gobierno de Gustavo Petro realizó un acto oficial de perdón público a las madres de Soacha y las víctimas de ejecuciones extrajudiciales. Quince años después de los hechos, el Estado colombiano reconoció su responsabilidad en los falsos positivos, un proceso que involucra al menos 6.402 víctimas documentadas por la JEP."
      }
    ]
  },

  "Cesar": {
    id: "cesar",
    events: [
      {
        year: 2001,
        title: "Parapolítica: vínculos entre políticos y paramilitares",
        summary: "El departamento del Cesar fue uno de los epicentros del escándalo de la parapolítica, donde se reveló que numerosos políticos locales y nacionales mantenían vínculos con los paramilitares de las AUC. Varios gobernadores y congresistas del Cesar fueron investigados y condenados por sus nexos con grupos de autodefensa ilegales."
      },
      {
        year: 2007,
        title: "Captura de 'Jorge 40'",
        summary: "Rodrigo Tovar Pupo, alias 'Jorge 40', jefe del Bloque Norte de las AUC que operó en Cesar y el Caribe colombiano, fue extraditado a Estados Unidos por narcotráfico. Bajo su mando se cometieron miles de crímenes incluyendo masacres, desplazamientos y asesinatos selectivos que devastaron la región."
      }
    ]
  },

  "Magdalena": {
    id: "magdalena",
    events: [
      {
        year: 2000,
        title: "Masacres paramilitares en la Sierra Nevada",
        summary: "A principios de la década del 2000, las AUC llevaron a cabo múltiples masacres en la Sierra Nevada de Santa Marta y zonas rurales del Magdalena como parte de su estrategia para controlar territorios clave. Estas masacres causaron miles de desplazados y destruyeron el tejido social de comunidades indígenas y campesinas."
      },
      {
        year: 2005,
        title: "Descubrimiento de fosas comunes paramilitares",
        summary: "En 2005, en el marco de la Ley de Justicia y Paz, comenzaron a descubrirse fosas comunes en el Magdalena donde los paramilitares habían enterrado a sus víctimas. Los hallazgos revelaron la magnitud de los crímenes cometidos durante años de dominio paramilitar en la región Caribe."
      }
    ]
  },

  "La Guajira": {
    id: "guajira",
    events: [
      {
        year: 2014,
        title: "Crisis humanitaria por desnutrición infantil Wayú",
        summary: "La Guajira enfrentó una grave crisis humanitaria por la muerte de niños de la etnia Wayú por desnutrición y falta de agua potable. La Corte Constitucional declaró el estado de cosas inconstitucional en La Guajira por las fallas del Estado en garantizar los derechos fundamentales de los niños indígenas. La crisis se agravó por la corrupción en el manejo de recursos públicos."
      },
      {
        year: 2019,
        title: "Migración venezolana por La Guajira",
        summary: "La Guajira se convirtió en un corredor clave para la migración venezolana, con miles de personas cruzando diariamente la frontera en Maicao y otros municipios. La crisis migratoria desbordó la capacidad de atención del departamento, afectando servicios de salud, educación y generando tensiones sociales en una región ya marcada por la pobreza."
      },
      {
        year: 2026,
        title: "Entrega de planta desalinizadora en comunidad Wayú",
        summary: "En febrero de 2026, el gobierno de Gustavo Petro entregó una planta desalinizadora de agua a la comunidad de Yotojoroin en La Guajira, como parte de los esfuerzos para resolver la crisis histórica de acceso al agua potable del pueblo Wayú. El evento fue acompañado de controversias políticas."
      }
    ]
  },

  "Sucre": {
    id: "sucre",
    events: [
      {
        year: 2000,
        title: "Violencia paramilitar en los Montes de María",
        summary: "La región de los Montes de María, compartida entre Sucre y Bolívar, sufrió intensa violencia paramilitar. Las AUC llevaron a cabo masacres como la de Chengue (enero de 2001) donde asesinaron a 27 campesinos. Esta región fue una de las más afectadas por el desplazamiento forzado en Colombia."
      }
    ]
  },

  "Córdoba": {
    id: "cordoba",
    events: [
      {
        year: 2003,
        title: "Desmovilización de las AUC en Tierralta",
        summary: "Tierralta, Córdoba, fue escenario clave de las negociaciones de paz entre el gobierno de Uribe y las AUC. En Santa Fe de Ralito se firmaron acuerdos para la desmovilización paramilitar. Sin embargo, el proceso fue cuestionado por denuncias de que muchos paramilitares no entregaron sus bienes ni confesaron todos sus crímenes."
      },
      {
        year: 2026,
        title: "Emergencia por ola invernal",
        summary: "En febrero de 2026, Córdoba fue uno de los ocho departamentos cobijados por la declaratoria de Emergencia Económica, Social y Ecológica del presidente Petro, tras graves inundaciones que dejaron miles de damnificados y destruyeron infraestructura vital en la región."
      }
    ]
  },

  "Atlántico": {
    id: "atlantico",
    events: [
      {
        year: 2010,
        title: "Inundaciones del Canal del Dique",
        summary: "En noviembre de 2010, la ruptura del Canal del Dique provocada por la ola invernal causó la inundación de extensas zonas del sur del Atlántico, afectando a más de 100.000 personas y destruyendo miles de viviendas. El desastre evidenció la vulnerabilidad de la infraestructura hídrica de la región Caribe."
      },
      {
        year: 2018,
        title: "Barranquilla sede de los Juegos Centroamericanos",
        summary: "Barranquilla fue sede de los XXIII Juegos Centroamericanos y del Caribe en 2018, recibiendo a más de 5.000 atletas de 37 países. El evento impulsó la modernización de la infraestructura deportiva y urbana de la ciudad, consolidando a Barranquilla como un importante centro deportivo regional."
      }
    ]
  },

  "Santander": {
    id: "santander",
    events: [
      {
        year: 2005,
        title: "Primer colombiano en el Everest",
        summary: "El 22 de mayo de 2005, los escaladores colombianos Manuel Barrios y Fernando González Rubio conquistaron los 8.848 metros del Monte Everest, convirtiéndose en los primeros colombianos en alcanzar la cima de la montaña más alta del mundo. La hazaña les tomó 57 días de escalada."
      }
    ]
  },

  "Boyacá": {
    id: "boyaca",
    events: [
      {
        year: 2016,
        title: "Nairo Quintana y el ciclismo colombiano",
        summary: "El boyacense Nairo Quintana se consolidó como una de las principales figuras del ciclismo mundial, ganando el Giro de Italia en 2014 y múltiples etapas del Tour de Francia. El departamento de Boyacá se convirtió en semillero de ciclistas de clase mundial, incluyendo a Egan Bernal, quien ganaría el Tour de Francia en 2019."
      }
    ]
  },

  "Risaralda": {
    id: "risaralda",
    events: [
      {
        year: 2000,
        title: "Ataque al cerro Montezuma",
        summary: "El 2 de septiembre de 2000, las FARC-EP atacaron la base militar del cerro Montezuma en Pueblo Rico, Risaralda. El combate dejó 77 muertos entre soldados y guerrilleros, convirtiéndose en uno de los enfrentamientos más mortíferos del conflicto armado en la región del Eje Cafetero."
      }
    ]
  },

  "Arauca": {
    id: "arauca",
    events: [
      {
        year: 2010,
        title: "Enfrentamientos entre FARC y ELN",
        summary: "Arauca fue escenario de intensos enfrentamientos entre las guerrillas del ELN y las FARC-EP por el control territorial, particularmente en el municipio de Arauquita. Los combates provocaron el desplazamiento de cientos de familias y evidenciaron que, además del conflicto con el Estado, las guerrillas también se combatían entre sí."
      },
      {
        year: 2022,
        title: "Diálogos de Paz Total con el ELN",
        summary: "Arauca fue uno de los territorios clave en la propuesta de 'Paz Total' del gobierno de Gustavo Petro, que incluía negociaciones con el ELN. El departamento seguía siendo uno de los más afectados por el conflicto armado, con presencia activa de guerrillas, disidencias de las FARC y grupos narcotraficantes."
      }
    ]
  },

  "Amazonas": {
    id: "amazonas",
    events: [
      {
        year: 2020,
        title: "COVID-19 golpea comunidades indígenas",
        summary: "La pandemia de COVID-19 impactó severamente a las comunidades indígenas del Amazonas colombiano. Leticia, la capital del departamento, se convirtió en uno de los focos más graves del virus, con su sistema de salud desbordado. La cercanía con Brasil, donde la pandemia estaba descontrolada, agravó la situación y puso en riesgo la supervivencia de pueblos indígenas ancestrales."
      }
    ]
  },

  "Huila": {
    id: "huila",
    events: [
      {
        year: 2011,
        title: "Muerte de Alfonso Cano",
        summary: "El 4 de noviembre de 2011, el Ejército Nacional dio de baja a Guillermo León Sáenz, alias 'Alfonso Cano', máximo comandante de las FARC-EP, en una operación militar en las montañas del Huila. Cano había asumido el liderazgo tras la muerte por causas naturales de Manuel Marulanda en 2008. Su muerte fue un golpe estratégico significativo para la guerrilla."
      }
    ]
  },

  "Vaupés": {
    id: "vaupes",
    events: [
      {
        year: 1998,
        title: "Toma de Mitú y secuestro de policías",
        summary: "Aunque la toma ocurrió en noviembre de 1998, sus consecuencias se extendieron profundamente al siglo XXI. Las FARC-EP atacaron la capital del Vaupés, Mitú, secuestrando a decenas de policías y militares. Varios de estos secuestrados fueron rescatados en la Operación Jaque de 2008 y otros fueron liberados paulatinamente, siendo el último caso hasta más de 12 años después."
      }
    ]
  },

  "Casanare": {
    id: "casanare",
    events: [
      {
        year: 2004,
        title: "Auge petrolero y conflicto armado",
        summary: "Casanare experimentó un auge económico por la explotación petrolera que contrastaba con la intensa disputa territorial entre paramilitares, guerrillas y fuerzas del Estado. La riqueza petrolera financió tanto el desarrollo local como los grupos armados ilegales, generando una paradoja de riqueza económica y violencia extrema."
      }
    ]
  },

  "Guainía": {
    id: "guainia",
    events: [
      {
        year: 2016,
        title: "Minería ilegal y conflicto post-acuerdo",
        summary: "Tras la firma del acuerdo de paz, Guainía experimentó un incremento de la minería ilegal de oro, con grupos armados y organizaciones criminales llenando los vacíos de poder dejados por las FARC-EP. El departamento fronterizo con Venezuela y Brasil se convirtió en corredor para economías ilícitas."
      }
    ]
  },

  "Vichada": {
    id: "vichada",
    events: [
      {
        year: 2006,
        title: "Desplazamiento por conflicto armado",
        summary: "Vichada fue uno de los departamentos con mayor proporción de desplazados por el conflicto armado. Las vastas llanuras y la escasa presencia estatal facilitaron la operación de grupos armados. Los pueblos indígenas Sikuani, Piaroa y otros fueron particularmente vulnerables al desplazamiento forzado y la violación de sus derechos territoriales."
      }
    ]
  }
};

export default eventsData;
