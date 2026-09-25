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