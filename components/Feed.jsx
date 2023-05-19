"use client";
import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
	return (
		<div className="mt-16 prompt_layout">
			{data.map((post) => (
				<PromptCard
					key={post._id}
					post={post}
					handleTagClick={handleTagClick}
				/>
			))}
		</div>
	);
};

const Feed = () => {
	const [searchText, setSearchText] = useState("");
	const [posts, setPosts] = useState([]);
	const [postsFiltered, setPostsFiltered] = useState([]);

	const handleSearchChange = (e) => {
		setSearchText(e.target.value);
	};

	const handleTagClick = (tag) => {
		setSearchText(tag);
	};

	useEffect(() => {
		const fetchPosts = async () => {
			const response = await fetch("/api/prompt");
			const data = await response.json();
			setPosts(data);
		};
		fetchPosts();
	}, []);

	useEffect(() => {
		if (searchText) {
			const searchTextLowerCase = searchText.toLowerCase();
			const filteredPosts = posts.filter(
				(p) =>
					p.creator.email.toLowerCase().includes(searchTextLowerCase) ||
					p.creator.username.toLowerCase().includes(searchTextLowerCase) ||
					p.prompt.toLowerCase().includes(searchTextLowerCase) ||
					p.tag.toLowerCase().includes(searchTextLowerCase)
			);
			setPostsFiltered(filteredPosts);
		}
	}, [searchText]);

	return (
		<section className="feed">
			<form className="relative w-full flex-center">
				<input
					type="text"
					placeholder="Busca una etiqueta, nombre de usuario o frase"
					value={searchText}
					onChange={handleSearchChange}
					required
					className="search_input peer"
				/>
			</form>

			<PromptCardList
				data={searchText ? postsFiltered : posts}
				handleTagClick={handleTagClick}
			/>
		</section>
	);
};

export default Feed;
