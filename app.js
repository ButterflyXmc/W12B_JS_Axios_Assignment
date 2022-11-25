const button = document.getElementById(`button`);
const activityResult = document.getElementById(`activityResult`);

function activitySuccess(response){
    let data = response.data.activity;
    activityResult.innerHTML = `<h2>${data}</h2>`
}

function activityFailure(error){
    result.innerHTML = `<h2>An error has occurred</h2>`
}


function getActivity() {
    axios.request({
        url : "http://www.boredapi.com/api/activity/",
    }).then(activitySuccess).catch(activityFailure);
}

button.addEventListener(`click`, getActivity);

