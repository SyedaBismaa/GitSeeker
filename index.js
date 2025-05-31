
function fetchdata(username){
    return fetch(`https://api.github.com/users/${username}/repos`).then((raw)=>
    raw.json()
);
};

fetchdata('SyedaBismaa').then(function(data){
    console.log(data);
    
})