import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import "./estilos-juegos/climaAmigo.css"




const ClimaAmigo = () =>{
    const [showMinijuegos, setShowMinijuegos] = useState(false);
    const [showLecturas, setShowLecturas] = useState(false);
    const [showVideos, setShowVideos] = useState(false);
    const[showUsuario, setUsuario] = useState(false);
    const[showInicio, setInicio] = useState(false);
    const[showInicioSesion, setInicioSesion] = useState(false);


    const handleMinijuegosClick = () =>{
        setShowMinijuegos(true);
    
      }

    const handleLecturasClick = () =>{
        setShowLecturas(true);
      }
    
      const handleVideosClick = () => {
        setShowVideos(true);
      }

      const handleUsuarioClick = () =>{
        setUsuario(true);
      }

        
    const handleInicioClick = () =>{
        setInicio(true);
      }

      const handleInicioSesionClick = () =>{
        setInicioSesion(true);
      }

      if(showMinijuegos){
        return<Navigate to = "/seccionjuegos"/>
      }


      if(showLecturas){
        return <Navigate to = "/seccionlecturas"/>
      }
    
      if(showVideos){
        return <Navigate to = "/seccionvideos"/>
      }

      if(showUsuario){
        return <Navigate to ="/usuario"/>
      }
      if(showInicio){
        return <Navigate to = "/ecoaventura"/>
      }
    
      if(showInicioSesion){
        return <Navigate to ="/inicio"/>
      }

    return (
        <div className="frameCA">
        <div className="div">
          <div className="overlap-group">
            <img className="minijuego" alt="Minijuego" src="minijuego.png" />
            <div className="overlap">
              <div className="fondo-regresar" />
              <div className="text-wrapper">Regresar</div>
            </div>
            <button className="devuelta" onClick={handleLecturasClick}/>
          </div>
          <div className="text-wrapper-2">¡Educacion del cambio climatico</div>
          <div className="overlap-2">
            <button className="control" onClick={handleMinijuegosClick}/>
            <img className="libro" />
            <button className="videos" onClick={handleVideosClick} />
          </div>
          <div className="text-wrapper-3">EcoEdVentures</div>
          <button className="usuario-name" onClick={handleUsuarioClick} />
          <button className="cerrar-sesion" onClick={handleInicioSesionClick}/>
          <div className="minijuegos">El clima, mi amigo</div>
          <p className="derechos-reservados">@2023 EcoEDVentures. All rights reserved</p>
          <button className="casa" onClick={handleInicioClick}/>
          <div className="overlap-3">
            <div className="fondo-inicio" />
            <div className="text-wrapper-4">Inicio</div>
          </div>
        </div>
        </div>
    )
}

export default ClimaAmigo;