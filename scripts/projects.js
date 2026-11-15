// Scripts connected to projects.html and every other project page :D

// Fetches the data from github

function dateUpdate(repo, updatetext) { 
    fetch(`https://api.github.com/repos/smallzdev/${repo}/commits?per_page=1`)
        .then(response => response.json())
        .then(data => {
            var lastUpdated = new Date(data[0].commit.committer.date).toLocaleDateString();
            console.log(lastUpdated)
            var gitDate = document.querySelector(updatetext)
            gitDate.textContent = "Last Updated: " + lastUpdated
        })
    .catch(error => console.log(error))
};

dateUpdate('godot-thirdspace', '#thirdspacegodot-date')
dateUpdate('solar-os', '#solaros-date')
dateUpdate('flight-sim-hackpad', '#hackpad-date')
dateUpdate('portfolio','#portfoliov1-date')
dateUpdate('portfolio-v2', '#portfoliov2-date')
dateUpdate('yaknow', '#yaknow-date')
dateUpdate('bakebuild', '#bakebuild-date')
dateUpdate('hatchapet', '#hatchapet-date')


// Opens the projects when the divs are clicked on the projects.html page.

document.getElementById('thirdspace-godot').addEventListener('click', function() {
    window.open('projects/thirdspacegame.html', '_blank')
});

document.getElementById('solaros').addEventListener('click', function() {
    window.open('projects/solaros.html', '_blank')
});

document.getElementById('hackpad').addEventListener('click', function() {
    window.open('projects/hackpad.html')
});

document.getElementById('portfolio-v1').addEventListener('click', function() {
    window.open('projects/portfoliov1.html')
});

document.getElementById('portfolio-v2').addEventListener('click', function() {
    window.open('projects/portfoliov2.html')
});

document.getElementById('yaknow').addEventListener('click', function() {
    window.open('projects/yaknow.html', '_blank')
});

document.getElementById('bakebuild').addEventListener('click', function() {
    window.open('projects/bakebuild.html', '_blank')
})

document.getElementById('hatchapet').addEventListener('click', function() {
    window.open('projects/hatchapet.html', '_blank')
})