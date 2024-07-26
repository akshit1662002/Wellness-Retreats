const SelectInput = (props) => {
	const { value, onChangeHandler, optionsList } = props;
	return (
		<>
			<select
				className="bg-customColor text-white px-4 py-2   rounded-lg select-input margin "
				value={value}
				onChange={onChangeHandler}
			>
				{optionsList.map((option) => (
					<option key={option} value={option}>
						{option}
					</option>
				))}
			</select>
		</>
	);
};

export default SelectInput;