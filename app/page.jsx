import Feed from "@components/Feed";

const Home = () => {
	return (
		<section className="w-full flex-center flex-col">
			<h1 className="head_text text-center">
				Discover & Share
				<br className="max-md:hidden" />
				<span> AI-Powered Prompts</span>
			</h1>
			<p className="desc text-center">Pon lo que tu quiera</p>

			<Feed />
		</section>
	);
};

export default Home;
