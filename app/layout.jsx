import "@styles/globals.css";
export const metadata = {
	title: "twitter",
	description: "Pon lo que te de la gana",
};

const Rootlayout = ({ children }) => {
	return (
		<html lang="es">
			<body>
				<div className="main">
					<div className="gradient"></div>
				</div>
				<main className="app">{children}</main>
			</body>
		</html>
	);
};

export default Rootlayout;
