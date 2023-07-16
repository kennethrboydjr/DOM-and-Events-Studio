// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function () {
    let rocketPosX = 0;
    let rocketPosY = 0;
    let rocketAlt = 0;
    //code
    const takeoffButton = document.getElementById('takeoff');
    const flightStatus = document.getElementById('flightStatus');
    const shuttleBackground = document.querySelector('#shuttleBackground');
    const altitude = document.getElementById('spaceShuttleHeight')
    const landingButton = document.getElementById('landing');
    const missionAbortButton = document.getElementById('missionAbort');
    const rocket = document.getElementById('rocket');

    takeoffButton.addEventListener("click", function () {
        let takeoffConfirm = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (takeoffConfirm) {
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            rocketAlt = 10000;
            altitude.innerHTML = rocketAlt;
            rocketPosY += 10;
            rocket.style.marginBottom = rocketPosY + 'px';
        }
    });

    landingButton.addEventListener("click", function () {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        rocketAlt = 0;
        altitude.innerHTML = rocketAlt;
        rocketPosX = 0;
        rocketPosY = 0;
        rocket.style.marginLeft = rocketPosX + 'px';
        rocket.style.marginBottom = rocketPosY + 'px';
    });

    missionAbortButton.addEventListener("click", function () {
        let abortConfirm = window.confirm("Confirm that you want to abort the mission.");
        if (abortConfirm) {
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "green";
            rocketAlt = 0;
            altitude.innerHTML = rocketAlt;
            rocketPosX = 0;
            rocketPosY = 0;
            rocket.style.marginLeft = rocketPosX + 'px';
            rocket.style.marginBottom = rocketPosY + 'px';
        }
    });
    document.addEventListener("click", function (event) {
        let bkgWidth = parseInt(window.getComputedStyle(shuttleBackground).getPropertyValue('width'));

        if (event.target.id === "left" && rocketPosX > -(bkgWidth / 2 - 40)) {
            rocketPosX -= 10;
            rocket.style.marginLeft = rocketPosX + 'px';
        }
        if (event.target.id === "right" && rocketPosX < (bkgWidth / 2 - 40)) {
            rocketPosX += 10;
            rocket.style.marginLeft = rocketPosX + 'px';

        }
        if (event.target.id === "up" && rocketAlt < 250000) {
            rocketPosY += 10;
            rocket.style.marginBottom = rocketPosY + 'px';
            rocketAlt += 10000;
            altitude.innerHTML = rocketAlt;
        }
        if (event.target.id === "down" && rocketAlt > 0) {
            rocketPosY -= 10;
            rocket.style.marginBottom = rocketPosY + 'px';
            if (rocketAlt >= 10000) {
                rocketAlt -= 10000
            } else {
                rocketAlt = 0;
            }
            altitude.innerHTML = rocketAlt;

        }
    });
});
