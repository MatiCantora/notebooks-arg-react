import React from "react"

const Footer = () => {
	return (
		<>
			<footer className="bg-dark text-center text-white mt-3">
				<div className="container p-1">
					<section>
						<a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
							<i className="fab fa-facebook-f"></i>
						</a>

						<a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
							<i className="fab fa-twitter"></i>
						</a>

						<a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
							<i className="fab fa-instagram"></i>
						</a>
					</section>
				</div>

				<div className="text-center p-3" style={{ backgroundColor: "black" }}>
					© 2022 Copyright: <p className="text-white mb-0">Cantora Matías</p>
				</div>
			</footer>
		</>
	)
}

export default Footer
