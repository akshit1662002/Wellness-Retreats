
import MeditationCard from "./MeditationCard";
import { BASE_URL } from "../utils/constant";
import { postsPerPage } from "../utils/constant";
import SelectInput from "./SelectInput";

import { useState, useEffect } from "react";

const Body = () => {
	const [listOfMeditationCard, setListOfMeditationCard] = useState([]);
	const [filterMeditationCard, setFilterMeditationCard] = useState([]);
	const [searchText, setSearchText] = useState("");
	const [currentPage, setCurrentPage] = useState(1);
	const [selectedDateOption, setSelectedDateOption] =
		useState("Filter by Date");
	const [selectedTypeOption, setSelectedTypeOption] =
		useState("Filter by Type");
	const [disableButton, setDisableButton] = useState(false);

	useEffect(() => {
		fetchData();
	}, []);

	useEffect(() => {
		setCurrentPage(1);
	}, [searchText]);

	useEffect(() => {
		console.log("sec");
		getPaginationData();
	}, [currentPage, searchText]);

	const fetchData = async () => {
		const data = await fetch(BASE_URL);
		const filteredData = await fetch(
			`${BASE_URL}?page=${currentPage}&limit=${postsPerPage}`
		);

		if (!data.ok) {
			setListOfMeditationCard([]);
			return;
		}

		const json = await data.json();
		setListOfMeditationCard(json);

		if (!filteredData.ok) {
			setFilterMeditationCard([]);
			return;
		}
		const filteredDataJson = await filteredData.json();
		setFilterMeditationCard(filteredDataJson);
	};

	const getPaginationData = async () => {
		const data = await fetch(
			`${BASE_URL}?search=${searchText}&page=${currentPage}&limit=${postsPerPage}`
		);
		if (!data.ok) {
			setFilterMeditationCard([]);
			return;
		}
		const json = await data.json();
		setFilterMeditationCard(json);
	};

	const dateOptions = ["Filter by Date", "2023", "2024"];
	const typeOptions = ["Filter by Type", "Signature", "Standalone"];

	const handleDateChange = (event) => {
		const value = event.target.value;
		setSelectedDateOption(value);
		filterList(value, selectedTypeOption);
	};

	const handleTypeChange = (event) => {
		const value = event.target.value;
		setSelectedTypeOption(value);
		filterList(selectedDateOption, value);
	};

	const filterList = (dateOption, typeOption) => {
		const filteredList = listOfMeditationCard.filter((res) => {
			const year = new Date(res.date * 1000).getFullYear();
			const yearMatch =
				dateOption === "Filter by Date" ? true : year.toString() === dateOption;
			const typeMatch =
				typeOption === "Filter by Type" ? true : res.type === typeOption;
			return yearMatch && typeMatch;
		});
		if (dateOption === "Filter by Date" && typeOption === "Filter by Type") {
			getPaginationData();
			setDisableButton(false);
		} else {
			setDisableButton(true);
			setFilterMeditationCard(filteredList || []);
		}
	};

	

	return (
		<div className="body">
			<div className=" filter-button side-gap  ">
				<div className=" flex-column flex ">
					<div>
					<SelectInput 
						value={selectedDateOption}
						onChangeHandler={handleDateChange}
						optionsList={dateOptions}
					/>
					</div>
					<div className=" margin-left">
					<SelectInput
						value={selectedTypeOption}
						onChangeHandler={handleTypeChange}
						optionsList={typeOptions}
					/>
					</div>
			
				</div>
				<div className=" ">
					<input
						type="text"
						placeholder="Search retreats by title"
						className="  bg-customColor text-white px-4 py-2  rounded-lg  select-input margin  "
						value={searchText}
						onChange={(e) => {
							setSearchText(e.target.value);
						}}
					/>
				</div>
			</div>

			<div className=" side-gap grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
				{filterMeditationCard.map((meditation) => (
					<MeditationCard key={meditation.id} resData={meditation} />
				))}
			</div>

			<div className="flex justify-center mt-6">
				<button
					className="bg-customColor text-white px-4 py-2 rounded-md mr-2"
					style={
						disableButton || currentPage === 1
							? { backgroundColor: "#00000010" }
							: {}
					}
					onClick={() => {
						setCurrentPage(currentPage - 1);
					}}
					disabled={disableButton || currentPage === 1}
				>
					Previous
				</button>
				<button
					className=" bg-customColor text-white px-4 py-2 rounded-md "
					style={
						disableButton || filterMeditationCard.length < postsPerPage
							? { backgroundColor: "#00000010" }
							: {}
					}
					onClick={() => {
						setCurrentPage(currentPage + 1);
					}}
					disabled={disableButton || filterMeditationCard.length < postsPerPage}
				>
					Next
				</button>
			</div>
		</div>
	);
};

export default Body;