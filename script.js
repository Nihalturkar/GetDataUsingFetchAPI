let clutter = '';

document.querySelector("button").addEventListener("click", function () {
    fetch('https://randomuser.me/api/')
        .then(res => {
            return res.json();
        }).then(data => {
            data.results.forEach(function (user) {
                console.log(user)
                clutter += `
                    <div id="card">
                        <img src="${user.picture.medium}" alt="">
                        <h3>Name: ${user.name.first} ${user.name.last}</h3>
                        <h5>Gender: ${user.gender}</h5>
                        <h5>Age: ${user.dob.age}</h5>
                        <h5>Phone: ${user.phone}</h5>
                        <p>Email: ${user.email}</p>
                    </div>
                `
				
            })
            document.querySelector(".cards").innerHTML += clutter;
			clutter="";
        }).catch(err => console.log(err));
});
