let streak = localStorage.getItem("streak") || 0;
const username = 'maluojuara';
const url = `https://api.github.com/users/${username}/events`;
const circulo = document.getElementById("circulo");
const lastCommitDate = '2025-04-08';

async function getStreak(){
	try {
		const response = await fetch(url);
		const data = await response.json();
		const today = new Date().toISOString().split("T")[0];
		console.log(data);
		
		data.forEach(element => {
			
			// const elementDate = element.created_at.split("T")[0];
			if (element.type === 'PushEvent' && elementDate === today){
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