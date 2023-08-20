import React from "react";
import "../css/cont_serv.css"; 
import foto_1 from '../images/dentista.jpg';
import { MdOutlineMedicalServices } from "react-icons/md";

function ContServ() {
  return (
    <div className="cont-serv">
      <div className="cont-serv-header">
        <MdOutlineMedicalServices className="cont-serv-icon" />
        <h2>Servicios Dentales</h2>
      </div>
        <div class="row">
        <div class="column-md-4">
            <div className="service-box">
              <div className="service">
                <h3>
                  Blanqueamiento dental
                </h3>
                <img src={foto_1} alt="Imagen" class="img-fluid"/>
                <p>
                Es un tratamiento estético el cual busca dar un aspecto más blanco a los dientes. Para este se 
                aplica un gel el cual reacciona con las zonas más oscuras del diente, dando así al diente un color 
                más claro.
                </p>
              </div>
            </div>
          </div>
          <div class="column-md-4">
            <div className="service-box">
              <div className="service">
                <h3>
                  Restauraciones dentales
                </h3>
                <img src={foto_1} alt="Imagen" class="img-fluid"/>
                <p>
                Es una reconstrucción parcial o total de un diente debido a la destrucción y/o desgaste del diente.
                 En este tratamiento se intenta recuperar en lo posible la forma original del diente además de su 
                 funcionalidad mediante la utilización de materiales artificiales.
                </p>
              </div>
            </div>
          </div>
          <div class="column-md-4">
            <div className="service-box">
              <div className="service">
                <h3>
                  Coronas dentales
                </h3>
                <img src={foto_1} alt="Imagen" class="img-fluid"/>
                <p>
                Es una prótesis dental, la cual se ubica sobre algún diente dañado. Esta busca proteger el diente 
                al cubrirlo por completo. Imita de una manera exacta al diente original al hacerse a medida del 
                cliente, por lo que cada corona es única.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="column-md-4">
            <div className="service-box">
              <div className="service">
                <h3>
                  Pediatría
                </h3>
                <img src={foto_1} alt="Imagen" class="img-fluid"/>
                <p>
                  a
                </p>
              </div>
            </div>
          </div>
          <div class="column-md-4">
            <div className="service-box">
              <div className="service">
                <h3>
                  Tratamiento de conducto
                </h3>
                <img src={foto_1} alt="Imagen" class="img-fluid"/>
                <p>
                Este se lleva a cabo cuando se presenta una infección dental que afectara negativamente al diente. 
                En este procedimiento se remueve tejido muerto y/o infectado del interior del diente con el motivo 
                de salvarlo.
                </p>
              </div>
            </div>
          </div>
          <div class="column-md-4">
            <div className="service-box">
              <div className="service">
                <h3>
                  Radiografía
                </h3>
                <img src={foto_1} alt="Imagen" class="img-fluid"/>
                <p>
                  a
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="column-md-4">
            <div className="service-box">
              <div className="service">
                <h3>
                  Extracciones
                </h3>
                <img src={foto_1} alt="Imagen" class="img-fluid"/>
                <p>
                Usualmente conocido como sacar el diente. Este procedimiento se suele llevar a cabo por la necesidad 
                de otros tratamientos o por la incapacidad de poder salvar el diente. Este suele llevarse a cabo por 
                un dentista general.
                </p>
              </div>
            </div>
          </div>
          <div class="column-md-4">
            <div className="service-box">
              <div className="service">
                <h3>
                  Prótesis
                </h3>
                <img src={foto_1} alt="Imagen" class="img-fluid"/>
                <p>
                Tratamiento por el cual se busca que el paciente pueda volver a tener un esquema normal de su 
                dentadura, generando que vuelva a masticar y llevar una vida dental normal. En este caso se inserta 
                un dispositivo dental artificial el cual reemplaza algún diente perdido o dañado.
                </p>
              </div>
            </div>
          </div>
          <div class="column-md-4">
            <div className="service-box">
              <div className="service">
                <h3>
                  Limpiezas dentales
                </h3>
                <img src={foto_1} alt="Imagen" class="img-fluid"/>
                <p>
                En este tratamiento se elimina la capa y sarro que se acumula en el diente al pasar el tiempo. La 
                capa es una sustancia viscosa con bacterias y restos de comida que puede dañar los dientes. Al mismo
                 tiempo al sarro al acumularse en encía puede llevar a contraer diversas infecciones por lo que debe
                  ser un procedimiento regular.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="column-md-4">
            <div className="service-box">
              <div className="service">
                <h3>
                Periodoncia
                </h3>
                <img src={foto_1} alt="Imagen" class="img-fluid"/>
                <p>
                Serie de tratamientos que se especializan en preservar y restaurar una buena salud dental. Esta 
                se centra en las encías al ser una parte demasiado susceptible a diversas afecciones.
                </p>
              </div>
            </div>
          </div>
          <div class="column-md-4">
            <div className="service-box">
              <div className="service">
                <h3>
                Bichectomia
                </h3>
                <img src={foto_1} alt="Imagen" class="img-fluid"/>
                <p>
                Operación en la cual se extrae las bolsas de Bichat, la cual son una seria de bolas de grasa que 
                están ubicadas debajo de las mejillas. Con esta operación se busca mejorar el aspecto del rostro. 
                Esta no deja cicatrices al realizarse por la parte interior de la boca además de ser ambulatoria.
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export { ContServ };