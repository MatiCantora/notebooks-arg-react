import React from "react"
import "./Contacto.css"

const Contacto = () => {
	return (
		<>
			<div className="contact_form">
				<div className="formulario">
					<h1>Formulario de contacto</h1>
					<h3>Escríbenos y en breve los pondremos en contacto contigo</h3>

					<form action="submeter-formulario" method="post">
						<p>
							<label className="colocar_nombre">
								Nombre
								<span className="obligatorio">*</span>
							</label>
							<input
								type="text"
								name="introducir_nombre"
								id="nombre"
								required="obligatorio"
								placeholder="Escribe tu nombre"
							/>
						</p>

						<p>
							<label className="colocar_email">
								Email
								<span className="obligatorio">*</span>
							</label>
							<input
								type="email"
								name="introducir_email"
								id="email"
								required="obligatorio"
								placeholder="Escribe tu Email"
							/>
						</p>

						<p>
							<label className="colocar_telefono">Teléfono</label>
							<input type="tel" name="introducir_telefono" id="telefono" placeholder="Escribe tu teléfono" />
						</p>

						<p>
							<label className="colocar_asunto">
								Asunto
								<span className="obligatorio">*</span>
							</label>
							<input
								type="text"
								name="introducir_asunto"
								id="assunto"
								required="obligatorio"
								placeholder="Escribe un asunto"
							/>
						</p>

						<p>
							<label className="colocar_mensaje">
								Mensaje
								<span className="obligatorio">*</span>
							</label>
							<textarea
								name="introducir_mensaje"
								className="texto_mensaje"
								id="mensaje"
								required="obligatorio"
								placeholder="Deja aquí tu comentario..."
							></textarea>
						</p>

						<p className="aviso">
							<span className="obligatorio"> * </span>los campos son obligatorios.
						</p>
					</form>
					<button className="button_form">
						<p>Enviar</p>
					</button>
				</div>
			</div>
		</>
	)
}

export default Contacto
