document.getElementById('startButton').onclick = function () {
    document.getElementById('welcome').style.display = 'none';
    document.getElementById('terminologies').style.display = 'block';
}

document.getElementById('backButton').onclick = function () {
    document.getElementById('terminologies').style.display = 'none';
    document.getElementById('welcome').style.display = 'block';
}