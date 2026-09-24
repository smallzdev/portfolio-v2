fetch('https://api.github.com/repos/smallzdev/solar-os/commits?per_page=1')
    .then(data => {
        var lastUpdated = data.commit.date
        print(lastUpdated)
        var gitDate = document.querySelector('#gitDate')
        gitDate.textContent = lastUpdated
    })