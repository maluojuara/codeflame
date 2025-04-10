let streak = localStorage.getItem("streak") || 0;
const username = 'maluojuara';
const url = `https://api.github.com/users/${username}/events`;
const circulo = document.getElementById("circulo");
const lastCommitDate = '2025-04-08';

async function getStreak(){
	try {
		const response = await fetch(url);
		const data = await response.json();
		const today = new Date().toISOString();
		let studyToday = false;
		
		data.forEach(element => {
			if (element.type === 'PushEvent' && element.created_at === today){
				streak++;
			}
		});
		circulo.innerHTML = streak;
	}
	catch (error) {
		console.log("Erro ao dar fetch na API: ", error);
		circulo.innerHTML = "⚠️";
	}
}


getStreak();