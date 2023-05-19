import Feed from "@components/Feed";

const Home = () => {
	return (
		<section className="w-full flex-center flex-col">
			<h1 className="head_text text-center">
				Dedicale unas palabras
				<br className="max-md:hidden" />
				<span>a alguien</span>
			</h1>
			<p className="desc text-center">
				Ten cuidado, las palabras tienen un gran poder que conlleva una gran
				responsabilidad
			</p>

			<Feed />
		</section>
	);
};

export default Home;
