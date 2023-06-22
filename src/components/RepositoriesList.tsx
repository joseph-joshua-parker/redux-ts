import React, { useState } from "react";

const RepositoriesList: React.FC = ()=>{
	const [term, setTerm] = useState('');

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>)=>{
		event.preventDefault();
	}

	return <div>
		<form onSubmit={handleSubmit}>
			<input value={term} onChange={e=>setTerm(e.target.value)}/>
			<button>Search</button>
		</form>
	</div>
}

export default RepositoriesList;