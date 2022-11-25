const button = document.getElementById(`button`);
const result = document.getElementById(`result`);

function activitySuccess(response){
    let data = response.data.activity;
    result.innerHTML = `<h1>${data}</h1>`
}

function activityFailure(error){
    result.innerHTML = `<h1>An error has occurred</h1>`
}


function getActivity() {
    axios.request({
        url : "http://www.boredapi.com/documentation",
    }).then(activitySuccess).catch(activityFailure);
}

button.addEventListener(`click`, getActivity);

