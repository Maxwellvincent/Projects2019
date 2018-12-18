function openNav() {
    document.getElementById("mySidenav").style.width = "400px";
    document.getElementById("main").style.marginLeft = "400px";
    document.body.style.backgroundColor = "rgb(black)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

// let request = new XMLHttpRequest();

// 

fetch('https://private-anon-59ac56ae67-jikan.apiary-proxy.com/v3/top/anime/1/upcoming').then((response) => { 
    console.log(response);  
return response.json();

}).then((data) => {
    console.log(data);
    let anime = data.top;
    let output = "";
    $.each(anime,(index, show) => {
        console.log(show);
        output += `
        <tr>
            <th>${show.title}</th>
            <th><img src="${show.image_url}"></th>
            <th>${show.rank} </th>
        </tr>
        `;
        $('#tableinfo').html(output)
    })
        console.log(data);
    }).catch((err) => {
});

// Card API Fetch 


