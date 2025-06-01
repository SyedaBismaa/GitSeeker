let usernameinp = document.querySelector('.usernameinp');
let searchbtn = document.querySelector('.searchbtn');
let card = document.querySelector('.card');
let toggleCheckbox = document.querySelector('.togglebtn input[type="checkbox"]');
tailwind.config = {
    darkMode: 'class'
}


function getProfileData(username) {
    return fetch(`https://api.github.com/users/${username}`).then(raw => {
        if (!raw.ok) alert("User not found");
        return raw.json();
    });
};

function getRepos(username) {
    return fetch(`https://api.github.com/users/${username}/repos?sort=updated`).then((raw) => {
        if (!raw.ok) throw Error("Failed to fetch the repos...");
        return raw.json();
    });
};

function DecoProfileData(dets) {

    let data = `   <div class="  flex items-center space-x-6">
   
                   <img 
                    src="${dets.avatar_url}" 
                    alt="User Avatar" 
                    class="w-24 h-24 rounded-full border-2 border-gray-200 dark:border-gray-700 object-cover"
                >
                <div>
                    <h2 class="text-2xl font-semibold text-gray-800 dark:text-white">${dets.name}</h2>
                    <p class="text-gray-600 dark:text-gray-300">${dets.login}</p>
                </div>
            </div>
            <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <p class="text-gray-600 dark:text-gray-300"><span class="font-semibold">Repositories: </span>${dets.public_repos}</p>
                    <p class="text-gray-600 dark:text-gray-300"><span class="font-semibold">Followers: </span>${dets.followers}</p>
                    <p class="text-gray-600 dark:text-gray-300"><span class="font-semibold">Following: </span>${dets.following}</p>
                </div>
                <div>
                    <p class="text-gray-600 dark:text-gray-300"><span class="font-semibold">Location:</span> ${dets.location ? dets.location : "N/A"}</p>
                    <p class="text-gray-600 dark:text-gray-300"><span class="font-semibold">Email: </span>${dets.email ? dets.email : "Not Avaliable"}</p>
                    <p class="text-gray-600 dark:text-gray-300"><span class="font-semibold">Company:  </span>${dets.company ? dets.company : "N/A"}</p>

                </div>
            </div>
            <div class="mt-6">
                <p class="text-gray-600 dark:text-gray-300">${dets.bio ? dets.bio : 'Sorry there is no bio'}</p>
                <a 
                    href="${dets.url}" 
                    class="inline-block mt-4 text-blue-600 dark:text-blue-400 hover:underline"
                >
                    View GitHub Profile
                </a>
            </div>`;

    card.innerHTML = data;


}


searchbtn.addEventListener("click", function () {
    let username = usernameinp.value.trim();
    if (username.length > 0) {
        getProfileData(username).then((data) => {
            DecoProfileData(data);
        })
    } else {
        alert("Enter Valid Details");
    }
});

toggleCheckbox.addEventListener("change", function () {
    document.documentElement.classList.toggle("dark");

});
